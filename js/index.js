class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookSection = document.querySelector('.books');
    this.bookForm = document.querySelector('.new_book');
    this.bookAuthorInput = document.querySelector('#book-author');
    this.bookTitleInput = document.querySelector('#book-title');

    this.loadSavedBooks();
    this.bookForm.addEventListener('submit', this.handleFormSubmit.bind(this));
  }

  addBook(book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  createBookCard(book) {
    return `
      <div class="book_card">
        <p class="book_title">${book.title}</p>
        <p class="book_author">${book.author}</p>
        <button class="remove_button">Remove</button>
        <hr>
      </div>
    `;
  }

  renderBook(book) {
    const bookCard = this.createBookCard(book);
    this.bookSection.insertAdjacentHTML('afterbegin', bookCard);
    const removeBookButton = this.bookSection.querySelector('.remove_button');
    if (removeBookButton) {
      removeBookButton.addEventListener('click', (event) => {
        const bookCard = event.target.parentElement;
        if (bookCard) {
          bookCard.remove();
          this.removeBook(bookCard.querySelector('.book_title').innerText);
        }
      });
    }
  }

  loadSavedBooks() {
    this.books.forEach((book) => {
      this.renderBook(book);
    });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    const bookAuthor = this.bookAuthorInput.value;
    const bookTitle = this.bookTitleInput.value;
    const book = new Book(bookTitle, bookAuthor);
    this.addBook(book);
    this.renderBook(book);
    this.bookForm.reset();
  }

}

const bookList = new BookList();