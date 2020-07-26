import React from 'react';
import styled from 'styled-components';

interface BookCoverProps {
    isbn?: string | null;
    bookId?: string | null;
    className?: string;
}

const Cover = styled.div<{url: string | null}>`
    width: 100%;
    height: 100%;
    box-shadow: 0 0 0 1px #E5E9F2;
    border-radius: 3px;
    ${({ url }) => url ? `background: url(${url});` : 'background-color: #FFF;'}
    background-size: 100%;
`;

export default function BookCover({ bookId, isbn, ...otherProps }: BookCoverProps) {

    // TODO: if bookId is undefined, get cover via isbn
    const url = isbn ? `/assets/book/cover?isbn=${isbn}` : null;

    return (
        <Cover url={url} {...otherProps} />
    )
}