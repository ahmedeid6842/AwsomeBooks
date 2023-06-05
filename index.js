import BookList from './modules/bookList.js';
import DisplaySections from './modules/displaySections.js';
import time from './modules/navTime.js';

const newBook = new BookList();
newBook.loadSavedBooks();

DisplaySections();
time();
