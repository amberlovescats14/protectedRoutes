import React from 'react';
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom'
import './App.css';

const fakeAuth = {
  isAuthenticated: false,
  authenticated(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const Public = () => <h3>PUBLIC</h3>
const Private = () => <h3>PRIVATEEEE</h3>

class Login extends React.Component {
  render(){
    return (
      <div>
        LOGIN
      </div>
    )
  }
}

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ul>
        <li><Link to='/public'>PUBLIC PAGE</Link></li>
        <li><Link to='/private'>PRIVATE PAGE</Link></li>
      </ul>
      <Route path='/public' component={Public}/>
      <Route path='/login' component={Login}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
