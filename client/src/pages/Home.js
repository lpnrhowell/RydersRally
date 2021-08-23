import React from 'react';
import TicketList from '../components/TicketList';
import ClubMenu from '../components/ClubMenu';
import Cart from '../components/Cart';

const Home = () => {
	return (
		<div className='container'>
			<ClubMenu />
			<TicketList />
			<Cart />
		</div>
	);
};

export default Home;
