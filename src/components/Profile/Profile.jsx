import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {

//
//   let posts = [
//     {id: 1, message: 'Hi, how are you?', likesCount: 53},
//     {id: 2, message: 'It\'s my first post', likesCount: 3},
//     {id: 3, message: 'How is life?', likesCount: 6},
//     {id: 4, message: 'Nothing', likesCount: 23},
//     {id: 5, message: 'By', likesCount: 0},
//   ]
//
//
//
// let postsElements = posts.map(
// // p => <Post message={p.message} likesCount={p.likesCount}/>
// p => <Post message={p.message} likesCount={p.likesCount}/>
// )
//





  return (
    <div>
      <ProfileInfo/>
      <MyPosts propsProperties="The My desk !!!" postsElements={props.postsElements}/>
      {/*<MyPosts postsArr={postsElements}/>*/}
    </div>
  );
};

export default Profile;
