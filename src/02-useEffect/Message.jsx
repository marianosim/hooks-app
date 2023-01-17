import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    console.log('Message Mounted')

    return () => {

    }
  }, [])


  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  )
}
