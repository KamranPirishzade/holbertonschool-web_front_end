let start=performance.now();

function countPrimeNumbers(){
    let count=0;
    for (let i = 2; i < 100; i++) {
        if(i%2!==0)count++;
    }
}

for(i=0;i<100;i++)setTimeout(()=>countPrimeNumbers(),0);

let end=performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${end-start} milliseconds.`)