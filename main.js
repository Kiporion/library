// Library display in html (possibly grid)

let myLibrary = [];
// Main Object
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};
// Toggle Read/Not Read button
function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

// Remove Book button
function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

// Rendering The library to html
function render() {
  let library = document.querySelector("#library");
  library.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = `<div class="card-header">
    <h3 class="title">${book.title}</h3>
    <h5 class="author">${book.author}</h5>
    </div>
    <div class="card-body">
    <p>${book.pages}</p>
    <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
    <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
    <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
    </div>`;
    library.appendChild(bookEl);
  }
}

// Adding books from form into the Library array
function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

const newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });
