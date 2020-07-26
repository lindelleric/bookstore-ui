import React from 'react';

import Navigation from './components/nav/nav';
import NavigationItem from './components/nav/nav-item';
import NavigationLink from './components/nav/nav-link';
import Book from './components/icons/book';
import styled from 'styled-components';
import List from './components/icons/list';
import { Blue, Green } from './colors';

// TODO: margin-right doesn't work for some reason
const BookIcon = styled(Book)`
    margin-right: 5px; 
    stroke: ${ Blue };
`;
    
// TODO: margin-right doesn't work for some reason
const ListIcon = styled(List)`
    margin-right: 5px; 
    stroke: ${ Green };
`;

export default function SiteNavigation() {
    return (
        <Navigation>
            <NavigationItem>
                <NavigationLink to="/books">
                    <BookIcon />    
                    Books
                </NavigationLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationLink to="/wishlists">
                    <ListIcon />
                    Wishlists
                </NavigationLink>
            </NavigationItem>
        </Navigation>
    );
}