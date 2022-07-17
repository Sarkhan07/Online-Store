import { Cart } from "./components/cart"
import { ProductsList } from "./components/productsList/productsList"


export class App {
    private productsList = new ProductsList()
    private cart = new Cart();

    render() {
        return `
        <div class="container">
          <div class="row">
            <div class="col-3">
             ${this.cart.render()}
            </div>

                <div class="col-9">
                   ${this.productsList.render()}
                </div>

          </div>
        </div>
           
        
        `
    }
}