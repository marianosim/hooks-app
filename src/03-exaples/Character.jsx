
export const Character = ({image, name}) => {
    return (
        <blockquote className='blockquote text-end'>
            <img src={image} alt='character' className='mb-4' />
            <footer className='blockquote-footer'>{name}</footer>
        </blockquote>
    )
}
