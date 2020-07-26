import React from 'react';
import styled from 'styled-components';

interface NavItemProps {
    right?: boolean;
}

const NavItem = styled.span<NavItemProps>`
    padding: 0 10px;
    color: #FFF;
    height: 100%;
    ${ (props) => {
        return props.right ? `
            right: 0;
            position: absolute; ` : ''
    }};

    &:first-child {
        padding-left: 0;
    }

    &:last-child {
        padding-right: 0;
    }
`;

export default function NavigationItem({ children, right }: React.PropsWithChildren<NavItemProps>) {
    return (
        <NavItem right={right}>
            { children }
        </NavItem>
    );
}