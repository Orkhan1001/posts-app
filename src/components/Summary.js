import React from "react";

export function Summary({total, postsLength}){
    return(
        <div>
        <small>Total {total} posts</small>
        <br />
        <small>{postsLength} posts</small>
      </div>
    );
}