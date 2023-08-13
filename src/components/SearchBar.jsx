import React from 'react';
import './SearchBar.css';

function SearchBar({onSubmit}){

  const [term, setTerm] = React.useState('');
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    setTerm('');
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Search an image by a term</label>
        <input value={term} onChange={handleChange} autoFocus/>
      </form>
    </div>
  )
}

export default SearchBar