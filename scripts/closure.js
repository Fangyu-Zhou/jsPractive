let fun = function() {
    let a = 1;
    let b = 2;
    return function() {
        a += 1;
        return a;
    }
}

console.log(fun()());

//Use closure to achieve private access
//This is a counter

let count = function() {
    let num = 0;
    function change(val) {
        num += val;
    }

    return {
        increament: function() {
            change(1);
        },
        decreament: function() {
            change(-1);
        },
        value: function() {
            return num;
        }
    }
}

let counter = count();

function increase() {
    counter.increament();
    document.getElementById("counter").innerHTML = counter.value();
}

function decrease() {
    counter.decreament();
    document.getElementById("counter").innerHTML = counter.value();
}


// a common mistake is to implement closure in loop