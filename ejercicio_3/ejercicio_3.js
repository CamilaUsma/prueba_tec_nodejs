let coins = [1,1,1,1,1];
console.log("Arreglo inicial:", coins);
function nonPossibleChange(coins) {
    coins = sortResult(coins); 
    let change = 0;
    
  for (let i=0; i< coins.length; i++){ 
    if(coins[i]>change+1){ 
        change = change+1;
    
    } else {
        change += coins[i];
    }
  }
  const sumElements = getSumElements (coins);
  if (sumElements === change){ 
    console.log ("El minimo cambio que no puedo dar es:",change+1);
  }else{
      console.log ("El minimo cambio que no puedo dar es:",change);
  }
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
    return arr;
    }

function getSumElements (coins){ 
    let coin = 0; 
    let sumElements = 0;

    for(var i = 0; i < coins.length; i++){
        coin = coins[i];
        sumElements += coin;
    }
    return sumElements;
}

  nonPossibleChange(coins);
  