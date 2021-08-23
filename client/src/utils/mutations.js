import { gql } from '@apollo/client';

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
			}
		}
	}
`;

export const ADD_ORDER = gql`
	mutation addOrder($products: [ID]!) {
		addOrder(products: $products) {
			purchaseDate
			products {
				_id
				name
				description
				price
				quantity
				category {
					name
				}
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($userName: String!, $email: String!, $password: String!) {
		addUser(userName: $userName, email: $email, password: $password) {
			token
			user {
				_id
			}
		}
	}
`;
export const CREATE_EVENT = gql`
	mutation createEvent(
		$name: String!
		$venue: String!
		$city_state: String!
		$ticket_price: String!
		$img: String
	) {
		createEvent(
			eventInput: {
				name: $name
				venue: $venue
				city_state: $city_state
				ticket_price: $ticket_price
				img: $img
			}
		) {
			name
			venue
			city_state
			ticket_price
			img
		}
	}
`;
