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
        const content = API.getItems().then((data) => {
            setNewsContent(data?.response);
        })
    },[])
    const searchNews = (pageNo)=>{
        API.getItembyKey(searchKey,pageNo).then((data)=>{
            setNewsContent(data?.response);
        })
    }
    return(
        <>
            <div className="home-container">
                <div className="search-container">
                    
                    <input className="input-text" type="text" value={searchKey} onChange={searchWord}/>
                    <button className="search-btn" onClick={searchNews}>Search</button>
                </div>
                <div className="news-container">
                    <News newsfeeds={newsContent}/>
                </div>
                <footer>
                    <div className="pagination-container">
                        <Pagination pagesize={newsContent} searchnews={searchNews}/>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default Home