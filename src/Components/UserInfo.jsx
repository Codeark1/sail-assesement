import React, { Component } from 'react'

export class UserInfo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
        user:[
            {firstname: this.props.firstname},
            {lastname: this.props.lastname },
            {email: this.props.email},
            {}

        ]
        

      }
    }
  render() {
    return (
      <div>
        <h1> first Name:{this.state.user[0].firstname}</h1>
        <h1> secondname :{this.state.user[1].lastname }</h1>
        <h1> email mail :{this.state.user[2].email}</h1>


      </div>
    )
  }
}

export default UserInfo