import type {IUserResponseModel} from "../models/IUserResponseModel.ts";
import type {ICartResponseModel} from "../models/ICartResponseModel.ts";

const baseUrl = 'https://dummyjson.com'

export const userService = {
    getAllUsers: async (): Promise<IUserResponseModel> => {
       return await fetch(baseUrl + '/users')
            .then((value) => value.json())
    }

};
export const cartService = {
    getCartsOfUser: async (userId: string): Promise<ICartResponseModel> => {
        return await fetch('https://dummyjson.com/carts/user/' + userId)
            .then(res => res.json())
    }
};