function find(n){
    
 
        
        if(n === 0 ){
            return 1;
        }
        
        return n * find(n-1);
        
    
}
console.log(find(5));
//output : 120
