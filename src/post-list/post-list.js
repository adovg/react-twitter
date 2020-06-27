import React from 'react';
import PostListItem from './../post-list-item/post-list-item';
import './post-list.css';
import { ListGroup } from 'reactstrap';

const PostList = ({posts}) => {
    const elements = posts.map( (item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                 <PostListItem 
                //  {...item}
                  label = {itemProps.label}
                  important={itemProps.important} 
                  />
            </li>
        )
    })
    return (
        <ListGroup>
            {elements}
        </ListGroup>
    )
}

export default PostList;