import React from 'react'
import { storeData, WEEK_DAYS } from '../../utils'
// import './CreateEvent.css';

const createEventContainer = {
    // 'width': '100vw',
    // 'height': '100vh',
}
const backdrop = {
    'background': '#000',
    'zIndex': '1',
    'width': '100vw',
    'height': '100vh',
    'position': 'absolute',
    'opacity': '0.3',
    'top': '0',
    'left': '0'

}
const createEventContent = {
    background: '#fff',

    'display': 'flex',
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%, -50%)',
    'zIndex': ' 2'

}
const label = { 'marginRight': '20px' }
const formRowWrapper = {
    display: 'flex',
    margin: '20px'
}

function CreateEvent({ setisModalOpen }) {

    const onFormSubmit = (event) => {
        event.preventDefault();
        // Need to add validations and error states

        const dateTime = event.target.dateTime.value;
        const location = event.target.formLocation.value;
        const subject = event.target.formSubject.value;

        if (dateTime && location && subject) {
            formatAndStoreData(dateTime, location, subject);
        }


    }
    const formatAndStoreData = (dateTime, location, subject) => {
        let arr = dateTime.split("T");
        const weekDay = WEEK_DAYS[new Date(arr[0]).getDay()];
        const time = arr[1];

        const storeObj = {
            date: weekDay,
            time,
            location,
            subject,
            timeStamp: new Date(dateTime).getTime()
        }

        storeData(storeObj);
        setisModalOpen(false);
        //show success Toast


    }
    return (
        <div style={createEventContainer}>
            <div style={backdrop}></div>
            <div style={createEventContent}>


                <form id='createEventForm' style={{ 'padding': '20px', display: 'flex', flexDirection: 'column' }} onSubmit={onFormSubmit}>
                    <div style={formRowWrapper}>
                        <label style={label} id='date-time'>Date & Time :</label>
                        <input id="dateTime" htmlFor="date-time" type="datetime-local" />
                    </div>
                    <div style={formRowWrapper}>
                        <label style={label} id='location'>Location  :</label>
                        <input id="formLocation" htmlFor="location" type="text" />
                    </div>

                    <div style={formRowWrapper}>
                        <label style={label} id='subject'>Subject :</label>
                        <input id="formSubject" htmlFor="subject" type="text" />
                    </div>

                    <div>

                        <button type="submit"> Create Event</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CreateEvent
