import React, { useState } from 'react';
import '../css/DashboardChapter.css';
import DashboardNav from './DashboardNav';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const DashboardChapter = () => {
    const [showForm, setShowForm] = useState(false);
    const [chapter, setChapter] = useState('');
    const [designation, setDesignation] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');

    const handleCreateButtonClick = () => {
        setShowForm(true);
    };

    const handleCancelButtonClick = () => {
        setShowForm(false);
        // Reset form fields when cancel button is clicked
        setChapter('');
        setDesignation('');
        setName('');
        setCompany('');
        setLocation('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation here before submitting the form
        if (!chapter || !designation || !name || !company || !location) {
            alert('All fields are mandatory');
            return;
        }
        // Proceed with form submission
        console.log('Form submitted successfully');
        // You can also reset the form fields after successful submission if needed
        // setChapter('');
        // setDesignation('');
        // setName('');
        // setCompany('');
        // setLocation('');
        setShowForm(false);
    };

    return (
        <div className="container-scroller">
            <DashboardNav/>
            <div className='container form-container form-start-margin'>
                <div className="dashboard-chapter">
                    {!showForm && (
                        <button onClick={handleCreateButtonClick}>
                            <i className="fa fa-plus mr-inpx-5"></i>
                            Create
                        </button>
                    )}
                    {showForm && (
                        <div className='chapter-form'>
                            <button type="button" 
                                    className='cancel-button'
                                    onClick={handleCancelButtonClick}>
                                <i className="fa fa-times"></i>
                            </button>
                            <h2>Chapter Form</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="chapter">Chapter:</label>
                                    <input type="text" id="chapter" value={chapter} onChange={(e) => setChapter(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="designation">Designation:</label>
                                    <input type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Company:</label>
                                    <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location">Location:</label>
                                    <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
                                </div>
                                <button type="submit">Submit</button>
                        
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardChapter;
