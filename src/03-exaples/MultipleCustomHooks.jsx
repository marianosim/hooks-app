import React from 'react'
import { useCounter, useFetch } from '../hooks';
import { Character } from './Character';
import { LoadingCharacter } from './LoadingCharacter';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    const { name, image } = !!data && data;

    return (
        <>
            <h1>Rick and Morty</h1>
            <hr />

            {
                isLoading ?
                    <LoadingCharacter />
                    :
                    <Character name={name} image={image} />
            }



            <button className='btn btn-primary' onClick={() => increment()}>
                Next character
            </button>



        </>
    )
}
