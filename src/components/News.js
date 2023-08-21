import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    console.log();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=03521b34cf9043028a29e5d8b5ff1931&page=1&pageSize=20"
    let data =await fetch(url)
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles:parseData.articles, totalResults: parseData.totalResults})

  }
  handlePreClick=async()=>{
    console.log("previous") ;
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=03521b34cf9043028a29e5d8b5ff1931&page=${this.state.page-1}&pageSize=20`;
    let data =await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles:parseData.articles})
    this.setState({
      page:this.state.page -1,
      articles:parseData.articles


    })
  }
  handleNextClick= async()=>{
    console.log("next")
    if(this.state.page +1 >Math.ceil(this.state.totalResults/20)){}
    else{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=03521b34cf9043028a29e5d8b5ff1931&page=${this.state.page+1}&pageSize=20`;
    let data =await fetch(url)
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles:parseData.articles})
    this.setState({
      page:this.state.page + 1,
      articles:parseData.articles


    })
  }


  }
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center numbers"><u>News top headlines</u></h2>
        <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4"  key = {element.url}>
            <NewsItem
              title={element.title} decscrition={element.title} imgUrl={element.urlToImage}
              newsUrl={element.url}/>
          </div>
    })}
        </div>
        <div className="container d-flex justify-content-between">  
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreClick}>&larr; previous</button>
            <button disabled={this.state.page +1 >Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark"  onClick={this.handleNextClick}>next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
