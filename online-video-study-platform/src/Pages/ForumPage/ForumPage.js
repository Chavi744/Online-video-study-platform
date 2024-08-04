// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Pages/ForumPage/ForumPage.css';
import React, { useEffect, useState } from 'react';



const ForumPage = ({ courseId }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ author: '', title: '', content: '' });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/api/forum/${courseId}`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching forum posts:', error);
      }
    };
    fetchPosts();
  }, [courseId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handlePostSubmit = async () => {
    try {
      const response = await axios.post(`/api/forum/${courseId}`, newPost);
      setPosts((prev) => [...prev, response.data]);
      setNewPost({ author: '', title: '', content: '' });
    } catch (error) {
      console.error('Error creating new post:', error);
    }
  };

  return (
    <div className="forum-page">
      <h1>Forum</h1>
      {posts.map((post) => (
        <div key={post._id} className="post">
          <div className="post-header">
            <h3>{post.title}</h3>
            <p>{new Date(post.date).toLocaleString()}</p>
            <p>By: {post.author}</p>
          </div>
          <div className="post-content">
            <p>{post.content}</p>
          </div>
          {/* תגובות ותגובה */}
        </div>
      ))}
      <div className="new-post">
        <h3>Create New Post</h3>
        <input
          name="author"
          placeholder="Your Name"
          value={newPost.author}
          onChange={handleInputChange}
        />
        <input
          name="title"
          placeholder="Post Title"
          value={newPost.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="Post Content"
          value={newPost.content}
          onChange={handleInputChange}
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>
    </div>
  );
};

export default ForumPage;
