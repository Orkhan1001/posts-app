import React from "react";


export function LoadMore({total, loading, loadMore, postsLength}){
    return(
        <div className="load-more">
          {postsLength < total && (
            <button disabled={loading} onClick={loadMore}>
              {loading ?  'Loading...': 'Load More'}
            </button>
          )}
        </div>
    );
}