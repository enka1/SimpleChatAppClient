import React, {Component} from 'react'

import {ChatBox} from './ChatBox'
import {ChatFrame} from './ChatFrame'

const socket = require('socket.io-client')('http://localhost:3001')
let id;
socket.on('connect', () => id = socket.id)
export class ChatApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: id,
      users: 0,
      messages: []
    }
    this.sendMessage = this
      .sendMessage
      .bind(this)
  }
  sendMessage(msg) {
    if(msg.length > 0){
      socket.emit('send_msg', {
        user: this.props.user,
        msg: msg
      })
    }
  }
  componentDidMount() {
    socket.emit('user_join')
    socket.on('user_count', data => this.setState({
      users: data.users
    }))
    socket.on('receive_msg', data => {
      this.setState({
        messages: [
          ...this.state.messages,
          data
        ]
      })
    })
  }
  render() {
    return (
      <div>
        <ChatBox
          userID={this.state.id}
          messages={this.state.messages}
          online={this.state.users}/>
        <ChatFrame sendMessage={this.sendMessage}/>
      </div>
    )
  }
}
