import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Sider = styled.ul`
  grid-area: l;
  background-color: #c0c0c0;
  height: 100vh;
  overflow: scroll;
`;

const Item = styled.li`
  color: black;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-right: 1rem;
  a {
    text-decoration: none;
    color: #000;
    font-size: 14px;
    display: block;
  }
`;

const Sidebar = ({ list }) => (
  <Sider>
    {list.map(item => (
      <Item key={item.id}>
        <NavLink to={`/${item.id}`}>{item.name}</NavLink>
      </Item>
    ))}
  </Sider>
);

export default Sidebar;
