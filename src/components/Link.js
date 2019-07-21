import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ className, to, children }) => (
  <NavLink className={className} to={to}>
    {children}
  </NavLink>
);

const StyledLink = styled(NavigationLink)`
  color: ${props => props.theme.one};
  padding: 10px;
  border-bottom: 1px solid ${props => props.theme.one};
  text-decoration: none;
`;

const Link = ({ children, to }) => <StyledLink to={to}>{children}</StyledLink>;

export default Link;
