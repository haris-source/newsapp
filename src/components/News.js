import React, { Component } from 'react'
import NewsItems from './NewsItems'
import SpinnerT from './SpinnerT';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalArticles: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsFlow `
  }

  async updatedNews() {
    try {
      this.props.setProgress(10);
      this.setState({ loading: true });
      let url = this.props.searchQuery
        ? `https://newsapi.org/v2/everything?q=${this.props.searchQuery}&apiKey=bd764f405a874c42a5069cece067781d&page=${this.state.page}&pageSize=${this.props.pageSize}`
        : `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bd764f405a874c42a5069cece067781d&page=${this.state.page}&pageSize=${this.props.pageSize}`;

      let data = await fetch(url);
       this.props.setProgress(40);
      let parsedData = await data.json();
       this.props.setProgress(70);

      this.setState({
        article: parsedData.articles || [],
        totalArticles: parsedData.totalResults || 0,
        loading: false
      });
       this.props.setProgress(100);

    } 
    catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  componentDidMount() {
    this.updatedNews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ page: 1 }, () => {
        this.updatedNews();
      });
    }
  }
fetchMoreData = async () => {
  try {
   
    this.setState(
      (prevState) => ({ page: prevState.page + 1, loading: true }),
      async () => {
        const { page } = this.state;

        let url = this.props.searchQuery
          ? `https://newsapi.org/v2/everything?q=${this.props.searchQuery}&apiKey=bd764f405a874c42a5069cece067781d&page=${page}&pageSize=${this.props.pageSize}`
          : `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bd764f405a874c42a5069cece067781d&page=${page}&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState((prevState) => ({
          article: prevState.article.concat(parsedData.articles || []),
          totalArticles: parsedData.totalResults || 0,
          loading: false,
        }));
      }
    );
  } catch (error) {
    console.error("Error fetching news:", error);
    this.setState({ loading: false });
  }
};

  // handlePreBtn = () => {
  //   this.setState({ page: this.state.page - 1 }, this.updatedNews);
  // }

  // handleForBtn = () => {
  //   this.setState({ page: this.state.page + 1 }, this.updatedNews);
  // }

  render() {
    return (<>
      
        <h1 className="text-center my-5">NewsFlow - Top Headlines</h1>

        {/* {this.state.loading && <SpinnerT />} */}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.totalResults}
          loader={<SpinnerT/>}
        >
          <div className="container">
          <div className="row">
            {this.state.article.map((element) => (
              <div className="col-md-4 mb-2" key={element.url}>
                <NewsItems
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  Source={element.source.name}
                />
              </div>
            ))}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between">
          <button disabled={this.state.page <= 1} className="btn custom-btn btn-lg" onClick={this.handlePreBtn}>&#x2190;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} className="btn custom-btn btn-lg" onClick={this.handleForBtn}>Next&#x2192;</button>
        </div> */}
      </>
    )
  }
}

export default News