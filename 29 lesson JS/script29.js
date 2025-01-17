const log = console.log;
const dir = console.dir;

// querySelector - самый униврсальный и удобынй.

const p = document.querySelector("p");
// log(p);
// dir(p);

const allP = document.querySelectorAll("p");
log(allP);
log(Array.from(allP));

const lastText = document.querySelector(".last-text");
// const lastText = document.querySelector("p[class = 'last-text']");

// dir(lastText);

// const firstText = document.querySelector("#first-text");
// const firstText = document.getElementById("first-text");

// dir(firstText);

const wrapper = document.querySelector(".wrapper");
// log(wrapper);

// const firstText = wrapper.getElementsById("first-text");
// const firstText = wrapper.querySelector("#first-text");
// dir(wrapper);

// ----------------------------
// getElementBy* - лучше querySelector.

const allText = document.getElementsByTagName("p");
// log(allText);

// allText.array.forEach(element => log(element));

// allP.forEach(element => log(element));

// Array.from(allP).forEach(element => log(element));

//-------------------
log(wrapper.textContent);
log(wrapper.innerHTML);
log(wrapper.outerHTML);

// wrapper.textContent = "hello";

// wrapper.innerHTML = "<h2>text from JS</h2>";
// wrapper.innerHTML += "<h2>text from JS</h2>";

wrapper.prepend("text with prepend");
wrapper.append("text with append");

wrapper.before("text with before");
wrapper.after("text with after");

wrapper.append("<h2>text from JS</h2>");

const h2 = document.createElement("h2");
h2.textContent = "наш созданный h2";

wrapper.append(h2);
log(h2);

// lastText.innerHTML = "";
lastText.remove();

// -----------------------------------------

const container = document.querySelector(".container");
const h3 = document.createElement("h3");
h3.textContent = "наш созданный h3";


// container.insertAdjacentElement("afterbegin", h3);

const copiedContainer = container;

container.insertAdjacentText("beforebegin", "1) текст над контейнером");

container.insertAdjacentText("afterbegin", "2) текст в начале контейнера");

container.insertAdjacentText("afterbegin", "3) текст в конце контейнера");

container.insertAdjacentText("afterend", "4) текст в конце контейнера");


const buttonID = "123";

container.insertAdjacentHTML("afterbegin", `
    <hr>
    <button id=${buttonID}>Click me</button>
    <hr></hr>
`);

// --------------------------------
;
log(copiedContainer === container);
log(copiedContainer.textContent, container.textContent);

const deepCopiedContainer = container.cloneNode(true);

log(deepCopiedContainer === container);