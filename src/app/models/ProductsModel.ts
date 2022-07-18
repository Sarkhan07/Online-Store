import { Product } from "../interfaces/products";
import { getProducts } from "../DB/products.DB";
import { store } from "../store/store";

export class ProductsModel {
    static isExist = false;
    static instance: ProductsModel;

    constructor() {
        if (ProductsModel.isExist) {
            return ProductsModel.instance;
        }

        ProductsModel.isExist = true;
        ProductsModel.instance = this;
    }

    getProducts(): Promise<Product[]> {
        return getProducts().then((products) => {
            store.update({
                products,
            });
            return products
        });
    }
}

export const productsModel = new ProductsModel();