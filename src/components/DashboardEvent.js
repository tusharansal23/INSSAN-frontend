import React, { useState } from 'react';
import DashboardNav from './DashboardNav';

const DashboardEvent = () => {
    const [showForm, setShowForm] = useState(false);
    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [venue, setVenue] = useState('');
    const [speakers, setSpeakers] = useState('');
    const [contactPersons, setContactPersons] = useState('');
    const [image, setImage] = useState(null);

    const handleCreateButtonClick = () => {
        setShowForm(true);
    };

    const handleCancelButtonClick = () => {
        setShowForm(false);
        // Reset form fields when cancel button is clicked
        setEventName('');
        setDate('');
        setTime('');
        setVenue('');
        setSpeakers('');
        setContactPersons('');
        setImage(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation here before submitting the form
        if (!eventName || !date || !time || !venue || !speakers || !contactPersons) {
            alert('All fields except image are mandatory');
            return;
        }
        // Proceed with form submission
        console.log('Form submitted successfully');
        // You can also reset the form fields after successful submission if needed
        // setEventName('');
        // setDate('');
        // setTime('');
        // setVenue('');
        // setSpeakers('');
        // setContactPersons('');
        // setImage(null);
        setShowForm(false);
    };

    return (
        <div className="container-scroller">
            <DashboardNav/>
        <div className='form-container'>
        <div className="dashboard-event">
            {!showForm && (
                <button onClick={handleCreateButtonClick}>Create</button>
            )}
            {showForm && (
                <div>
                    <h2>Event Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="eventName">Event Name:</label>
                            <input type="text" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Time:</label>
                            <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="venue">Venue:</label>
                            <input type="text" id="venue" value={venue} onChange={(e) => setVenue(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="speakers">Speakers:</label>
                            <input type="text" id="speakers" value={speakers} onChange={(e) => setSpeakers(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactPersons">Contact Persons:</label>
                            <input type="text" id="contactPersons" value={contactPersons} onChange={(e) => setContactPersons(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image:</label>
                            <input type="file" id="image" onChange={(e) => setImage(e.target.files)} multiple/>
                        </div>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleCancelButtonClick}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
        </div>
        </div>
    );
};

export default DashboardEvent;
