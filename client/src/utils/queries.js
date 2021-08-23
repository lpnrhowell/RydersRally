import { gql } from '@apollo/client';

export const QUERY_EVENTS = gql`
	query getCheckout($products: [ID]!) {
		checkout(products: $products) {
			session
		}
	}
`;
export const QUERY_CHECKOUT = gql`
	query getCheckout($products: [ID]!) {
		checkout(products: $products) {
			session
		}
	}
`;

export const QUERY_TICKETS = gql`
	{
		tickets {
			_id
			name
			description
			price
			quantity
			image
			club {
				_id
			}
		}
	}
`;

export const QUERY_CLUBS = gql`
	{
		clubs {
			_id
			name
			description
		}
	}
`;

export const QUERY_USER = gql`
	{
		user {
			firstName
			lastName
			orders {
				_id
				purchaseDate
				tickets {
					_id
					name
					description
					price
					quantity
					club
				}
			}
		}
	}
`;
