import React, { useState } from 'react';
import './Campaign.css';

const Campaign = () => {
    const [formData, setFormData] = useState({
        recipient: 'mp',
        name: '',
        email: '',
        message: '',
        supporterName: '',
        supporterEmail: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        alert('Your email has been sent to the selected representative.');
    };

    const handleSupportSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for supporting the campaign!');
    };

    return (
        <div className="campaign-container">
            <header className="hero">
                <h1>Raise Awareness: Stop the Politicization of History</h1>
                <p>Join us in calling for dialogue and fairness in historical narratives.</p>
            </header>
            
            <section className="about">
                <h2>About the Campaign</h2>
                <p>This campaign aims to raise awareness about the contested issue of the "Armenian Genocide" and call for a balanced approach that fosters dialogue rather than division.</p>
            </section>
            
            <section className="take-action">
                <h2>Take Action</h2>
                <p>Send a letter to your MP or councillor to express your concerns.</p>
                <form onSubmit={handleEmailSubmit} className="form">
                    <label>Select Recipient:</label>
                    <select name="recipient" value={formData.recipient} onChange={handleChange} className="input">
                        <option value="mp">MP</option>
                        <option value="councillor">Councillor</option>
                    </select>
                    
                    <label>Your Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input"/>
                    
                    <label>Your Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input"/>
                    
                    <label>Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required className="textarea">
                        Dear [Recipient],
                        
                        I am writing to express my concern regarding the recent unveiling of a memorial in Cardiff commemorating the so-called Armenian genocide...
                    </textarea>
                    
                    <button type="submit" className="button">Send Email</button>
                </form>
            </section>
            
            <section className="supporters">
                <h2>Join Our Supporters</h2>
                <p>Sign up to receive updates and get involved.</p>
                <form onSubmit={handleSupportSubmit} className="form">
                    <label>Your Name:</label>
                    <input type="text" name="supporterName" value={formData.supporterName} onChange={handleChange} required className="input"/>
                    
                    <label>Your Email:</label>
                    <input type="email" name="supporterEmail" value={formData.supporterEmail} onChange={handleChange} required className="input"/>
                    
                    <button type="submit" className="button">Sign Up</button>
                </form>
            </section>
            
            <footer className="footer">
                <p>&copy; 2025 Raise Awareness Campaign - All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Campaign;
