console.dir(Date)
//  - info about Date class
// const currentDate = new Date();
// // console.log(currentDate); - сьогоднішня дата
// // console.log(Date.now()); -кк мілісекунд з початку

// const btnStart = document.querySelector(".start")
// const btnEnd = document.querySelector(".end")
// const timePassed = document.querySelector(".text")

// let startTime
// let endTime
// let timerId;
// btnStart.addEventListener("click", ()=>{
//     startTime = Date.now();
//     console.log(startTime);
    
//     timerId = setInterval(function() {
//         endTime = Date.now()
//         console.log(endTime);
//     }, 1000);
// });
// btnEnd.addEventListener("click", ()=> {
//     clearInterval(timerId);
//     passed = endTime - startTime
//     timePassed.textContent = `Пройшло ${Math.floor(passed / 60000)} хв і ${Math.floor((passed % 60000) / 1000)} сек`
// });

// // 1. Створити функцію, яка повертає поточну дату та час.
// function getCurrentDateTime() {
//     return new Date();
// }

// // 2. Створити функцію, яка приймає дату та повертає рік.
// function getYear(date) {
//     return date.getFullYear();
// }

// // 3.  Створити функцію, яка приймає дату та повертає місяць.
// function getMonth(date) {
//     return date.getMonth() + 1; // +1 бо місяці з 0
// }

// // 4. Створити функцію, яка приймає дату та повертає день місяця.
// function getDayOfMonth(date) {
//     return date.getDate();
// }

// // 5.  Створити функцію, яка приймає дату та повертає години.
// function getHours(date) {
//     return date.getHours();
// }

// // 6. Створити функцію, яка приймає дату та повертає хвилини.
// function getMinutes(date) {
//     return date.getMinutes();
// }

// // 7. Створити функцію, яка приймає дату та повертає секунди.
// function getSeconds(date) {
//     return date.getSeconds();
// }

// // 8. Створити функцію, яка перевіряє чи є дата вихідним днем (субота або неділя).
// function isWeekend(date) {
//     const dayOfWeek = date.getDay();
//     return dayOfWeek === 0 || dayOfWeek === 6; // 0 - неділя, 6 - субота
// }

// // 9. Створити функцію, яка порівнює дві дати та повертає різницю в днях.
// function getDaysDifference(date1, date2) {
//     const oneDay = 24 * 60 * 60 * 1000; 
//     const diffInMs = Math.abs(date2 - date1);
//     return Math.floor(diffInMs / oneDay);
//     // const dateFirst = new Date(Date.parse(date1))
//     // const second = new Date(Date(Date.parse(date2)))
//     // return dateFirst - second
// }

// // 10. Створити функцію, яка приймає дату та кількість днів, та повертає нову дату після додавання цієї кількості днів.
// function addDays(date, days) {
//     const newDate = new Date(date);
//     newDate.setDate(newDate.getDate() + days);
//     return newDate;
// }

// console.log("1. Поточна дата:", getCurrentDateTime());

// const testDate = new Date();
// console.log("2. Рік:", getYear(testDate));
// console.log("3. Місяць:", getMonth(testDate));
// console.log("4. День:", getDayOfMonth(testDate));
// console.log("5. Години:", getHours(testDate));
// console.log("6. Хвилини:", getMinutes(testDate));
// console.log("7. Секунди:", getSeconds(testDate));
// console.log("8. Вихідний?", isWeekend(testDate));

// const date1 = new Date('2024-01-01');
// const date2 = new Date('2024-01-10');
// console.log("9. Різниця в днях:", getDaysDifference(date1, date2));

// console.log("10. +5 днів:", addDays(testDate, 5));

// 1. Створіть функцію getSecondsToTomorrow(), що повертає кількість секунд до завтра.
// Наприклад, якщо зараз є 23:00, то: getSecondsToTomorrow() === 3600
// P.S. Функція повинна працювати в будь-який день, “сьогодні” не є жорстко закодованим.

function getSecondsToTomorrow() {
    const now = new Date();
    const nowSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    const totalSecondInDay = 24*60*60;
    return totalSecondInDay - nowSeconds
}
console.log(`Time now is ${new Date().toTimeString()}`);
console.log(`1 To tomorrow ${getSecondsToTomorrow()} seconds`);


