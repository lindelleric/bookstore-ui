import React from 'react';
import styled from 'styled-components';

export interface SvgProps {
    className?: string;
}

const SvgElement = styled.svg``;


export default function Svg({ children, className }: React.PropsWithChildren<SvgProps>) {
    return (
        // <span>
        <SvgElement xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#333"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            { children }
        </SvgElement>
        // </span>
    )
}