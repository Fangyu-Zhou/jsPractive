let lSet = new Set();
let rSet = new Set();
let lList = document.getElementById("list1").getElementsByTagName("li");
let rList = document.getElementById("list2").getElementsByTagName("li");
for(let i = 0; i < rList.length; i ++) {
    rSet.add(rList[i].innerHTML);
}

for (let i = 0; i < lList.length; i ++) {
    lSet.add(lList[i].innerHTML);
}

function init() {
    for (let i = 0; i < lList.length; i ++) {
        let curItem = lList[i];
        curItem.addEventListener('dblclick', function() {
            addToRight(curItem);
        });
    }
    
    for (let i = 0; i < rList.length; i ++) {
        let curItem = rList[i];
        rList[i].addEventListener('dblclick', function(){
            addToLeft(curItem);
        });
    }
}

function addToRight(curItem) {
    let newText = curItem.innerHTML
    if (!rSet.has(newText)) {
        rSet.add(newText);
        lSet.delete(newText);

        document.getElementById("list1").removeChild(curItem);
        let newLi = document.createElement("li");
        newLi.innerHTML = newText;
        document.getElementById("list2").appendChild(newLi);
        newLi.addEventListener("click", function() {
            addToLeft(newLi);
        })
    }
}

function addToLeft(curItem) {
    let newText = curItem.innerHTML
    if (!lSet.has(newText)) {
        lSet.add(newText);
        rSet.delete(newText);

        document.getElementById("list2").removeChild(curItem);
        let newLi = document.createElement("li");
        newLi.innerHTML = newText;
        document.getElementById("list1").appendChild(newLi);
        newLi.addEventListener("click", function() {
            addToRight(newLi);
        })
    }
}

init();