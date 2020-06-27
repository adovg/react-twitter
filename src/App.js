import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Header from './header/header';
import SearchPannel from './search-pannel/SearchPannel';
import PostStatusFilter from './post-status-filter/post-status-filter';
import PostList from './post-list/post-list';
import PostAddForm from './post-add-form/post-add-form';
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

function App() {

  const myLabels = [
    {label: 'Going to learn React', important: true, id: 'asdqw'},
    {label: 'Its Cool', important: false, id: 'asdqwf'},
    {label: 'And Im not going to stoop', important: false, id: 'osdjkqw'}
  ];

  return (
    <AppBlock>
     <Header/>   
     <div className='search-pannel d-flex'>
     <SearchPannel/>
     <PostStatusFilter/>
     </div>
     <PostList posts={myLabels}/>
     <PostAddForm/>
    </AppBlock>
  );
}

export default App;
