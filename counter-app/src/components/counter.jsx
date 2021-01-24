import React,{Component} from 'react';

class Counter extends Component{
    render(){
        

        return (
        
            <div className="container">
                
                <div className="row">

                    <div className="col">
                        <span className={this.props.value!==0?'badge badge-primary':'badge badge-warning'}>
                        {this.props.value}
                        </span>
                    </div>
                    <div className="col">
                            <button  onClick={()=> {this.props.onIncrement(this.props.counter)}}  className='btn btn-secondary btn-lg m-2'>
                                +
                            </button>
                            <button disabled={this.props.counter.value ===0 ? "disabled" : ""} onClick={()=> {this.props.onDecrement(this.props.counter)}}  className='btn btn-secondary btn-lg m-2'>
                            -
                            </button>
                        
                        
                        
                            <button className="btn btn-danger btn m-2 " onClick={()=>{this.props.onDelete(this.props.counter.id)}}>
                                X
                            </button>
                

                    </div>
                </div>  
            </div>       

                )
    }

}
export default Counter;
