// let numbers = [-5,2,4,-15,-20];

// let negnums = 0;

// function negNumbers(){

//     for(let i = 0; i < numbers.length; i++){
//         if (numbers[i] < 0){
//             negnums++;}
//     }
//     console.log (negnums);
// }
// negNumbers();

let numbers = [10,20,20,30]

// let getAverage = 0;

// function getAverage(nums){
//     let avarage = 0;
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         sum +=nums[i];
//     }
//     return sum/numbers.length;
// }

// let nums =[10,20,40,1200,5]

// function addFirstAndLast(list){
//     var arraySum = 0;

//     for(let i = 0; i <list.length; i++){
//         if(list[i] === list[0]){
//             arraySum += list[0]
//         }
//         else if(list[i] === list[list.length-1]){
//             arraySum += list[list.length-1]
//         };
        
//     }
//     console.log (arraySum)
// }
// addFirstAndLast (nums);


// let nums = [10,20,30,40,50,60]

// function halfArray(arraylist){
//     for(let i=0; i<(arraylist.length) /2; i++){
//         console.log (arraylist[i]);
//     }
    
// }
// halfArray(nums);

let nums = [1,2,3,4,5]

function descendingNum(array){
    for(let i =0; i<array.length; i++){
        if(array[i] > array[i+1]){
            return false;
        }
    }
    return true;
}