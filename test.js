function sumX(a,b,...args)
{ 
    let numSum = 0; 
    let product = a*b; 
    for(const arg of args)
    {
         numSum+=arg; 
        }
         return[product,numSum]; 
}