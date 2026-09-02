/*
Print Name N times using Recursion
Problem Description: Given an integer N, write a program to print your name N times.
*/

function printName(i,n){
    if(i>n) return;
    console.log("printName: Aman Tripathi");
    printName(i+1,n);
}

printName(1,3);

/*
Print 1 to N using Recursion
Problem Description: Given an integer N, write a program to print numbers from 1 to N.
*/

function printNumber(i,n){
    if(i > n) return;
    console.log('printNumber: ',i);
    printNumber(i+1,n);
}

printNumber(1,5);

/*
Print N to 1 using Recursion
Problem Description: Given an integer N, write a program to print numbers from N to 1.
*/

function printNumberNto1(i,n){
    if(i<1) return;
    console.log('printNumberNto1: ',i);
    printNumberNto1(i-1,n);
}

printNumberNto1(4,4)

/*
Print 1 to N using Recursion
Problem Description: Given an integer N, write a program to print numbers from 1 to N.
By using back tracking.
*/
function print1toNBackTracking(i,n){
    if(i<1) return;
    print1toNBackTracking(i-1,n);
    console.log('print1toNBackTracking: ',i);
}
print1toNBackTracking(4,4);

/*
Print N to 1 using Recursion
Problem Description: Given an integer N, write a program to print numbers from N to 1.
By using back tracking.
*/

function printNto1BackTracking(i,n){
    if(i>n) return;
    printNto1BackTracking(i+1,n);
    console.log('printNto1BackTracking: ',i);
}
printNto1BackTracking(1,5)

/*
Sum of first N Natural Numbers
Problem Statement: Given a number ‘N’, find out the sum of the first N natural numbers .
*/

function parameterizedSumOfN(i,n){
    if(i<1) {
        console.log('parameterizedSumOfN: ',n);
        return;
    };
    parameterizedSumOfN(i-1,n+i);
}

parameterizedSumOfN(3,0);
parameterizedSumOfN(10,0);

function functionalSumOfN(n){
    if(n<1) return 0;
    return n + functionalSumOfN(n-1);
}

console.log('functionalSumOfN: ', functionalSumOfN(5));
console.log('functionalSumOfN: ', functionalSumOfN(10));


/*
Factorial of a Number : Iterative and Recursive


4

Problem Statement: Given a number X,  print its factorial.
To obtain the factorial of a number, it has to be multiplied by all the whole numbers preceding it. More precisely X! = X*(X-1)*(X-2) … 1.
Note: X  is always a positive number. 
*/

function parameterizedFactorial(i,n){
    if(i<1){
        console.log('parameterizedFactorial: ',n);
        return;
    }
    parameterizedFactorial(i-1,n*i);
}

parameterizedFactorial(4,1);
parameterizedFactorial(3,1);
parameterizedFactorial(10,1);

function functionalFactorial(n){
    if(n===1) return 1;
    return n * functionalFactorial(n-1);
}

console.log('functionalFactorial: ',functionalFactorial(5))
console.log('functionalFactorial: ',functionalFactorial(4))
console.log('functionalFactorial: ',functionalFactorial(3))
console.log('functionalFactorial: ',functionalFactorial(10))

/*
Reverse a given Array
Problem Statement: You are given an array. The task is to reverse the array and print it.
*/

function withoutRecursion(arr){
    for(let i=0; i<=(arr.length/2); i++){
        if(i != arr.length/2){
            let a = arr[i];
            arr[i] = arr[arr.length-i-1];
            arr[arr.length-i-1] = a;
        }
    }
    console.log('withoutRecursion: ',arr);
}

withoutRecursion([1,3,5,7,9,10])

function reverseArrayByRecursion(arr,l,r){
    if(l >= r) return;
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    console.log('reverseArrayByRecursion: ',arr)
    reverseArrayByRecursion(arr,l+1,r-1);
}
reverseArrayByRecursion([1,3,5,7,9,10],0,[1,3,5,7,9,10].length-1)

function reverseArrayByRecursionByUsingSingleVar(i,arr){
    if(i >= arr.length/2) return;
    let temp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = temp;
    console.log('reverseArrayByRecursionByUsingSingleVar: ',arr);
    reverseArrayByRecursionByUsingSingleVar(i+1, arr);
}
reverseArrayByRecursionByUsingSingleVar(0,[1,3,5,7,9,10])


/*
Check if the given String is Palindrome or not

Problem Statement: Given a string, check if the string is palindrome or not. A string is said to be palindrome if the reverse of the string is the same as the string.
*/

function withoutRecursionPailindrome(str){
    for(let i=0; i<str.length/2; i++){
        if(str[i] != str[str.length-i-1]) return false;
    }
    return true;
}
console.log('withoutRecursionPailindrome: ',withoutRecursionPailindrome('MADAM'))
console.log('withoutRecursionPailindrome: ',withoutRecursionPailindrome('MADSM'))

function recursionPalindrome(i,str){
    if(i >= str.length/2) return true;
    if(str[i] !== str[str.length-i-1]) return false;
    return recursionPalindrome(i+1,str);
}
console.log('recursionPalindrome: ',withoutRecursionPailindrome('MADSM'))
console.log('recursionPalindrome: ',withoutRecursionPailindrome('MADAM'))