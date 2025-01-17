const log = console.log;
const dir = console.dir;


dir(document.children[0]);
dir(document.childNodes);
dir(document.body.children[0]);
log(document.body.childElementCount);

// Напишите код, чтобы получит внчале `p` а затем получить его соседей
// `h3` и `span`. 
// Далее получите текст из `h3` и `span`, поместите текст
// в переменную `greeting` и выведите в консоль.

const p = document.body.children[1];
const h3 = p.previousElementSibling;
const span = p.nextElementSibling;

const textH3 = h3.textContent;
const textSpan = span.textContent;

const greeting = `${textH3} ${textSpan}`;

console.log(greeting);
