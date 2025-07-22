import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {CommentsJSON} from "../components/CommentsJSON.tsx";
import {PostsDummy} from "../components/PostsDummy.tsx";
import {PostsJSON} from "../components/PostsJSON.tsx";
import {UsersDummy} from "../components/UsersDummy.tsx";
import {UsersJSON} from "../components/UsersJSON.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <App/>, children: [
            {path: 'usersJson', element: <UsersJSON/>},
            {path: 'usersDummy', element: <UsersDummy/>},
            {path: 'postsJson', element: <PostsJSON/>},
            {path: 'postsDummy', element: <PostsDummy/>},
            {path: 'commentsJson', element: <CommentsJSON/>}
        ]
    }
]);