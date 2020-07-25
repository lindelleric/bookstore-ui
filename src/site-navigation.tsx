import React from 'react';
import styled from 'styled-components';

import Navigation from './components/nav/nav';
import NavigationItem from './components/nav/nav-item';
import NavigationLink from './components/nav/nav-link';
import { MainLight } from './colors';

const SiteHeader = styled.div`
    color: ${ MainLight };
    margin: 0 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
    }
`;

export default function SiteNavigation() {
    return (
        <Navigation>
            <SiteHeader><h1>Bookstore</h1></SiteHeader>
            <NavigationItem>
                <NavigationLink to="/books">Books</NavigationLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationLink to="/wishlists">Wishlists</NavigationLink>
            </NavigationItem>
        </Navigation>
    );
}