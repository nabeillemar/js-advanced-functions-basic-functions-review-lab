// Your code here

function saturdayFun(arg1="roller-skate") {
    return(`This Saturday, I want to ${arg1}!`)
}


function mondayWork(arg2="go to the office") {
    return(`This Monday, I will ${arg2}.`)

}

function wrapAdjective(flair="*") {
    return function(para1="special"){
        return(`You are ${flair}${para1}${flair}!`)
    }
}

const Calculator = {
    add: function(a , b) {
        return a+b
    },
    subtract: function(a, b) {
        return a-b
    }, 
    multiply: function(a, b) {
        return a*b
    }, 
    divide: function(a, b) {
        return a/b
    }, 
}

function actionApplyer(start, fns) {
    for (let i = 0; i < fns.length; i++) {
        start = fns[i](start);
    }
    return start;

}