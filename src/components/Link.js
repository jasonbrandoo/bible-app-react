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
  font-weight: ${props => props.bold && '1000'};
  &:hover {
    color: ${props => props.theme.three};
  }
  &:last-of-type {
    margin-bottom: 3rem;
  }
`;

const Link = ({ children, to, ...props }) => (
  <StyledLink to={to} {...props}>
    {children}
  </StyledLink>
);

NavigationLink.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.object.isRequired,
};

export default Link;
