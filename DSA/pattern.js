const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const [a, b] = input;

/* 
1. Pattern
*****
*****
*****
*****
*****
*/

function printPattern1(rows){
    let pattern = '';
    for(let row=0; row<rows; row++){
        let line = '';
        for(let col=0; col<rows; col++){
            line += '*';
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 1 & rows : ${rows}`)
    console.log(pattern);
}

/* 
2. Pattern
*
**
***
****
*****
*/
function printPattern2(rows){
    let pattern = '';
    for(let row=0; row<rows; row++){
        let line = '';
        for(let col=0; col<=row; col++){
            line += '*';
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 2 & rows : ${rows}`)
    console.log(pattern);
}

/* 
3. Pattern
1
12
123
1234
12345
123456
1234567
*/

function printPattern3(rows){
    let pattern = '';
    for(let row=1; row<=rows; row++){
        let line = '';
        for(let col=1; col<=row; col++){
            line += `${col}`;
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 3 & rows : ${rows}`)
    console.log(pattern);
}

/* 
4. Pattern
1
22
333
4444
55555
666666
7777777
*/

function printPattern4(rows){
    let pattern = '';
    for(let row=1; row<=rows; row++){
        let line = '';
        for(let col=1; col<=row; col++){
            line += `${row}`;
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 4 & rows : ${rows}`)
    console.log(pattern);
}

/* 
5. Pattern
*****
****
***
**
*
*/

function printPattern5(rows){
    let pattern = '';
    for(let row=0; row<rows; row++){
        let line = '';
        for(let col=1; col<rows-row+1; col++){
            line += '*';
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 5 & rows : ${rows}`)
    console.log(pattern);
}

/* 
6. Pattern
12345
1234
123
12
1
*/
function printPattern6(rows){
    let pattern = '';
    for(let row=0; row<rows; row++){
        let line = '';
        for(let col=1; col<rows-row+1; col++){
            line += `${col}`;
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 6 & rows : ${rows}`)
    console.log(pattern);
}


/* 
7. Pattern
      *      
     ***     
    *****    
   *******   
  *********  
 *********** 
*************
*/
function printPattern7(rows){
    let pattern = '';
    for(let row=0; row<rows; row++){
        let line = '';
        for(let col=0; col<(rows-row-1); col++){
            line = ' ' + line;
        }
        for(let col=0; col<(2*row+1); col++){
            line += '*';
        }
        for(let col=0; col<(rows-row-1); col++){
            line = line + ' ';
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 7 & rows : ${rows}`)
    console.log(pattern);
}


/* 
8. Pattern
*********
 ******* 
  *****  
   ***   
    *  
*/

function printPattern8(rows){
    let pattern = '';
    for(let row=0; row<rows; row++){
        let line = '';
        for(let col=0; col<row; col++){
            line = ' ' + line;
        }
        for(let col=0; col<(2*rows-(2*row+1)); col++){
            line += '*';
        }
        for(let col=0; col<row; col++){
            line = line + ' ';
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 8 & rows : ${rows}`)
    console.log(pattern);
}

/* 
9. Pattern
    *  
   *** 
  *****
 *******
*********
*********
 ******* 
  *****  
   ***   
    * 
*/
function printPattern9(rows){
    let pattern = '';

    for(let row=0; row<rows/2; row++){
        let line = '';
        for(let col=0; col<(rows/2-row-1); col++){
            line = ' ' + line;
        }
        for(let col=0; col<(2*row+1); col++){
            line += '*';
        }
        for(let col=0; col<(rows/2-row-1); col++){
            line = line + ' ';
        }
        pattern += line + '\n';
    }

    for(let row=0; row<rows/2; row++){
        let line = '';
        for(let col=0; col<row; col++){
            line = ' ' + line;
        }
        for(let col=0; col<(2*rows/2-(2*row+1)); col++){
            line += '*';
        }
        for(let col=0; col<row; col++){
            line = line + ' ';
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 9 & rows : ${rows}`)
    console.log(pattern)
}

/* 
10. Pattern
*
**
***
****
***
**
*
*/
function printPattern10A(rows){
    let pattern = '';
    for(let row=0; row<Math.ceil(rows/2); row++){
        let line = '';
        for(let col=0; col<=row; col++){
            line += '*';
        }
        pattern += line + '\n';
    }

    for(let row=0; row<Math.floor(rows/2); row++){
        let line = '';
        for(let col=1; col<(Math.floor(rows/2)-row+1); col++){
            line += '*';
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 10-A & rows : ${rows}`)
    console.log(pattern)
}

function printPattern10B(rows) {

    let pattern = '';

    for (let row = 0; row < 2 * rows - 1; row++) {

        let line = '';

        let stars = row < rows
            ? row + 1
            : 2 * rows - row - 1;

        for (let col = 0; col < stars; col++) {
            line += '*';
        }

        pattern += line + '\n';
    }

    console.log(`Print Pattern 10-B & rows : ${rows}`);
    console.log(pattern);
}


/* 
11. Pattern
1
01
101
0101
10101
010101
1010101
*/
function printPattern11A(rows){
    let pattern = '';
    for(let row=1; row<=rows; row++){
        let line = '';
        for(let col=1; col<=row; col++){
            line += row%2 !== 0 ? col%2!==0 ? '1' : '0' : col%2!==0 ? '0' : '1'; 

            // ---------- or ----------

            // if(row%2!==0){
            //     if(col%2!==0){
            //         line += '1'
            //     }else{
            //         line += '0';
            //     }
            // }else{
            //     if(col%2!==0){
            //         line += '0';
            //     }else{
            //         line += '1';
            //     }
            // }
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 11 & rows : ${rows}`)
    console.log(pattern)
}

function printPattern11B(rows){
    let pattern = '';
    for(let row=1; row<=rows; row++){
        let line = '';
        let start = 1;
        if(row%2==0) start = 0;
        for(let col=1; col<=row; col++){
            line += start;
            start = 1-start;
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 11 & rows : ${rows}`)
    console.log(pattern)
}

/* 
12. Pattern
1        1
12      21
123    321
1234  4321
1234554321
*/
function printPattern12(rows){
    let pattern = '';
    for(let row=1; row<=rows; row++){
        let line = '';
        for(let col=1; col<=row; col++){
            line += `${col}`;
        }
        for(let col=1; col<=(2*(rows-row)); col++){
            line += ' ';
        }
        for(let col=row; col>0; col--){
            line += `${col}`;
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 12 & rows : ${rows}`)
    console.log(pattern)
}

/* 
13. Pattern
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
*/
function printPattern13(rows){
    let pattern = '';
    let num = 1;
    for(let row=0; row<rows; row++){
        let line='';
        for(let col=0; col<=row; col++){
            line += `${num} `;
            num++;
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 13 & rows : ${rows}`)
    console.log(pattern)
}

/* 
14. Pattern
A
AB
ABC
ABCD
ABCDE 
*/
function printPattern14(rows){
    let pattern = '';
    for(let row=1; row<=rows; row++){
        let line = '';
        for(let col=1; col<=row; col++){
            line += String.fromCharCode(64+col);
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 14 & rows : ${rows}`)
    console.log(pattern)
}

/* 
15. Pattern
ABCDE
ABCD
ABC
AB
A
*/
function printPattern15(rows){
    let pattern = '';
    for(let row=1; row<=rows; row++){
        let line = '';
        for(let col=1; col<=rows-row+1; col++){
            line += String.fromCharCode(64+col);
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 15 & rows : ${rows}`)
    console.log(pattern)
}

/* 
16. Pattern
A
BB
CCC
DDDD
EEEEE
*/
function printPattern16(rows){
    let pattern = '';
    for(let row=1; row<=rows; row++){
        let line = '';
        for(let col=1; col<=row; col++){
            line += String.fromCharCode(64+row);
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 16 & rows : ${rows}`)
    console.log(pattern)
}

/* 
16. Pattern
A
BB
CCC
DDDD
EEEEE
*/
function printPattern16(rows){
    let pattern = '';
    for(let row=0; row<rows; row++){
        let line = '';
        for(let col=0; col<(rows-row-1); col++){
            line = ' ' + line;
        }
        for(let col=0; col<(2*row+1); col++){
            line += String.fromCharCode(65+row);
            // line += '*'
        }
        for(let col=0; col<(rows-row-1); col++){
            line = line + ' ';
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 16 & rows : ${rows}`)
    console.log(pattern)
}

function main(){
    for(let i=0; i<input.length; i++){
        // printPattern1(input[i]);
        // printPattern2(input[i]);
        // printPattern3(input[i]);
        // printPattern4(input[i]);
        // printPattern5(input[i]);
        // printPattern6(input[i]);
        // printPattern7(input[i]);
        // printPattern8(input[i]);
        // printPattern9(input[i]);
        // printPattern10A(input[i]);
        // printPattern10B(input[i]);
        // printPattern11A(input[i]);
        // printPattern11B(input[i]);
        // printPattern12(input[i]);
        // printPattern13(input[i]);
        // printPattern14(input[i]);
        // printPattern15(input[i]);
        printPattern16(input[i]);
    }
}

main()