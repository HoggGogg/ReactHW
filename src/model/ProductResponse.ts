import type {ProductModel} from "./ProductModel.ts";

export interface ProductResponse {products: ProductModel[], skip: number, total: number, limit: number};