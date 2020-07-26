import React from 'react';
import Svg, { SvgProps } from './svg';

export default function List(props: SvgProps) {
    return (
        <Svg {...props}>
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="5" y="3" width="14" height="18" rx="2" />
            <line x1="9" y1="7" x2="15" y2="7" />
            <line x1="9" y1="11" x2="15" y2="11" />
            <line x1="9" y1="15" x2="13" y2="15" />
        </Svg>
    )
}