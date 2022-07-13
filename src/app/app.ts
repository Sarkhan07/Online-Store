import { productsList } from "./components/productsList"


export class App {
    private productsList = new productsList()

    render() {
        return `<h1>Online store</h1>
        <div>
        ${this.productsList.render()}
        
        </div>
        
        `
    }
}