import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const HeaderWrap = styled.div`
align-items: flex-end;
justify-content: space-between;
h1 {
    font-size: 26px;
    :hover {
        color: blue;
        cursor: pointer;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }  
`

const Header = () => {
    return (
        <HeaderWrap>
            <h1>Oleksi D</h1>
            <h2>5 записей, из них понравилось 0</h2>
        </HeaderWrap>
    )
};

export default Header;