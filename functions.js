function createNewElements(type) {
    return document.createElement(type);
  }
  
  // Object for fetched DOM nodes
  const callingElements = {
    listItems: document.querySelector("[data-list-items]"), // List of different books
    searchGenres: document.querySelector("[data-search-genres]"), // Searches books by genres
    searchAuthors: document.querySelector("[data-search-authors]"), // Searches books by authors
    settingsThemes: document.querySelector("[data-settings-theme]"), // Toggles between dark and light mode
    listButtons: document.querySelector("[data-list-button]"), // All clickable buttons on the page
    cancelButton: document.querySelector("[data-search-cancel]"), // Cancel button in search modal
    settingsCancel: document.querySelector("[data-settings-cancel]"), // Cancel button in settings modal
    searchOverlay: document.querySelector("[data-search-overlay]"), // Overlay for search input
    settingsOverlay: document.querySelector("[data-settings-overlay]"), // Overlay for settings modal
    headerSearch: document.querySelector("[data-header-search]"), // Search button in the header
    searchTitle: document.querySelector("[data-search-title]"), // Title in search header
    headerSettings: document.querySelector("[data-header-settings]"), // Header settings button
    listClose: document.querySelector("[data-list-close]"), // Close button for modal
    activeList: document.querySelector("[data-list-active]"), // Active list of displayed data
    settingsForm: document.querySelector("[data-settings-form]"), // Form in settings modal
    searchForm: document.querySelector("[data-search-form]"), // Form in search modal
    listMessage: document.querySelector("[data-list-message]"), // Message displayed in the list
    listBlur: document.querySelector("[data-list-blur]"), // Blurs background when a book is selected
    listImage: document.querySelector("[data-list-image]"), // Displays selected book's image
    listTitle: document.querySelector("[data-list-title]"), // Displays selected book's title
    listSubtitel: document.querySelector("[data-list-subtitle]"), // Displays selected book's author's name
    listDescription: document.querySelector("[data-list-description]"), // Displays description of selected book
  };
  
  const newDocument = document.createDocumentFragment();
  
  export { callingElements, createNewElements, newDocument };