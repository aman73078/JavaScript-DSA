function findEachElementFrequency(arr,eleArr){
    const hashArray = new Array(13).fill(0);

    // precompute process
    for(let i=0; i<arr.length; i++){
        hashArray[arr[i]] += 1;
    }

    for(let i=0; i<eleArr.length; i++){
        console.log(`findEachElementFrequency: ${eleArr[i]}: `,hashArray[eleArr[i]]);
    }
}

findEachElementFrequency([1,3,5,2,3,7,5,9,7],[1,2,3,5,7,10,12]);

// Frequency of lower case characters
function freqOfLowerChar(str,eleStr){
    const hashArray = new Array(26).fill(0);
    // precompute process
    for(let i=0; i<str.length; i++){
        hashArray[str[i].charCodeAt()-'a'.charCodeAt()]++;
    }

    for(let i=0; i<eleStr.length; i++){
        console.log(`freqOfLowerChar: ${eleStr[i]}: `,hashArray[eleStr[i].charCodeAt()-'a'.charCodeAt()]);
    }
}

freqOfLowerChar('aabccccdddeffffffffg','abcdefghijk');

// Frequency of upper case characters
function feqOfCapitalChar(str,eleStr){
    const hashArray = new Array(26).fill(0);

    for(let i=0; i<str.length; i++){
        hashArray[str[i].charCodeAt()-'A'.charCodeAt()]++;
    }

    for(let i=0; i<eleStr.length; i++){
        console.log(`feqOfCapitalChar: ${eleStr[i]}: `,hashArray[eleStr[i].charCodeAt()-'A'.charCodeAt()]);
    }
}

feqOfCapitalChar('AAABBBBBCCDDDEFIMMMM','ABCDEFIJKLMZ');

// Frequency of characters
function feqChar(str,eleStr){
    const hashArray = new Array(256).fill(0);

    for(let i=0; i<str.length; i++){
        hashArray[str[i].charCodeAt()]++;
    }

    for(let i=0; i<eleStr.length; i++){
        console.log(`feqChar: ${eleStr[i]}: `, hashArray[eleStr[i].charCodeAt()]);
    }
}

feqChar('aabccccdddeffffffffg','abcdefghijk')
feqChar('AAABBBBBCCDDDEFIMMMM','ABCDEFIJKLMZ')

// Big size of array
function feqElements(arr,eleArr){
    const data = new Map();
    for(let i=0; i<arr.length; i++){
        const pre = data.get(arr[i]) || 0;
        data.set(arr[i],(pre + 1));
    }

    for(let i=0; i<eleArr.length; i++){
        console.log(`test: ${eleArr[i]}: `, data.get(eleArr[i]));
    }
}
feqElements([1,2,1,1,1,2,3,4,5,9,9,9],[1,2,3,4,5,9,12])

