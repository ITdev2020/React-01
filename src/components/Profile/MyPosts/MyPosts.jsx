import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 53},
    {id: 2, message: 'It\'s my first post', likesCount: 3},
    {id: 3, message: 'How is life?', likesCount: 6},
    {id: 4, message: 'Nothing', likesCount: 23},
    {id: 5, message: 'By', likesCount: 0},
  ]



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
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
        <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
        <Post message={postsData[3].message} likesCount={postsData[3].likesCount}/>
        <Post message={postsData[4].message} likesCount={postsData[4].likesCount}/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
};

export default MyPosts;
