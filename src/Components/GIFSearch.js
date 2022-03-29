import React from "react";
import './Style.css'
 
let GIFSearch = (props) => {
    console.log(props);
   
  return (
    <div>
      <div className="header">
        <div>
          <input className="search"
            type="text" 
            placeholder="Search GIF"
            value={props.search}
            onChange={(e)=>props.setSearch(e.target.value)} 
          />
          <button onClick={props.searchGif} className="searchbtn">
            Search
          </button>
        </div>
      </div>
      <div className="result">
        {
          (props.loadingState) ? (
            <div className="loading">
              <div className="loader">
              </div>
            </div>
          ) : (
            <div className="list">
              {
                props.gifs.map((gif)=>{
                   
                  return (
                    <div className="item">
                      <img src={gif}/>  
                    </div>
                  )
                })
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default GIFSearch;