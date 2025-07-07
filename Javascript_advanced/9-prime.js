
let start=performance.now();

function countPrimeNumbers(){
    let count=0;
    for (let i = 2; i < 100; i++) {
        if(i%2!==0)count++;
    }
}

countPrimeNumbers();

let end=performance.now();


console.log(`Execution time of printing countPrimeNumbers was ${end-start} milliseconds.`)