const log = console.log;
const dir = console.dir;

document.body.style.backgroundColor = "lightgrey";

const block = document.querySelector("#block-1");

// block.style.backgroundColor = "#123456";
// block.style.color = "#fff";
// block.style.padding = "1em";

// block.style.cssText = `
//     background-color: #123456;
//     color: #fff;
//     padding = 1em;
// `;

block.classList.add("block");
// log(block.classList.contains("block"));
// block.classList.remove("block");

block.classList.toggle("block");
block.classList.toggle("block");
block.classList.toggle("block");

block.classList.add("block", "block--xl");

// --------------------------
// getComputedStyle();

const button = document.querySelector("button");
log(button.style.color);
log(button.style.backgroundColor);

const buttonComputedStyles = getComputedStyle(button);

// log(buttonComputedStyles);
log(buttonComputedStyles.color);
log(buttonComputedStyles.backgroundColor);

button.style.fontSize = "16px";
log(buttonComputedStyles.fontSize);

log(buttonComputedStyles.paddingRight);
log(buttonComputedStyles.paddingRight);

button.style.paddingRight = `${20 + parseInt(buttonComputedStyles.paddingRight)}px`;
button.style.paddingLeft = `${20 + parseInt(buttonComputedStyles.paddingLeft)}px`;
// -----------------
// getBoundingClientRect()

log(button.getBoundingClientRect());

// -------------------

log(block.hasAttribute("id"));
log(block.hasAttribute("class"));
log(block.hasAttribute("href"));

log(block.getAttribute("class"));
log(block.removeAttribute("id"));

block.setAttribute("title", "наш большой блок");

const link = document.createElement("a");
link.textContent = "Ссылка на youtube";
link.href = "https://youtube.com";
link.target = "_black";

document.body.prepend(link);
// link.qwerty = "тест";
link.setAttribute("qwerty", "тест");
// Data - атрибуда

const product = document.getElementById("product");

log(product.dataset);
log(product.dataset.id);
log(product.dataset.category);
log(product.dataset.produceYear);

product.dataset.produceYear = 1999;
log(product.dataset.produceYear);