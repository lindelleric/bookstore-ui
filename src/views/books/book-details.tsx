import React from 'react';
import { useParams } from 'react-router-dom';
import { useBookDetailsQuery } from '~/generated/graphql';
import BookCover from '~/components/book-cover';
import styled from 'styled-components';

const Cover = styled(BookCover)`
    height: 290px;
    width: 200px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: top;
`;

const BookInfo = styled.div`
    margin-left: 50px;
`;

const BookTitle = styled.h1`
    margin-top: 0;
`;

export default function BookDetails() {
    const { bookId } = useParams();
    const { data, loading, error } = useBookDetailsQuery({ variables: { bookId } });

    if (loading) {
        return <h3>Loading...</h3>;
    }

    if (error || !data) {
        return <></>;
    }

    const { book } = data;
    
    /* TODO: 
        - Add button to add to wishlist
        - Add more book info
        - 
    */

    return (
        <Wrapper>
            <Cover isbn={book.isbn13} bookId={book.id} />

            <BookInfo>
                <BookTitle>{book.title}</BookTitle>
                <h3>{book.authors.map(({ name }) => name).join(', ')}</h3>
                <p>{book.synopsis}</p>
                <p>{book.numberOfPages} pages</p>
                <p>Publish date: {book.publishDate}</p>
            </BookInfo>
        </Wrapper>
    )
}