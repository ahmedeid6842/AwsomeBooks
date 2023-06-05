import BookList from './modules/bookList.js';
import DisplaySections from './modules/displaySections.js';
import timeManagement from './modules/navTime.js';

// create instance from BookList class which resposible for addition and removal of books
const newBook = new BookList();
newBook.loadSavedBooks();

// call display section function to manage section display and hidden
DisplaySections();

// call timeManagement function to manage time at the nav bar
timeManagement();
