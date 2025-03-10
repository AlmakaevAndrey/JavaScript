export const setItemLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const removeItemFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}

export const getItemFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const greetingFn = () => console.log("Hello my friends");

export default greetingFn;
