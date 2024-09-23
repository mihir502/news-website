import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const Stories = () => {
  const { hits, isLoading, handleDelete } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <div className="stories-div">
      {hits.map((curpost) => {
        const { title, author, objectID, url, num_comments } = curpost;

        return (
          
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span> {num_comments} </span>comments
              </p>

              <div className="card-btn">
                <Link to={url} target="_blank">
                  Read More
                </Link>
                <Link to="#" onClick={()=> handleDelete(objectID)}>Remove</Link>
              </div>
            </div>
      
        );
      })}
    </div>
  );
};

export default Stories;
