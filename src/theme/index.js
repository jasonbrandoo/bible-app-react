const colors = {
  nav: '#393e46',
  text: '#000',
  background: '#fff',
  primary: '#00f',
  secondary: '#00a',
  highlight: '#ededff',
  accent: '#c0f',
  gray: '#eee',
  lightgray: '#fafafa',
  midgray: '#777',
  modes: {
    dark: {
      text: '#fff',
      background: '#000',
      primary: '#0cf',
      secondary: '#f0e',
      gray: '#222',
      lightgray: '#111',
      highlight: '#001119',
    },
    cyan: {
      text: '#023',
      background: '#0ff',
      primary: '#03c',
      secondary: '#01a',
      gray: '#0cc',
      lightgray: '#0ee',
      highlight: '#0de',
    },
    gray: {
      text: '#eef',
      background: '#333336',
      primary: '#09f',
      secondary: '#0bf',
      gray: '#55555a',
      lightgray: '#444448',
      highlight: '#33444c',
    },
    book: {
      text: '#322',
      background: '#fff9f9',
      primary: '#c30',
      secondary: '#400',
      gray: '#e9e6e6',
      lightgray: '#f9f6f6',
    },
    magenta: {
      text: '#203',
      background: '#f3f',
      primary: '#208',
      secondary: '#106',
      gray: '#c0c',
      lightgray: '#e0e',
    },
  },
};

const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
};

const base = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors,
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
};

export default base;
