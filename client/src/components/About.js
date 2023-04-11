import React from 'react'
import '../About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <Container>
        <Row className="text-center my-5">
            <h1>Saki is a Software Developer <br></br> based in Seattle.</h1>
        </Row>
        <Row className="justify-content-md-center">
            <Col className='col-md-3 col-sm-10 ml-1 mx-auto '>
                <img className='img-card position-relative' src="https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            </Col>
            <Col className='col-md-3 col-sm-10 mx-auto'>
                <img className='img-card' src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            </Col>
            <Col className='col-md-3 col-sm-10 mx-auto'>
                <img className='img-card' src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col className='col-md-3 col-sm-10 mt-5 mx-auto'>
                <img className='img-card' src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGNvb2wlMjBiYWNrZ3JvdW5kfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
            </Col>
            <Col className='col-md-3 col-sm-10 mt-5 mx-auto'>
                <img className='img-card' src="https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" alt="" />
            </Col>
            <Col className='col-md-3  col-sm-10 mt-5 mx-auto'>
                <img className='img-card' src="https://images.unsplash.com/photo-1546026502-797e11a59f50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvb2wlMjBiYWNrZ3JvdW5kfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
            </Col>
        </Row>
        <Row className="justify-content-md-center">
        </Row>
    </Container>
  )
}

export default About