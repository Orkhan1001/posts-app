import { usePosts } from "./hooks/usePosts";
import PostList from "./components/PostList";



function App() {
  const [total, posts, loading, error, loadMore] = usePosts();

  return (
    <>
      <div className="container">
        <h1 className="section-title">My Personal Blog</h1>
        <div>
          <small>Total {total} posts</small>
          <br />
          <small>{posts.length} posts</small>
        </div>
        {<PostList loading={loading} error={error} posts={posts} />}
        <div className="load-more">
          {posts.length < total && (
            <button disabled={loading} onClick={loadMore}>
              {loading ?  'Loading...': 'Load More'}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
