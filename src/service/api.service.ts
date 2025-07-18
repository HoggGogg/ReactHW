import type { ProductModel } from "../model/ProductModel";
import type { ProductResponse } from "../model/ProductResponse";

const endpointProd = import.meta.env.VITE_API_BASE_URL + '/products'

const loadProd = async (): Promise<ProductModel[]> => {
    const response: ProductResponse = await fetch(endpointProd)
        .then(value => value.json());
    return response.products;
}

export {loadProd}