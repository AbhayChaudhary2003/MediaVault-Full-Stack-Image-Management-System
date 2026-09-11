import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://ik.imagekit.io/jkb78662c/mountain_BzxOGL4NI.jpg",
      caption: "Beautiful scenery"
    }
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data.posts);
      });
  }, []);

  return (
    <section className="feed-section">
      {posts.length > 0 &&
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))}
    </section>
  );
};

export default Feed;