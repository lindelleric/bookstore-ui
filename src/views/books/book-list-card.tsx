import React from 'react';
import styled from 'styled-components';

import { useBookQuery } from '~/generated/graphql';

import BookCover from '~/components/book-cover';

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
`;

const Author = styled.span`
    margin: 0;
    font-size: 12px;
    color: #999;
`;

export default function BookListCard({ bookId }: BookListCardProps) {
    const { data, loading, error } = useBookQuery({
        variables: {
            bookId
        }
    })

    const book = data?.book;

    if (book) {
        return (
            <Wrapper>
                <Cover isbn={book.isbn13} bookId={book.id} />
                <Title>{ book.title }</Title>
                <Author>{ book.authors.map(({ name }) => name).join(', ') }</Author>
            </Wrapper>
        )
    } else {
        return <></>;
    }
}