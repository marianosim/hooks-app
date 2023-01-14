import { useLayoutEffect, useRef, useState } from "react"

export const Character = ({ image, name }) => {

    const footerRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
    useLayoutEffect(() => {
        const { width, height } = footerRef.current.getBoundingClientRect();
        setBoxSize({ width, height });

    }, [])


    return (
        <>
            <blockquote className='blockquote text-end'
                style={{ display: 'flex' }}>
                <img src={image} alt='character' className='mb-4' />
                <footer ref={footerRef} className='blockquote-footer'>{name}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>

    )
}
