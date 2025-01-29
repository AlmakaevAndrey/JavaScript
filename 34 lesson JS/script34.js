const log = console.log;

// const container = document.querySelector("[data-contained]")

// container.addEventListener("click", () =>{
//     log("обработчик контейнера сработал!")
// })

// document.addEventListener("click", () => {
//     log("клик по всему документу!")
// })

// container.addEventListener("click", (e) =>{
//     e.stopPropagation();
//     e.stopImmediatePropagation();
//     log("(1) обработчик контейнера сработал!")
// })

// container.addEventListener("click", () =>{
//     log("(2) обработчик контейнера сработал!")
// })





// document.addEventListener("click", () => {
//     log("клик по всему документу!")
// }, true)

// container.addEventListener("click", () =>{
//     log("(2) обработчик контейнера сработал!")
// })


// const table = document.createElement("table");

// for (let row = 0; row < 100; row++) {
//     const tr = document.createElement("tr");

//     for (let col = 0; col < 50; col++) {
//         const td =document.createElement("td");
//         td.dataset.cell = `row${row+1}-col${col+1}`;
//         td.textContent = td.dataset.cell;
//         tr.append(td);
//     }
//     table.append(tr);
// }

// table.addEventListener("click", (e) => {
//     for ( const elem of table.querySelectorAll("*")) {
//         elem.classList.remove("highlight");
//     }

//     if (e.target.tagName === "TD") {
//         e.target.classList.add("highlight");
//     }
// })

// document.querySelector("[data-table]").append(table);

const numpad = document.querySelector("[data-numpad]");

document.addEventListener("keypress", (e) => {
    for (const button of numpad.querySelectorAll("td")){
        if (button.textContent === e.key) {
            button.classList.add("highlight")
        }
    };
})

document.addEventListener("keyup", () => {
    for (const button of numpad.querySelectorAll("td")) {
        button.classList.remove("highlight");
    }
})