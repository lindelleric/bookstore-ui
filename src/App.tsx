import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import GlobalStyles from './global-styles';

import SiteNavigation from './site-navigation';
import Books from './views/books/books';
import Wishlists from './views/wishlists/wishlists';
import client from './apollo-client';

export default function App() {
    return (
        <ApolloProvider client={client}>
            <GlobalStyles>
                <Router>
                    <SiteNavigation />

                    <Switch>
                        <Route path="/books">
                            <Books />
                        </Route>
                        <Route path="/wishlists">
                            <Wishlists />
                        </Route>
                        <Route path="/">
                            <Redirect to="/books" />
                        </Route>
                    </Switch>
                </Router>
            </GlobalStyles>
        </ApolloProvider>
    );
}