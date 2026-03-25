import React, { Component } from 'react'


export class NewsItems extends Component {
 
  componentDidMount() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // Remove when leaves viewport
        }
      });
    });

    document.querySelectorAll(".fade-up").forEach(el => {
      observer.observe(el);
    });
  }

  render() {
    let {title, description, imageUrl, newsUrl,author,date,Source} = this.props;

    return (
      <div className="card text-center h-100 fade-up">
        <div className="card-header">Featured</div>

            <img
              src={
                !imageUrl
                  ? "https://plus.unsplash.com/premium_photo-1688561383203-31fed3d85417?q=80&w=1170&auto=format&fit=crop"
                  : imageUrl
              }
              className="card-img-top"
              alt="News img"
              onError={(e) => {
                e.target.src = "https://plus.unsplash.com/premium_photo-1688561383203-31fed3d85417?q=80&w=1170&auto=format&fit=crop";
              }}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{title}... <span className="badge text-bg-danger"style={{ fontSize: "0.65rem", opacity: 0.8 }}>{Source}</span></h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-outline-dark">
            Read more
          </a>
        </div>

         <div className="card-footer text-body-secondary">
         BY <strong>{!author?'unknown':author}</strong> on <strong>{new Date(date).toGMTString()}</strong>
      </div>
      </div>
    )
  }
}

export default NewsItems