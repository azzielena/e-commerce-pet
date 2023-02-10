import { FormEvent, useContext, useState } from "react";
/*import toast, { Toaster } from "react-hot-toast";*/
import { CartContext } from "../context/CartContext";
import postData from "../helpers/postData";
import useForm from "../hooks/useForm";
import { Customer, Order } from "../types/typeApp";
import { Button, Modal } from "react-bootstrap";

const initialState = {
    name: '',
    lastName: '',
    email: '',
    address: ''
}

/*const notify = (msj: string) => toast(msj);*/

const FormCheckout = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const {cartItems, dispatch } = useContext(CartContext);
    const {name, email, lastName, address, handleInputChange, resetValues } = useForm<Customer>(initialState);
    /*const [showToast, setShowToast ] = useState(false);*/
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log("inviato al server");
       /* setShowToast(true);

        const orderDetails = cartItems.map(({id, image, ...item}) => item);

        if(orderDetails.length > 0){
            
            const order: Order = {
                customer: {
                    name, email, lastName, address
                },
                order_details: orderDetails
            }
            
            const fetchApi = await postData(order);
            
            if(!fetchApi.ok){
                notify('No se pudo procesar la orden...Intentelo nuevamente');
            }else{
                notify('Orden realizada exitosamente');

                resetValues();

                dispatch({
                    payload: [],
                    type: 'CLEAR'
                });
                
            }
        }else {
            notify('No se puede procesar una orden sin productos');
        }
        
        setTimeout(() => setShowToast(false),5000);*/
    }
    
    
    return (
        <div className='col-md-7 col-lg-8'>
            <h4 className='mb-3'>Checkout</h4>
            <form autoComplete='off' onSubmit={ handleSubmit }>
                <div className="row g-3">
                    <div className="col-sm-6">
                        <label htmlFor="name" className='form-label'>Nome</label>
                        <input type="text" className='form-control' name='name' id='name' placeholder='Nome...' value={name} onChange={handleInputChange}/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="lastName" className='form-label'>Cognome</label>
                        <input type="text" className='form-control' name='lastName' id='lastName' placeholder='Cognome...' value={lastName} onChange={handleInputChange}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className='form-control' name='email' id='email' placeholder='Email..' value={email} onChange={handleInputChange}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="address" className='form-label'>Indirizzo</label>
                        <input type="text" className='form-control' name='address' id='address' placeholder='Indirizzo..' value={address} onChange={handleInputChange}/>
                    </div>
                </div>
                <br />
                
                <>
      <button onClick={handleShow} className='btnAddCart'>
      Effettua l'ordine
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confermi il modulo e procedi al pagamento?</Modal.Body>
        <Modal.Footer>
          <button className="btn-secondary" onClick={handleClose} style={{width:"90px"}}>
            Annulla
          </button>
          <button className="btn-secondary" onClick={handleClose} style={{width:"90px"}}>
            Confermo
          </button>
        </Modal.Footer>
      </Modal>
    </>
                
            </form>
        </div>
    )
}
/* dopo button a rig a 86 inserire:
{
                    showToast && <Toaster 
                        toastOptions={{
                            position: 'top-right',
                            duration: 2000,
                        }}/>
                }
*/ 

export default FormCheckout;