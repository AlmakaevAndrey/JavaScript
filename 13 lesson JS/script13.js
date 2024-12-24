// https://symbl.cc/ru/1F44D/ - Юникод
// String (строки)

const log = console.log;

let str = "Hello world!";
str = "Hello \nworld!";
str = "Hello \"world!\"";
// str = "👍";
str = String.fromCodePoint(128077);

// str = "\u+1F44D"; // ошибка
str = "\u{1F44D}"; // ошибка
const copyRight = "\u00A9";


// log(str);
// log(copyRight);

// ---------------------------------
const filePath = String.raw`C:\dev\log\file.html`;

// log(filePath)
// -----------------------------
const firstName = "Anna";

// str = `Hello ${firstName}`;
str = `Hello ${firstName}`;

str = `User:
- Alex
- Nik
- Julia
- Margarita
`
// str = "User:
// - Alex
// - Nik
// - Julia
// - Margarita
// "

// log(str);
//-----------------------------
let text = "World!";

// log(text.length);
// log(text.toUpperCase());
// log(text.toLowerCase());

// log(text[0]);
// log(text[1]);


// log(text.at(0));
// log(text.at(-1));

let me = "I am " + text.at(1) + text.at(3) + text.at(4);

me = `I am ${text.at(1)}${text.at(3)}${text.at(4)}`

// log(me);
// ---------------------------------
str = "     JavaScript is awesome        ";
// str = str.trimStart();
// str = str.trimEnd();
str = str.trim();


// log(str);
// str = str.replace("Script", "");
// log(str.replace("Java", "HTML"));
// str = str.replace("Script", "");
// log(str.indexOf("S"));
// log(str.indexOf("Java"));
// log(str.indexOf("W"));

str = "JavaScript is awesome";

if (str.indexOf("Java")) { // 0 - falsy
    // log("проверка не пройдена")
}

if (str.indexOf("Java") != -1) {
    // log("проверка пройдена")
}

// --------------------------------------------
// log(str);
// log(str.includes("is"));
// log(str.startsWith("Java"));
// log(str.endsWith("Java"));
// log(str.endsWith("some"));

// --------------------------------------------
// substring, slice, substr

// substring(start, end)
// slice(start, end)
// substr(start, length)

str = "hardcore";

log(str.substring(0, 4));
log(str.substring(4));
log(str.substring(8, 4)); // (4,8)

log(str.slice(0, 4));
log(str.slice(8, 4));

log(str.substr(1, 3));
// ---------------------
let random = "abc";

log(random.padStart("10", "0"))
log(random.padEnd("10", "0"))
log(random.padEnd("13", Math.random()))





let sr = "javascript";
sr = sr.at(0).toUpperCase() + sr.substring(1, 4) + sr.at(4).toUpperCase() + sr.substring(5);
console.log(sr);

