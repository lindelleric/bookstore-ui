import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import GlobalStyles from './global-styles';

import SiteNavigation from './site-navigation';
import Products from './views/products/products';
import Cart from './views/cart/cart';

export default function App() {
    return (
        <GlobalStyles>
            <Router>
                <SiteNavigation />

                <Switch>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/">
                        <Redirect to="/products" />
                    </Route>
                </Switch>
            </Router>
        </GlobalStyles>
    );
}