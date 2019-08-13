import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.div`
  display: flex;
  text-align: center;
  justify-content: ${props => (props.group ? 'flex-start' : 'center')};
  flex-direction: ${props => (props.group ? 'row' : 'column')};
  flex-wrap: ${props => (props.group ? 'wrap' : null)};
  width: ${props => (props.content ? '50%' : null)};
  margin: ${props =>
    props.content ? '6rem auto auto auto' : 'auto auto 2rem auto'};
  text-align: ${props => (props.content ? 'justify' : null)};
`;

const List = ({ children, ...props }) => (
  <StyledList {...props}>{children}</StyledList>
);

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
