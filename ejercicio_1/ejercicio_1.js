const s = 6;

function evaluateArrayNumbers(){
    let numbers = [1,2,3,45,66,67,65]; 
    console.log("Arreglo inicial:", numbers);
    let result = []; 
    if(numbers.length > 100){  
        console.log("El tamaño del arreglo debe ser igual o menor a 100");
    }else{
        for(let i =0; i<numbers.length; i++){ 
            let number = numbers[i]; 
            let numberToString = number.toString()  
            if(numberToString.length > 1){ 
                let evaluateNumber = deleteSNumber(numberToString); 
                if(evaluateNumber !== ""){ 
                    let newNumber = parseInt(evaluateNumber); 
                    result.push(newNumber);
                }
            }else{
                if(number < s){
                    result.push(number); 
                }
            }
        }
        sortArray(result);
    }
    }

function deleteSNumber(number){ 
    let result = [];
    for(let i=0; i<number.length; i++){ 
        let convertNumber = parseInt(number[i]);
        if(convertNumber < s){ 
            result.push(convertNumber) 
        }
    }
    return convertArrayToString(result) 
    
}

function convertArrayToString(arrayNumber){
    let number = "";
    for(let i=0; i<arrayNumber.length ; i++){
        number+=arrayNumber[i]
    }
    return number
}

function sortArray(arrayNumber){ 
    let result = [];
    for(let i = arrayNumber.length -1 ; i>= 0 ; i--){
        result.push(arrayNumber[i])
    }
    console.log("Arreglo resultante:",result);
}

evaluateArrayNumbers()