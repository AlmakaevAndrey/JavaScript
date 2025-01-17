// Создайте элемент ссылки с помощью JS. Добавьте контент для ссылки.

// Далее добавить динамически данному элементу атрибуты:
// - `href` со значением `https://любой сайт`;
// - `target` со значением `_blank`;

// Далее присоединить элемент к `body`.


const link = document.createElement("a");
link.textContent = "Telegram";
link.href = "https://web.telegram.org/";
link.target = "_blank";

link.classList.add("a");

document.body.prepend(link);

// Создайте функцию `showAlert(className, message)` у которой есть два параметра `className` и `message`.
// Функция динамически создает `div` которому присваивает класс с названием `className` и добавляет
// контент `message`.
// После функция добавляет элемент в `body` в самом начале.
// Также должен быть файл `.css` где будет создан класс передаваемый в функцию `showAlert`.
 
// ```JavaScript

    const showAlert = (className, message) => {
        const alert = document.createElement("div");
        alert.classList.add(className);
        alert.textContent("message");  

        document.body.prepend(alert);
    }