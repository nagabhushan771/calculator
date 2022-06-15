const dispEle = document.getElementById('display');

function clickingxyz(symbol){
    console.log(symbol);
    var curStr = dispEle.innerHTML;
    if(curStr === "Invalid Expression"){
        curStr = "";
    }
    var lastEle = curStr.substring(curStr.length-1);
    console.log(lastEle);
    //checking for 2 adjucent operator
    if(isOp(lastEle) && isOp(symbol)){
        curStr = curStr.substring(0, curStr.length-1);
    }

    //if there is nothingin the display screen we should not be able to add 0 , +, *, /
    if((curStr == "" && isOp(symbol) && opOtherThanMinus(symbol)) || (curStr == "" && symbol == '0'))
        dispEle.innerHTML = curStr;
    else
        dispEle.innerHTML = curStr + symbol;
}

function opOtherThanMinus(op){
    if(op === '+'  || op==='*' || op === '/'){
        return true;
    }
    return false;
}

function isOp(op){
    if(op === '+' || op === '-' || op==='*' || op === '/')
        return true;
    return false;
}

function evalxyz(){
    // console.log(eval(""));
    var evalStr = dispEle.innerHTML;
    var res;
    try{
        res = eval(evalStr);
    }
    catch(e){
        res = "Invalid Expression";
    }
    dispEle.innerHTML = res;
}

function clearxyz(){
    dispEle.innerHTML = "";
}

function backxyz(){
    var dispStr = dispEle.innerHTML;
    dispEle.innerHTML = dispStr.substring(0, dispStr.length-1);
}