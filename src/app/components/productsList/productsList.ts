import { ProductItem } from "../productItem"

export class productsList {
    private products: ProductItem[] = [
        new ProductItem(),
        new ProductItem(),
        new ProductItem(),
        new ProductItem(),
    ]


    render() {
        return `<h2>Products list</h2>
        ${this.products.map((product) => product.render()).join('') }
        <p>----</p>
        <div>
        <button>prev</button>
        <button>next</button>
        </div>
        `
    }
}

