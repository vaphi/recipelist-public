import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddRecipeModal from '../add-recipe-modal/add-recipe-modal';
import { userAuth, userIsAuthenticate } from '../login/user-store'
import { useAuth0 } from '@auth0/auth0-react';
// import LoginButton from '../login/login';
import LogoutButton from '../login/logout';
import "./nav-bar.css";

function NavBar() {

  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(p => !p);

  const { user, isAuthenticated, isLoading } = useAuth0();

  function handleShow(showModal: boolean) {
    <AddRecipeModal showModal={showModal} />
    console.log("test");
  }

  function ShowAddRecipe() {
    if (isAuthenticated) {
      return <AddRecipeModal showModal={show} toggleShow={toggleShow} />
    } else {
      return null;
    }
  }

  // function ShowLoginLogoutButton() {
  //   if (!isAuthenticated && isLoading) {
  //     return null
  //   } else if (!isAuthenticated) {
  //     return <LoginButton></LoginButton>
  //   } else {
  //     return <LogoutButton></LogoutButton>
  //   }
  // }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="container" style={{ marginLeft: 'initial' }}>
        <Navbar.Brand href="/home">Recipe List</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="container" id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/home">Home</Nav.Link>
            <Nav.Link className="nav-link" href="/recipes">Recipes</Nav.Link>
          </Nav>
          <div>
            <ShowAddRecipe />
          </div>
          {/* <div>
            <ShowLoginLogoutButton />
          </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;