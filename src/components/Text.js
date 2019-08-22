import styled from 'styled-components';
import { typography, space } from 'styled-system';

// const StyledText = styled.div`
//   color: ${props => props.theme.one};
//   font-weight: ${props => props.bold && '1000'};
//   font-size: ${props => props.size};
//   border-bottom: ${props =>
//     props.borderBottom && `1px solid ${props.theme.one}`};
//   border-top: ${props => props.borderTop && `1px solid ${props.theme.one}`};
//   margin: ${props => props.margin};
//   padding: ${props => props.padding};
//   letter-spacing: ${props => props.spacing};
// `;

const Text = styled.div`
  ${typography}
  ${space}
`;

export default Text;
