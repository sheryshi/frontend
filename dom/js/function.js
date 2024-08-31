console.log("hii i'm shreyashi and i'm a web developer")

function introduceme(){
    console.log("hii i'm shreyashi and i'm a web developer")
    console.log("hii i'm shreyashi and i'm a web developer")
    console.log("hii i'm shreyashi and i'm a web developer")
    console.log("hii i'm shreyashi and i'm a web developer")
    console.log("hii i'm shreyashi and i'm a web developer")
    return 787

}

function introduction(name){
    console.log(`hi my name is ${name}`)
}


function sum(a,b){
    return a+b;
}

function add(){
    

}

 const object1={
    add:function(a,b){
        return a+b;
    },

    sub:function(a,b){
      return a-b
    }
}


// arrow function

const square=(a,b)=>{
    return a+b;
}


//for each loop
const fruits=['banana','apple','papaya','mango']

fruits.forEach(function(){
    console.log("hii")
})

fruits.forEach(()=>{
    console.log("hi")
})

// map creates array and store the value in the array

months=['jan','feb','march']
months.map((month)=>{
    return month
})