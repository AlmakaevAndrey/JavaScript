// Напишите код для вставки `<li>2</li><li>3</li>` между этими двумя `<li>`:
 
// ```html
//     <ul id="ul">
//         <li id="one">1</li>
//         <li id="two">4</li>
//     </ul>
// ```

const one = document.querySelector("#one");

one.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");


const clear1= (elem) => {
    while (elem.firstChild) {
        elem.firstChild.remove();
    }
}


// const clear = (elem) => {
//     elem.innerHTMLss "";
// }


const ul = document.createElement("ul");
document.body.append(ul);

while (true) {
    const data = prompt("Введите текст для элемента списка!", "");

    if (!data) {
        break;
    }

    const li = document.createElement("li");
    li.textContent = data;
    ul.append(li);
ul}