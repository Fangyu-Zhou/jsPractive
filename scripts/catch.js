

let p = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(new Error("!!!!"));
         } ,200)
    });

// p.then(function() {
//     console.log(p)
// });

p.catch(function(err) {
    console.log(p);
})