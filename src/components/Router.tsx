import { Navigate, Route, Routes } from "react-router-dom";
import Home from "@pages/home";
import PostListPage from "@pages/posts";
import PostDetailPage from "@pages/posts/detail";
import CreatePostPage from "@pages/posts/create";
import PostEditPage from "@pages/posts/edit";
import ProfilePage from "@pages/profile";
import LoginPage from "@pages/auth/login";
import SignupPage from "@pages/auth/signup";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/posts" element={<PostListPage />} />
			<Route path="/posts/:id" element={<PostDetailPage />} />
			<Route path="/posts/new" element={<CreatePostPage />} />
			<Route path="/posts/edit/:id" element={<PostEditPage />} />
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default Router;
