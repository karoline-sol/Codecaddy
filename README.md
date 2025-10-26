# Codecaddy

CodeCaddy Google Books API Integration Project: 

CodeCaddy book search is a project that integrates Google Books API into a JavaScript or React application that allows users to search for books, view details by ID, and test API connectivity.

 Features:

- Search Books: Query the Google Books API by title, author, or keyword.
- View Book Details: Fetch detailed information for a specific book using its ID.
- Basic Error Handling: Handles invalid queries and API response errors.
- Data Transformation: Converts raw Google Books data into a clean, structured format.


 Learning Objectives:

- Working with REST APIs and fetch()
- Using async/await for asynchronous JavaScript
- Handling API keys securely via environment variables
- Transforming and cleaning API data for use in UI components

 API Reference:

- Base URL: https://www.googleapis.com/books/v1/volumes

 Functions:
 
- searchBooks(query) – Search books by keyword
- getBookById(bookId) – Fetch detailed book data by ID
- testApi() – Check if the API is responding successfully
