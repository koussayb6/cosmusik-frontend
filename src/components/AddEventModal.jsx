import React, { useState } from "react";
import Modal from "react-modal";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";


export default function({isOpen,onClose,onEventAdded}){
    const [title,setTitle]=useState("");
    const [start,setStart]=useState(new Date());
    const [end,setEnd]=useState(new Date());

    const onSubmit=(event)=>{
        event.preventDefault();
        
        onEventAdded({
            title,
            start,
            end
        })
        onClose();
    }
    return(
      
        <Modal isOpen={isOpen} onRequestClose={onClose}>
              <div className="main-content bg-white right-chat-active">


            
            <form onSubmit={onSubmit}>
                <input placeholder="Title" value={title}onChange={e=>setTitle(e.target.value)}/>

                <div>
                  <label>Start Date</label>  
                  <Datetime value={start} onChange={date => setStart(date.toDate())}/>
                </div>
                <button >Add event</button>
            </form>
            </div> 
        </Modal>
        
    )
}