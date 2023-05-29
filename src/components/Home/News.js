import React from "react";
import DefaultImg from '../../Assets/thumbnail-default.jpeg'
const News = (props)=>{
    const newsFeeds = props.newsfeeds;
    const dateFormatter = (value)=>{
        let date = value.substring(0, 10);
        //const d = new Date(date);
        return date;
    }
    const createNewsFeeds = ()=>{
        return newsFeeds?.results?.map((items)=>{
            return(
                <div className="news-sec">
                    <div className="img-container">
                        <img src={items?.thumbnail ? items?.thumbnail : DefaultImg} />
                    </div>
                    <div className="news-title">
                    <a href={items.webUrl}>
                        <h3>{items?.webTitle}</h3>
                        <h6>{dateFormatter(items?.webPublicationDate)}</h6>
                        <div className="news-content">
                            <p>
                            {items?.webTitle}
                            </p>
                       </div>
                        </a>
                    </div>
                </div>
            )
        })
    }
    return(
        <>
        <div className="news-feed">
            {createNewsFeeds()}
        </div>
        </>
    )
}
export default News;