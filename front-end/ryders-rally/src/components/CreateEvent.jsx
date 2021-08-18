import React, { useContext, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { FETCH_EVENTS_QUERY } from '../helper/graphql';


import { AuthContext } from '../context/auth';
import { useForm } from '../helper/hooks';

const CreateEvent = (props) =>{
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(createEvent, {
    name: '',
    venue: '',
    city_state: '',
    ticket_price: '',
    img: ''
  });

  const [addEvent, {error}] = useMutation(CREATE_EVENT, {
      variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_EVENTS_QUERY
      });
      data.getEvents = [result.data.createEvent, ...data.getEvents];
      proxy.writeQuery({ query: FETCH_EVENTS_QUERY, data });
      values.img = '';
      values.name = '';
      values.ticket_price = '';
      values.city_state = '';
      values.venue = '';
    }
  
  } );

  function createEvent() {
    addEvent();
  }

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate >
        <h1>Create Event</h1>
        <Form.Input
          label="Name"
          placeholder="Name of event.."
          name="name"
          type="text"
          value={values.name}
          error={errors.name ? true : false}
          onChange={onChange}
        />
        <Form.Input
          label="Venue"
          placeholder="Venue.."
          name="venue"
          type="text"
          value={values.venue}
          error={errors.venue ? true : false}
          onChange={onChange}
        />
        <Form.Input
          label="City-State"
          placeholder="City and State.."
          name="city_state"
          type="text"
          value={values.city_state}
          error={errors.city_state? true : false}
          onChange={onChange}
        />
        <Form.Input
          label="Ticket Price"
          placeholder="Ticket Price.."
          name="ticket_price"
          type="text"
          value={values.ticket_price}
          error={errors.ticket_price ? true : false}
          onChange={onChange}
        />
        <Form.Input
          label="Img"
          placeholder="Img.."
          name="img"
          type="text"
          value={values.img}
          error={errors.img ? true : false}
          onChange={onChange}
        />
     
        <Button type="submit" primary>
          Create Event
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const CREATE_EVENT = gql`
  mutation createEvent(
        $name: String!
        $venue: String!
        $city_state: String!
        $ticket_price: String!
        $img:String
  ) {
    createEvent(
      eventInput: {
        name: $name
        venue: $venue
        city_state: $city_state
        ticket_price: $ticket_price
        img:$img
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

export default CreateEvent;
