import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/01/08/avatar-sigourney-weaver.jpg?width=1200&auto=webp&quality=75"/>
         { props.message }
        <div>
         <span>like</span>
         <span>like</span>
        </div>
        </div>
    )
}

export default Post;