import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';
import '../../App.css'
import { CartContext } from '../../context/Context';
import { CartItem } from '../../types/typeApp';

type Props = {
    item: CartItem
}

const Item = ({item}: Props) => {

    const { dispatch }= useContext (CartContext);

    return (
        <>
        <div className='shopping-cart-item'>
            <div className="item-action">
                <Button variant="secondary" onClick={() => dispatch({
                    payload:item,
                    type:'ADD'
                })} >
                   <FaPlus color="white" /> 
                   
                </Button>
                <span> {item.amount}</span>
                <Button variant="secondary" onClick={() => dispatch({
                    payload:item.Id,
                    type:'REMOVE'
                })} >
                   <FaMinus color="white" /> 
                   
                </Button>
            </div>
            <div className="item-detail">
                <div className="item-detail-image">
                    <img src={item.Img} alt={item.Nome} />
                </div>
                <div className="item-detail-info">
                    <div className="item-detail-info-name">
                      {item.Nome}
                    </div>
                    <div className="item-detail-info-prices">
                      <span>${item.Prezzo}</span>
                    </div>
                </div>
            </div>
            <div className='item-action-remove'>
                <Button variant="danger" title="Elimina prodotto"  onClick={() => dispatch({
                    payload:item.Id,
                    type:'REMOVE-ALL'
                })} >
                <FaTrashAlt color="white" />
                </Button>
            </div>
        </div>
        </>
    )
}

export default Item;