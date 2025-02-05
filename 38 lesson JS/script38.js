const log = console.log;

const createCounter = () => {
    let count = 0;

    return () => {
        count += 1;
        return count;
    }
}

const counter = createCounter;

log(counter());
log(counter());

