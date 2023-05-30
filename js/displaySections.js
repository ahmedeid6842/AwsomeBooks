const navItemList = document.querySelector('.nav-item.list');
const navItemAdd = document.querySelector('.nav-item.add-new');
const navItemContact = document.querySelector('.nav-item.contact');
const listBook = document.querySelector('.book-list');
const addBook = document.querySelector('.add-section');
const contactSection = document.querySelector('.contact-section');

navItemList.addEventListener('click', () => {
  addBook.classList.add('hidden');
  contactSection.classList.add('hidden');
  listBook.classList.remove('hidden');
});

navItemAdd.addEventListener('click', () => {
  contactSection.classList.add('hidden');
  listBook.classList.add('hidden');
  addBook.classList.remove('hidden');
});

navItemContact.addEventListener('click', () => {
  addBook.classList.add('hidden');
  listBook.classList.add('hidden');
  contactSection.classList.remove('hidden');
});