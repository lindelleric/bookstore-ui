import React from 'react';
import styled from 'styled-components';

interface NavItemProps {
    right?: boolean;
}

const NavItem = styled.span<NavItemProps>`
    padding: 0 10px;
    color: #FFF;
    height: 100%;
    ${ (props) => props.right ? `
        right: 0;
        position: absolute; ` : ''
    };
`;

export default function NavigationItem({ children, right }: React.PropsWithChildren<NavItemProps>) {
    return (
        <NavItem right={right}>
            { children }
        </NavItem>
    );
}