import React from 'react';
import { Button, useColorMode } from 'theme-ui';
import Box from './Box';
import Link from './Link';

const modes = ['default', 'dark', 'cyan', 'gray', 'book', 'magenta'];

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Box bg="nav" p={3} position="fixed" width="100%">
      <Box display="flex">
        <Link
          fontSize={4}
          color="white"
          textDecoration="none"
          fontWeight="bold"
          to={{ pathname: '/' }}
        >
          Bible
        </Link>
        <Button
          color="text"
          backgroundColor="lightgray"
          ml="auto"
          sx={{
            fontSize: '10px',
          }}
          onClick={() => {
            const index = modes.indexOf(colorMode);
            const next = modes[(index + 1) % modes.length];
            setColorMode(next);
          }}
        >
          {colorMode === 'default' ? 'LIGHT' : colorMode.toUpperCase()}
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
