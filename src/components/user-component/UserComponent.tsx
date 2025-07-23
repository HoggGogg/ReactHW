import type {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";
import type {FC} from "react";

type Props = {
    user: IUser;
}
export const UserComponent: FC<Props> = ({user}) => {

    const navigation = useNavigate();
    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')
    }

    return <div className="my-10">
        {user.username}: {user.email}

        <button className="border-2 solid, bg-red-500"
                onClick={onButtonClickNavigate}>Click Me
        </button>
    </div>;
}