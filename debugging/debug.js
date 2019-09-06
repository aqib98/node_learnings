function negetiveSum(...args){
    return args.reduce((arg,total)=>{
        return total - arg;
    },0);
};

console.log(
    negetiveSum(1,5,10)
)