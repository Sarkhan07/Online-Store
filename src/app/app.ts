import { productsList } from "./components/productsList"


export class App {
    private productsList = new productsList()

    render() {
        return `
        <div class="container">
          <div class="row">
                <div class="col-12">
                   ${this.productsList.render()}
                </div>

          </div>
        </div>
           
        
        `
    }
}