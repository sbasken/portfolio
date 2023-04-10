import NavMenu from './Navbar'
import Home from './Home'
import About from './About'
import ProjectList from './ProjectList';
import { Route, Routes } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Media from './Media';

function App() {
  return (
    <Container>
      <Row>
        <NavMenu/>
      </Row>
      <Row>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </Row>
    </Container>
    
  );
}

export default App;
