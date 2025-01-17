// ------ BROWSER API -------
// ------ BOM (Browser Object Model) -------

// console.log(window);
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// window.open();
// window.open("https://ya.ru", "_blank");
// window.open("https://ya.ru", "_self");

// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.pixelDepth);

// const window = "scss";
// log(window);

// console.log(location.href);
// console.log(location.hostname);
// console.log(location.pathname);
// console.log(location.protocol);

// Объект window.navigator содержит информацию о браузере посетителя.

// console.log(navigator);
// console.log(navigator.userAgent);
// console.log(navigator.userAgentData);
// console.log(navigator.geolocation);
// console.log(navigator.language);

// Объект window.history содержит историю браузеров.

// console.log(history);


// --- alert ---

// window.alert("Hello!");

// ----------------- DOM (Document Object model) ---------------------

// DOM - это представление всей страницы как объекта.
// Объект document - входная точка. Можем создавать и менять на странице.

console.log(document);
console.dir(document);
console.dir(document.head);
console.dir(document.head.innerHTML);

document.body.style.backgroundColor = "lightsalmon";

// ----------- JS --------------
console.log(window.Array.prototype);
console.log(window.Object.prototype);