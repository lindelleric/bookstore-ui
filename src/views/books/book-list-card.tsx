import React from 'react';
import styled from 'styled-components';

import { useBookSummaryQuery } from '~/generated/graphql';

import BookCover from '~/components/book-cover';
import { useRouteMatch, Link } from 'react-router-dom';

interface BookListCardProps {
    bookId: string
}

const Wrapper = styled.div`

`;

const Cover = styled(BookCover)`
    height: 290px;
`;


const Title = styled.h3`
    margin: 3px 0 0;
    font-size: 14px;
    color: #333 !important;
`;

const Author = styled.span`
    margin: 0;
    font-size: 12px;
    color: #999 !important;
`;

export default function BookListCard({ bookId }: BookListCardProps) {
    const { url } = useRouteMatch();

    const { data, loading, error } = useBookSummaryQuery({
        variables: {
            bookId
        }
    })

    if (!data || error) {
        return <></>;
    }

    const { book } = data;

    return (
        <Wrapper>
            <Link to={`${url}/${book.id}`}>
                <Cover isbn={book.isbn13} bookId={book.id} />
                <Title>{ book.title }</Title>
                <Author>{ book.authors.map(({ name }) => name).join(', ') }</Author>
            </Link>
        </Wrapper>
    )
}