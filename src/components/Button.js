import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 5px;
  background-color: transparent;
  border: transparent;
  color: ${props => props.theme.one}
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.three}
  }
`;

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props} type="button">
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
