import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Animals } from './components/animals';
import { Create } from './components/register';
import { Edit } from './components/edit';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Rose's Vets</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/animals">Animals</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                <NavDropdown title="Photos" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/photos">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
  
            </Container>
          </Navbar>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Content></Content>}></Route>
            <Route path='/animals' element={<Animals></Animals>}></Route>
            <Route path='/register' element={<Create></Create>}></Route>
            <Route path='/edit/:id' element={<Edit></Edit>}></Route>
          </Routes>


          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;