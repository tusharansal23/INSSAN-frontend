import React, { useState, useEffect } from 'react';
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
    const [chapters, setChapters] = useState([]);

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

    const handleEdit = (id) => {
        // Handle edit logic here
        console.log('Edit chapter with id:', id);
    };

    const handleDelete = (id) => {
        // Handle delete logic here
        console.log('Delete chapter with id:', id);
    };

    useEffect(() => {
        // Fetch data when the component mounts
        const fetchChapters = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/v1/chapters/');
                const result = await response.json();
                if (result.success && Array.isArray(result.data)) {
                    setChapters(result.data);
                } else {
                    setChapters([]);
                }
            } catch (error) {
                console.error('Error fetching chapters:', error);
                setChapters([]); // Handle error by setting chapters to an empty array
           
            }
        };

        fetchChapters();
    }, []);

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
                                    <label htmlFor="chapter" className='color-white'>Chapter:</label>
                                    <input className = "chapter-form-input-background" placeholder="Northern" type="text" id="chapter" value={chapter} onChange={(e) => setChapter(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="designation" className='color-white'>Designation:</label>
                                    <input className = "chapter-form-input-background" placeholder= "Chairman" type="text" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name" className='color-white'>Name:</label>
                                    <input className = "chapter-form-input-background" placeholder = "John Doe" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company" className='color-white'>Company:</label>
                                    <input className = "chapter-form-input-background" placeholder = "INSSAN Co." type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location" className='color-white'>Location:</label>
                                    <input className = "chapter-form-input-background" placeholder = "Mumbai" type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
                                </div>
                                <button type="submit">Submit</button>
                        
                            </form>
                        </div>
                    )}

                    <div className='chapter-list'>
                        {chapters.map((chapterData) => (
                            <div key={chapterData._id} className='chapter-item'>
                                <div className='chapter-details'>
                                    <h3>Chapter: {chapterData.chapter.name}</h3>
                                    <p>Chairman: {chapterData.chairman.name}</p>
                                    <p>Secretary: {chapterData.secretary.name}</p>
                                </div>
                                <div className='chapter-actions'>
                                    <button onClick={() => handleEdit(chapterData._id)}>Edit</button>
                                    <button onClick={() => handleDelete(chapterData._id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardChapter;
