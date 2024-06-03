import React, { useState } from 'react';

const TimePicker = ({ time, setTime }) => {
    // Function to parse the time
    
    const parseTime = (time) => {
        
        if (time) {
            const [timePart, ampmPart] = time.split(' ');
            const [hourPart, minutePart] = timePart.split(':');
            return {
                hour: hourPart,
                minute: minutePart,
                ampm: ampmPart
            };
        }
        return {
            hour: '01',
            minute: '00',
            ampm: 'AM'
        };
    };

    // Initialize state based on the parsed time
    const { hour: initialHour, minute: initialMinute, ampm: initialAMPM } = parseTime(time);
    const [hour, setHour] = useState(initialHour);
    const [minute, setMinute] = useState(initialMinute);
    const [ampm, setAMPM] = useState(initialAMPM);

    // alert(ampm);
    console.log(hour,minute,ampm);
    const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
    const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

    const handleHourChange = (e) => {
        const newHour = e.target.value;
        const newTime = `${newHour}:${minute} ${ampm}`;
        setHour(newHour);
        setTime(newTime);
    };

    const handleMinuteChange = (e) => {
        const newMinute = e.target.value;
        const newTime = `${hour}:${newMinute} ${ampm}`;
        setMinute(newMinute);
        setTime(newTime);
    };

    const handleAMPMChange = (e) => {
        const newAMPM = e.target.value;
        const newTime = `${hour}:${minute} ${newAMPM}`;
        setAMPM(newAMPM);
        setTime(newTime);
    };

    return (
        <div className="time-picker">
            <select className = "event-form-input-background m-right-inpx-10" value={hour} onChange={handleHourChange}>
                {hours.map(hour => (
                    <option key={hour} value={hour}>{hour}</option>
                ))}
            </select>
            <span className='event-visibility-hidden'>:</span>
            <select className = "event-form-input-background m-right-inpx-10" value={minute} onChange={handleMinuteChange}>
                {minutes.map(minute => (
                    <option key={minute} value={minute}>{minute}</option>
                ))}
            </select>
            <select className = "event-form-input-background m-right-inpx-10" value={ampm} onChange={handleAMPMChange}>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </select>
        </div>
    );
};

export default TimePicker;
