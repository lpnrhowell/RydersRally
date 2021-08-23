import React, { createContext, useContext } from 'react';
import { useTicketReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useTicketReducer({
		tickets: [],
		cart: [],
		cartOpen: false,
		clubs: [],
		currentClub: '',
	});

	return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
	return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
