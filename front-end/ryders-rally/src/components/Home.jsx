import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';
import { AuthContext } from '../context/auth';
import { FETCH_CLUBS_QUERY } from '../helper/graphql';
import "../styles/_home.scss"

function Home() {
  const { user } = useContext(AuthContext);
  const {
    loading,
    data
  } = useQuery(FETCH_CLUBS_QUERY);
  if (data) {
    console.log(data);
  }
  return (
    <div className="homepage">
      <Grid columns={3}>
        <Grid.Row className="page-title">
          <h1 id="title">Ryders Rally</h1>
        </Grid.Row>
        <Grid.Row>
          {user && (
            <Grid.Column>
              {user.username}
            </Grid.Column>
          )}
          {loading ? (
            <h1>Loading clubs..</h1>
          ) : (
              <Transition.Group>
                {data.getClubs &&
                  data.getClubs.map((club) => (
                    <Grid.Column style={{ marginBottom: 20 }}>
                      {club.name}
                    </Grid.Column>
                  ))}
              </Transition.Group>
            )}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Home;
