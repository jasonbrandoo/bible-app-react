import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  space,
  typography,
  color,
  layout,
  position,
  flexbox,
} from 'styled-system';

const Menu = styled.nav`
  ${color}
  ${space}
  ${layout}
  ${position}
`;

const List = styled.div`
  ${layout}
  ${flexbox}
  ${space}
  list-style: none;
`;

const NavigationLink = ({ to, className, children }) => (
  <NavLink to={to} className={className}>
    {children}
  </NavLink>
);

const Brand = styled(NavigationLink)`
  ${typography}
  ${color}
  text-decoration: none;
`;

const Github = styled.a`
  ${typography}
  ${space}
  ${color}
  text-decoration: none;
`;

const Navbar = () => (
  <Menu bg="primary" position="fixed" p={3} width={1}>
    <List display="flex" alignItems="center" p="0px">
      <Brand fontSize={4} color="four" fontWeight="bold" to="/">
        Bible App
      </Brand>
      <Github
        fontSize={4}
        ml="auto"
        color="four"
        href="https://github.com/jasonbrandoo/bible-for-everyone"
      >
        github
      </Github>
    </List>
  </Menu>
);

export default Navbar;
