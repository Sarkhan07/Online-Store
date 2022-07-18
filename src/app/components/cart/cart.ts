import { Components } from "../../interfaces/component";
import { CartProducts } from "../../store/state";
import { store } from "../../store/store";

export class Cart implements Components {

    private products: CartProducts = {};
    private amount = 0;
    private sum = 0;


    constructor() {
      store.$state.subscribe(({cart}) => {
        this.products = cart.products;
        this.amount = Object.keys(this.products).length;
        this.sum = Object.values(this.products).reduce((sum, item) => sum + item.product.price, 0);
      });
    }

    render() {
        return `

      <div>

      <p style="color: white; background-color: blue; text-shadow: 1px 1px; font-size: 24px;";>Cart</p>
      <ul class="list-group" style="margin-top: 1em;">
          ${Object.values(this.products).map(({amount, product}) => `
          <li class="list-group-item d-flex justify-content-between align-items-center">
          ${product.name} ($${product.price})
          <a href="#" class="btn">➕</a>
          <a href="#" class="btn">➖</a>
          <span class="badge bg-primary rounded-pill">${amount}</span>
          </li>
          
          `).join('')}


       </ul>
      
        <p>
            Summary: ${this.amount} products, $${this.sum}
        </p>

      </div>
        `;
    }
    addEvents () {
      
    }
}





// export class cart {

//     render() {
//         return `
//                 <ul class="list-group" style="margin-top: 1em;">
//                     <li class="list-group-item d-flex justify-content-between align-items-center">
//                         buying
//                     <a href="#" class="btn">➕</a>
//                     <a href="#" class="btn">➖</a>
//                     <span class="badge bg-primary rounded-pill">1</span>
//                     </li>

//                     <li class="list-group-item">hi</li>
//                     <li class="list-group-item">hi</li>
//                     <li class="list-group-item">hi</li>
//                     <li class="list-group-item">hi</li>
//                 </ul>
//         `;
//     }
// }