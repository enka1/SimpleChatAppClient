import React, {Component} from 'react'
import {Input} from 'antd'

export class ChatFrame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: ''
    }
  }
  render() {
    return (
      <div>
        <Input.TextArea
          value={this.state.msg}
          placeholder="Enter message...."
          onChange={(e) => this.setState({msg: e.target.value})}
          onPressEnter={(e) => {
          e.preventDefault();
          this
            .props
            .sendMessage(this.state.msg);
          this.setState({msg: ''});
        }}
          className="form-control shadow"
          autosize={{
          minRows: 2,
          maxRows: 4
        }}/>
      </div>
    )
  }
}
