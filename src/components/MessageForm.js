import React from 'react'
import Attachment from './svg/Attachment'

const MessageForm = () => {
  return (
    <form className='message_form'>
        <label htmlFor='img'>
            <Attachment />
        </label>
        <input type="file"  id="img" accpet='image/' style={{display:'none'}} />
        <div>
           <input type="text" placeholder='Enter message'  /> 
        </div>
        <div>
            <button className="btn">Send</button>
        </div>
    </form>
  )
}

export default MessageForm