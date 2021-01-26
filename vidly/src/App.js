import React, { Component } from 'react';
import Movies from './components/table'
import Navbar from './components/Navbar'
import {Route,Switch} from 'react-router-dom'
import Movie from './components/movie'




export default class App extends Component {
    render(){
        return (
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route path="/movies/:title/" render={(props)=> {
                       return   < Movie {...props} />}}
                    />
                   <Route  path='/movies' component={Movies} />
                </Switch>
            </React.Fragment>
        )
    }
}