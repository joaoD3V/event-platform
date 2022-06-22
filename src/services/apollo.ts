import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oiy0g20fv701w7evmsfuds/master',
  cache: new InMemoryCache(),
});
