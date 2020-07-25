import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styled from 'styled-components';
import { MainDark, MainLight } from '~/colors';

const LinkWrapper = styled.span`
    a {
        height: 100%;
        padding: 0 10px;
        color: ${ MainLight };
        display: inline-flex;
        align-items: center;
        text-decoration: none;

        &.active {
            background-color: ${ MainLight };
            color: ${ MainDark };
        }
    }
`;

export default function NavigationLink({ children, ...otherProps }: React.PropsWithChildren<NavLinkProps>) {
    return (
        <LinkWrapper>
            <NavLink { ...otherProps }>{ children }</NavLink>
        </ LinkWrapper>
    );
}