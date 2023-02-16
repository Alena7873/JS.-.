const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

// Метод concat()объединяет (объединяет) два или более массива.

//Метод concat()возвращает новый массив, содержащий объединенные массивы.

//Метод concat()не изменяет существующие массивы.

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin"];
// const children = arr1.concat(arr2, arr3);

const arr1 = ["Cecilie", "Lone"];
const arr2 = [1, 2, 3];

const arr3 = arr1.concat(arr2);
document.getElementById("demo").innerHTML = arr3;

const arr4 = [1, 2, [3, 4]];
const arr5 = [[5, 6], 7, 8];
const arr6 = arr4.concat(arr5);
document.getElementById("demo").innerHTML = arr6;

// Конструктор массива
//Получить конструктор массива:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.constructor;
document.getElementById("demo1").innerHTML = fruits;

//Метод copyWithin()копирует элементы массива в другую позицию в массиве.

//Метод copyWithin()перезаписывает существующие значения.

//Метод copyWithin()не добавляет элементы в массив.

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo3").innerHTML = fruits1.copyWithin(2, 0);

//Метод entries()возвращает объект Array Iterator с парами ключ/значение:

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits2.entries();

for (let x of f) {
    document.getElementById("demo4").innerHTML += x;
}
//every() перевод каждый()
//Метод every()выполняет функцию для каждого элемента массива.

//Метод every()возвращает значение true, если функция возвращает значение true для всех элементов.

//Метод every()возвращает значение false, если функция возвращает false для одного элемента.

//Метод every()не выполняет функцию для пустых элементов.

//Метод every()не изменяет исходный массив

//Проверьте, все ли значения в age[] старше 18 лет:

const ages = [32, 33, 16, 40];

ages.every(checkAge)

function checkAge(age) {
    return age > 18;
}
console.log(ages)

//Метод fill()заполняет указанные элементы массива значением.

//Метод fill()перезаписывает исходный массив.

//Можно указать начальную и конечную позиции. Если нет, все элементы будут заполнены.
const fruits3 = ["Banana1", "Orange1", "Apple1", "Mango1"];
fruits3.fill("Kiwi", 2, 4);

//Метод filter()создает новый массив, заполненный элементами, прошедшими проверку, предоставляемую функцией.

//Метод filter()не выполняет функцию для пустых элементов.

//Метод filter()не изменяет исходный массив.

//Возвращает массив всех значений в age[] старше 18 лет:

const ages1 = [32, 33, 16, 40];
const result = ages1.filter(checkAdult);

function checkAdult(age1) {
    return age1 >= 18;
}
console.log(ages1)

//Метод find()возвращает значение первого элемента, прошедшего проверку.

//Метод find()выполняет функцию для каждого элемента массива.

//Метод find()возвращает значение undefined, если элементы не найдены.

//Метод find()не выполняет функцию для пустых элементов.

//Метод find()не изменяет исходный массив.
//Найдите значение первого элемента со значением больше 18:
const ages2 = [3, 10, 18, 20];

function checkAge1(age2) {
    return age2 > 18;
}
document.getElementById("demo6").innerHTML = ages2.find(checkAge1);

function myFunction1(age3) {
    return age3 > 18;

}

// Метод findIndex()выполняет функцию для каждого элемента массива.

// Метод findIndex()возвращает индекс (позицию) первого элемента, прошедшего проверку.

// Метод findIndex()возвращает -1, если совпадений не найдено.

// Метод findIndex()не выполняет функцию для пустых элементов массива.

// Метод findIndex()не изменяет исходный массив.
//Найдите первый элемент со значением больше 18:

const ages3 = [3, 10, 18, 20];
document.getElementById("demo7").innerHTML = ages3.findIndex(checkAge1);

function checkAge(age4) {
    return age4 > 18;
}
