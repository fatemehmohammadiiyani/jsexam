const number = document.querySelector<HTMLInputElement>("#Number")
const random = document.querySelector<HTMLButtonElement>("#Random")
const prime = document.querySelector<HTMLButtonElement>("#Prime")

document.documentElement.classList.add('dark')

function isPrime(num:number){
    let value = true
    let n = 1
    while(n < num/2){
        n++
        if (num % n == 0){
            value = false
            break
        }
    }
    return value
}

function primeCount(num:number) {
    let i=1
    let listofprime : Array<Number> = []
    while (i < num){
        if(isPrime(i)){
            listofprime.push(i)
        }
        i++
    }
    return listofprime

}
random?.addEventListener("click", () => {
    number!.value = (Math.floor(Math.random()*90000) + 10000).toString()
})
prime?.addEventListener("click", () => {
    if (number!.value){console.log(primeCount(+number!.value))}
    else {console.log("Error")}
})