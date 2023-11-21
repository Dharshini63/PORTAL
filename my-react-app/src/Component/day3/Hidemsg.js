import React, { useState} from 'react';
function ToggleMessage(){
    const [ showMessage, setShowMessage] = useState(false);
    const toggleMessage =()=>{
        setShowMessage(!showMessage);
    }
}
export default function Hidemsg() {
  return (
    <div>
        <button onClick={toggleMessage}>
         {showMessage ? 'Hide Message' : 'Show Message'}
        </button>
        {showMessage && <p>Hi! How are you !!!</p>}
    </div>
  );
