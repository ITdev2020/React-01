import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	return (
		<div>
			My posts
			<div>{props.propsProperties}</div>
			<div>
				<textarea>New post</textarea>
				<button>Add post</button>
				<button>Remove</button>
			</div>
			<div className={s.posts}>
				<Post message="Hi, how are you?" likeCount="15" />
				<Post message="It's my first post" likeCount="3" />
				<Post message="kak life" likeCount="6" />
				<Post message="nikak" likeCount="23" />
				<Post message="aga" likeCount="55" />
				<Post />
				<Post />
			</div>
		</div>
	);
};

export default MyPosts;
