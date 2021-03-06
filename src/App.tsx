import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { client } from './services/apollo';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
