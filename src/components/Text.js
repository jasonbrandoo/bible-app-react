import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledText = styled.div`
  color: ${props => props.theme.one};
  font-weight: ${props => props.bold && '1000'};
  font-size: ${props => props.size};
  border-bottom: ${props =>
    props.borderBottom && `1px solid ${props.theme.one}`};
  border-top: ${props => props.borderTop && `1px solid ${props.theme.one}`};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  letter-spacing: ${props => props.spacing};
`;

const Text = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
