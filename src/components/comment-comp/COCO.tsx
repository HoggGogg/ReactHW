import type {FC} from "react";
import type {CommentModel} from "../../model/CommentModel.ts";

type Props = {comment: CommentModel};
export const COCO: FC<Props> = ({comment: {name, body}}) => {
    return (
        <div>
            <h4>{name}</h4>
            <p>{body}</p>
        </div>
    );
};