const bookSection = document.querySelector('.books');
const bookForm = document.querySelector('.new_book');
const bookAuthorInput = document.querySelector('#book-author');
const bookTitleInput = document.querySelector('#book-title');

function createBook(title, author) {
    const bookCard = `
        <div class="book_card">
            <p class="book_title">${title}</p>
            <p class="book_author">${author}</p>
            <button class="remove_button">Remove</button>
            <hr>
        </div>
    `;

    bookSection.insertAdjacentHTML('afterbegin', bookCard);
    // Add an event listener to the remove button element
    const removeBookButton = bookSection.querySelector('.remove_button');
    if (removeBookButton) {
        removeBookButton.addEventListener('click', (event) => {
            // Get the book card element
            const bookCard = event.target.parentElement;

            // Check if the book card exists before attempting to remove it
            if (bookCard) {
                // Remove the book card element from the DOM
                bookCard.remove();

                // Remove the book from the local storage
                let books = JSON.parse(localStorage.getItem('books')) || [];
                books = books.filter((book) => book.title !== bookCard.querySelector('.book_title').innerText);
                localStorage.setItem('books', JSON.stringify(books));
            }
        });
    }

}

function loadSavedBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.forEach(({ title, author }) => {
        createBook(title, author);
    });
}

loadSavedBooks();

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const bookAuthor = bookAuthorInput.value;
    const bookTitle = bookTitleInput.value;

    let books = JSON.parse(localStorage.getItem('books')) || [];
    books.push({ title: bookTitle, author: bookAuthor });

    localStorage.setItem('books', JSON.stringify(books));

    createBook(bookTitle, bookAuthor);

    bookForm.reset();

})

