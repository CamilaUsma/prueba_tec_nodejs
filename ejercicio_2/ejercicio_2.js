const s = 66;

function evaluateArray (){
    let numbers = [-6, -5, 0, 5, 6];
    console.log("Arreglo inicial:", numbers);
    let result = [];
    for(let i =0; i<numbers.length; i++){
        let number = numbers[i]; 
        let numbersquares = Math.pow(number,2)
        if (numbersquares < s){
            result.push(numbersquares);
        }
}
sortResult (result);
}
function sortResult (arr){
    
for (let i = 0; i < arr.length; i++) { 
  for (let j = i + 1; j < arr.length; j++) { 
   
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log("Arreglo Resultante", arr);
}



evaluateArray()