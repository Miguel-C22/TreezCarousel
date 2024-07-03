import React from 'react'

type item = {
    item: any
}

function Modal({item}: item) {
  return (
    <div className='modal'>
        <h2>{item.name}</h2>
        <img src={item.images[0]} alt={item.name} />
        <p>Description: {item.description}</p>
    </div>
  )
}

export default Modal