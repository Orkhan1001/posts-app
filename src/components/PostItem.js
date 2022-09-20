import React from "react";

function PostItem({post}) {
  return (
    <div className="post">
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <p className="footer">
        <span>
          {post.tags.map((tag) => (
            <small key={tag} className="tag">
              {tag}
            </small>
          ))}
        </span>
        <span>❤️ {post.reactions}</span>
      </p>
    </div>
  );
}

export default PostItem;
