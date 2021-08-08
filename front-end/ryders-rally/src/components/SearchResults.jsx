import { gql, useQuery } from '@apollo/client';

const GET_GREETING = gql`
  query {
  restaurant {
    _id
		borough
		cuisine
		name
		restaurant_id
  }
}`;

function Restaurant() {
  const { loading, error, data } = useQuery(GET_GREETING);
  if (loading) return <p>Loading ...</p>;
  return <h1>Hello !</h1>;
}
export default Restaurant;