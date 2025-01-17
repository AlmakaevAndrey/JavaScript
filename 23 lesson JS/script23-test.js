const skills = ["html", "css", "scss", "js", "git", "ts", "react", "git", "angular", "js"];
const new_Skills = skills.filter((skill, index, thisArr) => index === thisArr.indexOf(skill));
console.log(new_Skills);

const num = 12345;

// const resultArray = num.toString().split("").map(Number).reverse();
const resultArray = Array.from(String(num), Number).reverse();

console.log(resultArray); // [5, 4, 3, 2, 1]

const numbers = [1, -2, 3, -4, 5, 0];
// const invertedNumbers = numbers.map(value => value < 0 ? Math.abs(value) : -value);
const invertedNumbers = numbers.map(value => -value);

console.log(invertedNumbers);

const first = "дед"; // true
const second = "баба"; // false
const phrase1 = "рвал дед лавр"; // true

// со звездочкой
const phrase2 = "Леша на полке клопа нашел"; // true

const isFirstPalindrome = first === first.split("").reverse().join(""); // true
const isSecondPalindrome = second === second.split("").reverse().join(""); // false

const isPhrase1Palindrome = phrase1 === phrase1.split("").reverse().join(""); // true

const trimmedPhrase2 = phrase2.toLowerCase().replaceAll(" ", "");
const isPhrase2Palindrome = trimmedPhrase2 === trimmedPhrase2.split("").reverse().join(""); // true
console.log(isFirstPalindrome);
console.log(isSecondPalindrome);
console.log(trimmedPhrase2);
console.log(isPhrase2Palindrome);

const statusesFromServer = [
    { value: 1, status: "Full time" },
    { value: 2, status: "Part time" },
    { value: 3, status: "On demand" },
    { value: 4, status: "Retired" },
  ];
  
  // что должно получится
//   const mappedStatuses = [
//     { key: 1, title: "Full time" },
//     { key: 2, title: "Part time" },
//     { key: 3, title: "On demand" },
//     { key: 4, title: "Retired" },
//   ];

const mappedStatuses = statusesFromServer.map((status) => {
    return {
        key: status.value,
        title: status.status
    }
})

console.log(mappedStatuses);



const books = [
    {id: 1, title: "Гарри Поттер", price: 59, category: "fantasy" },
    {id: 2, title: "Чистый код", price: 109, category: "science" },
    {id: 3, title: "Темная Башня", price: 149, category: "fantasy" },
    {id: 4, title: "Грокаем алгоритмы", price: 173, category: "science" },
    {id: 5, title: "Многопоточный JavaScript", price: 79, category: "science" },
    {id: 6, title: "Властелин колец", price: 120, category: "fantasy" },
    {id: 7, title: "1984", price: 95, category: "fiction" },
    {id: 8, title: "Анна Каренина", price: 85, category: "romance" },
    {id: 9, title: "Игра престолов", price: 155, category: "fantasy" },
    {id: 10, title: "Алхимик", price: 60, category: "philosophy" },
    {id: 11, title: "Код да Винчи", price: 180, category: "thriller" },
    {id: 12, title: "451 градус по Фаренгейту", price: 99, category: "fiction" },
    {id: 13, title: "Мастер и Маргарита", price: 125, category: "fantasy" },
    {id: 14, title: "Убийство в Восточном экспрессе", price: 110, category: "mystery" },
    {id: 15, title: "Три товарища", price: 75, category: "romance" },
    {id: 16, title: "Зелёная миля", price: 130, category: "fiction" },
    {id: 17, title: "Шерлок Холмс", price: 88, category: "mystery" },
    {id: 18, title: "Сто лет одиночества", price: 92, category: "fiction" },
    {id: 19, title: "Остров сокровищ", price: 115, category: "adventure" },
    {id: 20, title: "Преступление и наказание", price: 140, category: "philosophy" },
    {id: 21, title: "Пикник на обочине", price: 108, category: "science fiction" },
    {id: 22, title: "Моби Дик", price: 85, category: "adventure" },
    {id: 23, title: "Граф Монте-Кристо", price: 123, category: "adventure" },
    {id: 24, title: "Великий Гэтсби", price: 90, category: "fiction" },
    {id: 25, title: "Одиннадцать минут", price: 95, category: "romance" },
    {id: 26, title: "Дракула", price: 115, category: "horror" },
    {id: 27, title: "Меч королей", price: 130, category: "fantasy" },
    {id: 28, title: "Дюна", price: 160, category: "science fiction" },
    {id: 29, title: "Тени прошлого", price: 112, category: "thriller" },
    {id: 30, title: "Прощай, оружие", price: 100, category: "romance" },
    {id: 31, title: "Хроники Нарнии", price: 140, category: "fantasy" },
    {id: 32, title: "Доктор Живаго", price: 110, category: "romance" },
    {id: 33, title: "Старик и море", price: 93, category: "philosophy" },
    {id: 34, title: "Тёмная башня", price: 135, category: "fantasy" },
    {id: 35, title: "Затерянный мир", price: 105, category: "adventure" },
    {id: 36, title: "Палата №6", price: 88, category: "philosophy" },
    {id: 37, title: "Путешествие к центру Земли", price: 117, category: "adventure" },
    {id: 38, title: "Оливер Твист", price: 119, category: "fiction" },
    {id: 39, title: "Иллиада", price: 150, category: "history" },
    {id: 40, title: "Одиссея", price: 155, category: "history" },
    {id: 41, title: "Последний легион", price: 110, category: "history" },
    {id: 42, title: "Фауна и флора", price: 85, category: "science" },
    {id: 43, title: "Зов Ктулху", price: 120, category: "horror" },
    {id: 44, title: "Человек, который смеётся", price: 98, category: "philosophy" },
    {id: 45, title: "Сага о Форсайтах", price: 113, category: "romance" },
    {id: 46, title: "Крошка Цахес", price: 108, category: "fantasy" },
    {id: 47, title: "Ловушка", price: 102, category: "thriller" },
    {id: 48, title: "Алхимик", price: 78, category: "philosophy" },
    {id: 49, title: "Триумфальная арка", price: 127, category: "romance" },
    {id: 50, title: "Код да Винчи", price: 170, category: "thriller" }
];

let categoriesCount = 0;
let totalPrice = 0;

const categoryMap = books.reduce((res, book) => {
    if (book.category in res) {
        res[book.category]++;
    } else {
        res[book.category] = 1;
    }
    totalPrice += book.price;

    return res;
}, {});
console.log(categoryMap);
console.log(categoriesCount);
console.log(totalPrice);

const mostPopularCategory = Object.entries(categoryMap).reduce((result, category) => {
    if (category[1] > result.count) {
      result.count = category[1];
      result.category = category[0];
    }
  
    return result;
  }, {count: 0});
  
  console.log(mostPopularCategory.category, mostPopularCategory.count);
