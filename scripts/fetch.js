let p = fetch("https://jsonplaceholder.typicode.com/todos");
p.then(function(result) {
    return result.json();
}).then(function(data) {
    let table = document.getElementById("tb");
    console.log(data.length);

    for (let i = 0; i < data.length; i ++) {
        // console.log(i)
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        let txtId = document.createTextNode(data[i].id);
        let txtTitle = document.createTextNode(data[i].title);

        td1.appendChild(txtId);
        td2.appendChild(txtTitle);

        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);
    }
})