// import React, { Component } from "react";
// import axios from 'axios';

// class CreateUser extends Component {

//     constructor(props) {
//         super(props);

//         this.onChangeUsername = this.onChangeUsername.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             username: '',
//         }
//     }

//     onChangeUsername(e) {
//         this.setState({
//             username: e.target.value
//         })
//     }


//     onSubmit(e) {
//         e.preventDefault(); // prevent default, instead do what's below:

//         const user  = {
//             user: this.state.user,
//         }
        
//         console.log(user);

//         let axiosConfig = {
//             headers: {
//                 'Content-Type': 'application/json;charset=UTF-8',
//                 "Access-Control-Allow-Origin": "*",
//             }
//           };
          
//         axios.post('http://localhost:3000/users/add', user, axiosConfig)
//             .then(res => console.log(res.data))
//             .catch(err => console.log('Error: ', err.response));

//         window.location = '/users'; // take the user back to list of flashcards
//     }
    

    
//     render() {
//         return (
//             <div>
//                 <p>Testing</p>
//             </div>
//         )
//     }
// }

// export default CreateUser