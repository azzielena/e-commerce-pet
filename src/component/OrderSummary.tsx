import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { calculateTotal, getTotalItems } from '../helpers/calculate';

const OrderSummary = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div className='col-md-5 col-lg-4 order-md-last'>
            <h4 className='d-flex justify-content-between align-items-center mb-3'>
                <span className='text-dark'>Riepilogo dell'ordine</span>
                <span className='badge bg-danger rounded-pill'>{getTotalItems(cartItems)}</span>
            </h4>
            <ul className='list-group mb-3'>
                {
                    cartItems.map(item => (
                        <li
                            key={item.Id}
                            className='list-group-item d-flex justify-content-between lh-sm'>
                            <div>
                                <h6 className='my-0'>{ item.Nome }</h6>
                                <small className='text-muted'>Quantità: { item.amount }</small>
                            </div>       
                            <div className="text-muted">${item.Prezzo}</div>  
                        </li>
                    ))
                }
                <li className='list-group-item d-flex justify-content-between'>
                    <span>TOTAL (USD)</span>
                    <strong>${ calculateTotal(cartItems).toFixed(2)}</strong>
                </li>
            </ul>
        </div>
    )
}

export default OrderSummary;