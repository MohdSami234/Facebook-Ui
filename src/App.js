import React from "react";
import Button from "./Components/Button";
import Heading from "./Components/Heading";
import Comment from "./Components/Comment";
import GIFSearch from "./Components/GIFSearch";
 
const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=0&q=";

function App() {
  let [search, setSearch] = React.useState("");
  let [gifs, setGifs] = React.useState([]);
  let [loadingState, setLoadingState] = React.useState(false);
  let [Currenttext, setCurrenttext] = React.useState("");
  console.log(Currenttext);
  
  let searchGif = () => {
    if(search.length > 0){
      setLoadingState(true);
      fetch(GIPHY_API+search)
      .then((res)=>{
        setLoadingState(false);
        return res.json();
      })
      .then((result)=>{
        console.log(result);
        setGifs(result.data.map((gif)=>{
          return gif.images.fixed_height.url;
        }))
      })
      .catch(()=>{
        alert("Something went wrong");
        setLoadingState(false);
      })
    }
  }
  
  return(
     <div>
       <Heading/>
       <Comment setCurrenttext={setCurrenttext}/>
       <GIFSearch gifs ={gifs} setLoadingState ={setLoadingState} setSearch ={setSearch} searchGif = {searchGif} s/>
       <Button Currenttext={Currenttext}/>
       </div>

  )

  




  
}

export default App;
