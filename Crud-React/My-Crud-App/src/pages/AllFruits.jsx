import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function AllFruits() {
    const [allFruits, setAllFruits]= useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000/fruits').then((res)=>{
            setAllFruits(res.data);
        });
    },[]);

  return (
    <>
    <Row xs={1} md={3} className='g-2'>
        {allFruits.map((item)=>(
            <Col key={item.id}>
                <Card>
                    <Card.Img variant='top' src={item.imgUrl}/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>Quantity(Kg)-{item.quantity}</Card.Text>
                        <Card.Text>Price-{item.price}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
    </>
  )
}

export default AllFruits;