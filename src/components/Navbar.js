import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';

const Menu = styled.nav`
  background-color: ${props => props.theme.three};
  color: #fff;
  padding: 1rem;
  position: fixed;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

const Brand = styled.li`
  font-size: 20px;
  a {
    text-decoration: none;
    color: #000;
    display: block;
  }
`;

const Item = styled.li`
  margin-left: auto;
`;

const Navbar = () => (
  <Menu>
    <List>
      <Brand>
        <NavLink to="/">Bible App</NavLink>
        <Breadcrumb />
      </Brand>
      <Item>About</Item>
    </List>
  </Menu>
);

export default Navbar;
