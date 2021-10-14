const books = [{
        id: 1,
        title: "The Design of EveryDay Things",
        author: "Don Norman",
        sold: false,
        price: "18.90",
    },
    {
        id: 2,
        title: "The Most Human Human",
        author: "Brian Christian",
        sold: false,
        price: "18.90",
    },
    {
        id: 3,
        title: "Prizma",
        author: "Fethullah Gülen",
        sold: false,
        price: "18.90",
    },
];

function selector(element) {
    return document.querySelector(element);
}
const button = selector("#add-book");
const bookTitle = selector("#book");
const author = selector("#author");
const price = selector("#price");
const bookList = selector("#book-list");

button.addEventListener("click", addBook);

function addBook(e) {
    e.preventDefault();
    books.push({
        id: books.length + 1,
        title: bookTitle.value,
        author: author.value,
        sold: false,
        price: price.value,
    });
    showList();
}

function showList() {
    bookList.innerHTML = "";
    for (let index = 0; index < books.length; index++) {
        let book = books[index];
        bookList.innerHTML += `
      <tr class=${book.sold ? "sold" : ""}>
        <td class="small-td">${index + 1}</td>
        <td class="small-td"><input id="${index}" ${
      book.sold ? "checked" : null
    } value="${index}" type="checkbox"/></td>
        <td class="book-title-td"><span id="${index}"> ${book.title}</span></td>
        <td class="book-title-td">${book.author}</td>
        <td class="small-td">${book.price}</td>
      </tr> `;
    }
    let checkboxes = document.querySelectorAll('[type="checkbox"]');
    for (let index = 0; index < checkboxes.length; index++) {
        checkboxes[index].addEventListener("change", changeSoldStatus);
    }
}
showList();

function changeSoldStatus() {
    let bookID = this.id;
    if (books[bookID].sold == true) {
        books[bookID].sold = false;
    } else {
        books[bookID].sold = true;
    }
    showList();
}