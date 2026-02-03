import React from 'react'

const MyImage = ({imgs}:{imgs:string}) => {
  return (
    <img src={imgs} alt={`img: ${imgs}`} />
  )
}

export default MyImage