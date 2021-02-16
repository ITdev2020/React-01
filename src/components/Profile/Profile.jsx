import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<div>
			<div>
				<img src="http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"></img>
			</div>
			<div>
				<div>ava + description</div>
				<MyPosts propsProperties="The My desk !!!" />
			</div>
		</div>
	);
};

export default Profile;
