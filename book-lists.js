class BookList extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.setAttribute('id', 'book-list');

        const books = JSON.parse(this.getAttribute('books'));
        const authors = JSON.parse(this.getAttribute('authors'));
        const BOOKS_PER_PAGE = parseInt(this.getAttribute('booksPerPage'));

        for (const { author, id, image, title } of books.slice(0, BOOKS_PER_PAGE)) {
            const bookPreview = document.createElement('book-preview');
            bookPreview.setAttribute('data-preview', id);
            bookPreview.setAttribute('image', image);
            bookPreview.setAttribute('title', title);
            bookPreview.setAttribute('author', authors[author]);
            container.appendChild(bookPreview);
        }

        shadow.appendChild(container);
    }
}

customElements.define('book-list', BookList);