import { ProductItem } from "../productItem"

export class productsList {
    private loading = false;
    private error: Error | null = null;
    private products: Product[] = [];
    private products: ProductItem[] = []

    constructor() {
        this.fetchProducts
    }

    fetchProducts() {

    }

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

