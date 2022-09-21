import axios from "axios";
import { useEffect, useState } from "react";

const BASEURL = "https://dummyjson.com";
const LIMIT = 3;

export function usePosts() {
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const postsUrl = `${BASEURL}/posts`;
    const params={limit:LIMIT, skip}
    setLoading(true);
    axios.get(postsUrl,{params})
      .then((res) => res.data)
      .then((res) => {
        setPosts((oldposts) => [...oldposts, ...res.posts]);
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

  function loadMore() {
    setSkip((skip) => skip + LIMIT);
  }

  return [total, posts, loading, error, loadMore];
}
