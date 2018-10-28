const sumOfOtther = function(arr){
    let answer = [];
    arr.forEach(function(item,i,arr){
        let number = 0;
        for(let j = 0, len = arr.length; j < len; j++){            
            if(j != i) number += arr[j];            
        }
        answer.push(number);
    })
    return answer;
}