"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
const form = document.getElementById('form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', e => {
    e.preventDefault();
    // const test: HTMLElementTagNameMap 
    const name = document.getElementById('name').value;
    const price = +document.getElementById('price').value;
    const product = new product_1.default(name, price);
    const table = document.getElementById('table');
    table === null || table === void 0 ? void 0 : table.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${product.id}</td> 
            <td>${product.name}</td>
            <td>${product.price}</td>
        </tr>
    `);
});
//# sourceMappingURL=index.js.map