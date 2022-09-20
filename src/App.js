import { useEffect, useState } from "react";
import PostList from "./components/PostList";

const BASEURL = "https://dummyjson.com";
const LIMIT = 5;

function App() {
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const postsUrl = `${BASEURL}/posts?limit=${LIMIT}&skip=${skip}`;
    setLoading(true);
    fetch(postsUrl)
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.posts);
        setTotal(res.total);
        // setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [skip]);

  return (
    <>
      <div className="container">
        <h1 className="section-title">My Personal Blog</h1>
        <div>
          <small>Total {total} posts</small>
        </div>
        {<PostList
          loading={loading}
          error={error}
          posts={posts}
         />}
        <button
          onClick={() => {
            setSkip(skip + LIMIT);
          }}
        >
          Load More
        </button>
      </div>
    </>
  );
}

export default App;
