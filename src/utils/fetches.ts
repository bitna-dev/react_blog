export const getPosts = async () => {
	const res = await (
		await fetch("https://jsonplaceholder.typicode.com/posts")
	).json();
	return res;
};
