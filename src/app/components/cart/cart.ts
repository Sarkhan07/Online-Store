export class Cart {
    render() {
        return `

      <div>
      <ul class="list-group" style="margin-top: 1em;">
            <li class="list-group-item d-flex justify-content-between align-items-center">
            An item 
            <a href="#" class="btn">➕</a>
            <a href="#" class="btn">➖</a>
            <span class="badge bg-primary rounded-pill">14</span>
            </li>
       </ul>
      
        <p>
            Summary: 12 products, $1289
        </p>

      </div>
        `;
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