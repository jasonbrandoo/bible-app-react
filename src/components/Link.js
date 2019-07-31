import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationLink = ({ className, to, children }) => (
  <NavLink className={className} to={to}>
    {children}
  </NavLink>
);

const StyledLink = styled(NavigationLink)`
  color: ${props => props.theme.one};
  text-decoration: none;
  font-size: ${props => props.size};
  margin: auto;
  &:hover {
    color: ${props => props.theme.three};
  }
`;

const Link = ({ children, to, ...props }) => (
  <StyledLink to={to} {...props}>
    {children}
  </StyledLink>
);

NavigationLink.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default Link;
