import React from 'react'
import Svg from './svg'

const Icon = ({ children, height, width, viewBox, ...props }) => {
    return (
        <Svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox || '0 0 24 24'}
            width={width || '32px'}
            height={height || '32px'}
            {...props}
        >
            {children}
        </Svg>
    )
}

export default Icon
