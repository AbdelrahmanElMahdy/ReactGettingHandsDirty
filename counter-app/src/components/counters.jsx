import React, {Component} from 'react'
import Counter from './counter'

class Counters extends Component {
    render(){
    return(
        <div>
            
            <button className='btn btn-primary btn-sm m-2' onClick={this.props.onReset}>
                Reset
            </button> 
        
            {this.props.counters.map(counter =>
             <Counter
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
                key={counter.id} 
                value={counter.value} 
                counter={counter}
            /> )}
        </div>)
    }
}
export default Counters;