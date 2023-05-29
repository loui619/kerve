import React,{useState,useEffect} from "react";
import './style.css';
import API from "../Utils/Api";
import News from "./News";
import Pagination from "../Pagination/Pagination";
const Home = ()=>{
    const [newsContent,setNewsContent] = useState();
    const [searchKey,setSearchKey] = useState();
    const [pageNo,setPageNo] = useState(0);
    const [searchEnable,setSerchEnable] = useState(false);
    const searchWord = (e)=>{
        setSearchKey(e.target.value)
    }
    useEffect(()=>{
        API.getItems().then((data) => {
            setNewsContent(data?.response);
        })
    },[])
    useEffect(()=>{
        API.getItembyKey(searchKey,pageNo).then((data)=>{
            setNewsContent(data?.response);
        })
        
    },[searchEnable])
    const searchNews = (page)=>{
        setSerchEnable(!searchEnable)
        if(typeof page === 'object'){
            if(pageNo==0){
                setPageNo(1)
            }
            else{
                setPageNo(pageNo)
            }
        }
        else{
            setPageNo(page);
        }
        
     }
    return(
        <>
            <div className="home-container">
                <div className="search-container">
                    
                    <input className="input-text" type="text" value={searchKey} onChange={searchWord}/>
                    <button className="search-btn" onClick={()=>searchNews()}>Search</button>
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