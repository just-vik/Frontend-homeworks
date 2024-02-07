//task 1
type Person = {
    name: string;
    age: number;
};
function sortByAge(people: Person[]): Person[] {
    const sortedPeople = [...people];
    sortedPeople.sort((p1, p2) => p1.age - p2.age);
    return sortedPeople;
}
const people: Person[] = [
    { name: "Jack", age: 45 },
    { name: "Helen", age: 34 },
    { name: "Nick", age: 20 },
    { name: "Lui", age: 28 }
];
console.log(sortByAge(people));

//task 2
type Product = {
    name: string;
    price: number;
};
function filterByPrice(products: Product[]): Product[] {
    return products.filter(product => product.price < 50);
}
const products: Product[] = [
    { name: "Телефон", price: 500 },
    { name: "Наушники", price: 80 },
    { name: "Чехол для телефона", price: 15 },
    { name: "Зарядное устройство", price: 30 }
];
console.log(filterByPrice(products));


//task 3
type Book = {
    title: string;
    author: string;
};
function findBookByTitle(books: Book[], title: string): Book | undefined {
    return books.find(book => book.title.toLowerCase().includes(title)); //includes(searchString: string, position?: number): boolean;
}
const books: Book[] = [
    { title: "Преступление и наказание", author: "Фёдор Достоевский" },
    { title: "Мастер и Маргарита", author: "Михаил Булгаков" },
    { title: "Война и мир", author: "Лев Толстой" }
];
console.log(findBookByTitle(books, "мастер"));


//task 4
function totalPrice(products: Product[]): number {
    // Используем метод reduce для вычисления общей суммы цен продуктов
    const total = products.reduce((total, product) => total + product.price, 0); //reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    return total;
}
// берем массив из task 2
console.log(totalPrice(products));


//task 5
type Student = {
    name: string;
    grade: number;
};
function updGrade(students: Student[], name: string, newGrade: number) {
    const updStudent = students.find(student => student.name === name);
    if (updStudent) {
        updStudent.grade = newGrade;
    } else {
        return false;
    }
    return updStudent;
}
const students: Student[] = [
    { name: "Jack", grade: 85 },
    { name: "Helen", grade: 92 },
    { name: "Nick", grade: 78 },
    { name: "Lui", grade: 80 }
];
console.log(updGrade(students, "Jack", 95));
