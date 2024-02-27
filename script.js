const myLibrary =  ['The Hobbit', 'Eragon', 'Brisingr'];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`
    }
}

function addBookToLibrary (){
    // I want to take the input from the user and store the new book objects into an array.
    // 
}


const bookList = document.querySelector('.books');

function displayBooks(){
    for (let i = 0; i < myLibrary.length; i++) {
        const bookListContent = document.createElement('div');
        let book = myLibrary[i];
        bookListContent.textContent = book
        bookList.appendChild(bookListContent);        
    }   
}    
displayBooks();


const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read yet');

theHobbit.info(); 
console.log(theHobbit.info());