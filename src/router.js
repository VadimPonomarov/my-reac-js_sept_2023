import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {NotFound404} from "./pages/NotFound_404/NotFound_404";
import {ItemCard as PostCard} from "./pages/PostsPageContainer";
import PostsPage from "./pages/PostsPageContainer/PostsPage";
import {Details as UserDetails} from "./pages/UsersPageContainer";
import UsersPage from "./pages/UsersPageContainer/UsersPage";

const router = createBrowserRouter([{
    path: "", element: <MainLayout/>, errorElement: <NotFound404/>,
    children: [
        {index: true, element: <Navigate to={"/users"}/>},
        {path: "/", element: <Navigate to={""}/>},
        {path: "/users", element: <UsersPage/>},
        {path: "/users/:id", element: <UserDetails/>},
        {path: "/users/:id/posts", element: <PostsPage/>},
        {path: "/posts/:id", element: <PostCard/>},
        // {path: "*", element: <Navigate to={"/"}/>},
    ],
}]);

export {router};