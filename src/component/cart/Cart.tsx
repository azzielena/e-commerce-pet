import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import FooterCart from './FooterCart';
import Item from './Item';
import '../../App.css';

const Cart = () => {
const { cartItems} = useContext (CartContext);
if(!cartItems.length) return <h5>Non hai selezionato prodotti</h5>;

    return (
        <>
        <div className="shopping-cart">
        {
            cartItems.map(item => (
            <Item key={ item.id } item={item} />
        ))
        }
        <FooterCart />
        </div>
        
        </>
    )
}

export default Cart;