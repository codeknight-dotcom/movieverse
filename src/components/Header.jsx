import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/?search=${query}`);
    }
  };

  return (
    <header>
      <h1><Link to="/">MovieVerse</Link></h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
      </form>
      <Link to="/watchlist">Watchlist</Link>
    </header>
  );
};

export default Header;
