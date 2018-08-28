import React, {Component} from 'react'
import {render} from 'react-dom'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import {ChatApp} from './components/ChatApp'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      input: ''
    }
  }
  render() {
    if (this.state.user_name.length === 0) {
      return (
        <LoginPage>
          <div className="shadow col-3 mx-auto pb-5 pt-3 px-4 login-box text-center">
            <img
              src="https://image.flaticon.com/icons/svg/826/826962.svg"
              className="w-25"
              alt=""/>
            <p className="lead">My Simple Chat App</p>
            <input
              onKeyUp={(e) => {
              if (e.keyCode === 13) {
                if (this.state.input.length > 0) {
                  this.setState({user_name: this.state.input})
                }
              }
            }}
              value={this.state.input}
              onChange={(e) => this.setState({input: e.target.value})}
              className="form-control"
              placeholder="Your's name"
              type="text"/>
            <button
              onClick={() => {
              if (this.state.input.length > 0) {
                this.setState({user_name: this.state.input})
              }
            }}
              className="btn mt-3 btn-dark btn-block">Join Chat Room</button>
          </div>
        </LoginPage>
      )
    } else {
      return (
        <div className="container pt-3">
          <div className="row">
            <div className="col-4 mx-auto justify-content-center">
              <ChatApp user={this.state.user_name}/>
            </div>
          </div>
        </div>
      )
    }
  }
}

const LoginPage = styled.div `
  background-image: url(https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-268004.png);
  background-size:cover;
  background-position:center;
  position: relative;
  min-height: 100vh;
  .login-box{
    background-color: rgba(255, 255, 255, .9);
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

render(
  <App/>, document.getElementById('root'))
