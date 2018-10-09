let flag = false;

function startCount() {
    flag = false;
    let promise = new Promise(function(resolve, reject) {
        if (flag) reject();
        setTimeout(() => {
            resolve(parseInt(document.getElementById("count").innerHTML));
        }, 1000);
    })
    promise.then(con);
}

let con = function(res) {
    // console.log(res+1);
    document.getElementById("count").innerHTML = res + 1;
    return new Promise(function(resolve, reject) {
        if (flag) reject();
        setTimeout(() => {
            resolve(res + 1);
        }, 1000);
    }).then(con);
}

// startCount();

function stopCount() {
    flag = true;
}