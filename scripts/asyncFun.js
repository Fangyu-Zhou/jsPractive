async function show() {
    let promise = new Promise(function(resolve) {
        setTimeout(() => {
            resolve("success!");
        }, 5000)
    });

    let res = await promise;
    console.log(res);
    console.log("it will be excured until the promise resolved");

      
}


show();