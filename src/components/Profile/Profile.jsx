import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts propsProperties="The My desk !!!"/>
    </div>
  );
};

export default Profile;
