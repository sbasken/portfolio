import NavMenu from '../NavBar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import ProjectList from '../ProjectList/ProjectList';
import './App.css'
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid>
      <Row className='flex-column'>
        <Col>
          <NavMenu/>
        </Col>
        <Col>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectList />} />
          </Routes> 
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
