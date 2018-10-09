function replace() {
    let s1 = document.getElementById("t1").value;
    let s2 = document.getElementById("t2").value;
    let res = replaceStr(s1, s2);
    document.getElementById("replaceResult").innerHTML = "Replace result: " + "'"+ res + "'";
}

function replaceStr(s1, s2) {
    let set = new Set();
    for(item of s1.split("")) {
        set.add(item);
    }

    console.log(set);
    let res = s2.split("");
    res.forEach((letter) => {
        if (set.has(letter)) {
            s2 = s2.replace(letter,"_");
            // letter = "_";
        }
    })

    return s2;
}
// replaceStr(s1, s2);
// console.log(replaceStr(s1, s2));