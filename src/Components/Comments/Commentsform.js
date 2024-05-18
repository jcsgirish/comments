import React from 'react';

import './Commentsform.Styles.css'

const CommentForm = ({ newComment, setNewComment, handleAddComment }) => {
  return (
    <form className='formsection' onSubmit={handleAddComment}>
      <input
      className='txt'
        type="text"
        value={newComment.username}
        onChange={(e) => setNewComment({ ...newComment, username: e.target.value })}
        placeholder="Username"
      />
      <input
        className='txt'
        type="text"
        value={newComment.content}
        onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
        placeholder="Comment"
      />
      <button className='cmt-btn' type="submit">Send</button>
    </form>
  );
};

export default CommentForm;