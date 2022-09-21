import { usePosts } from "../hooks/usePosts";
import PostList from "../components/PostList";
import { Summary } from "../components/Summary";
import { LoadMore } from "../components/LoadMore";
import { Navigate } from "react-router-dom";

function PostsPage() {
  const [total, posts, loading, error, loadMore] = usePosts();
  const user = localStorage.getItem('user');
  if(!user){
    return <Navigate to="/login"/>
  }


  return (
    <>
      <div className="container">
        <h1 className="section-title">My Personal Blog</h1>
        {<Summary total={total} postsLength={posts.length} />}
        {<PostList loading={loading} error={error} posts={posts} />}
        {
          <LoadMore
            total={total}
            loading={loading}
            postsLength={posts.length}
            loadMore={loadMore}
          />
        }
      </div>
    </>
  );
}

export default PostsPage;
