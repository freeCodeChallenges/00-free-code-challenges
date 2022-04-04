function solution(s) {
    let result = ''
    
    let arr = s.split(' ');
    let arrTarget = [...arr]
    
    
    for (let i = 0; i < arr.length; i++){
        arrTarget.splice(i, 1);
        let count = 1;
        for (let j = 0; j <arrTarget.length; j++){
            if (arr[i] == arrTarget[j]) count++
        } 
        result += arr[i] + '(' + count + ')' + ' ';             
    }
    return result;
    
}

s = "goat goat sheep dog dog"

console.log(solution(s)); 