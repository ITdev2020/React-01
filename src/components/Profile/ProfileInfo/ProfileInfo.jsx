import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>

      <div className={s.heroImage}>
        <img
          src="http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"></img>
      </div>
      <div>
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large} />
          ava + description
        </div>
      </div>

    </div>
  );
};

export default ProfileInfo;
