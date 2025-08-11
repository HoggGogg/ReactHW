const baseUrl = 'https://jsonplaceholder.typicode.com';

// export const UserService = {
//     getAllUser : async (): Promise<IUser[]> => {
//         const users = await fetch(baseUrl + '/users')
//                 .then((value) => value.json());
//         console.log(users);
//         return users;
//     }
// }
// const PostService = {}
// const CommentService = {}

export const getAll = async <T> (endpoint: string) => {
    const responseResult = await fetch(`${baseUrl}${endpoint}`).then((response: Response)=> response.json());
    return responseResult as T;
}

