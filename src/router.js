import {lazy} from "react";

import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {NotFound404} from "./pages/NotFound_404/NotFound_404";

const AlbumsPage = lazy(() => import("./pages/AlbumsPageContainer/AlbumsPage"));
const CommentsPage = lazy(() => import("./pages/CommentsPageContainer/CommentsPage"));
const PostsPage = lazy(() => import("./pages/PostsPageContainer/PostsPage"));
const TodoPage = lazy(() => import("./pages/TodoPageContainer/TodoPage"));


const router = createBrowserRouter([{
    path: "", element: <MainLayout/>, errorElement: <NotFound404/>,
    children: [
        {index: true, element: <TodoPage/>},
        {path: "/", element: <Navigate to={""}/>},
        {path: "/todos", element: <Navigate to={""}/>},
        {path: "/albums", element: <AlbumsPage/>},
        {path: "/comments", element: <CommentsPage/>},
        {path: "/posts", element: <PostsPage/>},
        // {path: "*", element: <Navigate to={"/"}/>},
    ],
}]);

export {router};