import React, { useRef, useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEventModal from "./AddEventModal";
import axios from "axios";
import moment from "moment";

export default function () {
    const [modalOpen, setModalOpen] = useState(false)
    const calendarRef = useRef(null)
    const[events, setEvents]=useState([])

    const onEventAdded = event => {

        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({
            start:moment(event.start).toDate(),
            end:moment(event.end).toDate(),
            title:event.title
        })
    }

    const renderEventContent = (eventInfo) => {
        console.log(eventInfo);
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.extendedProps?.xx}</i>
            </>
        )
    }

    async function handleEventAdd(data){
        await axios.post("http://localhost:5000/api/calendar/",data.event);
    }

    async function handleDatesSet(data){
        const response = await axios.get("http://localhost:5000/api/calendar/");
        setEvents(response.data);
    }
    return (
                <div className="main-content bg-white right-chat-active">

                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="row">
                                <div className="col-xl-12 col-xxl-12 col-lg-12">
                                    <div className="row">
                                        
        <section>
            <button onClick={() => setModalOpen(true)}>Add Event</button>
            <div style={{ position: "relative", zIndex: 0 }}>
                <FullCalendar
                    eventClick={() => setModalOpen(true)}
                    //eventContent={renderEventContent}
                    ref={calendarRef}
                    events={events}
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    eventAdd={event=>handleEventAdd(event)}
                    datesSet={(date)=> handleDatesSet(date)}
                />
            </div>
            <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)} />
        </section>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

        
    )
}