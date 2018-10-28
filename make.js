const make = function(...args){    
    if( typeof(args[args.length - 1]) !== 'function'){        
        return (...newArgs) => make(...args.concat(newArgs));
    }else{
        let reducer = args.pop()
        return args.reduce(reducer);
    } 
}