import React from 'react';
import { Button, Navbar, Nav, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .navbar-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;
const Header = () => {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Cine & Movie
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Главная
                </Nav.Link>
                <Nav.Link as={Link} to="/films">
                  Фильмы
                </Nav.Link>
                <Nav.Link as={Link} to="/serials">
                  Сериалы
                </Nav.Link>
                <Nav.Link as={Link} to="/cartoons">
                  Мультфильмы
                </Nav.Link>
                <Nav.Link as={Link} to="/favourites">
                  Избранное
                </Nav.Link>
              </Nav>
              <Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Фильмы, сериалы и ..."
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
              </Nav>
              <Nav>
                <Button variant="primary" className="me-2">
                  Войти
                </Button>
                <Button variant="primary">Зарегистрироваться</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
};

export default Header;
