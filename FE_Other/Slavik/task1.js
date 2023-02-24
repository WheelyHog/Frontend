
let products = [

    {
        "id": 59,
        "title": "Spring and summershoes",
        "price": 20,
        "quantity": 3,
        "total": 60,
        "discountPercentage": 8.71,
        "discountedPrice": 55
    },
    {
        "id": 88,
        "title": "TC Reusable Silicone Magic Washing Gloves",
        "price": 29,
        "quantity": 2,
        "total": 58,
        "discountPercentage": 3.19,
        "discountedPrice": 56
    },
    {
        "id": 18,
        "title": "Oil Free Moisturizer 100ml",
        "price": 40,
        "quantity": 2,
        "total": 80,
        "discountPercentage": 13.1,
        "discountedPrice": 70
    },
    {
        "id": 95,
        "title": "Wholesale cargo lashing Belt",
        "price": 930,
        "quantity": 1,
        "total": 930,
        "discountPercentage": 17.67,
        "discountedPrice": 766
    },
    {
        "id": 39,
        "title": "Women Sweaters Wool",
        "price": 600,
        "quantity": 2,
        "total": 1200,
        "discountPercentage": 17.2,
        "discountedPrice": 994
    },
    {
        "id": 96,
        "title": "lighting ceiling kitchen",
        "price": 30,
        "quantity": 2,
        "total": 60,
        "discountPercentage": 14.89,
        "discountedPrice": 51
    },
    {
        "id": 91,
        "title": "Black Motorbike",
        "price": 569,
        "quantity": 3,
        "total": 1707,
        "discountPercentage": 13.63,
        "discountedPrice": 1474
    },
    {
        "id": 9,
        "title": "Infinix INBOOK",
        "price": 1099,
        "quantity": 1,
        "total": 1099,
        "discountPercentage": 11.83,
        "discountedPrice": 969
    },
    {
        "id": 16,
        "title": "Hyaluronic Acid Serum",
        "price": 19,
        "quantity": 1,
        "total": 19,
        "discountPercentage": 13.31,
        "discountedPrice": 16
    },
    {
        "id": 54,
        "title": "Pubg Printed Graphic T-Shirt",
        "price": 46,
        "quantity": 3,
        "total": 138,
        "discountPercentage": 16.44,
        "discountedPrice": 115
    }
]


// есть корзина покупок в интернет-магазине. В ней перечислены товары, их количество, стоимость и т.д.
// задание 1: вывести в консоль товары, где стоимость больше 40.
// задание 2: вывести в консоль товары, где количество больше 2.
//  задание 3: выести суммарную стоимость покупок (с учетом количества продуктов)
// задание 4: отсортировать массив по id и вывести в консоль
// задание 5: вывести все товары и их стоимость для тех, назавание кторых начинается на "W" и цена больше 600


// 1, 2 и 3 решить с помощью циклов, 4, 5 - с помощью методов массивов

// задание 3: выести суммарную стоимость покупок (с учетом количества продуктов)
let result1 = 0;
let result2 = 0
for(let i = 0; i < products.length; i++){
  result1 += products[i].price * products[i].quantity;
  result2 += products[i].total;
}
// console.log('суммарную стоимость покупок (с учетом количества продуктов) '+result1);
// console.log(result2);

products.sort((a,b)=>(a.id) - (b.id));
// console.log(products);

let result = products.filter(elem => {
    return  elem.price > 600 && elem.title.startsWith('W')
})

console.log(result)