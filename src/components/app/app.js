import React from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
    background-color: grey;
`

const App = () => {

    const datas = [
        {label: "Going to learn React",
        important: true },
        {label: "That is good",
        important: false },
        {label: "I need a break...",
        important: false }
    ];

    return (
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/> 
            </div> 
            <PostList posts={datas}/> 
            <PostAddForm/>
        </AppBlock>
    )
}

export default App; 