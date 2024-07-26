class AuthorDropdown extends HTMLElement {
    constructor() {
        super();
        
        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('select');
        container.setAttribute('id', 'author-dropdown');

        const defaultOption = document.createElement('option');
        defaultOption.value = 'any';
        defaultOption.textContent = 'All Authors';
        container.appendChild(defaultOption);

        const authors = JSON.parse(this.getAttribute('authors'));
        for (const [id, name] of Object.entries(authors)) {
            const option = document.createElement('option');
            option.value = id;
            option.textContent = name;
            container.appendChild(option);
        }

        shadow.appendChild(container);
    }
}

customElements.define('author-dropdown', AuthorDropdown);