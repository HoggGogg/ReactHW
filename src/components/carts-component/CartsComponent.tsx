import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICarts} from "../../models/ICarts.ts";
import type {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import {cartService} from "../../services/api.service.ts";

export const CartsComponent = () => {

    const {id} = useParams();

    const [carts, setCarts] = useState<ICarts[]>([])

    useEffect(() => {
        if (id) {
            cartService.getCartsOfUser(id)
                .then(({carts}: ICartResponseModel) => {
                    setCarts(carts);
                });
        }
    }, [id]);


    return (
        <div>

            {
                carts.map((cart: ICarts) => (<div key={id}>
                    {cart.total}
                </div>))
            }

        </div>
    );
};