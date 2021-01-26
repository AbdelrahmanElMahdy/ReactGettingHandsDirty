import React,{Component} from 'react'
import dash from 'lodash'
import propTypes from 'prop-types'

export default class Pagination extends Component{
    
    render(){
        const pages=dash.range(0,(this.props.pagesCount /this.props.pageSize));
      //  console.log(this.props.pagesCount , this.props.pageSize)
 
      return(
           <nav aria-label="Page navigation example">
            <ul className="pagination">
              { pages.map((page) =>
                ( <li 
                      key={page} 
                      onClick={()=>{this.props.getPage(page)}}
                      className={this.props.currentPage===page ? "page-item active":"page-item "}>
                    <button 
                      className="page-link " >
                      {page}
                    </button>
                  </li> ) )}
            </ul>
        </nav>
        )    
        
}
}
  
Pagination.propTypes={
  pagesCount:  propTypes.number
}