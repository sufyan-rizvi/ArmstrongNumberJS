function isArmstrongNumber(){
    p = document.getElementById("result")
    let len;
    let result = 0;
    var n1 = f1.n1.value
    len = n1.length
    var n2 = parseInt(n1)

    while (n2>0){
        result += (n2 % 10) ** len 
        n2 = Math.trunc(n2/ 10)        
    }

    if(result == n1){
        p.innerHTML = "The number is an armstrong Number"
    }
    else{
        p.innerHTML = "The number is not an armstrong Number"
    }



    
}