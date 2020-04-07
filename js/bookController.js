class BookController
{
    static BASE_URL = 'http://localhost:3000/books'
    
    static init()
    {
        // debugger
        Adapter.getData(BookController.BASE_URL)
        .then(BookController.renderData)
    }

    static renderData(array)
    {
        //debugger
        array.forEach(BookController.render);
    }

    static render(element)
    {
        //debugger
        const book = new Book(element)
        const list = document.querySelector('#list')
        list.appendChild(book.element())
    }
}