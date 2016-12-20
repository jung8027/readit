const Post = (props) =>(
	<div>
	{console.log(props)}
	<p>{props.postData.title}</p>
	</div>
)

export default Post