import React from 'react';
import styled from 'styled-components';

import SiteWrapper from '~/components/site-wrapper';
import { useBooksQuery } from '~/generated/graphql';


export default function Books() {
    const { data, loading, error } = useBooksQuery();
    console.log({data});
    return (
        <SiteWrapper>
            <h1>Books</h1>
            {
                loading ? <h1>Loading books ...</h1> : (
                    data?.books.map((book, index) => <h2 key={index}>{book.title}, {book.numberOfPages}, {book.isbn13}, {book.authors[0].name}</h2>)
                )
                
            }
        </SiteWrapper>
    );
}