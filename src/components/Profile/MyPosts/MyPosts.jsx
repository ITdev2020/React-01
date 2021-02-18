import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 53},
    {id: 2, message: 'It\'s my first post', likesCount: 3},
    {id: 3, message: 'How is life?', likesCount: 6},
    {id: 4, message: 'Nothing', likesCount: 23},
    {id: 5, message: 'By', likesCount: 0},
  ]

let postsElements = posts.map(
  p => <Post message={p.message} likesCount={p.likesCount}/>
)

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

        {postsElements}


        {/*<Post message={posts[0].message} likesCount={posts[0].likesCount}/>*/}
        {/*<Post message={posts[1].message} likesCount={posts[1].likesCount}/>*/}
        {/*<Post message={posts[2].message} likesCount={posts[2].likesCount}/>*/}
        {/*<Post message={posts[3].message} likesCount={posts[3].likesCount}/>*/}
        {/*<Post message={posts[4].message} likesCount={posts[4].likesCount}/>*/}



      </div>
    </div>
  );
};

export default MyPosts;
