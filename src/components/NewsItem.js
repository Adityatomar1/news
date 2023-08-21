import React, { Component } from 'react'

export class NewsItem  extends Component {
    constructor(){
        super();
        console.log()
        
    }
    
  render() {
   let {title,decscrition,imgUrl,newsUrl} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={imgUrl} style={{width:"18rem"}} alt='...'/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{decscrition}</p>
    <a href={newsUrl} className="btn btn-sm btn-dark">read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem