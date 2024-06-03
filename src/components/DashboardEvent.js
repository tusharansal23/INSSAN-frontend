import React, { useState, useEffect } from 'react';
import '../css/DashboardEvent.css';
import DashboardNav from './DashboardNav';
import CalenderPicker from './CalenderPicker';
import TimePicker from './TimePicker';

const DashboardEvent = () => {
    const [showForm, setShowForm] = useState(false);
    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [venue, setVenue] = useState('');
    const [speaker, setSpeaker] = useState('');
    const [speakers, setSpeakers] = useState([]);
    const [contactPersonName, setContactPersonName] = useState('');
    const [contactPersonPhone, setContactPersonPhone] = useState('');
    const [contactPersons, setContactPersons] = useState([]);
    const [image, setImage] = useState(null);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [selectedDay, setSelectedDay] = useState(null);
    const [events, setEvents] = useState([]);
    const [errors, setErrors] = useState({});
    const [eventUpdate, setEventUpdate] = useState(false);
    const [eventID, setEventID] = useState('');


    const handleCreateButtonClick = () => {
        setShowForm(true);
    };

    const handleCancelButtonClick = () => {
        setShowForm(false);
        setEventName('');
        setDate('');
        setSelectedDay('');
        setTime('');
        setVenue('');
        setSpeakers([]);
        setSpeaker('');
        setContactPersons([]);
        setContactPersonName('');
        setContactPersonPhone('');
        setImage(null);
        setImagePreviews([]);
        setErrors({});
    };

    const validateForm = () => {
        const newErrors = {};
        if (!eventName) newErrors.eventName = 'Event name is required';
        if (!selectedDay) newErrors.selectedDay = 'Date is required';
        if (!time) newErrors.time = 'Time is required';
        if (!venue) newErrors.venue = 'Venue is required';
        if (speakers.length === 0) newErrors.speakers = 'At least one speaker is required';
        if (contactPersons.length === 0) newErrors.contactPersons = 'At least one contact person is required';
        return newErrors;
    };

    const handleSubmit = async(e) => {
        // alert(time);
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        if(!eventUpdate){

            const formattedDate = new Date(selectedDay).toLocaleDateString('en-GB');
            const formData = {
                eventName,
                date: formattedDate,
                time,
                // time: time.replace(':', ''), // Removing the colon from time
                venue,
                speakers: speakers.map(name => ({ name })),
                contactPersons
            };

            try {
                const response = await fetch('http://localhost:4000/api/v1/events/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                const result = await response.json();
                if (response.ok) {
                    alert('Form submitted successfully', result);
                    window.location.reload();
                    // setShowForm(false);
                } else {
                    alert('Error submitting form', result);
                }
            } catch (error) {
                alert('Error submitting form', error);
            }
        }
        else{

            const formattedDate = new Date(selectedDay).toLocaleDateString('en-GB');
            const formData = {
                eventName,
                date: formattedDate,
                time,
                // time: time.replace(':', ''), // Removing the colon from time
                venue,
                speakers: speakers.map(name => ({ name })),
                contactPersons
            };

            try {
                const response = await fetch(`http://localhost:4000/api/v1/events/update/${eventID}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                const result = await response.json();
                if (response.ok) {
                    alert('Form submitted successfully', result);
                    setEventUpdate(false);
                    window.location.reload();
                    // setShowForm(false);
                } else {
                    alert('Error submitting form', result);
                }
            } catch (error) {
                alert('Error submitting form', error);
            }

        }
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImage(files);
        const filePreviews = files.map(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            return new Promise(resolve => {
                reader.onload = () => resolve(reader.result);
            });
        });

        Promise.all(filePreviews).then(previews => {
            setImagePreviews(previews);
        });
    };

    const handleUploadClick = () => {
        document.getElementById('image').click();
    };

    const handleEdit = (eID,eName,eDate,eTime,eVenue,eSpeakers,eContactPersons) => {
        setShowForm(true);
        setEventUpdate(true);
        setEventID(eID);
        // alert(eDate);
        setEventName(eName);
        setSelectedDay(eDate); // assuming eDate is in a format recognized by Date constructor
        setTime(eTime);
        setVenue(eVenue);
        setSpeakers(eSpeakers.map(speaker => speaker.name));
        setContactPersons(eContactPersons.map(contact => ({ name: contact.name, phone: contact.phone })));
    
    };

    const handleDelete = async(id) => {
        try {
            const response = await fetch(`http://localhost:4000/api/v1/events/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) {
                // The event was successfully deleted
                console.log('Event deleted successfully');
                // Optionally, reload the page or update the state to reflect the deletion
                window.location.reload(); // This will reload the page
            } else {
                // Handle the error
                console.error('Failed to delete event');
            }
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    const handleAddContactPerson = () => {
        if (contactPersonName.trim() && contactPersonPhone.trim() && contactPersonPhone.trim().length === 10) {
            setContactPersons([...contactPersons, { name: contactPersonName.trim(), phone: contactPersonPhone.trim() }]);
            setContactPersonName('');
            setContactPersonPhone('');
            setErrors({});
        } else if (!contactPersonPhone.trim() || contactPersonPhone.trim().length !== 10) {
            setErrors({ contactPersonPhone: 'Phone number must be 10 digits' });
        }
    };

    const handleAddSpeaker = () => {
        if (speaker.trim()) {
            setSpeakers([...speakers, speaker.trim()]);
            setSpeaker('');
            setErrors({});
        }
    };
    const handleDeleteSpeaker = (index) => {
        const updatedSpeakers = speakers.filter((_, i) => i !== index);
        setSpeakers(updatedSpeakers);
    };

    const handleDeleteContactPerson = (index) => {
        const updatedContactPersons = contactPersons.filter((_, i) => i !== index);
        setContactPersons(updatedContactPersons);
    };

    const isValidTime = (time) => {
        const regex = /^(0?[1-9]|1[0-2]):([0-5]\d) (AM|PM)$/; // Matches HH:MM AM/PM format
        return regex.test(time);
    };

    const handleTimeChange = (e) => {
        alert(e.target.value);
        const value = e.target.value;
        if (isValidTime(value)) {
            setTime(value);
            setErrors({});
        } else {
            setTime(value);
            setErrors({ ...errors, time: 'Invalid time format. Use HH:MM AM/PM' });
        }
    };

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/v1/events/');
                const result = await response.json();
                if (result.success && Array.isArray(result.data)) {
                    setEvents(result.data);
                } else {
                    setEvents([]);
                }
            } catch (error) {
                console.error('Error fetching events:', error);
                setEvents([]);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="container-scroller">
            <DashboardNav/>
            <div className='container form-container form-start-margin'>
                <div className="dashboard-event">
                    {!showForm && (
                        <button onClick={handleCreateButtonClick}>
                            <i className="fa fa-plus mr-inpx-5"></i>
                            Create
                        </button>
                    )}
                    {showForm && (
                        <div className='event-form'>
                            <button type="button" 
                                className='cancel-button'
                                onClick={handleCancelButtonClick}>
                                <i className="fa fa-times"></i>
                            </button>
                            <h2>Event Form</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="eventName" className='color-white'>Event Name:</label>
                                    <input className="event-form-input-background" type="text" id="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
                                    {errors.eventName && <span className="error-message">{errors.eventName}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="time" className='color-white'>Time:</label>
                                    {/* <input className="event-form-input-background event-time" type="text" id="time" placeholder="10:00 AM" value={time} onChange={handleTimeChange} required /> */}
                                    
                                    <TimePicker time={time}
                                                setTime={setTime}
                                    />
                                    
                                    {errors.time && <span className="error-message">{errors.time}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="venue" className='color-white'>Venue:</label>
                                    <input className="event-form-input-background" type="text" id="venue" value={venue} onChange={(e) => setVenue(e.target.value)} required />
                                    {errors.venue && <span className="error-message">{errors.venue}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="speakers" className='color-white'>Speakers:</label>
                                    <div className='input-group col-xs-12'>
                                        <input className="event-form-input-background input-button-row" type="text" id="speakers" value={speaker} onChange={(e) => setSpeaker(e.target.value)} required />
                                        <span className="input-group-append">
                                            <button className="file-upload-browse" type="button" onClick={handleAddSpeaker} disabled={!speaker.trim()}>Add</button>
                                        </span>
                                    </div>
                                    {errors.speakers && <span className="error-message">{errors.speakers}</span>}
                                    <div className="persons-list">
                                        {speakers.map((speaker, index) => (
                                            // <button key={index} type="button" className="speaker-button" disabled>
                                            //     {speaker}
                                            // </button>
                                            <div key={index} className="person-entry">
                                                <button type="button" className="speaker-button" disabled>
                                                    {speaker}
                                                </button>
                                                <button type="button" onClick={() => handleDeleteSpeaker(index)} className="delete-button">
                                                    <i className="fa fa-times"></i>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contactPersons" className='color-white'>Contact Persons:</label>
                                    <div className='input-group col-xs-12'>
                                        <input className="event-form-input-background input-button-row" type="text" id="contactPersonName" placeholder="Name" value={contactPersonName} onChange={(e) => setContactPersonName(e.target.value)} required />
                                        <input className="event-form-input-background input-button-row" type="text" id="contactPersonPhone" placeholder="Phone" value={contactPersonPhone} onChange={(e) => setContactPersonPhone(e.target.value)} required />
                                        <span className="input-group-append">
                                            <button className="file-upload-browse" type="button" onClick={handleAddContactPerson} disabled={!contactPersonName.trim() || !contactPersonPhone.trim()}>Add</button>
                                        </span>
                                    </div>
                                    {errors.contactPersons && <span className="error-message">{errors.contactPersons}</span>}
                                    {errors.contactPersonPhone && <span className="error-message">{errors.contactPersonPhone}</span>}
                                    <div className="persons-list">
                                        {contactPersons.map((person, index) => (
                                            // <button key={index} type="button" className="contact-person-button" disabled>
                                            //     {person.name} - {person.phone}
                                            // </button>
                                            <div key={index} className="person-entry">
                                                <button type="button" className="contact-person-button" disabled>
                                                    {person.name} - {person.phone}
                                                </button>
                                                <button type="button" onClick={() => handleDeleteContactPerson(index)} className="delete-button">
                                                    <i className="fa fa-times"></i>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date" className='color-white'>Date:</label>
                                    <CalenderPicker selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
                                    {errors.selectedDay && <span className="error-message">{errors.selectedDay}</span>}
                                
                                </div>
                                <div className="form-group">
                                    <label htmlFor="image" className='color-white'>Image:</label>
                                    <input className="event-form-input-background file-upload-default" type="file" id="image" onChange={handleImageChange} multiple />
                                    <div className='input-group col-xs-12'>
                                        <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image"
                                            value={image ? Array.from(image).map(file => file.name).join(', ') : ''}
                                        />
                                        <span className="input-group-append">
                                            <button className="file-upload-browse" type="button" onClick={handleUploadClick}>Upload</button>
                                        </span>
                                    </div>
                                    <div className={`image-preview ${image ? 'h-inpx-100':''}`}>
                                        {imagePreviews.map((preview, index) => (
                                            <img key={index} src={preview} alt="Selected Preview" />
                                        ))}
                                    </div>
                                </div>
                                <button type="submit" onClick={handleSubmit}>Submit</button>
                            </form>
                        </div>
                    )}
                    <div className='event-list'>
                        {events.map((eventData) => (
                            <div key={eventData._id} className='event-item'>
                                <div className='event-details'>
                                    <h3>Event: {eventData.eventName}</h3>
                                    <p>Id: {eventData._id}</p>
                                    <p>Date: {eventData.date}</p>
                                    <p>Time: {eventData.time}</p>
                                    <p>Venue: {eventData.venue}</p>
                                    <div>
                                        <p>Speakers:</p>
                                        <ul>
                                            {eventData.speakers.map((speaker, index) => (
                                                <li key={index}>{speaker.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p>Contact Persons:</p>
                                        <ul>
                                            {eventData.contactPersons.map((contact, index) => (
                                                <li key={index}>
                                                    {contact.name} - {contact.phone}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className='event-actions'>
                                    <button onClick={() => 
                                        handleEdit( 
                                                    eventData._id,
                                                    eventData.eventName,
                                                    eventData.date,
                                                    eventData.time,
                                                    eventData.venue,
                                                    eventData.speakers,
                                                    eventData.contactPersons
                                        )}>Edit</button>
                                    <button onClick={() => handleDelete(eventData._id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardEvent;

