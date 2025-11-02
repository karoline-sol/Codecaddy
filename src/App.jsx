import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navigation from './components/Navigation'
import BookSearch from './components/BookSearch'
import BookCollection from './components/BookCollection'
import BookDetails from './components/BookDetails'
import './App.css'

function App() {
  // Simple state management for selected book
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />

        <main className="main-content">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <div className="home-view">
                  <h1>Welcome to CodeCaddy</h1>
                  <p>Your personal book collection manager</p>
                  <div className="quick-actions">
                    <a href="/search" className="btn-primary">
                      Search Books
                    </a>
                    <a href="/collection" className="btn-secondary">
                      View Collection
                    </a>
                  </div>
                </div>
              }
            />

            {/* Search Page */}
            <Route
              path="/search"
              element={<BookSearch onSelect={setSelectedBook} />}
            />

            {/* Collection Page */}
            <Route
              path="/collection"
              element={<BookCollection onSelect={setSelectedBook} />}
            />

            {/* Book Details Page */}
            <Route
              path="/book/:id"
              element={<BookDetails book={selectedBook} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

      
      