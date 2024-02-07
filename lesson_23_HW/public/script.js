"use strict";
function sortByAge(people) {
    const sortedPeople = [...people];
    sortedPeople.sort((p1, p2) => p1.age - p2.age);
    return sortedPeople;
}
const people = [
    { name: "Jack", age: 45 },
    { name: "Helen", age: 34 },
    { name: "Nick", age: 20 },
    { name: "Lui", age: 28 }
];
console.log(sortByAge(people));
function filterByPrice(products) {
    return products.filter(product => product.price < 50);
}
const products = [
    { name: "Телефон", price: 500 },
    { name: "Наушники", price: 80 },
    { name: "Чехол для телефона", price: 15 },
    { name: "Зарядное устройство", price: 30 }
];
console.log(filterByPrice(products));
function findBookByTitle(books, title) {
    return books.find(book => book.title.toLowerCase().includes(title)); //includes(searchString: string, position?: number): boolean;
}
const books = [
    { title: "Преступление и наказание", author: "Фёдор Достоевский" },
    { title: "Мастер и Маргарита", author: "Михаил Булгаков" },
    { title: "Война и мир", author: "Лев Толстой" }
];
console.log(findBookByTitle(books, "мастер"));
//task 4
function totalPrice(products) {
    // Используем метод reduce для вычисления общей суммы цен продуктов
    const total = products.reduce((total, product) => total + product.price, 0); //reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    return total;
}
// берем массив из task 2
console.log(totalPrice(products));
function updGrade(students, name, newGrade) {
    const updStudent = students.find(student => student.name === name);
    if (updStudent) {
        updStudent.grade = newGrade;
    }
    else {
        return false;
    }
    return updStudent;
}
const students = [
    { name: "Jack", grade: 85 },
    { name: "Helen", grade: 92 },
    { name: "Nick", grade: 78 },
    { name: "Lui", grade: 80 }
];
console.log(updGrade(students, "Jack", 95));
