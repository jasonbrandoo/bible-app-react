import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: ${props => props.theme.one};
  cursor: pointer;
`;

export const ButtonGroup = ({ children }) => {
  return <Flex>{children}</Flex>;
};

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props} type="button">
      {children}
    </StyledButton>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
