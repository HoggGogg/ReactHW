import type {IProducts} from "./IProducts.ts";

export interface ICarts {
    id: number;
    products: IProducts[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}