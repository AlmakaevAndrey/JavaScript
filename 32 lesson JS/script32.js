// Events -события

const log = console.log;

const btn = document.querySelector("#btn");
const block = document.querySelector("#block");
const input = document.querySelector("input");
const text = document.querySelector("p");

// log(btn);

// btn.onclick = () => log("кнопка была нажата");

const btnClickListener = () => {
    log("кнопка была нажата")
}

btn.addEventListener("click", btnClickListener);

block.addEventListener("click", () => {
    log("блок был нажат");
})
input.addEventListener("input", () => {
    log("пользователь что-то ввел");
})

window.addEventListener("resize", () => {
    log("изменился размер окна");
})

// ----------------------------------------------
block.addEventListener("click", () => {
    btn.removeEventListener("click", btnClickListener);
})

// ---------------------------

input.addEventListener("input", (e) => {
    // log(e);
    // console.dir(e.target);
    // console.dir(e.target.nodeName);
    log(e.target.value);
})

btn.addEventListener("click", (e) => {
    log(e.clientX,e.clientY);
    log(e.offsetX,e.offsetY);
});

window.addEventListener("resize", (e) => {
    log(e.target.innerWidth, e.target.innerHeight);
})

text.addEventListener("copy", (e) => {
    e.preventDefault();
    log("КОПИРОВАНИЕ ЗАПРЕЩЕНО!");
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
})