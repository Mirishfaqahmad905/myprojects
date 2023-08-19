import React, { useRef } from 'react'
import styled from 'styled-components';
 const Mystyled=styled.div`
   .container{
     dispaly:grid;
     grid-template-columns:1fr 1fr 1fr;
     button{
        
     }
   }
    button{
         width:100px;
          border:none;
           background-color:lightgray;
 transition:o.3px linear;
    }
    button:hover{
         background-color:black;
  color:white;
  
    }
 `;
const VideoPlayer = () => {
     const VideoRef=useRef(null);
  return (
    <div>VideoPlayer
       <Mystyled>

  <div className='container'>
  <video ref={VideoRef} src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'} width={'400px;'} height={'200px;'} controls autoPlay/>
        <button onClick={()=>VideoRef.current.play()}>Play</button>
        <button onClick={()=>VideoRef.current.pause()}>Pause</button>

  </div>
       </Mystyled>
    </div>
  )
}

export default VideoPlayer