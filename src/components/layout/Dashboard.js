import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  grid-area: m;
  padding: 1rem;
`;

const Dashboard = ({ books }) => (
  <Wrap>
    {books.map(item => (
      <h1>{item.abbreviation}</h1>
    ))}
  </Wrap>
);

export default Dashboard;
