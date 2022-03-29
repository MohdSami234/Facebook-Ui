import React from 'react';
import "./Style.css"; 

const Comment= (props) => {
  console.log(props);
  

  return (


    <div className='text'>
        <textarea placeholder='Write Something here' rows="10" cols="40"  onChange={(e)=>props.setCurrenttext(e.target.value)}  ></textarea>
    </div>
  )
}

export default Comment;