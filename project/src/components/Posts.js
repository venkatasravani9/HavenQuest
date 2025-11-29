import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch posts");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts from Online API (English)</h2>
      {posts.slice(0, 10).map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #e8c8268f",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "10px",
            backgroundColor: "#fafafa",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
