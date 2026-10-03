import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="feed-section">

      {posts.map((post) => (
        <div key={post._id} className="post-card">

          <img
            src={post.image}
            alt={post.caption}
          />

          <p>{post.caption}</p>

        </div>
      ))}

    </section>
  );
};

export default Feed;