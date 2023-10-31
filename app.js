const myLibrary = []
function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read


}

function showLibrary(){
    let pageLibrary = document.querySelector('#library')
    pageLibrary.innerHTML = ''
    for(let i = 0; i< myLibrary.length; i++ ){
        // pageLibrary.innerHTML = ''
        let oneBook = myLibrary[i]
        let bookBlock = document.createElement('div')
        // bookBlock.innerHTML = `${oneBook.title}` 
        bookBlock.setAttribute('class','card')
        bookBlock.innerHTML = `<div class="card">
        <div class="card-body">
        <h5 class="card-header">${oneBook.title}</h5>
        <h5 class="card-title">${oneBook.author}</h5>

        
        
       <p  class="card-text">No. Pages :${oneBook.pages}</p>
       <p  class="card-text">${oneBook.read ? "Read" : "Not Read"}</p>
        
        </div>
        </div>
        ` 
        pageLibrary.appendChild(bookBlock)
        console.log(myLibrary[i])
    }
}


function addBookToLibrary() {
     const title  = document.querySelector('#title').value
     const author  = document.querySelector('#author').value
     const pages  = document.querySelector('#pages').value
     //CHECKED to 
     const read  = document.querySelector('#read').checked

     let newBook = new Book(title,author,pages,read)
     console.log(newBook)
     myLibrary.push(newBook)
     console.log(myLibrary)
    showLibrary()
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
