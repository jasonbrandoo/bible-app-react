import React from 'react';
import styled from '@emotion/styled';
import { layout, typography, color, system, space } from 'styled-system';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationLink = ({ className, to, children }) => (
  <NavLink className={className} to={to}>
    {children}
  </NavLink>
);

const Link = styled(NavigationLink)`
  ${color}
  ${space}
  ${typography}
  ${layout}
  ${system({
    textDecoration: true,
  })}
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

NavigationLink.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
