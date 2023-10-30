// console.log('this is the libradry pro')
const myLibrary = []
function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read


}

function addBookToLibrary() {
     const title  = document.querySelector('#title').value
     const author  = document.querySelector('#author').value
     const pages  = document.querySelector('#pages').value
     const read  = document.querySelector('#read').value

     let newBook = new Book(title,author,pages,read)
     console.log(newBook)
     myLibrary.push(newBook)
     console.log(myLibrary)

  }


const bookButton = document.querySelector('#book-btn')
bookButton.addEventListener('click',function(){
    const form = document.querySelector('#book-form')
    form.style.display = 'block'
})

const subForm = document.querySelector('#book-form')
subForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary()
  

  });
