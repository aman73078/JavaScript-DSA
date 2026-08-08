const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const [a, b] = input;

function sum(a,b){
    return a+b;
}

console.log(sum(a,b));
console.log(sum(a,b));
console.log(sum(a,b));


// Pattern
// function printPatter(rows){
//     let pattern = '';
//     for(let i=1; i<=rows; i++){
//         for(let j=1; j<=rows; j++){
//             pattern += ' *'
//         }
//         pattern += '\n'
//     }
//     console.log(pattern);
// }
// printPatter(a)

function printPattern1(rows){
    let pattern = '';
    for(let i=0; i<rows; i++){
        for(let j=0; j<=i; j++){
            pattern += '*' + pattern + '*';
        }
        pattern += '\n';
    }
    console.log(pattern);   
}

printPattern1(a);

function main(){
    for(let i=0; i<input.length; i++){
        
    }
}