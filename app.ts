
const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2')as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResults : Array<number> =[];
const stringResults : string[]=[];
type numOrString =number |string;
type Result = { val:number; timestamp:Date}

interface ResultObj{
    val:number;
    timestamp:Date;
}
function add (num1:numOrString, num2:numOrString)
{
    if(typeof num1==='number' && typeof num2==='number')
    {
        return num1 +num2;
    }
    else if(typeof num1 ==='string'&& typeof num2 ==='string')
    {
        return num1 +'' + num2;
    }
    return +num1 + +num2;
}

function printResult(resultObj:ResultObj)
{
console.log(resultObj.val);

}
buttonElement?.addEventListener('click',()=>{
    const num1 =num1Element.value;
    const num2 =num2Element.value;
    const result= add(+num1,+num2);
numResults.push(result as number);
    const stringResult =add(num1,num2);
    stringResults.push(stringResult as string);
 
    printResult({val: result as number,timestamp: new Date()});
console.log(numResults,stringResults);


})

const myPromise = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve ('it worked');
    },1000)
});

myPromise.then((result)=>{
    console.log(result);
    
})
