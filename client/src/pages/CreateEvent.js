import React, { useContext, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import { QUERY_EVENTS } from '../utils/queries';
import { CREATE_EVENT } from '../utils/mutations';
import Auth from '../utils/auth';
import { useForm } from '../utils/hooks';

const CreateEvent = (props) => {
	const context = useContext(Auth);
	const [errors, setErrors] = useState({});

	const { onChange, onSubmit, values } = useForm(createEvent, {
		name: '',
		venue: '',
		city_state: '',
		ticket_price: '',
		img: '',
	});

	const [addEvent, { error }] = useMutation(CREATE_EVENT, {
		variables: values,
		update(proxy, result) {
			const data = proxy.readQuery({
				query: QUERY_EVENTS,
			});
			data.getEvents = [result.data.createEvent, ...data.getEvents];
			proxy.writeQuery({ query: QUERY_EVENTS, data });
			values.img = '';
			values.name = '';
			values.ticket_price = '';
			values.city_state = '';
			values.venue = '';
		},

		onError(err) {
			setErrors(err.graphQLErrors[0].extensions.exception.errors);
		},
	});

	function createEvent() {
		return (
			<div className='form-container'>
				<Form onSubmit={onSubmit} noValidate>
					<h1>Create Event</h1>
					<Form.Input
						label='Name'
						placeholder='Name of event..'
						name='name'
						type='text'
						value={values.name}
						error={errors.name ? true : false}
						onChange={onChange}
					/>
					<Form.Input
						label='Venue'
						placeholder='Venue..'
						name='venue'
						type='text'
						value={values.venue}
						error={errors.venue ? true : false}
						onChange={onChange}
					/>
					<Form.Input
						label='City-State'
						placeholder='City and State..'
						name='city_state'
						type='text'
						value={values.city_state}
						error={errors.city_state ? true : false}
						onChange={onChange}
					/>
					<Form.Input
						label='Ticket Price'
						placeholder='Ticket Price..'
						name='ticket_price'
						type='text'
						value={values.ticket_price}
						error={errors.ticket_price ? true : false}
						onChange={onChange}
					/>
					<Form.Input
						label='Img'
						placeholder='Img..'
						name='img'
						type='text'
						value={values.img}
						error={errors.img ? true : false}
						onChange={onChange}
					/>

					<Button type='submit' primary>
						Create Event
					</Button>
				</Form>
				{Object.keys(errors).length > 0 && (
					<div className='ui error message'>
						<ul className='list'>
							{Object.values(errors).map((value) => (
								<li key={value}>{value}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		);
	}
	addEvent();
};

export default CreateEvent;
