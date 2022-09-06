// CRUD operations

//Global variables

function clicksubmit() {
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered);
    insert(readData)

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
var a1 = localStorage.getItem("title", a);
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
    row.insertCell(3).innerHTML = `<button onclick = edit(this)>Editar</button><button onclick = remove(this)>Borrar</button>`;
}