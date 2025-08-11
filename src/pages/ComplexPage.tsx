import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {commentAction} from "../redux/slices/CommentSlice.ts";
import {postAction} from "../redux/slices/PostSlice.ts";
import {userAction} from "../redux/slices/UserSlice.ts";
import type {IUser} from "../models/IUser.ts";
import type {IPost} from "../models/IPost.ts";
import type {IComment} from "../models/IComment.ts";

export const ComplexPage = () => {

    const dispatch = useAppDispatch();
    const {commentStoreSlice: {comments}, postStoreSlice: {posts}, userStoreSlice: {users}} = useAppSelector(state => state);
    useEffect(() => {
        if (!comments.length) {
            dispatch(commentAction.loadComment());
        }
        if (!users.length) {
            dispatch(userAction.loadUsers());
        }
        if (!posts.length) {
            dispatch(postAction.loadPosts());
        }
    }, []);
    return (
        <div>
            {users.map((user: IUser) => (<div key={user.id}> {user.name}</div>))}
            {posts.map((post: IPost) => (<div key={post.id}> {post.title}</div>))}
            {comments.map((comment: IComment) => (<div key={comment.id}> {comment.name}</div>))}
        </div>
    );
};