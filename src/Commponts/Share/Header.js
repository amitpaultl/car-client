import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import './Header.css'

function NavScrollExample() {
  const { user ,logout} = useContext(AuthContext)
  // singOut
  const singOut =()=>{
    logout()
    .then(()=>{

    })
    .catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage)
     
    });
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className='logo' to={'/'}> CAR SELLING </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 menu"
            
            navbarScroll
          >
            <Navbar.Brand><NavLink  to={'/'}>Home</NavLink></Navbar.Brand>
            <Navbar.Brand><NavLink  to={'/blog'}>Blog</NavLink></Navbar.Brand>


         

          </Nav>
          <div className="d-flex">
            {
              user ? <Button onClick={singOut} variant="outline-success">LogOut</Button> : <div className='login-Button'>
              <Button variant="outline-success" className='mx-2'>
                <Link className='login-Button' to={'/login'}>login</Link>
              </Button>
              <Button variant="outline-success " className='mx-2'>
                <Link className='login-Button' to={'/singup'}>SignUp</Link>
              </Button>
                
              </div>
            }


          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;