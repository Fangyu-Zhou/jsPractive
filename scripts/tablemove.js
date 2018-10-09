let lList = document.getElementById("list1").getElementsByTagName("li");
let lSet = new Set();
let rSet = new Set();
let rList = document.getElementById("list2").getElementsByTagName("li");
for(let i = 0; i < rList.length; i ++) {
    rSet.add(rList[i].innerHTML);
}

for (let i = 0; i < lList.length; i ++) {
    lSet.add(lList[i].innerHTML);
}

function moveToRight() {
    for (let i = 0; i < lList.length; i ++) {
        let curItem = lList[i];
        curItem.addEventListener("dblclick", function() {
            let newText = curItem.innerHTML;
            console.log(newText);
            if (!rSet.has(newText)) {
                rSet.add(newText);
                lSet.delete(newText)
                document.getElementById("list1").removeChild(curItem);
                let newLi = document.createElement("li")
                newLi.innerHTML = newText;
                document.getElementById("list2").appendChild(newLi);
                console.log(lSet);
                console.log(rSet);
            }
        });
        // console.log(lList[i].innerHTML);
        
    }
}

function moveToLeft() {
// rightToLeft
    for (let i = 0; i < rList.length; i ++) {
        let curItem = rList[i];
        curItem.addEventListener("dblclick", function() {
            let newText = curItem.innerHTML;
            console.log(newText);
            if (!lSet.has(newText)) {
                lSet.add(newText);
                rSet.delete(newText);
                document.getElementById("list2").removeChild(curItem);
                let newLi = document.createElement("li")
                newLi.innerHTML = newText;
                document.getElementById("list1").appendChild(newLi);
                console.log(lSet);
                console.log(rSet);
            }
        });
        // console.log(lList[i].innerHTML);
        
    }
}

moveToLeft();
moveToRight();








