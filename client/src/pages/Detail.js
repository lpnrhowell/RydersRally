import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
	REMOVE_FROM_CART,
	UPDATE_CART_QUANTITY,
	ADD_TO_CART,
	UPDATE_TICKETS,
} from '../utils/actions';
import { QUERY_TICKETS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
	const [state, dispatch] = useStoreContext();
	const { id } = useParams();

	const [currentTicket, setCurrentTicket] = useState({});

	const { loading, data } = useQuery(QUERY_TICKETS);

	const { tickets, cart } = state;

	useEffect(() => {
		// already in global store
		if (tickets.length) {
			setCurrentTicket(tickets.find((ticket) => ticket._id === id));
		}
		// retrieved from server
		else if (data) {
			dispatch({
				type: UPDATE_TICKETS,
				tickets: data.tickets,
			});

			data.pickets.forEach((ticket) => {
				idbPromise('tickets', 'put', ticket);
			});
		}
		// get cache from idb
		else if (!loading) {
			idbPromise('tickets', 'get').then((indexedTickets) => {
				dispatch({
					type: UPDATE_TICKETS,
					pickets: indexedTickets,
				});
			});
		}
	}, [tickets, data, loading, dispatch, id]);

	const addToCart = () => {
		const itemInCart = cart.find((cartItem) => cartItem._id === id);
		if (itemInCart) {
			dispatch({
				type: UPDATE_CART_QUANTITY,
				_id: id,
				purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
			});
			idbPromise('cart', 'put', {
				...itemInCart,
				purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
			});
		} else {
			dispatch({
				type: ADD_TO_CART,
				ticket: { ...currentTicket, purchaseQuantity: 1 },
			});
			idbPromise('cart', 'put', { ...currentTicket, purchaseQuantity: 1 });
		}
	};

	const removeFromCart = () => {
		dispatch({
			type: REMOVE_FROM_CART,
			_id: currentTicket._id,
		});

		idbPromise('cart', 'delete', { ...currentTicket });
	};

	return (
		<>
			{currentTicket && cart ? (
				<div className='container my-1'>
					<Link to='/'>← Back to Tickets</Link>

					<h2>{currentTicket.name}</h2>

					<p>{currentTicket.description}</p>

					<p>
						<strong>Price:</strong>${currentTicket.price}{' '}
						<button onClick={addToCart}>Add to Cart</button>
						<button
							disabled={!cart.find((p) => p._id === currentTicket._id)}
							onClick={removeFromCart}
						>
							Remove from Cart
						</button>
					</p>

					<img
						src={`/images/${currentTicket.image}`}
						alt={currentTicket.name}
					/>
				</div>
			) : null}
			{loading ? <img src={spinner} alt='loading' /> : null}
			<Cart />
		</>
	);
}

export default Detail;
