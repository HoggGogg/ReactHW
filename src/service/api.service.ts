import type {PostModel} from "../model/PostModel.ts";
import type {PostResponse} from "../model/PostResponse.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts'

const loadPosts = async (): Promise<PostModel[]> => {
    const response: PostResponse = await fetch(endpointPosts)
        .then(value => value.json());
    return response.posts;
}

export {loadPosts}