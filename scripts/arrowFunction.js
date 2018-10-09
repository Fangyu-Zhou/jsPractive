function fun1() {
    console.log(this); //window
}

function fun2() {
    (() => {
        console.log(this); //window
    })()
}

function fun3() {
    () => {
        console.log(this); // not excuted(not called)
    }
}

let a = {
    fun: function() {
        console.log(this); // object a
    }
}

let b = {
    fun: function() {
        (() => {
            console.log(this); // object b
        })()
    }
}

 let c = {
     fun: function(cb) { //cb is a normal function
        cb();   // window
     }
 }

 let d = {
     fun: function(cb) { // cb is a arrow function
        cb();
     }
 }

 



