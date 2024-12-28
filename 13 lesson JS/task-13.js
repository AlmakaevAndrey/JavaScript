let st = "javascript";
st = st.at(0).toUpperCase() + st.substring(1);
console.log(st);

let str = "javascript";
str = str.at(0).toUpperCase() + str.substring(1, 4) + str.at(4).toUpperCase() + str.substring(5);
console.log(str);

    const comment1 = "Hello man! Fuck you!";
    const comment2 = "Hello man! thank you!";
    const comment3 = "Hello man! thank you, fuck!";

    let isBlockedComment1;
    let isBlockedComment2;
    let isBlockedComment3;

    isBlockedComment1 = comment1.toLowerCase().includes("fuck");
    isBlockedComment2 = comment2.toLowerCase().includes("fuck");
    isBlockedComment3 = comment3.toLowerCase().includes("fuck");


    console.log(isBlockedComment1); // true or false
    console.log(isBlockedComment2); // true or false
    console.log(isBlockedComment3); // true or false

    let str1 = " $#$  Hello @$&#World! ";
    
    str1 = str1.replace("$#$", "").replace("@$&#", "").trim();
    console.log(str1); // "Hello World"