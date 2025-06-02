import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@utils/fetches";
import { IPost } from "@utils/typeDef";
import Loader from "./Loader";

const PostList = () => {
	const { data, isLoading, error } = useQuery<IPost[]>({
		queryKey: ["posts"],
		queryFn: getPosts,
	});

	return (
		<div className="posts">
			{isLoading && <Loader />}
			{data?.map(({ id, title, body }) => {
				return (
					<div key={id} className="posts--item">
						<div className="posts--title">{title}</div>
						<img src={`https://picsum.photos/1200/500?random=${id}`} alt="" />
						<div className="posts--content">{body}</div>
					</div>
				);
			})}
		</div>
	);
};

export default PostList;
