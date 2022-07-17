import Product from "./product"
import { App } from "./app/app"
import { store } from "./app/store/store";

const app = new App();
const root = document.getElementById('root')

if (!root) {
    throw new Error("The root element is undefined");
}


root.innerHTML = app.render();


// const form = document.getElementById('form')

// form?.addEventListener('submit', e => {
//     e.preventDefault()
    
//     // const test: HTMLElementTagNameMap 

//     const name: string = (<HTMLInputElement>document.getElementById('name')).value
//     const price: number = +(<HTMLInputElement>document.getElementById('price')).value

//     const product: Product = new Product(name, price)

//     const table = document.getElementById('table')

//     table?.insertAdjacentHTML('beforeend', `
//         <tr>
//             <td>${product.id}</td> 
//             <td>${product.name}</td>
//             <td>${product.price}</td>
//         </tr>
//     `)
// })


store.$state.subscribe(() => {
    root.innerHTML = app.render();
  });
  