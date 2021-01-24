import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import  Counters  from './components/counters';
import NavBar from './components/navBar';
class App extends Component {
 
  state={
    counters:[
        {id:0,value:0},
        {id:1,value:1},
        {id:2,value:2},
        {id:3,value:3}
    ],

  };



  deleteHandle= id =>{
   const counters=this.state.counters.filter(counter => counter.id !==id)
    this.setState({counters:counters})
  };
  incrementHandler = (counter)=> {
    const counters=this.state.counters
    let index=counters.indexOf(counter);
    counters[index].value++ ;
    
    this.setState( { counters }); 
  };
  decrementHandler= (counter)=> {
    const counters=this.state.counters
    let index=counters.indexOf(counter);
    counters[index].value-- ;
    
    this.setState( { counters }); 
  };
  resetHandler= () => {
    const counters=this.state.counters.map(counter => {
        counter.value=0;
        return counter;})

    this.setState( counters);
    return 
  };


  
  render(){
  return ( 
      <React.Fragment>       
         <main className="container">
         <NavBar noProducts={this.state.counters.filter(c => c.value !==0).length}/>
            <Counters 
              onDelete={this.deleteHandle} 
              onReset={this.resetHandler} 
              onIncrement={this.incrementHandler}
              onDecrement={this.decrementHandler}
              counters={this.state.counters}
              />
        </main>

      </React.Fragment>);
  };

}
export default App ;
 
