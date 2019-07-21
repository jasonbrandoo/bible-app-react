import React from 'react';
import styled from 'styled-components';

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const List = ({ children }) => <StyledList>{children}</StyledList>;

export default List;
