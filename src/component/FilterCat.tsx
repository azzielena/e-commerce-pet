import { Button, Form } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { createContext, useContext } from "react";
/*

const Cart = createContext();
faker.seed(99);
export const CartState = () => {
    return useContext(Cart);
  };*/

const FilterCat = () => {/*
  const {
    productDispatch,
    productState: { byPuppy, byAdult},
  } = CartState();

  // make state for rating
*/
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      
      <span>
        <Form.Check
          inline
          label="Adulto"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          //onChange={() =>
            //productDispatch({
             // type: "FILTER_BY_AGE",
           // })
          //}
         // checked={byAdult}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Cucciolo"
          name="group1"
          type="checkbox"
          id={`inline-4`}
         /* onChange={() =>
            productDispatch({
              type: "FILTER_BY_AGE",
            })
          }
          checked={byPuppy}*/
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
    
      </span>
      <Button
        variant="light"
        /*onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }*/
      >
        Clear Filters
      </Button>
    </div>
  )};


export default FilterCat;
