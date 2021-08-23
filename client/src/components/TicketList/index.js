import React, { useEffect } from 'react';
import TicketItem from '../TicketItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_TICKETS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_TICKETS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function TicketList() {
	const [state, dispatch] = useStoreContext();

	const { currentClub } = state;

	const { loading, data } = useQuery(QUERY_TICKETS);

	useEffect(() => {
		if (data) {
			dispatch({
				type: UPDATE_TICKETS,
				tickets: data.tickets,
			});
			data.tickets.forEach((ticket) => {
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
	}, [data, loading, dispatch]);

	function filtertickets() {
		if (!currentClub) {
			return state.tickets;
		}

		return state.tickets.filter((ticket) => ticket.club._id === currentClub);
	}

	return (
		<div className='my-2'>
			<h2>Our tickets:</h2>
			{state.tickets.length ? (
				<div className='flex-row'>
					{filtertickets().map((ticket) => (
						<TicketItem
							key={ticket._id}
							_id={ticket._id}
							image={ticket.image}
							name={ticket.name}
							price={ticket.price}
							quantity={ticket.quantity}
						/>
					))}
				</div>
			) : (
				<h3>You haven't added any tickets yet!</h3>
			)}
			{loading ? <img src={spinner} alt='loading' /> : null}
		</div>
	);
}

export default TicketList;
