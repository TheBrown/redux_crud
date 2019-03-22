import React, { Component } from "react";

import { connect } from "react-redux";

class EditComponent extends Component {
  handleEdit = e => {
    const { id } = this.props.post;
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    };

    this.props.dispatch({ type: "UPDATE", id, data });
  };

  render() {
    const { id, title, message } = this.props.post;
    return (
      <div key={id} className="post">
        <form className="form" onSubmit={this.handleEdit}>
          <input
            type="text"
            required
            ref={input => (this.getTitle = input)}
            defaultValue={title}
            placeholder="Enter Post Title"
          />{" "}
          <br />
          <br />
          <textarea
            rows="10"
            required
            ref={input => (this.getMessage = input)}
            cols="28"
            placeholder="Enter Post "
            defaultValue={message}
          />{" "}
          <br />
          <br />
          <button>update</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);
