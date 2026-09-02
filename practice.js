function printNameNTimes(times){
    if(times < 1) return;
    console.log('printNameNTimes: Aman Tripathi');
    printNameNTimes(times-1);
}

printNameNTimes(5);

function printNameNTimes2(times){
    if(times >= 5) return;
    console.log('printNameNTimes2: Aman Tripathi');
    printNameNTimes2(times+1);
}

printNameNTimes2(0)

function print1ToNLinearly(i,n){
    if(i > n) return;
    console.log('print1ToNLinearly: ',i);
    print1ToNLinearly(i+1,n);
}

print1ToNLinearly(1,5);

function print1toNBackTracking(i,n){
    if(i < 1) return;
    print1toNBackTracking(i-1,n);
    console.log('print1toNBackTracking: ',i);
}

print1toNBackTracking(5,5)

function printNumberNto1(i,n){
    if(i < 1) return;
    console.log('printNumberNto1: ',i);
    printNumberNto1(i-1,n);
}

printNumberNto1(5,5);

function printNumberNto1BackTracking(i,n){
    if(i > n) return;
    printNumberNto1BackTracking(i+1,n);
    console.log('printNumberNto1BackTracking: ',i);
}

printNumberNto1BackTracking(1,5);

function sumOf1toNParameterized(i,n){
    if(i < 1) return;
    n += i;
    sumOf1toNParameterized(i-1,n);
    console.log('sumOf1toNParameterized: ',n);
}

sumOf1toNParameterized(5,0);

function sumOf1toNFunctional(n){
    if(n===0) return 0
    return n + sumOf1toNFunctional(n-1);
}
console.log('sumOf1toNFunctional: ',sumOf1toNFunctional(5));

function factorialParameterized(i,n){
    if(i < 1) return ;
    n = n*i;
    factorialParameterized(i-1,n);
    console.log('factorialParameterized: ',n);
}
factorialParameterized(5,1);

function factorialFunctional(n){
    if(n===1) return 1;
    return n * factorialFunctional(n-1);
}

console.log('factorialFunctional: ',factorialFunctional(5));
