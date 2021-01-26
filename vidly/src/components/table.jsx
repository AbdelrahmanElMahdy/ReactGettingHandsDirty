import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovie.js' 
//import {getGenres,genres} from '../services/fakeGenreService.js' 
import {Link} from 'react-router-dom'
import Heart from './heart'
import Pagination from './pagination'
import slicer from '../utiles.js'
import Group from './groupList' 
class Movies extends Component {
    state = { 
        movie:getMovies(),
        C:"fas fa-heart",
        pageSize:3,
        pagesCount:9,
        currentPage:0,
        generes:['Action','Comedy',"Thriller","All Generes"],
        currentGener:"All Generes"
     }
     
    handledlete(id){
        this.setState({movie: deleteMovie(id,this.state.movie)})
    }; 


    like=()=>{
        const C=this.state.C === "far fa-heart" ? "fas fa-heart":"far fa-heart"
        this.setState({C});
    };


    getTable=()=>{
        //filtering on genered
        const generedMvie=this.state.currentGener==="All Generes"?this.state.movie:
        this.state.movie.filter(movie=>movie.genre.name ===this.state.currentGener)
        
        //movie will be showen when rendering 
        const CurrentMoies=slicer(generedMvie,this.state.currentPage,this.state.pageSize)
        console.log(generedMvie.length)
        
       // pagination no pages control 
        if (this.state.pagesCount !== generedMvie.length)
            this.setState({pagesCount:generedMvie.length,currentPage:0})  
        

        if(this.state.movie.length !==0){
            return CurrentMoies.map((movie) =>(
                <tr key={movie.title}>
                    <Link to={"/movies/"+movie.title}>{movie.title}</Link>
                    <td>{movie.genre.name}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>{movie.numberInStock}</td>
                    <td><button className="btn"  onClick={this.like}><Heart classes={this.state.C} /></ button> </td>
                    <td className="m-2">
                      <button onClick={(event)=>{this.handledlete(event.currentTarget.id);}} className='btn btn-warning btn ' id={movie._id}>delete</button>
                    </td>  
                </tr>) );}
        else  return    (<p> no such data</p>)    
    };
    
    clickHandler=(currentPage)=>{
        this.setState({currentPage})     
    };
    getGenerHandler=(currentGener)=>{
        this.setState({currentGener})
      
    }

    render(){   
        return (
            <React.Fragment>
            <div className="container m-5">   
                <div className="row">
                    <div className="col-md-2">
                        <Group 
                            generes={this.state.generes} 
                            currentGener={this.state.currentGener} 
                            getGener={this.getGenerHandler} 
                        />
                    </div>
                    <div className="col-md-8">
                        <table id='table1'>
                            <tbody>
                                <tr>
                                    <th>title</th>
                                    <th>genre</th>
                                    <th>dailyRentalRate</th>
                                    <th>numberInStock</th>
                                </tr>
                                {this.getTable()}
                            </tbody>
                        </table>
                    </div>
                    
                    
                </div>
                <div className="container m-5" >
                    <Pagination 
                                pageSize={this.state.pageSize}
                                pagesCount={this.state.pagesCount}
                                getPage={this.clickHandler}
                                currentPage={this.state.currentPage}
                    />
                </div>
            </div>    
            </React.Fragment>);
    }
}

export default Movies;

function deleteMovie(id,movies){
    var i=0
    for(let movie of movies){
        if (movie._id===id){
            movies.splice(i,1)}
        i++
    }

    return movies
  }
