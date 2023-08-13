import React from 'react'

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} autoFocus/>
      </form>
    </div>
  )
}

export default SearchBar