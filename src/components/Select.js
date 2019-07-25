import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSelect = styled.select`
  margin: 0 auto;
`;

const Select = ({ children }) => {
  return <StyledSelect>{children}</StyledSelect>;
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Select;
