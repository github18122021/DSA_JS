function nearlySimilarRectangles(sides) {
    // Write your code here
    let results = [];
    
    for(let i = 0; i < sides.length; i++) {     
        results.push(sides[i][0] / sides[i][1]);
    }
    
    console.log(results);
    // [3,2,4,3,3];
    
    let temp = {};
    
    for(let i = 0; i < results.length; i++) {
        let temp_prop = JSON.stringify(results[i]);
        
        if(temp[temp_prop]) {
            temp[temp_prop]++;
        } else {
            temp[temp_prop] = 1;
        }
        
        
    }
    
    console.log(temp);
    let finalCount = 0;
    
    for(let key in temp) {
        finalCount += temp[key];
    }
    
    return finalCount;
}

console.log(nearlySimilarRectangles([[4,8], [15,30], [25,50]]));