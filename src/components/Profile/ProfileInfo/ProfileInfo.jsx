import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>

      {/*<div className={s.heroImage}>*/}
      {/*  <img src="http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"></img>*/}
      {/*</div>*/}
      <div>
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large}/>
          ava + description
          {/*<ProfileStatus status={'This is status'}/>*/}
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
      </div>

    </div>
  );
};

export default ProfileInfo;
