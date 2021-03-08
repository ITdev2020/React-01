import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer
        /*
      <MyPostsContainer store={props.store}
      */
        propsProperties="The My desk !!!"
        // posts={props.profilePage.posts}
        // newPostText={props.profilePage.newPostText}
        // dispatch={props.dispatch}
      />
    </div>
  );

};

export default Profile;
