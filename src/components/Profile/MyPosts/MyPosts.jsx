import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea}
        placeholder="Post message"
        validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add posts</button>
      </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostForm)


const MyPosts = (props) => {

  let postsElements = props.posts.map(post =>
    <Post message={post.message} likesCount={post.likesCout} />)

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }


  return (
    <div>
      <div className={s.postsBlock}>
        <h3>new posts</h3>
      </div>
       <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>)
}

export default MyPosts;