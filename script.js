// переменная коробка в которой храняться даннние
// var c = 15;
// let a = 'seven';
// a = 7;
// const b = 8;
// строка

// const str1 = 'Greeting \Привітання'
// const str2 = "Text"
// const str3 = `Reverse \Зворотний`
// const str4 = 'I\'m Ok'
// const str5 = "Саша \nсказал: \"Привет\"" // \-слеш \n- синтаксис розрив строки ентер
// const str6 = `I'm say ${str1}` // шаблонная строка

// // typeof узнайом тип переменной
// console.log(str1,)
// console.log(str2)
// console.log(str3)
// console.log(str4)
// console.log(str5)
// console.log(str6)

//пример 2  NUMBER + - * / ** - степень

// const num1 = 75
// const num2 = 79 ** 3
// console.log(typeof "5")
// const rem = 7 + 8 + "5" // cтрочки склеиваються  155
// const rem1 = 8 * "a" // NAN не число
// const inf = 17 / 0  // Infinity  БЕСКОНЕЧНОСТЬ
// console.log(rem)
// console.log(rem1)
// console.log(inf)
// // alert(num1)
// // alert(num2)
// oт -(2**53 -1) до (2**53 -1)
//console.log(999999999999999999999999) // округления происходить

// пример 3 BIGINT

//const bigint = 103123123n  // какое число написали такое и покажет вконце буква n

//  пример 4 BOOLEAN
//true  правда  / false не правда
// > больше < меньше >= <=  >== <==  == равно === строгое равно

//const bool = "a" > "AAA"
//const bool = "a" > "8"
//console.log(bool)

// пример 5 NULL  typeof null повертає object, це офіційно визнана помилка.
//let empty = null
//console.log(empty,typeof empty)

// пример 6 UNDEFINED

//let box = undefined
//console.log(box, typeof box)

// пример 7 SYMBOL  УНИКАЛЬНАЯ СИМВОЛ
//const uniq1 = Symbol('id')
//const uniq2 = Symbol('id')
//console.log(uniq1 == uniq2)

// пример 8 OBJECT  набор пар ключ значения
// const obj = {
//     name: "Sasha",
//     age: 19,
//     isHappy: true,
// }
//console.log(obj.name)
//console.log(obj['name']) // 2

// obj.job = "Google"
// const array = ["Аня", 18, false]
// array.job = "Facebook"
// console.log(array[0]) // масив[]
// //console.log(obj)

//const variant = "option1"
///урок 3 
//console.log(5 == "5")
//console.log(5 == ="5")

//console.log("a" > 15)

//console.log(null = 0)

// typeof +"abc"
// typeof (15)  число 15
// число и сторочка + привращает в строку  15 + " " будет 15 folse
// boolean(0) folse
// ! буквальное отрицание логического типа  !"" tru !"dfdf" folse !!"tyt" tru

// confirm  да или нет  false    prompt возвращает страку
// пример 1
// const userName = prompt(" whto you are", "anonim ")
// if (userName === "admin") {
//     alert("Hello boss")
// } else if (userName === "anonim" || !userName) {
//     alert("I don't khow you..")
// }
// // else if (!userNamel) {
// //     alert("You does not exist")
// // }
// else {
//     alert(`Hi ${userName}`)
// }

// 2222222222222222222222
//пока условия верни счетчик while

//const counts = prompt("До скольких ви хотите достичь", 10)
// let i = 0
// while (i <= counst) {
//     console.log(i++)
// }



// do {
//     console.log(i++)
// } while (i <= counst)
// console.log(i)

// пример масив чисел от 1-50

// let arr = [4, 5, 6]
// arr.push(7)
// console.log(arr)

// const arr = []
// for (let i = 1; i <= 50; ++i) {
//     arr.push(i)


// console.log(arr)
// arr[17] = "jkjkjkj"
// console.log(arr)

// вивести все что делиться на 7

//7%3  6%3 elem какойто елемент масива arr сослался на масив


// for (elem of arr) {
//     console.log(elem)
// }


// const newArr = []

// for (elem of arr) {
//     const marker = elem % 3
//     if (!marker) {
//         newArr.push(elem)
//     }
// } console.log(newArr)


// пример

// const obj = {
//     name: "sasha",
//     are: 25,
//     city: "Pereyaslav"
// }
// for (key in obj) {
//     console.log(key, obj[key])
// }
//видает случайное значение от 0 -1 

const randomValue1 = (Math.random() * 100).toFixed(0)
const randomValue2 = (Math.random() * 100).toFixed(0)
const isPlus = Math.random() > 0.5
console.log(randomValue1)

const gamelements = document.getElementById("my_game").children
if (isPlus) {
    gamelements[1].innertext = '${randomValue1} + ${randomValue2}'
}

console.log(gamelements)













