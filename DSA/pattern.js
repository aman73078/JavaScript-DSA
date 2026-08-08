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
function printPatter7(rows){
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

function printPatter8(rows){
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
function printPatter9(rows){
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
function printPatter10(rows){
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
    console.log(`Print Pattern 10 & rows : ${rows}`)
    console.log(pattern)
}

/* 
11. Pattern
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
*/
function printPatter11(rows){
    let pattern = '';
    for(let row=1; row<=rows; row++){
        let line = '';
        for(let col=1; col<=row; col++){
            // line += `${col%2} `
            // line = line + `${row}`
        }
        pattern += line + '\n';
    }
    console.log(`Print Pattern 11 & rows : ${rows}`)
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
function printPatter13(rows){
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
    console.log(`Print Pattern 11 & rows : ${rows}`)
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
        // printPatter8(input[i]);
        // printPatter9(input[i]);
        // printPatter10(input[i]);
        printPatter11(input[i]);
        // printPatter13(input[i]);
    }
}

main()