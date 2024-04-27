import React, { useState } from 'react';
import '../css/Register.css';
import image1 from '../img/property-2.jpg';
const Register = () => {

    // State variables to store form input values
    const [organisationName, setOrganisationName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [productOrServices, setProductOrServices] = useState('');
    const [employeeStrength, setEmployeeStrength] = useState('');
    const [salesTurnover, setSalesTurnover] = useState('');
    // State variables to store the selected option and the custom other option
    const [selectedOption, setSelectedOption] = useState('');
    const [otherOption, setOtherOption] = useState('');

    const [organisationSelectedOption, setOrganisationSelectedOption] = useState('');
    const [organisationOtherOption, setOrganisationOtherOption] = useState('');

    const [programSelectedOption, setProgramSelectedOption] = useState('');
    const [programOtherOption, setProgramOtherOption] = useState('');
    
    const [membershipSelectedOption, setMembershipOption] = useState('');

    const [planSelectedOption, setPlanOption] = useState('');

    const [principleNominee, setPrincipleNominee] = useState('');
    
    const [principleDesignation, setPrincipleDesignation] = useState('');
    const [principleEmail, setPrincipleEmail] = useState('');
    const [principlePhone, setPrinciplePhone] = useState('');
    const [principleFax, setPrincipleFax] = useState('');
    const [addressOffice, setAddressOffice] = useState('');
    const [addressRes, setAddressRes] = useState('');
    const [principleResEmail, setPrincipleResEmail] = useState('');
    const [principleResPhone, setPrincipleResPhone] = useState('');
    const [principleResFax, setPrincipleResFax] = useState('');

    
    const [alternateNominee, setAlternateNominee] = useState('');
    
    const [alternateDesignation, setAlternateDesignation] = useState('');
    const [alternateEmail, setAlternateEmail] = useState('');
    const [alternatePhone, setAlternatePhone] = useState('');
    const [alternateFax, setAlternateFax] = useState('');
    const [alternateAddressOffice, setAlternateAddressOffice] = useState('');
    const [alternateAddressRes, setAlternateAddressRes] = useState('');
    const [alternateResEmail, setAlternateResEmail] = useState('');
    const [alternateResPhone, setAlternateResPhone] = useState('');
    const [alternateResFax, setAlternateResFax] = useState('');
    const [parentOrganisation, setParentOrganisation] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation or further processing here
        // For now, just log the form data
        console.log({
            organisationName: organisationName,
            phone: phone,
            email: email,
            address: address,
            productOrServices: productOrServices,
            employeeStrength: employeeStrength,
            salesTurnover: salesTurnover,
            principleNominee: principleNominee,
            principleDesignation: principleDesignation,
            principleEmail: principleEmail,
            principlePhone: principlePhone,
            principleFax: principleFax,
            addressOffice: addressOffice,
            addressRes: addressRes,
            principleResEmail: principleResEmail,
            principleResPhone: principleResPhone,
            principleResFax: principleResFax,
            
            alternateNominee: alternateNominee,
            alternateDesignation: alternateDesignation,
            alternateEmail: alternateEmail,
            alternatePhone: alternatePhone,
            alternateFax: alternateFax,
            alternateAddressOffice: alternateAddressOffice,
            alternateAddressRes: alternateAddressRes,
            alternateResEmail: alternateResEmail,
            alternateResPhone: alternateResPhone,
            alternateResFax: alternateResFax,
            parentOrganisation: parentOrganisation
        });
    };
    // Function to handle dropdown change
    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
    };

    // Function to handle change in other option text field
    const handleOtherOptionChange = (e) => {
        setOtherOption(e.target.value);
    };

    const handleOrganisationChange = (e) => {
        setOrganisationSelectedOption(e.target.value);
    };

    // Function to handle change in other option text field
    const handleOrganisationOtherOptionChange = (e) => {
        setOrganisationOtherOption(e.target.value);
    };

    const handleProgramChange = (e) => {
        setProgramSelectedOption(e.target.value);
    };

    // Function to handle change in other option text field
    const handleProgramOtherOptionChange = (e) => {
        setProgramOtherOption(e.target.value);
    };
    const handleMembershipChange = (e) => {
        setMembershipOption(e.target.value);
    };
    const handlePlanChange = (e) => {
        setPlanOption(e.target.value);
    };
    

    return (

        <div className='form-container'>
            
            <img className="form-container-img" src={image1} alt="Registration" />
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-column">
                        <label htmlFor="organisationName">Organisation Name:</label>
                        <input
                            type="text"
                            id="organisationName"
                            value={organisationName}
                            onChange={(e) => setOrganisationName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            rows="3"
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="productOrServices">Product / Services:</label>
                        <input
                            type="productOrServices"
                            id="productOrServices"
                            value={productOrServices}
                            onChange={(e) => setProductOrServices(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <label htmlFor="employeeStrength">Employee Strength in NOs:</label>
                        <input
                            type="employeeStrength"
                            id="employeeStrength"
                            value={employeeStrength}
                            onChange={(e) => setEmployeeStrength(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="salesTurnover">Sales Turnover in Rs Million:</label>
                        <input
                            type="salesTurnover"
                            id="salesTurnover"
                            value={salesTurnover}
                            onChange={(e) => setSalesTurnover(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <h6>Industry Type</h6>
                        <select value={selectedOption} onChange={handleDropdownChange}>
                            <option value="">Select an option</option>
                            <option value="A">Engineering</option>
                            <option value="B">Service</option>
                            <option value="C">Process</option>
                            <option value="Other">Other</option>
                        </select>
                        {/* Conditionally render input field for "Other" option */}
                        {selectedOption === 'Other' && (
                        <div>
                            <label htmlFor="otherOption">Enter Other Option:</label>
                                <input
                                    type="text"
                                    id="otherOption"
                                    value={otherOption}
                                    onChange={handleOtherOptionChange}
                                />
                            </div>
                        )}
                        <p>Selected Option: {selectedOption}</p>
                        {/* Display custom other option if selected */}
                        {selectedOption === 'Other' && <p>Custom Other Option: {otherOption}</p>}
                    </div>
                    <div className="form-column">
                        <h6>Organisation Type</h6>
                        <select value={organisationSelectedOption} onChange={handleOrganisationChange}>
                            <option value="">Select an option</option>  
                            <option value="A">Pvt. Sector</option>
                            <option value="B">Public</option>
                            <option value="C">Joint Sector</option>
                            <option value="Other">Other</option>
                        </select>
                        {/* Conditionally render input field for "Other" option */}
                        {organisationSelectedOption === 'Other' && (
                            <div>
                                <label htmlFor="organisationOtherOption">Enter Other Option:</label>
                                <input
                                    type="text"
                                    id="organisationOtherOption"
                                    value={organisationOtherOption}
                                    onChange={handleOrganisationOtherOptionChange}
                                />
                            </div>
                        )}
                        <p>Selected Option: {organisationSelectedOption}</p>
                        {/* Display custom other option if selected */}
                        {organisationSelectedOption === 'Other' && <p>Custom Other Option: {organisationOtherOption}</p>}
                    </div>

                    <div className="form-column">
                        <h6>Other Programmes in operation</h6>
                        <select value={programSelectedOption} onChange={handleProgramChange}>
                            <option value="">Select an option</option>
                            <option value="A">Scheme in Operation</option>
                            <option value="B">Desirous of Introducing new scheme</option>
                            <option value="C">Scheme exists, but needs improvement</option>
                            <option value="Other">No Scheme exists, but interested in information</option>
                        </select>
                        {/* Conditionally render input field for "Other" option */}
                        {programSelectedOption === 'Other' && (
                            <div>
                                <label htmlFor="programOtherOption">Enter Other Option:</label>
                                <input
                                    type="text"
                                    id="programOtherOption"
                                    value={programOtherOption}
                                    onChange={handleProgramOtherOptionChange}
                                />
                            </div>
                        )}
                        <p>Selected Option: {programSelectedOption}</p>
                        {/* Display custom other option if selected */}
                        {programSelectedOption === 'Other' && <p>Custom Other Option: {programOtherOption}</p>}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <h6>Type of Membership</h6>
                        <select value={selectedOption} onChange={handleMembershipChange}>
                            <option value="">Select an option</option>
                            <option value="A">Corporate</option>
                            <option value="B">Associate</option>
                            <option value="C">Affiliate</option>
                            <option value="C">Individual</option>
                            <option value="C">Small Scale Industry as Corp. Mem</option>
                        </select>
                        <p>Selected Option: {membershipSelectedOption}</p>
                    </div>
                    <div className="form-column">
                        <h6>Plan Type</h6>
                        <select value={selectedOption} onChange={handlePlanChange}>
                            <option value="">Select an option</option>
                            <option value="Entrance">Entrance</option>
                            <option value="Annual">Annual Subscription</option>
                        </select>
                        <p>Selected Option: {planSelectedOption}</p>
                    </div>
                    <div className="form-column">
                        <label htmlFor="parentOrganisation">Indicate INSSAN Membership No of Parent 
                            Organisation:</label>
                        <input
                            type="parentOrganisation"
                            id="parentOrganisation"
                            value={parentOrganisation}
                            onChange={(e) => setParentOrganisation(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <label htmlFor="principleNominee">Principle Nominee:</label>
                        <input
                            type="text"
                            id="principleNominee"
                            value={principleNominee}
                            onChange={(e) => setPrincipleNominee(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="principleDesignation">Designation:</label>
                        <input
                            type="text"
                            id="principleDesignation"
                            value={principleDesignation}
                            onChange={(e) => setPrincipleDesignation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="principleEmail">Email:</label>
                        <input
                            type="text"
                            id="principleEmail"
                            value={principleEmail}
                            onChange={(e) => setPrincipleEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <label htmlFor="principlePhone">Phone:</label>
                        <input
                            type="text"
                            id="principlePhone"
                            value={principlePhone}
                            onChange={(e) => setPrinciplePhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="principleFax">Fax:</label>
                        <input
                            type="text"
                            id="principleFax"
                            value={principleFax}
                            onChange={(e) => setPrincipleFax(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <label htmlFor="addressOffice">Address (OFFICE):</label>
                        <textarea
                            type="text"
                            id="addressOffice"
                            value={addressOffice}
                            onChange={(e) => setAddressOffice(e.target.value)}
                            rows="3"
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="addressRes">Address (RES):</label>
                        <textarea
                            type="text"
                            id="addressRes"
                            value={addressRes}
                            onChange={(e) => setAddressRes(e.target.value)}
                            rows="3"
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <label htmlFor="principleResEmail">Res. Email:</label>
                        <input
                            type="text"
                            id="principleResEmail"
                            value={principleResEmail}
                            onChange={(e) => setPrincipleResEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="principleResPhone">Res. Phone:</label>
                        <input
                            type="text"
                            id="principleResPhone"
                            value={principleResPhone}
                            onChange={(e) => setPrincipleResPhone(e.target.value)}
                            required
                        />
                    </div>
                
                    <div className="form-column">
                        <label htmlFor="principleResFax">Res. Fax:</label>
                        <input
                            type="text"
                            id="principleResFax"
                            value={principleResFax}
                            onChange={(e) => setPrincipleResFax(e.target.value)}
                            required
                        />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-column">
                        <label htmlFor="alternateNominee">Alternate Nominee:</label>
                        <input
                            type="text"
                            id="alternateNominee"
                            value={alternateNominee}
                            onChange={(e) => setAlternateNominee(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="alternateDesignation">Alternate Designation:</label>
                        <input
                            type="text"
                            id="alternateDesignation"
                            value={alternateDesignation}
                            onChange={(e) => setAlternateDesignation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="alternateEmail">Alternate Email:</label>
                        <input
                            type="text"
                            id="alternateEmail"
                            value={alternateEmail}
                            onChange={(e) => setAlternateEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <label htmlFor="alternatePhone">Alternate Phone:</label>
                        <input
                            type="text"
                            id="alternatePhone"
                            value={alternatePhone}
                            onChange={(e) => setAlternatePhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="alternateFax">Alternate Fax:</label>
                        <input
                            type="text"
                            id="alternateFax"
                            value={alternateFax}
                            onChange={(e) => setAlternateFax(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <label htmlFor="alternateAddressOffice">Alternate Address (OFFICE):</label>
                        <textarea
                            type="text"
                            id="alternateAddressOffice"
                            value={alternateAddressOffice}
                            onChange={(e) => setAlternateAddressOffice(e.target.value)}
                            rows="3"
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="alternateAddressRes">Alternate Address (RES):</label>
                        <textarea
                            type="text"
                            id="alternateAddressRes"
                            value={alternateAddressRes}
                            onChange={(e) => setAlternateAddressRes(e.target.value)}
                            rows="3"
                            required
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <label htmlFor="alternateResEmail">Alternate Res. Email:</label>
                        <input
                            type="text"
                            id="alternateResEmail"
                            value={alternateResEmail}
                            onChange={(e) => setAlternateResEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="alternateResPhone">Alternate Res. Phone:</label>
                        <input
                            type="text"
                            id="alternateResPhone"
                            value={alternateResPhone}
                            onChange={(e) => setAlternateResPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-column">
                        <label htmlFor="alternateResFax">Alternate Res. Fax:</label>
                        <input
                            type="text"
                            id="alternateResFax"
                            value={alternateResFax}
                            onChange={(e) => setAlternateResFax(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>

    );
};
export default Register;