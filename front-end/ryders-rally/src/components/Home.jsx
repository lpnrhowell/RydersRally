import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition, Image } from 'semantic-ui-react';
import { AuthContext } from '../context/auth';
import { FETCH_EVENTS_QUERY } from '../helper/graphql';
import Sharing from "./Sharing"
import "../styles/_home.scss"

function Home() {
  const { user } = useContext(AuthContext);
  const {
    loading,
    data
  } = useQuery(FETCH_EVENTS_QUERY);
  if (data) {
    console.log(data);
  }
  return (
    <div className="homepage">
      <Grid columns={2}>
        <Grid.Row className="page-title">
          <h1 id="title">Ryders Rally</h1>
        </Grid.Row>
        <Grid.Row>

          {loading ? (
            <h1>Loading events..</h1>
          ) : (
              <div className="eventContainer">
                <Transition.Group>
                  {data.getEvents &&
                    data.getEvents.map((event) => (
                      <div className="event">
                        <Grid.Column style={{ margin: "10px 10px 10px 10px" }}>
                          <Image src={event.img} style={{ width: "250px", height: "200px" }} />
                        </Grid.Column>
                        <Grid.Column >
                          {event.name}
                        </Grid.Column>
                        <Grid.Column >
                          {event.venue}
                        </Grid.Column>
                        <Grid.Column >
                          {event.city_state}
                        </Grid.Column>
                        <Grid.Column style={{ marginBottom: 20 }}>
                          🎟 {event.ticket_price}
                        </Grid.Column>
                      </div>
                    ))}
                </Transition.Group>
              </div>
            )}
        </Grid.Row>
      </Grid>
      <Sharing />
    </div>
  );
}

export default Home;

