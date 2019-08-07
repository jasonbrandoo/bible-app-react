import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBreadcrumb = styled.div`
  & + &:before {
    content: '/';
  }
`;

const StyledBreadcrumbItem = styled.div`
  color: red;
`;

export const BreadcrumbItem = ({ children }) => {
  return <StyledBreadcrumbItem>{children}</StyledBreadcrumbItem>;
};

const Breadcrumb = () => {
  return (
    <StyledBreadcrumb>
      <BreadcrumbItem />
    </StyledBreadcrumb>
  );
};

// Breadcrumb.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Breadcrumb;
