import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.div`
  background-color: ${props => props.theme.four};
`;

const Layout = ({ children }) => {
  return <Background>{children}</Background>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
