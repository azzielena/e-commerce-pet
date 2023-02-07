import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { calculateTotal } from '../../helpers/calculate';
import '../../App.css'
import { Link } from 'react-router-dom';

const FooterCart = () => {
    const {cartItems} = useContext(CartContext);
    return (
        <>
        <div className="shopping-cart-footer">
            <div className="cart-summary">
                <div className="cart-summary-row">
                    <div className="label">Total:</div>
                    <div className="value"> $ { calculateTotal(cartItems).toFixed(2)}</div>
                </div>
            </div>
            <div className="d-grid gap-2">
                <Link className="btn btn-primary" to="/checkout">Procedi con l'acquisto</Link>
            </div>
        </div>
        
        </>
    )
}

export default FooterCart;