import React, { useEffect, useState } from "react"
const Pagination = (props)=>{
    const [currentPage, setCurrentPage] = useState(1);
    const paginationClick = (page)=>{
        props.searchnews(page);
        setCurrentPage(page);

    }
        const paginatorButton = [];
        if (props?.pagesize?.pages <= 10) {
            for (let i = 1; i <= props?.pagesize?.pages; i++) {
              paginatorButton.push(
                <button
                  key={i}
                  onClick={() => paginationClick(i)}
                  disabled={currentPage === i}
                >
                  {i}
                </button>
              );
            }
          } else {
            if (currentPage <= 4) {
              for (let i = 1; i <= 5; i++) {
                paginatorButton.push(
                  <button
                    key={i}
                    onClick={() => paginationClick(i)}
                    disabled={currentPage === i}
                  >
                    {i}
                  </button>
                );
              }
              paginatorButton.push(<span key="dots">...</span>);
              paginatorButton.push(
                <button
                  key={props?.pagesize?.pages}
                  onClick={() => paginationClick(props?.pagesize?.pages)}
                  disabled={currentPage === props?.pagesize?.pages}
                >
                  {props?.pagesize?.pages}
                </button>
              );
            } else if (currentPage > props?.pagesize?.pages - 4) {
              paginatorButton.push(
                <button
                  key={1}
                  onClick={() => paginationClick(1)}
                  disabled={currentPage === 1}
                >
                  1
                </button>
              );
              paginatorButton.push(<span key="dots">...</span>);
              // Render last 5 pages without dots
              for (let i = props?.pagesize?.pages - 4; i <= props?.pagesize?.pages; i++) {
                paginatorButton.push(
                  <button
                    key={i}
                    onClick={() => paginationClick(i)}
                    disabled={currentPage === i}
                  >
                    {i}
                  </button>
                );
              }
            } else {
              paginatorButton.push(
                <button
                  key={1}
                  onClick={() => paginationClick(1)}
                  disabled={currentPage === 1}
                >
                  1
                </button>
              );
              paginatorButton.push(<span key="dots">...</span>);
              // Render current page and the two pages before and after
              for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                paginatorButton.push(
                  <button
                    key={i}
                    onClick={() => paginationClick(i)}
                    disabled={currentPage === i}
                  >
                    {i}
                  </button>
                );
              }
              paginatorButton.push(<span key="dots">...</span>);
              paginatorButton.push(
                <button
                  key={props?.pagesize?.pages}
                  onClick={() => paginationClick(props?.pagesize?.pages)}
                  disabled={currentPage === props?.pagesize?.pages}
                >
                  {props?.pagesize?.pages}
                </button>
              );
            }
          }
        return(
        <>
            <div>
                {paginatorButton}
            </div>
        </>
    )
}
export default Pagination