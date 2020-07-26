import React from 'react';

import SiteWrapper from '~/components/site-wrapper';
import BookList from './book-list';

export default function Books() {
    return (
        <SiteWrapper>
            <h1>Books</h1>
            <BookList />
        </SiteWrapper>
    );
}