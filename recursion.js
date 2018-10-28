const recursion = function(obj){
    let currentLayer = [];
    let endArrs = [];
    for(param in obj){
        if( typeof( obj[param] ) === 'object'){
            let add = recursion(obj[param])
            if(endArrs.length != 0){
                for(let j = 0, len = add.length; j < len; j++){
                    add[j] = endArrs[j].concat(add[j]);
                }
            }
            endArrs = add;
        } else {
            currentLayer.push( obj[param] );
        }
    }
    let answer = [currentLayer].concat(endArrs)
    return answer;
}