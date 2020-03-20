import React from 'react';
import Box from './Box';
import Link from './Link';

const Navbar = () => (
  <Box bg="primary" p={3} position="fixed" width="100%">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Link
        fontSize={4}
        color="four"
        textDecoration="none"
        fontWeight="bold"
        to={{ pathname: '/' }}
      >
        Bible App
      </Link>
      <a
        style={{ color: 'white', textDecoration: 'none', fontSize: 20 }}
        href="https://github.com/jasonbrandoo/bible-app-react"
      >
        github
      </a>
    </Box>
  </Box>
);

export default Navbar;
