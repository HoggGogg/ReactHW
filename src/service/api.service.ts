import type {PostModel} from "../model/PostModel";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts'


const loadPosts = async (): Promise<PostModel[]> => {
    return await fetch(endpointPosts)
        .then(value => value.json());
}

export {loadPosts}