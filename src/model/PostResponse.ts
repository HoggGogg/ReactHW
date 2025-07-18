import type {PostModel} from "./PostModel.ts";

export interface PostResponse {posts: PostModel[], skip: number, total: number, limit: number};