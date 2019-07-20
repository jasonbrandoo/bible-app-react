import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.div`
  grid-area: m;
  padding: 1rem;
  height: 100vh;
  overflow: scroll;
`;

const List = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

const Item = styled.p`
  height: 25px;
`;

const Books = ({ chapters, version }) => (
  <Wrap>
    <List>
      {chapters.map(item => (
        <Item key={item.id}><NavLink to={`/${version}/passages/${item.id}`}>{item.reference}</NavLink></Item>
      ))}
    </List>
  </Wrap>
);

export default Books;
