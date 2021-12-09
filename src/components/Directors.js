import React from "react";
import { directors } from "../data";

const renderDirectors = directors.map(director => {
  return <div key={director.name}>
    {director.name}
    <ul>
      {director.movies.map(movie => <li key={movie}>{movie}</li>)}
    </ul>
  </div>
})

function Directors() {
  return (<div>
<h1>Directors Page</h1>
{renderDirectors}
    </div>);
}

export default Directors;
