import React, {Component} from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v1'

export class ChatBox extends Component {

  renderMessages() {
    return this
      .props
      .messages
      .map(message => (
        <p key={uuid()}>
          <span
            className={"font-weight-bold " + (this.props.userID === message.user_id
            ? 'text-danger'
            : 'text-dark')}>{message.user_name + ': '}</span>{message.msg}</p>
      ))
  }

  render() {
    return (
      <ChatBoxStyle className="shadow mb-3 p-3">
        <p className="lead text-center">{`${this.props.online} users is online`}</p>
        {this.renderMessages()}
      </ChatBoxStyle>
    )
  }
}

const ChatBoxStyle = styled.div `
  min-height: 65vh;
  max-height: 65vh;
  overflow: auto;
  word-break: break-all;
`
