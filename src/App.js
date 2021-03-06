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

export default class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    myLabels: [
    {label: 'Going to learn React', important: true, id: 1},
    {label: 'Its Cool', important: false, id: 2},
    {label: 'And Im not going to stoop', important: false, id: 3}
    ]
  };
  this.deleteItem = this.deleteItem.bind(this);
  this.addItem = this.addItem.bind(this);

  this.maxId = 4;
}
  // const myLabels = [
  //   {label: 'Going to learn React', important: true, id: 'asdqw'},
  //   {label: 'Its Cool', important: false, id: 'asdqwf'},
  //   {label: 'And Im not going to stoop', important: false, id: 'osdjkqw'}
  // ];

  deleteItem(id) {
    this.setState( ({myLabels}) => {
      const index = myLabels.findIndex( (elem) => elem.id === id );
      const before = myLabels.slice(0, index);
      const after = myLabels.slice(index + 1);

      const newArr = [...before, ...after];
      return {
        myLabels: newArr
      }
    });
  };

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({myLabels}) => {
      const newArrs = [...myLabels, newItem];
      return {
        myLabels: newArrs
      }
    })
  }

render () {
  return (
    <AppBlock>
     <Header/>   
     <div className='search-pannel d-flex'>
     <SearchPannel/>
     <PostStatusFilter/>
     </div>
     <PostList posts={this.state.myLabels} onDelete={this.deleteItem}/>
     <PostAddForm onAdd={this.addItem}/>
    </AppBlock>
  );
}
}

// export default App;
