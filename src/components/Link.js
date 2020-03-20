import React from 'react';
import styled from 'styled-components';
import { typography, color, system } from 'styled-system';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationLink = ({ className, to, children }) => (
  <NavLink className={className} to={to}>
    {children}
  </NavLink>
);

const Link = styled(NavigationLink)`
  ${color}
  ${typography}
  ${system({
    textDecoration: true,
  })}
`;

NavigationLink.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
