import React, { useEffect, useState } from "react"
const Pagination = (props)=>{
    const [active,setActive] = useState()
    useEffect(()=>{
        //setTotalPage(props?.pagesize?.pages)
    },[])
    const paginationClick = (e)=>{
        setActive(e.target.value)
        props.searchnews(e.target.value)
    }
    const pagenumbers = ()=>{
       return  Array.apply(null, Array(Math.ceil(props?.pagesize?.pages/1000))).map(function(x, i) {
        if(i>=7 && i <= props?.pagesize?.pages/1000 - 7){
            if(i==8) {
                return "..."
            }
        }
        else{
            return <li value={i+1} onClick={paginationClick} className={i+1 == active ?"active-btn":""}>{i+1}</li>
        }    
        })
    }
    return(
        <>
            <ul>
                {props?.pagesize?.pages && pagenumbers()}
            </ul>
        </>
    )
}
export default Pagination