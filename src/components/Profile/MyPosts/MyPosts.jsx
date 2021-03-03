import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {

  let postsElements = props.posts.map(
    p => <Post message={p.message} likesCount={p.likesCount}/>
  )

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
    // props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action)
    // props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>{props.propsProperties}</div>
      <div>
        <div>

          {/*<textarea onChange={onPostChange} ref={newPostElement} value='post by Igor' />*/}
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>

        </div>
        <div>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>

        {postsElements}

      </div>
    </div>
  );

};

export default MyPosts;
