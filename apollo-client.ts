import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://dotfeet.loca.lt/graphql',
  credentials: 'omit',
  // headers: {
  //   "Content-Type": "application/json",
  // },
  fetchOptions: {
    mode: 'cors',
  },
});

const client = new ApolloClient({
  // link: httpLink,
  uri: 'https://dotfeet.loca.lt/graphql',
  cache: new InMemoryCache(),
  // fetchOptions: {},
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

export default client;
