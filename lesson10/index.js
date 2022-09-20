// alert - заморозка страницы
// alert('404 ERROR')

// prompt - вопрос с ответом
// let userName=prompt('Are you sure?')

// confirm - true либо false
// let a=confirm('Are you ready?')
// console.log(a)

// let g = {
//    b: {}
// } - ссылочный тип
// b = {} - примитивный тип

// let p = [1, 2, 3, 4, g] - массив
// console.log(typeof p)

// let number = {
//     b: 5,
// }
// let number2 = number
// number2.b = 10
// console.log(number, number2)

// let bd = 2004 - динамическая типизация
// console.log(2022 - bd)

// const myCity = {
//   country: 'Japan',
//   city: 'Tokyo',
//   popular: true
// }
// myCity.popular = true
// myCity['city'] = 'Bishkek'
// let location2 = 'country'
// myCity[location2] = 'Tailand'
// console.log(location2)
// delete myCity.city
// console.table(myCity)
//let name = 'Beba'
//myCity.name = name 

const cartUser = {
    name: 'Umar',
    country: 'Sweden',
    counter: null,
}

const firstProduct = prompt('Введите первый продукт')
const firstPriceProduct = +prompt('Введите количество | кг')

const secondProduct = prompt('Введите первый продукт')
const secondPriceProduct = +prompt('Введите количество | кг')

cartUser.firstProducts = firstProduct
cartUser.secondProducts = secondProduct
cartUser.counter = firstPriceProduct + secondPriceProduct

confirm('Подтвердите заказ')

// console.log(cartUser)

alert(`
    Hi ${cartUser.name}
    Твой заказ: ${cartUser.firstProducts} / ${cartUser.secondProducts}
    Количество: ${cartUser.counter}
    Локация доставки: ${cartUser.country}
`)