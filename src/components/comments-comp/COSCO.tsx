import {useEffect, useState} from "react";
import type {CommentModel} from "../../model/CommentModel.ts";
import {loadCO} from "../../service/api.service.ts";
import {COCO} from "../comment-comp/COCO.tsx";

export const COSCO = () => {

    const [comments, setComments] = useState<CommentModel[]>([]);
    useEffect(() => {
        loadCO().then(value => setComments(value));
    }, []);

    return (
        <div>
            {
                comments.map((comment) => (<COCO key={comment.id} comment={comment}/>))
            }
        </div>
    );
};