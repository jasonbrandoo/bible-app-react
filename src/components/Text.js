import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  color: ${props => props.theme.one};
`;

const Text = ({ children }) => <StyledText>{children}</StyledText>;

export default Text;
