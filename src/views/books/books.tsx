import React from 'react';

import BookList from './book-list';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import BookDetails from './book-details';
import SiteWrapper from '~/components/site-wrapper';

export default function Books() {
    const { path } = useRouteMatch();
    
    return (
        <SiteWrapper>
            <Switch>
                <Route exact path={path}>
                    <BookList />
                </Route>
                <Route path={`${path}/:bookId`}>
                    <BookDetails />
                </Route>
            </Switch>
        </SiteWrapper>
    );
}