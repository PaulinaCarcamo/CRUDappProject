//CRUD operations: Create, read, update and delete
//Saving data in Local Storage

//Global variables

let form = document.getElementById("form");
let title = document.getElementById("title");
let author = document.getElementById("author");
let comment = document.getElementById("comment");
let msg = document.getElementById("msg");
let card = document.getElementById("card");
// let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

// Validation messages

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

//Create and read: 
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


// Delete books's information

let deleteBook = (e) => {

    let modal = document.getElementById('modal');
    let closeModal = document.getElementById('close-button');

    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);

    // msgconfirm.innerHTML = "LIBRO ELIMINADO"
    // setTimeout(() => msgconfirm.innerHTML = "", 5000)

    modal.showModal();

    closeModal.addEventListener('click', () => {
        modal.close();
    
        })
};


//Update book's information

let editBook = (e) => {
    let selectedBook = e.parentElement.parentElement;

    title.value = selectedBook.children[0].innerHTML;
    author.value = selectedBook.children[1].innerHTML;
    comment.value = selectedBook.children[2].innerHTML;

    // deleteBook(e);

    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);

};

//Clear form

let resetForm = () => {
    title.value = "";
    comment.value = "";
    author.value = "";
};

(() => {
    data = JSON.parse(localStorage.getItem("data")) || []
    console.log(data);
    createBook();
})();