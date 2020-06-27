import React from 'react';
import './post-list-item.css';

class PostListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false 
        }
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    onImportant() {
        this.setState( ({important}) => ({
            important: !important
        } ))
    };

    onLike() {
        this.setState( ({like}) => ({
            like: !like
        } ))
    };

    render () {
        const {label} = this.props;
        const {important, like} = this.state;
        let liClassNames = 'app-list-item d-flex justify-content-between';
        
            if (important) {
                liClassNames += ' important';
            };

            if (like) {
                liClassNames += ' like';
            };

        return (
        <div className={liClassNames}>
            <span className='app-list-item-label'  onClick={this.onLike}>
                {label}
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button className='btn-star btn-sm' 
                onClick={this.onImportant}>
                    <i className='fa fa-star'></i>
                </button>

                <button className='btn-trash btn-sm'>
                    <i className='fa fa-trash-o'></i>
                </button>
                <i className='fa fa-heart'></i>
            </div>
        </div>
        )
    }
}

// const PostListItem = ({label, important = false}) => {
//     let liClassNames = 'app-list-item d-flex justify-content-between';
//     if (important) {
//         liClassNames += ' important';
//     }
//     // return (
//     //     <div className={liClassNames}>
//     //         <span className='app-list-item-label'>
//     //             {label}
//     //         </span>
//     //         <div className='d-flex justify-content-center align-items-center'>
//     //             <button className='btn-star btn-sm'>
//     //                 <i className='fa fa-star'></i>
//     //             </button>

//     //             <button className='btn-trash btn-sm'>
//     //                 <i className='fa fa-trash-o'></i>
//     //             </button>
//     //             <i className='fa fa-heart'></i>
//     //         </div>
//     //     </div>
//     // )
// }

export default PostListItem;