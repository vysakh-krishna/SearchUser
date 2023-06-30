import React from 'react'

const outerCard={
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    margin: '5px auto',
}
const imageContainer={
    border: '3px solid black', 
    borderRadius: '10px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'relative'
}
const image={
    padding: '10px', 
    borderRadius: '50px', 
    height: '150px', 
    width: '150px'
}
const CornerId={
    alignItems: 'center', 
    position: 'absolute', 
    top: '-5px', 
    right: '-5px', 
    height:25, 
    width:25, 
    backgroundColor: 'black', 
    color: 'white',
    borderRadius: '20px', 
}
function UserCard({user}) {
  return (
    <>
        <div style={outerCard} key={user.id}>  
            <div style={imageContainer}>
                <img src={user.avatar} alt="avatar" style={image} />
                <div style={CornerId}>
                    {user.id}
                </div>
            </div>
            {user.first_name}
        </div>
    </>
  )
}

export default UserCard