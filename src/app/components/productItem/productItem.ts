import { Components } from "../../interfaces/component";
import {Product} from "../../interfaces/products";
import { cartModel } from "../../models/cartModel";

export class ProductItem implements Components {
    constructor (private product: Product) {}

    private getHTMLId = () => `product_${this.product.id}`;

    render() {
        return `
            <div class="card" style="width: 18rem; margin: 1em;">
            <img src="${this.product.image}" class="card-img-top" style="height: 15rem;" alt="${this.product.name}">
                <div class="card-body">
                    <h5 class="card-title">${this.product.name}</h5>
                     <p class="card-text">$${this.product.price}</p>
                     <a href="#" class="btn btn-primary"id="${this.getHTMLId()}">Buy</a>
                </div>
            </div>
       `;
    }

    addEvents () {
        const button = document.getElementById(this.getHTMLId());
        if(!button) {
            throw new Error('Button is undefined')
        }
        button.addEventListener('click', (event) => {
            event.preventDefault();
            cartModel.addProducts(this.product);
        })
      
    }
}