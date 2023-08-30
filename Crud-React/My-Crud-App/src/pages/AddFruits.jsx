import React,{useRef} from 'react'
import axios from 'axios';
import  Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function AddFruits() {
    const fruitName = useRef("");
    const quantity = useRef("");
    const price = useRef("");
    const imgUrl = useRef("");

    const navigate =useNavigate();

    const addFruitHandler =()=>{
            var payload = {
                name: fruitName.current.value,
                quantity: quantity.current.value? Number(quantity.current.value) : 0,
                price: price.current.value? Number(price.current.value) : 0,
                imgUrl: imgUrl.current.value,
            };
            axios.post("http://localhost:4000/fruits",payload).then(()=>{
                navigate("/");
            });
    };
  return (
    <>
    <legend>Create</legend>
    <Form>
        <Form.Group className='mb-3' controlId='formName'></Form.Group>
    </Form>
    </>
  )
}

export default AddFruits