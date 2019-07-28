import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  color: ${props => props.theme.one};
  font-weight: ${props => (props.bold ? '1000' : 'normal')};
`;

const Text = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
);

export default Text;
