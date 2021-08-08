import React from 'react';
import { ApolloConsumer } from '@apollo/client';

const WithApolloClient = () => (
  <ApolloConsumer>
    {client => console.log(client)}
  </ApolloConsumer>
);

export default WithApolloClient;