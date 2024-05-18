import React, { useState, useEffect } from 'react';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../Comments/Commentsform';
import './CommentDetails.styles.css'


const CommentDetails = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ username: '', content: '' });
  const [editingComment, setEditingComment] = useState(null);

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleAddComment = (e) => {
    e.preventDefault();
    const newComments = [...comments, { ...newComment, upvotes: 0, downvotes: 0 }];
    setComments(newComments);
    localStorage.setItem('comments', JSON.stringify(newComments));
    setNewComment({ username: '', content: '' });
  };

  return (
    <div className='Header'>
      <h2>Comments</h2>
      <CommentForm
        newComment={newComment}
        setNewComment={setNewComment}
        handleAddComment={handleAddComment}
      />
      <CommentList
        comments={comments}
        setComments={setComments}
        editingComment={editingComment}
        setEditingComment={setEditingComment}
      />
    </div>
  );
};

export default CommentDetails;