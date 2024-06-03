import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/CalenderPicker.css';

const CalenderPicker = ({ selectedDay, setSelectedDay }) => {
    // alert(selectedDay);
    // Helper function to parse the date string
    const parseDate = (dateStr) => {
        if (typeof dateStr === 'string') {
            const [day, month, year] = dateStr.split('/').map(Number);
            return new Date(year, month - 1, day); // Months are 0-indexed in JavaScript Date
        } else if (dateStr instanceof Date) {
            return dateStr;
        }
        return null;
    };

    const initialDate = parseDate(selectedDay);

    const [showDateSelection, setShowDateSelection] = useState(true);
    const [showYearSelector, setShowYearSelector] = useState(false);
    const [showMonthSelector, setShowMonthSelector] = useState(false);

    const isWeekend = (date) => {
        const day = date.getDay();
        return day === 0 || day === 6;
    };

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    const years = Array.from({ length: 201 }, (_, i) => 1900 + i);
    const months = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('default', { month: 'long' }));
    const yearsPerPage = 12;

    const currentYear = new Date().getFullYear();
    const initialYearPage = Math.floor((currentYear - 1900) / 12);

    const startYear = 1900 + (initialYearPage * yearsPerPage);
    const endYear = startYear + yearsPerPage - 1;

    const [yearPage, setYearPage] = useState(initialYearPage);

    const currentPageYears = years.slice(yearPage * yearsPerPage, (yearPage + 1) * yearsPerPage);

    const handleMonthClick = () => {
        setShowMonthSelector(true);
        setShowYearSelector(false);
        setShowDateSelection(false);
    };

    const handleYearClick = () => {
        setShowYearSelector(true);
        setShowMonthSelector(false);
        setShowDateSelection(false);
    };

    const handleDateSelection = () => {
        setShowDateSelection(true);
        setShowMonthSelector(false);
        setShowYearSelector(false);
    };

    return (
        <DatePicker
            selected={initialDate}
            onChange={(date) => {
                setSelectedDay(date);
                handleDateSelection();
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a day"
            className="event-form-input-background"
            startDate={new Date(new Date().getFullYear(), new Date().getMonth(), 1)}
            endDate={new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)}
            dayClassName={(date) => {
                if (isToday(date)) return 'today';
                if (isWeekend(date)) return 'weekend';
                return undefined;
            }}
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled
            }) => (
                <div className={`custom-header ${showDateSelection ? '' : 'hide-date-selection'}`}>
                    {!showYearSelector && !showMonthSelector && (
                        <>
                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                {"<"}
                            </button>
                            <button onClick={handleYearClick}>
                                {date.getFullYear()}
                            </button>
                            <button onClick={handleMonthClick}>
                                {months[date.getMonth()]}
                            </button>
                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                {">"}
                            </button>
                        </>
                    )}
                    {showYearSelector && (
                        <div className="year-selector">
                            <button onClick={() => setYearPage(yearPage - 1)} disabled={yearPage === 0}>
                                {"<"}
                            </button>
                            <div className="year-grid">
                                {currentPageYears.map(year => (
                                    <button key={year} onClick={() => {
                                        changeYear(year);
                                        setShowYearSelector(false);
                                        handleDateSelection();
                                    }} className={year === currentYear ? 'current-year' : ''}>
                                        {year}
                                    </button>
                                ))}
                            </div>
                            <button onClick={() => setYearPage(yearPage + 1)} disabled={endYear >= 2100}>
                                {">"}
                            </button>
                        </div>
                    )}
                    {showMonthSelector && (
                        <div className="month-selector">
                            {months.map((month, index) => (
                                <button key={month} onClick={() => {
                                    changeMonth(index);
                                    setShowMonthSelector(false);
                                    handleDateSelection();
                                }}>
                                    {month}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        />
    );
};

export default CalenderPicker;
