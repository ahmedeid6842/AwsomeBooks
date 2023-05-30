// Select all the DOM elements needed
const navItemList = document.querySelector('.nav-item.list');
const navItemAdd = document.querySelector('.nav-item.add-new');
const navItemContact = document.querySelector('.nav-item.contact');
const listBook = document.querySelector('.book-list');
const addBook = document.querySelector('.add-section');
const contactSection = document.querySelector('.contact-section');

// Define functions to show/hide sections
function showListSection() {
  addBook.classList.add('hidden');
  contactSection.classList.add('hidden');
  listBook.classList.remove('hidden');
}

function showAddSection() {
  contactSection.classList.add('hidden');
  listBook.classList.add('hidden');
  addBook.classList.remove('hidden');
}

function showContactSection() {
  addBook.classList.add('hidden');
  listBook.classList.add('hidden');
  contactSection.classList.remove('hidden');
}

// Add event listeners to the nav items
navItemList.addEventListener('click', showListSection);
navItemAdd.addEventListener('click', showAddSection);
navItemContact.addEventListener('click', showContactSection);