import SearchBar from './components/SearchBar'
import React from 'react'

function App() {

  const onSubmit = (term) => {
    console.log("Do a search  with ", term);
  }

  return (
    <div>
      <SearchBar onSubmit={onSubmit}/>
    </div>
  )
}

export default App