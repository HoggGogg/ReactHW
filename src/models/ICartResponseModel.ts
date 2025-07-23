import type {ICarts} from "./ICarts.ts";

export interface ICartResponseModel {
    total: number;
    limit: number;
    skip: number;
    carts: ICarts[];
}