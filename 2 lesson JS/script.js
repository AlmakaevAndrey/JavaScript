console.log('Внешний файл подключен');

console.group("Группа логов");
console.log("1");
console.log("2");
console.log("3");
console.groupEnd();

console.error("Это ошибка");
console.warn("Это ворнинг");

console.table({ name: "Almakaev", age: 25 });

const styles = "background-color: lightseagreen; color: black; padding: 20px";
console.log('%cStart coding, now!', styles)