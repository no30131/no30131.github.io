/*  Complete the function below to calculate 
    the average price of all the products       */

// function avg(data) {
//     // your code here
//     // 遍歷陣列來計算總價格
//     let totalPrice = 0; 
//     for (let i = 0; i < data.products.length; i++ ) {
//         totalPrice += data.products[i].price;
//     }
//     // 返回總價除總數的平均價格
//     return totalPrice / data.products.length; 
// }

function avg(data) {
    // 使用 reduce 讓程式更簡潔
    let totalPrice = data.products
    .reduce((acc, product) => acc + product.price, 0);
    return totalPrice / data.products.length;
}

console.log(
    avg({
        size: 3,
        products: [
            {
                name: 'Product 1',
                price: 100,
            },
            {
                name: 'Product 2',
                price: 700,
            },
            {
                name: 'Product 3',
                price: 250,
            },
        ],
    })
); 
// should print the average price of all products
    