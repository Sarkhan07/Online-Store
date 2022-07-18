"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const productsList_1 = require("./components/productsList");
class App {
    constructor() {
        this.productsList = new productsList_1.productsList();
    }
    render() {
        return `<h1>Online store</h1>
        <div>
        ${this.productsList.render()}
        
        </div>
        
        `;
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map