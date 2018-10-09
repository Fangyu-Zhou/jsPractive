

function move(from, to) {
    let curBox = document.getElementById(from);
    let toBox = document.getElementById(to);
    let set = new Set();
    for (let i = 0; i < toBox.options.length; i ++) {
        set.add(toBox.options[i].value);
    }
    
    let index = curBox.selectedIndex;
    if (index == -1) {
        alert("please make a choice");
    }
    else {
        let curElement = curBox.options[index];
        console.log(curElement);
        if (!set.has(curElement.value)) {
            toBox.appendChild(curElement);
        }
    }
    
}