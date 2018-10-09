let lSet = new Set();
let rSet = new Set();
let l1 = document.getElementById("l1").getElementsByTagName("li");
let l2 = document.getElementById("l2").getElementsByTagName("li");

for (let i = 0; i < l1.length; i ++) {
    lSet.add(l1[i].innerHTML);
}
for (let i = 0; i < l2.length; i ++) {
    rSet.add(l2[i].innerHTML);
}

function init() {
    for (let i = 0; i < l1.length; i ++) {
        let curItem = l1[i];
        curItem.addEventListener('click', function() {
            addToRight(curItem);
        })
    }

    for (let i = 0; i < l2.length; i ++) {
        let curItem = l2[i];
        curItem.addEventListener('click', function() {
            addToLeft(curItem);
        })
    }
}

function addToRight(curItem) {
    let newText = curItem.innerHTML;
    if (!rSet.has(newText)) {
        rSet.add(newText);
        lSet.delete(newText);
        document.getElementById("l1").removeChild(curItem);
        let newLi = document.createElement("li");
        newLi.innerHTML = newText;
        document.getElementById('l2').appendChild(newLi);
        newLi.addEventListener('click', function() {
            addToLeft(newLi);
        })
    }
}

function addToLeft(curItem) {
    let newText = curItem.innerHTML;
    if (!lSet.has(newText)) {
        lSet.add(newText);
        rSet.delete(newText);
        document.getElementById("l2").removeChild(curItem);
        let newLi = document.createElement("li");
        newLi.innerHTML = newText;
        document.getElementById('l1').appendChild(newLi);
        newLi.addEventListener('click', function() {
            addToRight(newLi);
        })
    }
}

init();