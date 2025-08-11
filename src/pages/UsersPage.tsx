import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import type {IUser} from "../models/IUser.ts";
import {userAction} from "../redux/slices/UserSlice.ts";

export const UsersPage = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.userStoreSlice.users);
    useEffect(() => {

        dispatch(userAction.loadUsers())
    }, []);
    return (
        <>
            {
                users.map((user: IUser) => (<div key={user.id}> {user.name}</div>))
            }
        </>
    );
};