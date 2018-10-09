function toDo() {
    let p = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("it's 2 seconds");
        }, 2000);
    });

    p.then(change);
}

let change = function(result) {
    let para = document.getElementById("content");
    para.innerHTML = result;
    document.getElementById("toDoList").style.backgroundColor = getRandomColor();
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("it's another 2 seconds");
        }, 2000);
    }).then(change);
    // document.getElementById("toDoList").innerHTML = "clicked";
}

var getRandomColor = function(){
    return '#'+(Math.random()*0xffffff<<0).toString(16);
    // let color = "#";
    // let s = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // console.log(s)
    // for (let i = 0; i < 6; i ++) {
    //     let ch = s[Math.floor(Math.random() * 16)];
    //     console.log(ch);
    //     color += ch;
    // }
    
    // console.log(color)
    // return color;
}
