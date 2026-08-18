// Digits

function extractDigit(num) {
    let extractedDigits = [];
    while (num > 0) {
        extractedDigits.push(num % 10);
        num = Math.trunc(num / 10);
    }
    console.log(extractedDigits);
}

extractDigit(7789);

function countDigit(num) {
    let count = 0;
    while (num > 0) {
        count++;
        num = Math.trunc(num / 10);
    }
    console.log(count);
}

countDigit(7789)

function countDigit2(num) {
    let count = Math.floor(Math.log10(num) + 1);
    console.log(count);
}
countDigit2(7789)


/*
Reverse Digits of A Number
Problem Statement: Given an integer N return the reverse of the given number.

Note: If a number has trailing zeros, then its reverse will not include them. For e.g , reverse of 10400 will be 401 instead of 00401.
*/

function reverseNumber(num) {
    let reversed = '';
    while (num > 0) {
        reversed = reversed + num % 10;
        num = Math.trunc(num / 10);
    }
    console.log(reversed);
}
reverseNumber(7789)
reverseNumber(70089)
reverseNumber(0089)

function reverseNumber2(num) {
    let rn = 0;
    while (num > 0) {
        rn = (rn * 10) + (num % 10);
        num = Math.trunc(num / 10);
    }
    console.log(rn);
}
reverseNumber2(7789)
reverseNumber2(70089)
reverseNumber2(0089)

/*
Check if a number is Palindrome or Not
Problem Statement: Given an integer N, return true if it is a palindrome else return false.

A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.
*/

function palindrome(num) {
    let rn = 0;
    const orignalNum = num;
    while (num > 0) {
        rn = (rn * 10) + (num % 10);
        num = Math.trunc(num / 10);
    }

    if (rn == orignalNum) console.log(true);
    else console.log(false);
}

palindrome(121);
palindrome(1331);
palindrome(1332);

/*
Check if a number is Armstrong Number or not
Problem Statement:Given an integer N, return true it is an Armstrong number otherwise return false.

An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
*/

function armsStrong(num) {
    let sum = 0;
    const orignalNum = num;
    const power = String(orignalNum).length
    while (num > 0) {
        let lastDigit = num % 10;
        sum += Math.pow(lastDigit, power);
        num = Math.trunc(num / 10);
    }

    if (sum == orignalNum) console.log(sum, true)
    else console.log(sum, false);
}
armsStrong(371);
armsStrong(1634);

/*
Print all Divisors of a given Number
Problem Statement: Given an integer N, return all divisors of N.

A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.
*/

function divisor(num) {
    let divisorList = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            divisorList.push(i);
        }
    }
    console.log(`Num: ${num}`, divisorList.sort((a,b) => a-b));
}
divisor(36);
divisor(49);
divisor(56);

function printDivisor(num) {
    let divisorList = [];
    for (let i = 1; i * i <= num; i++) {
        if (num % i == 0) {
            divisorList.push(i);
            if ((num / i) != i) {
                divisorList.push(num/i);
            }
        }
    }
    console.log(`Num: ${num}`, divisorList.sort((a,b) => a-b));
}
printDivisor(36);
printDivisor(49);
printDivisor(56);

function checkPrimeNumber(num){
    let count = 0;
    for(let i=1; i*i<=num; i++){
        if(num%i == 0){
            count++
            if((num/i) != i){
                count++;
            }
        }
    }
    if(count >2) console.log(false);
    else console.log(true);
}

checkPrimeNumber(5)
checkPrimeNumber(10)
checkPrimeNumber(17)

function gcd(a,b){
    while (a>0 && b>0) {
        if(a>b) a = a%b;
        else b = b%a;
    }

    if(a ==0) console.log(b);
    else console.log(a);
}
gcd(12,15);
gcd(10,15);
gcd(20,40);