import {useEffect, useState} from "react";
import type {ProductModel} from "../model/ProductModel.ts";
import {loadProd} from "../service/api.service.ts";
import {Product} from "./Product.tsx";

export const Products = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        async function fetchProducts(){
            const allProducts: ProductModel[] = await loadProd();
            setProducts(allProducts);
        }

        fetchProducts();

    }, []);


    return (
        <div>
            {
                products.map((product, index) => (<Product product={product} key={index}/>))
            }
        </div>
    );
};