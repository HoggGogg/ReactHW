import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponents from "../UserComponents/UserComponents.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((value) => value.json())
            .then((responce) => {
                setUsers(responce);
            });

        return () => {
            console.log('done');
        }
    }, []);


    return (
        <div>
            {
                users.map(user => <UserComponents key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;