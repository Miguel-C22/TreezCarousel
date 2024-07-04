import React from 'react'

type item = {
    item: any,
    toggleOnAndOff: boolean
    toggle: (state: boolean) => void
}

function Modal({item, toggle}: item) {

const closeModel = () => {
    toggle(false)
}

function formatStatus(status: string) {
    // Replace underscores with spaces and capitalize the first letter
    return status.replace(/_/g, ' ').replace(/^\w/, (c) => c.toUpperCase());
  }

  return (
    <div className='modal_container'>
        <div className='modal_item_content'>
            <img className="modal_image" src={item.images[0]} alt={item.name} />
            <div className='modal_item_description_container'>
                <div className='modal_item_name_price'>
                    <h1>{item.name}</h1>
                    <h2>${item.price.toFixed(2)}</h2>
                </div>
                {item.status === "regular" && <div className="statusRegular"></div>}
                {item.status === "low_stock" && <p className="statusLowStock">{formatStatus(item.status)}</p>}
                {item.status === "out_of_stock" && <p className="statusOutOfStock">{formatStatus(item.status)}</p>}
                {item.status === "pre_order" && <p className="statusPreOrder">{formatStatus(item.status)}</p>}
                {item.status === "new_arrival" && <p className="statusNewArrival">{formatStatus(item.status)}</p>}
                {item.status === "discontinued" && <p className="statusDiscontinued">{formatStatus(item.status)}</p>}
                {item.status === "on_sale" && <p className="statusSale">{formatStatus(item.status)}</p>}
                <div>
                    <h2>Product description</h2>
                    <p>{item.description}</p>
                </div>
            </div>
            <button className='close_model_btn' onClick={closeModel}>X</button>
        </div>
    </div>
  )
}

export default Modal