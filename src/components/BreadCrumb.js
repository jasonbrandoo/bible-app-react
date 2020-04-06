/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';
import Link from './Link';

const BreadCrumbSeparator = ({ children }) => (
  <span
    sx={{
      mx: 1,
      fontSize: [1, 4],
    }}
  >
    {children}
  </span>
);

const BreadCrumbItem = ({ children, to }) => (
  <Link to={to} fontSize={[1, 4]} color="text">
    {children}
  </Link>
);

const BreadCrumb = ({ children }) => {
  const arrOfChildren = React.Children.toArray(children).map(child => child);
  const lastIndex = arrOfChildren.length - 1;

  return (
    <Box pt="5rem" pl={3}>
      {arrOfChildren.reduce((acc, child, index) => {
        const notLast = index < lastIndex;
        if (notLast) {
          acc.push(
            child,
            // eslint-disable-next-line react/no-array-index-key
            <BreadCrumbSeparator key={`BreadCrumbIndex${index}`}>
              /
            </BreadCrumbSeparator>,
          );
        } else {
          acc.push(child);
        }
        return acc;
      }, [])}
    </Box>
  );
};

BreadCrumbSeparator.propTypes = {
  children: PropTypes.node.isRequired,
};

BreadCrumbItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.object.isRequired,
};

BreadCrumb.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BreadCrumbItem, BreadCrumb };
