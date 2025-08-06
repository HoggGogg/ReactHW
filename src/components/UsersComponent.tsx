import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../hooks/useFetch.ts";

export const UsersComponent = () => {

    console.log('test');
    const arr = useMemo(() => {
        return [11,11,22,33];
    }, []);

    const users = useFetch();

    const foo = useCallback(() => {
        console.log('test2');
    },[]);

    return (
        <div>
            Users
            {
                users.map(value => <UserComponent item={value} foo={foo} arr={arr}/>)
            }

        </div>
    );
};