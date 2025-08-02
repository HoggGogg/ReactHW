import type {IProducts} from "./IProducts.ts";

export type IProductsResponseModel = {
    total: number;
    skip: number;
    limit: number;
    products: IProducts[];
}