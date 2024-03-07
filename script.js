const dialog = document.querySelector('dialog');
const newBookBtn = document.querySelector('.new-book')
const closeBtn = document.querySelector('.close-button');
const addBookBtn = document.querySelector('.add-book');
const bookList = document.querySelector('.books');


function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

//examples of inputs
let theHobbit=new Book('The Hobbit', 'J.R.R. Tolkein',295, 'No');
let hitch= new Book("The Hitchiker's Guide to the Galaxy", 'Douglas Adams', 216, 'Yes');
let rescue= new Book("The Rescue","Nicholas Sparks", 339, 'Yes');

const myLibrary =  [];
myLibrary[0]=theHobbit;
myLibrary[1]=hitch;
myLibrary[2]=rescue;

function showUserInput(){
    dialog.showModal();
}
newBookBtn.addEventListener('click', showUserInput);

function closeInput (){
    dialog.close()
}
closeBtn.addEventListener('click', closeInput);

const addBookToLibrary = (ev) => {
    ev.preventDefault(); // ev = event being passed to function preventing btn from submitting
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;  
    const isRead = document.querySelector('input[name=is-read]:checked');

    let newBook = new Book(title, author, pages, isRead.value)
    
    myLibrary.push(newBook);
    document.forms[0].reset();
    dialog.close();
    console.warn('added', {myLibrary});
    displayBooks()
}
addBookBtn.addEventListener('click', addBookToLibrary);

function changeIsRead(index){
    if(myLibrary[index].isRead === "Yes"){
        myLibrary[index].isRead = "No";
     } else if(myLibrary[index].isRead ==="No"){
        myLibrary[index].isRead = "Yes"
     }
     displayBooks()
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBooks()
}

function displayBooks(){
    bookList.textContent = '';
    console.table(myLibrary)
        myLibrary.forEach(element => {
            const bookListContent = document.createElement('div'); //creating div to append "list" to.
            bookListContent.classList.add('card')
            const elementIndex = myLibrary.indexOf(element);
            bookListContent.innerHTML = ` ${element.title} ${element.author} ${element.pages} ${element.isRead} <button class='change'>Change</button> <button class= 'delete'>Delete</button>` ;
            bookList.appendChild(bookListContent);            
        })

        const changeBtn = document.querySelectorAll('.change');
        changeBtn.forEach((element, index) => {
             element.addEventListener('click', () => changeIsRead(index))
        })   
        
        const deleteBtn = document.querySelectorAll('.delete');
        deleteBtn.forEach((element, index) => {
            element.addEventListener('click', () => deleteBook(index))
        })     
}    
displayBooks();

