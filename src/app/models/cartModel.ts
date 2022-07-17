import { Product } from "../interfaces/products";
import { getProducts } from "../DB/products.DB";
import { store } from "../store/store";

export class CartModel {
    static isExist = false;
    static instance: CartModel;

    constructor() {
        if (CartModel.isExist) {
            return CartModel.instance;
        }

        CartModel.isExist = true;
        CartModel.instance = this;
    }

    addProducts(product: Product): void {
        store.update({
            cart: {
                products: {
                    [product.id]: {
                        amount: 1,
                        product,
                    },
                },
               
            },

        })
    }
}

export const cartModel = new CartModel();