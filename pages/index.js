import React, { Component } from 'react';
 
class Home extends Component {
  render() {
    const myStyle={
        backgroundImage:
 "url('./car11.jpg')",
 height: '75vh',
 width : '100%',
 backgroundposition: 'center',
 backgroundrepeat: 'no-repeat',
 backgroundsize: 'cover',
    };
    return (
      
        <div class ="container-fluid">
          <div class="col-sm">
          <div style={myStyle}>
          <h1 style = {{color : 'black'}} > <center>Welcome To Nissan</center></h1>
          </div>
        </div>
      
      </div>
    );
  }
}
  
export default Home;