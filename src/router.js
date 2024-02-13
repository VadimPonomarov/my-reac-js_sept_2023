import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import AlbumsPage from "./pages/AlbumsPageContainer/AlbumsPage";
import CommentsPage from "./pages/CommentsPageContainer/CommentsPage";
import {NotFound404} from "./pages/NotFound_404/NotFound_404";
import PostsPage from "./pages/PostsPageContainer/PostsPage";
import TodoPage from "./pages/TodoPageContainer/TodoPage";


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