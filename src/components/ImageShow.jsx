import React from 'react'

function ImageShow({image}) {
  return (
    <div>
      <img src={image.urls.regular} alt={image.alt_description} style={{width: 300, height: 300, padding: 20, display: "flex", flexDirection: "row"}}/>
    </div>
  )
}

export default ImageShow