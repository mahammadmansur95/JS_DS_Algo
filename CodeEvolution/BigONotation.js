//BigO notation describes the complexity of an algorithm using algebraic terms

//lets  say n = 4
function summation(n){ 
    let sum = 0; // -> 1 time
    for(let i = 1; i <= n; i++){
        sum += i; // ->  depends on n = 4
    }
    return sum; // -> 1 time
}
// so the total is n+2, we can simply it by eliminating 2 as there will  be no effect => n(Liner)


/* Better to see some where else and learn BigO */