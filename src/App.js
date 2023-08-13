import SearchBar from './components/SearchBar'
import React, {useState} from 'react'
import SearchImages from './api'
import ImageList from './components/ImageList'

function App() {

  const [images,setImages] = useState([])

  const onSubmit = async (term) => {
    const result = await SearchImages(term);
    setImages(result);
  }

  return (
    <div>
      <SearchBar onSubmit={onSubmit}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App