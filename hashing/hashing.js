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

/*
Find the highest/lowest frequency element
Problem Statement: Problem Statement: Given an array of size N. Find the highest and lowest frequency element.
*/

function findHighestLowestFeq(arr,searchEle){
    const hashArray = new Array(10).fill(0);

    for(let i =0; i<arr.length; i++){
        hashArray[arr[i]]++;
    }
    let highestValue = hashArray[searchEle[0]];
    let highestEle = searchEle[0];
    let lowestValue = hashArray[searchEle[0]];
    let lowestEle = searchEle[0];
    for(let i=0; i<searchEle.length; i++){
        if(hashArray[searchEle[i]] > highestValue){
            highestValue = hashArray[searchEle[i]];
            highestEle = searchEle[i];
        }

        if(hashArray[searchEle[i]] < lowestValue){
            lowestValue = hashArray[searchEle[i]];
            lowestEle = searchEle[i];
        }
    }
    console.log(`findHighestLowestFeq: highest element:- ${highestEle}- times: ${highestValue} lowest element:- ${lowestEle}- times: ${lowestValue}`);

}

findHighestLowestFeq([1,2,2,3,3,3,4,4,1,5,7,7,9,9,9,9,9],[1,2,3,4,6,5,7,9])

function findHighestLowestFeqMap(arr,searchEle){
    const hashArray = new Map();

    for(let i=0; i<arr.length; i++){
        const pre = hashArray.get(arr[i]) ?? 0;
        hashArray.set(arr[i], (pre+1));
    }

    let highestValue = hashArray.get(searchEle[0]);
    let highestEle = searchEle[0];

    let lowestValue = hashArray.get(searchEle[0]);
    let lowestEle = searchEle[0];
    for(let i=0; i<searchEle.length; i++){
        const frequency = hashArray.get(searchEle[i]) ?? 0;
        if(frequency > highestValue){
            highestValue = frequency
            highestEle = searchEle[i];
        }

        if(frequency < lowestValue){
            lowestValue = frequency
            lowestEle = searchEle[i];
        }
    }

    console.log(`findHighestLowestFeq: highest element:- ${highestEle}- times: ${highestValue} lowest element:- ${lowestEle}- times: ${lowestValue}`);
}

findHighestLowestFeqMap([1,2,2,3,3,3,4,4,1,5,7,7,9,9,9,9,9],[1,2,3,4,6,5,7,9])