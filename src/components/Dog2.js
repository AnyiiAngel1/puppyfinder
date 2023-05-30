import React from 'react';

const Dog2 = ({ imageUrl, dogName }) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    color: '#fff',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
  };

  return (
    <div className='card'>
    <div className="dogImage" style={cardStyle}>
     </div>
     <h2>{dogName}</h2>
     </div>
  );
};

export default Dog2;