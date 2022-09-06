// CRUD operations

//Global variables
var row = null;

function clicksubmit() {
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered);
    if(row == null){
        insert(readData);
        msg.innerHTML = "Data Inserted!"
    }
    else{
        update();
        msg.innerHTML = "Data Updated!"
    }

}

//Create
//Retrieving data from Form
function retrieveData() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var comment = document.getElementById("comment").value;

    var arr = [title, author, comment]
    return arr;
}

//READ

//Data in local storage

function readingDataFromLocalStorage(dataEntered) {

//Storing data in local storage

var t = localStorage.setItem("title", dataEntered[0]);
var a = localStorage.setItem("author", dataEntered[1]);
var c = localStorage.setItem("comment", dataEntered[2]);

//Getting values from local to table

var t1 = localStorage.getItem("title", t);
var a1 = localStorage.getItem("author", a);
var c1 = localStorage.getItem("comment", c);

var arr = [t1, a1, c1];
return arr;

}

//INSERT
function insert(readData) {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button onclick = edit(this)>Editar</button>`;
}

//EDIT
function edit(td) {
    row = td.parentElement.parentElement;
    document.getElementById("title").value = row.cells[0].innerHTML;
    document.getElementById("author").value = row.cells[1].innerHTML;
    document.getElementById("comment").value = row.cells[2].innerHTML;

}

//UPDATE
function update() {
    row.cells[0].innerHTML = document.getElementById("title").value;
    row.cells[1].innerHTML = document.getElementById("author").value;
    row.cells[2].innerHTML = document.getElementById("comment").value;
    row = null;
}

//DELETE