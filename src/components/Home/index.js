import React,{useState,useEffect} from "react";
import './style.css';
import API from "../Utils/Api";
import News from "./News";
import Pagination from "../Pagination/Pagination";
const Home = ()=>{
    const [newsContent,setNewsContent] = useState();
    const [searchKey,setSearchKey] = useState();
    const searchWord = (e)=>{
        setSearchKey(e.target.value)
    }
    useEffect(()=>{
        API.getItems().then((data) => {
            setNewsContent(data?.response);
        })
    },[])
    const searchNews = (pageNo=1)=>{
        API.getItembyWord(searchKey,pageNo).then((data)=>{
            setNewsContent(data?.response);
        })
    }
    const searchWithKey = (keyword,pageNo=1)=>{
        API.getItemByKey(searchKey,pageNo,keyword).then((data)=>{
            setNewsContent(data?.response);
        })
    }
    const handleEnterKeyPress =(e)=>{
        if (e.key === 'Enter') {
            searchNews(searchKey);
        }
    }
    return(
        <>
            <div className="home-container">
                <div className="search-container">
                    <input className="input-text" type="text" value={searchKey} onChange={searchWord} onKeyDown={handleEnterKeyPress}/>
                    <button className="search-btn" onClick={()=>searchNews()}>Search</button>
                </div>
                <div className="news-container">
                    <News newsfeeds={newsContent} searchNews={searchWithKey}/>
                </div>
                <footer>
                    <div className="pagination-container">
                       {newsContent && <Pagination pagesize={newsContent} searchnews={searchNews}/>}
                    </div>
                </footer>
            </div>
        </>
    )
}
export default Home