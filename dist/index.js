"use strict";
const number = document.querySelector("#Number");
const random = document.querySelector("#Random");
const prime = document.querySelector("#Prime");
document.documentElement.classList.add('dark');
function isPrime(num) {
    let value = true;
    let n = 1;
    while (n < num / 2) {
        n++;
        if (num % n == 0) {
            value = false;
            break;
        }
    }
    return value;
}
function primeCount(num) {
    let i = 1;
    let listofprime = [];
    while (i < num) {
        if (isPrime(i)) {
            listofprime.push(i);
        }
        i++;
    }
    return listofprime;
}
random === null || random === void 0 ? void 0 : random.addEventListener("click", () => {
    number.value = (Math.floor(Math.random() * 90000) + 10000).toString();
});
prime === null || prime === void 0 ? void 0 : prime.addEventListener("click", () => {
    if (number.value) {
        console.log(primeCount(+number.value));
    }
    else {
        console.log("Error");
    }
});
//# sourceMappingURL=index.js.map