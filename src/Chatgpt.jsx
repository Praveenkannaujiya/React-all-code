import React, { useState, useEffect } from 'react';

function Chatgpt() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.posts));
  }, []);

  const [expandedPosts, setExpandedPosts] = useState([]);

  const handleReadMore = (postId) => {
    setExpandedPosts([...expandedPosts, postId]);
  };

  const handleReadLess = (postId) => {
    setExpandedPosts(expandedPosts.filter(id => id !== postId));
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li  className='cardsd' key={post.id}>
            <h2>{post.title}</h2>
            <p>{expandedPosts.includes(post.id) ? post.body : `${post.body.slice(0, 280)}...`}
              {expandedPosts.includes(post.id) ? (
                <button onClick={() => handleReadLess(post.id)}>Read less</button>
              ) : (
                <button onClick={() => handleReadMore(post.id)}>Read more</button>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chatgpt;