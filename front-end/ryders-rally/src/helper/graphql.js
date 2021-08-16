import gql from 'graphql-tag';

export const FETCH_CLUBS_QUERY = gql`
{
getClubs {
  name
  city
  state

}
}
`;

// export const FETCH_USER_QUERY = 