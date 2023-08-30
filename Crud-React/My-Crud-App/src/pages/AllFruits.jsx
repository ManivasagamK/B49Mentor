import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'bootstrap';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmation from '../component/shared/DeleteConfirmation';

function AllFruits() {
    const [allFruits, setAllFruits]= useState([]);
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [itemToDeleteId, setItemToDeleteId] = useState(0);

    useEffect(()=>{
        axios.get('http://localhost:4000/fruits').then((res)=>{
            setAllFruits(res.data);
        });
    },[]);

    const openConfirmDeleteModalHandler = (id) => {
        setShowModal(true);
        setItemToDeleteId(id);
      };
     
      const hideDeleteModalHandler = () => {
        setShowModal(false);
        setItemToDeleteId(0);
      };
     
      const confirmDeleteHandler = () => {
        axios
          .delete(`http://localhost:4000/fruits/${itemToDeleteId}`)
          .then((response) => {
            setAllFruits((previousState) => {
              return previousState.filter((_) => _.id !== itemToDeleteId);
            });
            setItemToDeleteId(0);
            setShowModal(false);
          });
      };

  return (
    <>
    <DeleteConfirmation
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title="Delete Confirmation"
        body="Are you want delete this itme?"
        confirmDeleteHandler={confirmDeleteHandler}>

        </DeleteConfirmation>

    <Row className='mt-2'>
        <Col md={{span:4, offset:4}}>
            <Button variant="primary" onClick={()=>navigate("/add-fruit")}>
                Add New Fruit
            </Button>
        </Col>
    </Row>
    <Row xs={1} md={3} className='g-2'>
        {allFruits.map((item)=>(
            <Col key={item.id}>
                <Card>
                    <Card.Img variant='top' src={item.imgUrl}/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>Quantity(Kg)-{item.quantity}</Card.Text>
                        <Card.Text>Price-{item.price}</Card.Text>
                        <Button
                        variant="primary"
                        onClick={()=> navigate(`/update-fruit/${item.id}`)} 
                        >
                            Edit
                        </Button>

                        <Button
                        variant="danger"
                        onClick={() =>{openConfirmDeleteModalHandler(item.id)}}
                        >
                            Delete
                        </Button>

                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
    </>
  )
}

export default AllFruits;