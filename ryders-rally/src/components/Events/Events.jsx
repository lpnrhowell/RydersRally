import React, {useContext}from 'react';
import { FETCH_EVENTS_QUERY } from '../../helper/graphql';
import { AuthContext } from '../../context/auth';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition, Image } from 'semantic-ui-react';
import "/_event.scss"


function Events() {
  const {
    loading,
    data
  } = useQuery(FETCH_EVENTS_QUERY);
  if (data) {
    console.log(data);
  }
  return (
		        <Grid.Row style={{marginTop:"50px"}}>

          {loading ? (
            <h1>Loading events..</h1>
          ) : (
              // <div className="eventContainer">
                <Transition.Group >
                  {data.getEvents &&
                    data.getEvents.map((event) => (
                      <div className="event">
                        <Grid.Column id="eventInfo" >
                          <Image src={event.img} style={{ width: "250px", height: "200px", marginTop:"10px" }} />
                        </Grid.Column>
                        <Grid.Column id="eventInfo" style={{marginTop:"10px"}}>
                          {event.name}
                        </Grid.Column>
                        <Grid.Column id="eventInfo">
                          {event.venue}
                        </Grid.Column>
                        <Grid.Column id="eventInfo">
                          {event.city_state}
                        </Grid.Column>
                        <Grid.Column id="eventInfo">
                          🎟 {event.ticket_price}
                        </Grid.Column>
                      </div>
                    ))}
                </Transition.Group>
              // </div>
            )}
        </Grid.Row>

	);
}
export default Events;