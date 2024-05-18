import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import './CommentList.styles.css'
const CommentList = ({ comments, setComments, editingComment, setEditingComment }) => {
  const [editContent, setEditContent] = useState('');

  const handleUpdateComment = (comment) => {
    const updatedComments = comments.map((c) =>
      c === editingComment ? { ...c, content: editContent } : c
    );
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    setEditingComment(null);
  };

  const handleDeleteComment = (comment) => {
    const updatedComments = comments.filter((c) => c !== comment);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  const handleUpvote = (comment) => {
    const updatedComments = comments.map((c) =>
      c === comment ? { ...c, upvotes: c.upvotes + 1 } : c
    );
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  const handleDownvote = (comment) => {
    const updatedComments = comments.map((c) =>
      c === comment ? { ...c, downvotes: c.downvotes + 1 } : c
    );
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  const startEditing = (comment) => {
    setEditingComment(comment);
    setEditContent(comment.content);
  };

  return (
    <ul className='Details'>
      {comments.map((comment) => (
        <li key={comment.content}>
          <span className='usrnme'>{comment.username}</span>
          <p >{comment.content}</p>
          <button className='btnarrow' onClick={() => handleUpvote(comment)}><FaArrowUp/>({comment.upvotes})</button>
          <button  className='btnarrow' onClick={() => handleDownvote(comment)}><FaArrowDown/>({comment.downvotes})</button>
          {editingComment === comment ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateComment(comment);
              }}
            >
              <input
                type="text"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
              <button className='upt-btn' type="submit">Update</button>
            </form>
          ) : (
            <button className='edt-btn' onClick={() => startEditing(comment)}>Edit</button>
          )}
          <button className= 'dlt-btn'onClick={() => handleDeleteComment(comment)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
