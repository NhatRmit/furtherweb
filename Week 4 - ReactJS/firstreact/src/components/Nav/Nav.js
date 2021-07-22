import { Nav, Navbar, NavbarBrand, Container, NavItem, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { BiSearchAlt } from 'react-icons/bi'
import { Form, FormControl } from 'react-bootstrap'

export default function Navi() {
  return(
    <>
      <Navbar collapseOnSelect expand="lg" >
        <Container>
            <NavbarBrand>
            <img    src="https://file.removal.ai/preview/tmp-60f9822b7af5f.png" 
                    width="150vw"
                    alt="LOGO" />
            </NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
            <Nav fill>
                <NavItem>
                    <NavLink href="#"><span>News</span> </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><span>Price</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><span>Top 5</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><span>Review</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><span>Experience</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><span>RaceLife</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><span>Signup/Login</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Form className="d-flex">
                            <FormControl 
                                type="search"
                                placeholder="search"
                                aria-label="search"
                                size="md"
                            />
                            <span width="100vw"><BiSearchAlt size={32}/></span>
                        </Form>
                    </NavLink>
                </NavItem>
            </Nav>
            </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  )
}