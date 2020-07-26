import React from 'react';

import { useBooksQuery } from '~/generated/graphql';
import BookListCard from './book-list-card';
import styled from 'styled-components';

const List = styled.div`
    display: grid;
    grid: auto / repeat(5, 1fr);
    grid-gap: 20px;
`;

export default function BookList() {
    const { data, loading } = useBooksQuery();

    console.log({ data });

    if (loading) {
        return <h3>Loading books ...</h3>
    }

    return (
        <List>
            { data?.books.map(({ id }) => <BookListCard key={id} bookId={id} />) }
        </List>
    );
}