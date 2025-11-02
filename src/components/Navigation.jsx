import { Link, useLocation } from 'react-router-dom'
function Navigation() {
  const location = useLocation()
  // TODO: Students will convert this to use React Router Link components
  // Replace button onClick handlers with Link to="/route" components
  
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h2>CodeCaddy</h2>
      </div>
      
      <div className="nav-links">
        <Link to="/"
          className={location.pathname === 'home' ? 'nav-link active' : 'nav-link'}
          onClick={() => onNavigate('home')}
        >
          Home
        </Link>
        
        <Link to="/search"
          className={location.pathname === '/search' ? 'nav-link active' : 'nav-link'}
          onClick={() => onNavigate('search')}
        >
          Search
        </Link>
        
        <Link to="/collection"
          className={location.pathname === 'collection' ? 'nav-link active' : 'nav-link'}
          onClick={() => onNavigate('collection')}
        >
          My Collection
        </Link>
      </div>
    </nav>
  )
}

export default Navigation