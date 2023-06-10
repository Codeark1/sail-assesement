import React from 'react'
const User = (props) => {

  return (
    <div className='firstperson'>
        <h1>first Name :{props.firstname}</h1>
        <h1> last name :{props.lastname}</h1>
        <h1> email Name :{props.email}</h1>
        <h1> phone number :{props.phonenumber }</h1>
    </div>
  )
}

export default User