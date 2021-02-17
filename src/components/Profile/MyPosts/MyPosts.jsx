import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>{props.propsProperties}</div>
      <div>
        <div>
          <textarea>New post</textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likeCount="15"/>
        <Post message="It's my first post" likeCount="3"/>
        <Post message="kak life" likeCount="6"/>
        <Post message="nikak" likeCount="23"/>
        <Post message="aga" likeCount="55"/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
};

export default MyPosts;
