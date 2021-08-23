const db = require('./connection');
const { User, Club, Ticket } = require('../models');

db.once('open', async () => {
	await Club.deleteMany();
	const Clubs = await Club.insertMany([
		{
			clubName: 'Hells Angels',
			description:
				'If you want to be happy for a day, drink. If you want to be happy for a year, marry. If you want to be happy for a lifetime, ride a motorcycle.',
			city: 'Miami',
			contactInfo: 'Send us a message!',
		},
		{
			clubName: 'Annihilators Motorcycle Club',
			description: 'Riders first, Outlaws second.',
			city: 'Miami',
			contactInfo: 'Send us a message!',
		},
		{
			clubName: 'Bacchus',
			description: 'Harley boys for the win',
			city: 'Mobile',
			contactInfo: 'Send us a message!',
		},
		{
			clubName: 'Galloping Goose',
			description: 'All bikers welcomed :)',
			city: 'New York',
			contactInfo: 'Send us a message!',
		},
		{
			clubName: 'No Surrender',
			description: '100mph+ is where the real fun begins!',
			city: 'Orlando',
			contactInfo: 'Send us a message!',
		},
	]);

	console.log('clubs seeded');

	await Ticket.deleteMany();
	const Tickets = await Ticket.insertMany([
		{
			name: 'VIP PASS',
			description: 'Hells Angels meetup',
			club: clubs[0]._id,
			price: 5.0,
			quantity: 20,
		},
		{
			name: 'GUEST PASS',
			description: 'Hells Angels meetup',
			club: clubs[0]._id,
			price: 1.0,
			quantity: 200,
		},
		{
			name: 'VIP PASS',
			description: 'This is a VIP Bacchus BBQ pass',
			club: clubs[2]._id,
			price: 10.0,
			quantity: 25,
		},
		{
			name: 'GUEST PASS',
			description: 'Bacchus BBQ guest access',
			club: clubs[2]._id,
			price: 5.0,
			quantity: 50,
		},
		{
			name: 'Goose Year Ride Out VIP',
			description:
				'We are coming together for our yearly ride along, come hang with us! ',
			club: clubs[3]._id,
			price: 25.0,
			quantity: 100,
		},
		{
			name: 'Goose Year Ride Out GUEST',
			description:
				'We are coming together for our yearly ride along, come hang with us! ',
			club: clubs[3]._id,
			price: 5.0,
			quantity: 100,
		},
		{
			name: 'GUEST PASS',
			description: 'Hells Angels meetup',
			club: clubs[0]._id,
			price: 1.0,
			quantity: 100,
		},
		{
			name: 'No Surrender Track Day',
			description: 'An all day track event hosted by No Surrender.',
			club: clubs[2]._id,
			price: 10.0,
			quantity: 100,
		},
		{
			name: 'Watch the track day',
			description: 'Bring sunscreen!',
			club: clubs[2]._id,
			price: 5.0,
			quantity: 100,
		},
	]);

	console.log('Tickets seeded');

	await User.deleteMany();

	await User.create({
		userName: 'Rideforlife22',
		email: 'motolove@testmail.com',
		password: 'password12345',
		orders: [
			{
				Tickets: [Tickets[0]._id, Tickets[4]._id, Tickets[1]._id],
			},
		],
	});

	await User.create({
		userName: 'tireslayer',
		email: 'tireslayerus@testemail.com',
		password: 't12345678',
		orders: [
			{
				Tickets: [Tickets[2]._id, Tickets[1]._id, Tickets[1]._id],
			},
		],
	});

	await User.create({
		userName: 'rhowell',
		email: 'rhowell@testemail.com',
		password: 'r12345678',
	});

	console.log('users seeded');

	process.exit();
});
