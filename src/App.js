import SearchBar from './components/SearchBar'
import React from 'react'
import SearchImages from './api'

function App() {

  const onSubmit = async (term) => {
    const result = await SearchImages(term);
    console.log(result);
  }

  return (
    <div>
      <SearchBar onSubmit={onSubmit}/>
    </div>
  )
}

export default App