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
  background-color: #555;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    background-color: #555;
    text-decoration: none;
    color: #000;
    font-size: 14px;
  }
`;

const Books = ({ books, version }) => (
  <Wrap>
    <List>
      {books.map(item => (
        <Item key={item.id}><NavLink to={`/${version}/books/${item.id}`}>{item.abbreviation}</NavLink></Item>
      ))}
    </List>
  </Wrap>
);

export default Books;
