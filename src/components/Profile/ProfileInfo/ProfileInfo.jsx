import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>

      <div className={s.heroImage}>
        <img
          src="http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"></img>
      </div>
      <div>
        <div className={s.descriptionBlock}>
          ava + description
        </div>
      </div>

    </div>
  );
};

export default ProfileInfo;
