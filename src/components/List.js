import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: ${props => (props.content ? '50%' : null)};
  margin: ${props => (props.content ? '6rem auto auto auto' : null)};
  text-align: ${props => props.content && 'justify'};
`;

const List = ({ children, ...props }) => (
  <StyledList {...props}>{children}</StyledList>
);

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
