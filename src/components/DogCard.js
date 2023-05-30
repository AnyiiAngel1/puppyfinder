import React from 'react'

 function DogCard(props) {
  
  return (
    <div className='card'>
      <div className='dog-image' 
      style={{
          backgroundImage: `url('${props.image}')`}}>

          </div>
      <div className='dog-name'>{props.dogName}</div>
    </div>
  )
}


export default DogCard; 