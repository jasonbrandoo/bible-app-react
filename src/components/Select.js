import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px 0;
`;

const StyledSelect = styled.select`
  margin: 0 auto;
`;

const Select = ({ children, change }) => (
  <Wrapper>
    <StyledSelect onChange={change}>{children}</StyledSelect>
  </Wrapper>
);

Select.propTypes = {
  children: PropTypes.node.isRequired,
  change: PropTypes.func.isRequired,
};

export default Select;
