class Book
{
    constructor(book)
    {
        this.title = book.title;
        this.description = book.description;
        this.img_url = book.img_url;
        this.id - book.id;
        this.users = book.users;
    }

    element()
    {
        const book_div = document.createElement('div')
        const title_h1 = document.createElement('h1')
        title_h1.innerText = this.title;
        book_div.appendChild(title_h1);
        return book_div;
    }
}