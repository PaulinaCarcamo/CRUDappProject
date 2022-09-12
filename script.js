//CRUD operations: Create, read, update and delete
//Saving data in Local Storage

//Global variables

let form = document.getElementById("form");
let title = document.getElementById("title");
let author = document.getElementById("author");
let comment = document.getElementById("comment");
let msg = document.getElementById("msg");
let card = document.getElementById("card");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (title.value === "" || author.value === "") {
        console.log("failure");
        msg.innerHTML = "¡Datos incompletos!";

    } else {
        console.log("success");
        msg.innerHTML = "¡Libro agregado!";
        acceptData();
    }

    setTimeout(() => msg.innerHTML = "", 5000)
};

//Adding new books by title, author and comment

let data = [{}];

let acceptData = () => {
    data.push({
        title: title.value,
        author: author.value,
        comment: comment.value
    });

    localStorage.setItem("data", JSON.stringify(data));

    console.log(data);
    createBook();
};

let createBook = () => {
    card.innerHTML = "";
    data.map((x, y) => {
        return (card.innerHTML += `
    <div id=${y} class="box">
          <h4>${x.title}</h4>
          <i>${x.author}</i>
          <p>${x.comment}</p>
  
          <span class="options">
          <button onclick = editBook(this)>Editar</button>
          <button onclick = deleteBook(this); function>Borrar</button>
          </span>
        </div>
    `);
    });

    resetForm();
};



// var row = null;

// function clicksubmit() {
//     var dataEntered = retrieveData();
//     var readData = readingDataFromLocalStorage(dataEntered);

//     // saveDataInLS(dataEntered)

//     if (dataEntered == false) {
//         msg.innerHTML = "¡Datos incompletos!"
//     }
//     else {
//         if (row == null) {
//             insert(readData);
//             msg.innerHTML = "¡Libro agregado!"
//         }
//         else {
//             update();
//             msg.innerHTML = "¡Libro actualizado!"
//         }

//     }

//     setTimeout(() => msg.innerHTML = "", 8000)
// }

// // document.getElementById("bookForm").reset();


// //CREATE
// //Retrieving data from Form

// function retrieveData() {
//     var title = document.getElementById("title").value;
//     var author = document.getElementById("author").value;
//     var comment = document.getElementById("comment").value;

//     var arr = [title, author, comment];
//     if (arr.includes("")) {
//         return false;
//     } else {
//         return arr;
//     }
// }

// READ


// function readingDataFromLocalStorage(dataEntered) {

//     //Storing data in local storage

//     var t = localStorage.setItem("title", dataEntered[0]);
//     var a = localStorage.setItem("author", dataEntered[1]);
//     var c = localStorage.setItem("comment", dataEntered[2]);

//     //Getting values from local to table

//     var t1 = localStorage.getItem("title", t);
//     var a1 = localStorage.getItem("author", a);
//     var c1 = localStorage.getItem("comment", c);

//     var arr = [t1, a1, c1];
//     return arr;


//     //INSERT

//     function insert(readData) {
//         var row = table.insertRow();
//         row.insertCell(0).innerHTML = readData[0];
//         row.insertCell(1).innerHTML = readData[1];
//         row.insertCell(2).innerHTML = readData[2];
//         row.insertCell(3).innerHTML = `<button onclick = edit(this)>Editar</button>
//                                     <button onclick = remove(this)>Borrar</button>`;
//     }

//     //EDIT
//     function edit(td) {
//         row = td.parentElement.parentElement;
//         document.getElementById("title").value = row.cells[0].innerHTML;
//         document.getElementById("author").value = row.cells[1].innerHTML;
//         document.getElementById("comment").value = row.cells[2].innerHTML;

//     }

//     //UPDATE
//     function update() {
//         row.cells[0].innerHTML = document.getElementById("title").value;
//         row.cells[1].innerHTML = document.getElementById("author").value;
//         row.cells[2].innerHTML = document.getElementById("comment").value;
//         row = null;
//     }

//     // DELETE
//     function remove(td) {
//         // var answer = confirm("Are you sure you want to delete this record?")
//         // if (answer == true) {

//         row = td.parentElement.parentElement;
//         document.getElementById("table").deleteRow(row.rowIndex);

//     }
// }