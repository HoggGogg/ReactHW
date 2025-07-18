import type {CommentModel} from "../model/CommentModel.ts";

const endpointCO = import.meta.env.VITE_API_BASE_URL + '/comments'

const loadCO = async (): Promise<CommentModel[]> => {
    return await fetch(endpointCO)
        .then(value => value.json());
}

export {loadCO}