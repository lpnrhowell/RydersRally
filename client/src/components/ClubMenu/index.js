import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_TICKETS, UPDATE_CURRENT_CLUB } from '../../utils/actions';
import { QUERY_TICKETS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function ClubMenu() {
	const [state, dispatch] = useStoreContext();

	const { tickets } = state;

	const { loading, data: ticketData } = useQuery(QUERY_TICKETS);

	useEffect(() => {
		if (ticketData) {
			dispatch({
				type: UPDATE_TICKETS,
				tickets: ticketData.tickets,
			});
			ticketData.tickets.forEach((ticket) => {
				idbPromise('tickets', 'put', ticket);
			});
		} else if (!loading) {
			idbPromise('tickets', 'get').then((tickets) => {
				dispatch({
					type: UPDATE_TICKETS,
					tickets: tickets,
				});
			});
		}
	}, [ticketData, loading, dispatch]);

	const handleClick = (id) => {
		dispatch({
			type: UPDATE_CURRENT_CLUB,
			currentClub: id,
		});
	};

	return (
		<div>
			<h2>Choose a ticket:</h2>
			{tickets.map((item) => (
				<button
					key={item._id}
					onClick={() => {
						handleClick(item._id);
					}}
				>
					{item.name}
				</button>
			))}
		</div>
	);
}

export default ClubMenu;
