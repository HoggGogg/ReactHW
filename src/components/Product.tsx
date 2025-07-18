import type {ProductModel} from "../model/ProductModel.ts";
import type {FC} from "react";

type ProductProps = {
    product: ProductModel;
}
export const Product: FC<ProductProps> = ({product: {title, category, brand, tags}}) => {
    return (
        <div>
            <section>
                <h1>{title}</h1>
                <p>{category}</p>
                <h2>{brand}</h2>
            </section>
            <ul>
                <li>{tags}</li>
            </ul>
        </div>
    );
};