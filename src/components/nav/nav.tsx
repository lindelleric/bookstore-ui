import React from 'react';

import styled from 'styled-components';

interface NavProps {}

const Nav = styled.nav`
    background-color: #1F3B4D;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
`;

export default function Navigation({ children }: React.PropsWithChildren<NavProps>) {
    return (
        <Nav>
            { children }
        </Nav>
    )
}