import React from 'react'
import { ProductStatus } from '../schema/products'

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

const displayItemStatus = (itemStatus: ProductStatus ) => {

    switch (itemStatus) {
        case ProductStatus.Regular:
            return <div className="statusRegular"></div>
        case ProductStatus.LowStock:
            return <p className="statusLowStock">{formatStatus(itemStatus)}</p>
        case ProductStatus.OutOfStock:
            return <p className="statusOutOfStock">{formatStatus(itemStatus)}</p>
        case ProductStatus.PreOrder:
            return <p className="statusPreOrder">{formatStatus(itemStatus)}</p>
        case ProductStatus.NewArrival:
            return <p className="statusNewArrival">{formatStatus(itemStatus)}</p>
        case ProductStatus.Discontinued:
            return <p className="statusDiscontinued">{formatStatus(itemStatus)}</p>
        case ProductStatus.Sale:
            return <p className="statusSale">{formatStatus(itemStatus)}</p>
        default:
            return ""
    }
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
                {displayItemStatus(item.status)}
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