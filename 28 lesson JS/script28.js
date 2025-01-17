const log = console.log;
const dir = console.dir;

// document.addEventListener('DOMContentLoaded', function () {
//     console.log(document.children);  // Вывод всех детей документа (обычно <html>)
//     console.log(document.documentElement); // <html>
//     console.log(document.body);       // <body>
//     console.log(document.body.children);  // Дочерние элементы внутри <body>
// });

dir(document.documentElement);
dir(document.head);
dir(document.body);

dir(document.children[0].children);
dir(document.childNodes);
dir(document.body.children[0]);
log(document.body.childElementCount);

// for ( const child of document.body.children ) {
//     if (child.tagName !== "SCRIPT") {
//         // dir (child);
//         // log ("child", child);
//     }
// }

// const body = document.body;

// dir(body.firstChild);
// dir(body.firstElementChild);
// dir(body.lastElementChild);
// dir(body.lastElementChild);

// body.firstElementChild.style.color = "green";

// log(body.parentElement);
// log(body.parentNode);
// log(body.parentElement.parentElement);
// log(body.parentNode.parentNode);

// const h2 = body.children[1].style.color ="red"; 

// log(h2);
// log(h2.previousElementSibling);
// log(h2.nextElementSibling);

// h2.textContent + h2.textContent + " awesome";