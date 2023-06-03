import React from 'react'

function GridImage({ fill }: { fill?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={13}
            fill="none"
        >
            <path
                fill={fill ? fill : "#000"}
                d="M1 6h3c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v4c0 .55.45 1 1 1Zm0 7h3c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1Zm6 0h3c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1Zm6 0h3c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1ZM7 6h3c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1Zm5-5v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1Z"
            />
        </svg>
    )
}

export default GridImage