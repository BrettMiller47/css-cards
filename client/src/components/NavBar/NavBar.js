import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

export default function NavBar() {
  
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home" className='nav'>
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}