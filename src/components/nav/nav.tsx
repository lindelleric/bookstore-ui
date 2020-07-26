import React from 'react';

import styled from 'styled-components';

interface NavProps {}

const Nav = styled.nav`
    background-color: #FFF;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    border-bottom: 1px solid #E5E9F2;
`;

const NavInner = styled.div`
    width: 1000px;
    height: 100%;
    display: flex;
    align-items: center;
`;

export default function Navigation({ children }: React.PropsWithChildren<NavProps>) {
    return (
        <Nav>
            <NavInner>
                { children }
            </NavInner>
        </Nav>
    )
}