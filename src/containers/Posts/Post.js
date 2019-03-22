import React from "react";

import { connect } from "react-redux";
class Post extends React.Component {
  render() {
    const { title, message, id } = this.props.post;
    return (
      <div className="post">
        <h2 className="post_title">{title}</h2>
        <p className="post_message">{message}</p>
        <div className="control-buttons">
          <button
            className="edit"
            onClick={() => this.props.dispatch({ type: "EDIT_POST", id })}
          >
            Edit
          </button>
          <button
            className="delete"
            onClick={() => this.props.dispatch({ type: "DELETE_POST", id })}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Post);
