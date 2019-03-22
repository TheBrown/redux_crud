const postReducer = (state = [], { type, data, id }) => {
  switch (type) {
    case "ADD_POST":
      return state.concat([data]);

    case "DELETE_POST":
      return state.filter(post => post.id !== id);

    case "EDIT_POST":
      return state.map(post =>
        post.id === id ? { ...post, editing: !post.editing } : post
      );

    case "UPDATE":
      return state.map(post => {
        if (post.id === id) {
          return {
            ...post,
            title: data.newTitle,
            message: data.newMessage,
            editing: !post.editing
          };
        } else return post;
      });

    default:
      return state;
  }
};

export default postReducer;
