import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function layout(props) {
  return (

    <div>
        <Navbar expand='lg' variant='dark' bg='success'>
            <Container>
                <Navbar.Brand>Fruits Bucket</Navbar.Brand>
            </Container>
        </Navbar>
        <Container>{props.children}</Container>
    </div>
  )
}

export default layout