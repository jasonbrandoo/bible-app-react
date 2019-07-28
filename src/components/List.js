import React from 'react';
import styled from 'styled-components';

const StyledList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const List = ({ children }) => <StyledList>{children}</StyledList>;

export default List;
