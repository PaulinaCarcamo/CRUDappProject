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

//Data validation

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

//Read data

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

//Create new element

let createBook = () => {
    card.innerHTML = "";
    data.map((x, y) => {
        return (card.innerHTML += `
    <div id=${y}>
          <h4>${x.title}</h4>
          <i>${x.author}</i>
          <p>${x.comment}</p>
  
          <span>
          <button class="editBtn" onclick = editBook(this)>Editar</button>
          <button class="deleteBtn" onclick = deleteBook(this)>Borrar</button>
          </span>
        </div>
    `);
    });

    resetForm();
};

// Delete elements

let deleteBook = (e) => {
    let modal = document.getElementById('modal');
    let closeModal = document.getElementById('closeBtn');

    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);

    modal.showModal();
    closeModal.addEventListener('click', () => {
        modal.close();
    })
};

//Update information

let editBook = (e) => {
    let selectedBook = e.parentElement.parentElement;

    title.value = selectedBook.children[0].innerHTML;
    author.value = selectedBook.children[1].innerHTML;
    comment.value = selectedBook.children[2].innerHTML;

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
