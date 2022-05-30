import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
      signupStatus: false
    }
  }

  displayLogin = () => {
    this.setState({
      loginStatus: true,
      signupStatus: false
    });
  }

  displaySignup = () => {
    this.setState({
      loginStatus: false,
      signupStatus: true
    });
  }
  render() {
    let login = "";
    let signup="";
    if (this.state.loginStatus) {
      login = <table>
                <tbody>
                  <tr>
                    <td><input type="text" placeholder= "Enter your name"/></td>
                  </tr>
                  <tr>
                    <td><input type="password" placeholder= "Enter your password"/></td>
                  </tr>
                  <tr>
                    <td><button>Log In</button></td>
                  </tr>
                </tbody>
              </table>
    } else {
      login = "";
    }
    if(this.state.signupStatus){
      signup = <table>
      <tbody>
        <tr>
          <td><input type="text" placeholder= "Enter your name"/></td>
        </tr>
        <tr>
          <td><input type="email" placeholder= "Enter your email"/></td>
        </tr>
        <tr>
          <td><input type="password" placeholder= "Enter your password"/></td>
        </tr>
        <tr>
          <td><button>Sign Up</button></td>
        </tr>
      </tbody>
    </table>
    }else{
      signup = "";
    }
    return (
      <div className='App'>
        <span onClick={this.displayLogin}>Log In</span>
        <span onClick={this.displaySignup}>Sign Up</span>
        {login}
        {signup}
      </div>
    );
  }

  
}

export default App;
