import "./Menu.css"
import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li>
                <Link to={'/users/jsonplaceholder/'}>UsersJson</Link>
            </li>

            <li>
                <Link to={'/users/dummyjson/'}>UsersDummy</Link>
            </li>

            <li>
                <Link to={'/posts/jsonplaceholder/'}>PostsJson</Link>
            </li>

            <li>
                <Link to={'/posts/dummyjson/'}>PostsDummy</Link>
            </li>

            <li>
                <Link to={'/comments/jsonplaceholder/'}>CommentsJson</Link>
            </li>

        </ul>
    );
};