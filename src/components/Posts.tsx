import {useEffect, useState} from "react";
import type {PostModel} from "../model/PostModel.ts";
import {loadPosts} from "../service/api.service.ts";
import {Post} from "./Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        async function fetchPosts(){
            const allPosts = await loadPosts();
            setPosts(allPosts);
        }

        fetchPosts();

    }, []);

    return (
        <div>
            {
                posts.map((post) => (<Post post={post} key={post.id}/>))
            }
        </div>
    );
};