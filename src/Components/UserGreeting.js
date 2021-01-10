import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             isLoggedIn:false
              
         }
     }
     

    render() {
        let message
        if(this.state.isLoggedIn){
            message=<div>Welcome Roomis</div>
        }else{
            message=<div>Welcome guest</div>
        }
        return<div>{message}</div>
        //if(this.state.isLoggedIn){
            //return(
               // <div>Welcome Roomis</div>
            //)
        //}
        //else{
           // return(
                //<div>Welcome guest</div>
           // )
        //}
       // return (
            //<div>
               //<div>Welcome Roomis</div> 
            //   <div>Welcome guest</div>
                
            //</div>
        //)
    }
}

export default UserGreeting
