import React from 'react';
const Movie = (props) => {
     console.log("movie")
    return ( 
        <React.Fragment>
            <h1>movie title {props.match.params.title}</h1> 
            <button onClick={()=>{props.history.push("/movies")}} className="btn btn-prime btn">Save</button>
        </React.Fragment>
        );

}
 
export default Movie;