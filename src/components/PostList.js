import React from "react";
import PostItem from "./PostItem";


function PostList({loading, error, posts}){
    return(
        <div className="post-list">
          {
            // loading ? <span className="loading">Loading...</span> : null
            loading && <span className="loading">Loading...</span>
          }
          {
            // error ? <span className="error">{error}</span>: null
            error && <span className="error">{error}</span>
          }
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
    );
}


export default PostList;