import React from 'react'
import './Style.css';


const Button = (props) => {
  console.log(props);
  
let [Items,  setItems] = React.useState([]);
const listofitems = ()=>{
   setItems((e)=>{
     return [...e,props.Currenttext]
   })
}


console.log(Items);
  
  return (
    <div className='buttons'>
        <button className='b1'>Tag Friends</button>
        <button className='b2'>Check In</button>
        <br></br>
        <button className='b3' onClick={listofitems}>Post</button>
        <h1>All The Message Are Below--</h1>
        <ol>
           {
          Items.map((e)=>{
            return <li className='li'>{e}</li>
          })
        }
        </ol>
       
         
    </div>
  )
}

export default Button;