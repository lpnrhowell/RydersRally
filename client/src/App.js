import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
//import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './components/Nav';
import CreateEvent from './pages/CreateEvent';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import { Container } from 'semantic-ui-react';
require('babel-plugin-syntax-jsx');

const httpLink = createHttpLink({
	uri: 'https://rydersrally.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('jwtToken');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<StoreProvider>
					<Container>
						<Nav />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/register' component={Register} />
							<Route exact path='/success' component={Success} />
							<Route exact path='/orderHistory' component={OrderHistory} />
							<Route exact path='/createEvent' component={CreateEvent} />
							<Route component={NoMatch} />
						</Switch>
					</Container>
				</StoreProvider>
			</Router>
		</ApolloProvider>
	);
}

export default App;
