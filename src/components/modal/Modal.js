import React from "react";
import './Modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <button style={{ marginBottom: '.5rem' }} onClick={() => this.setState({ isOpen: true })}>Open modal</button>

        {this.state.isOpen && <div className="modal">
          <div className="modal-body">
            <h1>Title</h1>
            <p>text modal | modal text</p>
            <button onClick={() => this.setState({ isOpen: false })}>close</button>
          </div>
        </div>}
      </React.Fragment>
    )
  }
}