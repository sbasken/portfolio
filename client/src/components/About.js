import React from 'react'
import '../About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const About = () => {
  return (
    <Container>
        <Row className="col-11 mx-auto">
            <h1 className="text-center mx-auto text-secondary my-5">About Me</h1>
            <img 
              src="https://images.unsplash.com/photo-1507738978512-35798112892c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
              alt="Seattle central library"
            />
        </Row>
        <Row>
            
        </Row>
    </Container>
  )
}

export default About