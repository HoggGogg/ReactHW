import type {FC} from "react";
import type {TodoModel} from "../../model/TodoModel.ts";

type ProType = { todo: TodoModel };
export const Todo: FC<ProType> = ({todo: {title, id, completed}}) => {
    return (
        <div>{id}{title}{completed.toString()}</div>
    );
};