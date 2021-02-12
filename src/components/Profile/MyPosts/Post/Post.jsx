import s from './Post.module.css';

const Post = () => {
	return (
		<div className={s.item}>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU"></img>
			post 1
			<div>
				<span>Like</span>
			</div>
		</div>
	);
};

export default Post;
