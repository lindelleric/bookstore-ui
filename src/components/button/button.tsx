import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { MainDark, MainLight, MainLightDark } from '~/colors';


const InnerButton = styled.button`
    text-decoration: none;
    cursor: pointer;
    border: none;
    padding: 0 10px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: no-wrap;
    outline: none;
    user-select: none;
    transition: all 0.3s;
    height: 32px;

    background-color: ${ MainDark };
    color: ${ MainLight };

    span {
        height: 10px;
        line-height: 10px;
    }

    &:hover {
        background-color: ${ darken(0.1, MainDark) };
        color: ${ MainLight };
    }

    &:active {
        background-color: ${ darken(0.1, MainDark) };
        color: ${ MainLight };
    }

    &:focus {
        box-shadow: 0 0 0 2px ${ MainLightDark }
    }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<Element> {
    variant?: 'primary' | 'secondary';
}

export default function Button({ children, ...otherProps }: React.PropsWithChildren<ButtonProps>) {
    return (
        <InnerButton { ...otherProps }>
            <span>
                {children}
            </span>
        </InnerButton>
    );
}