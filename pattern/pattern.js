/*
Must do Pattern Problems before starting DSA
This article contains all the important pattern problems that you must solve before starting DSA. This is a part of the Striver's A2Z DSA Course/Sheet.

Note: If you find the sheet useful, you can also contribute an article or solution for any problem to be published on takeuforward.org! Click here for more details.
*/

/*
*****
*****
*****
*****
*****
*/
function printPattern1(rows){
    let pattern = '';
    for(let row=0; row<rows; row++){
        for(let col=0; col<rows; col++){
            pattern += '*';
        }
        pattern += '\n';
    }
    console.log('printPattern1: ');
    console.log(pattern);
}

printPattern1(5);

function printPattern2(rows){
    let pattern = '';
    for(let row=0; row<rows; row++){
        for(let col=0; col<=row; row++){
            pattern += '*';
        }
        pattern += '\n';
    }
    console.log('printPattern2: ');
    console.log(pattern)
}

/*
****
***
**
*
*/
function printPattern3(rows){
    let pattern = '';
    for(let row=0; row<rows; row++){
        for(let col=0; col<=rows-row-1; col++){
            pattern += '*';
        }
        pattern += '\n';
    }
    console.log('printPattern3:');
    console.log(pattern);
}
printPattern3(4);

/*
1234
123
12
1
*/
function printPattern4(rows){
    let pattern = '';
    for(let row=0; row<rows; row++){
        for(let col=1; col<=rows-row-1; col++){
            pattern += `${col}`;
        }
        pattern += '\n';
    }
    console.log('printPattern4: ',rows);
    console.log(pattern);
}
printPattern4(5);
printPattern4(4);
printPattern4(3);

/*
1
22
333
4444
55555
*/
function printPatter5(rows){
    let pattern = '';
    for(let row=1; row<=rows; row++){
        for(let col=1; col<=row; col++){
            pattern += `${row}`;
        }
        pattern += '\n';
    }
    console.log('printPatter5:');
    console.log(pattern);
}

printPatter5(5);

/*
*****
****
***
**
*
*/
function printPattern6(rows){
    let pattern = '';
    for(let row=1; row<=rows; row++){
        for(let col=1; col<=rows-row+1; col++){
            pattern += '*';
        }
        pattern += '\n';
    }
    console.log('printPatter6:');
    console.log(pattern);
}

printPattern6(5);


/*
12345
1234
123
12
1
*/
function printPattern7(rows){
    let pattern = '';
    for(let row=1; row<=rows; row++){
        for(let col=1; col<=rows-row+1; col++){
            pattern += `${col}`;
        }
        pattern += '\n';
    }
    console.log('printPatter7:');
    console.log(pattern);
}
printPattern7(5);



/*
*****
 ****
  ***
   **
    *
*/
function printPattern8(rows){
    let pattern = '';
    for(let row = 1; row<=rows; row++){
        let line = '';
        for(let col=1; col<row; col++){
            line = " " + line;
        }
        for(let col=1; col<=rows-row+1; col++){
            line += "*";
        }
        pattern += line + '\n';
    }
    console.log('printPattern8:');
    console.log(pattern);
}
printPattern8(5);

/*
    *
   **
  ***
 ****
*****
*/
function printPattern9(rows){
    let pattern = '';
    for(let row=1; row<=rows; row++){
        let line = '';
        for(let col=1; col<=rows-row; col++){
            line += ' ';
        }
        for(let col=1; col<=row; col++){
            line += '*';
        }
        pattern += line + '\n';
    }
    console.log('printPattern9:');
    console.log(pattern);
}

printPattern9(5);

function printPattern10(rows){
    let pattern = '';
    for(let row=0; row<rows; row++){
        let line = '';
        for(let col=0; col< rows-row-1; col++){
            line += " ";
        }

        for(let col=0; col<(2*row+1); col++){
            line += '*';
        }

        for(let col=0; col< rows-row-1; col++){
            line += ' ';
        }
        pattern += line + '\n';
    }
    // console.log('printPattern10:');
    console.log(pattern);
}

printPattern10(5);
printPattern10(6);

function printPattern11(rows){
    let pattern = '';
    for(let row=0; row<rows; row++){
        let line = '';
        for(let col=0; col<row; col++){
            line += ' ';
        }
        for(let col=0; col<(2*rows-(2*row+1)); col++){
            line += '*';
        }
        for(let col=0; col<row; col++){
            line += ' ';
        }
        pattern += line + '\n';
    }
    // console.log('printPattern11:');
    console.log(pattern);
}
printPattern11(5);

function printPattern12(rows){
    printPattern10(rows);
    printPattern11(rows);
}
printPattern12(5);