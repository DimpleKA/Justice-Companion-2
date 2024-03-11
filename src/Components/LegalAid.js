import React, { useState } from 'react';
import './LegalAid.css';

const LegalAid = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [age, setAge] = useState('');
  const [policeStation, setPoliceStation] = useState('');
  const [residencePoliceStation, setResidencePoliceStation] = useState('');
  const [isDifferentPoliceStation, setIsDifferentPoliceStation] = useState(false);
  const [eventDistrict, setEventDistrict] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get user's geolocation
      const position = await getCurrentPosition();
      // Send form data and geolocation to backend
      const formData = { name, mobile, fatherName, age, policeStation, residencePoliceStation, isDifferentPoliceStation, eventDistrict, position };
      const response = await fetch('http://localhost:4000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submitted successfully!');
        // Show success alert
alert('आपका फॉर्म सफलतापूर्वक जमा हो गया है! जल्द ही हमारे लीगल एजेंट आपसे संपर्क करेंगे।');

        // Reset form fields after submission
        resetFormFields();
      } else {
        console.error('Failed to submit form');
        // Show error alert
alert('क्षमा करें, फॉर्म सबमिट करने में तकनीकी समस्या आई है। कृपया बाद में पुनः प्रयास करें।');

      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Function to handle changes in the "Is Police Station Different?" dropdown
  const handlePoliceStationChange = (e) => {
    setIsDifferentPoliceStation(e.target.value === 'Yes');
  };

  // Function to retrieve user's current position using Geolocation API
  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  // Function to reset form fields after submission
  const resetFormFields = () => {
    setName('');
    setMobile('');
    setFatherName('');
    setAge('');
    setPoliceStation('');
    setResidencePoliceStation('');
    setIsDifferentPoliceStation(false);
    setEventDistrict('');
  };

  // Array of districts
  const districts = [
    "आगरा", "अलीगढ", "खैर", "प्रयागराज", "अम्बेडकरनगर", "औरैया", "आजमगढ", "बागपत[मृत कड़ियाँ]", 
    "बहराइच", "बलिया", "बलरामपुर", "बाँदा", "बाराबंकी", "बरेली", "बस्ती", "बिजनौर", "बदायूँ", 
    "बुलंदशहर", "चंदौली", "चित्रकूट", "देवरिया", "एटा", "इटावा", "अयोध्या", "फ़र्रूख़ाबाद", 
    "फतेहपुर", "फ़िरोजाबाद", "गौतमबुद्ध नगर", "गाजियाबाद", "ग़ाज़ीपुर", "गोंडा", "गोरखपुर", 
    "हमीरपुर", "हरदोई", "हाथरस", "जलौन", "जौनपुर", "झाँसी", "ज्योतिबा फुले नगर", "कन्नौज", 
    "कानपुर देहात", "कानपुर नगर", "कौशाम्बी", "कुशीनगर (पड़रौना)", "लखीमपुर-खिरी", "ललितपुर", 
    "लखनऊ", "महाराजगंज", "महोबा", "मैनपुरी", "मथुरा", "मऊ", "मेरठ", "मिर्ज़ापुर", 
    "मुरादाबाद", "मुजफ्फरनगर", "पीलीभीत", "प्रतापगढ", "रायबरेली", "रामपुर", "सहारनपुर", 
    "संत कबीरनगर", "भदोही", "शाहजहाँपुर", "श्रावस्ती", "सिद्धार्थनगर", "सीतापुर", "सोनभद्र", 
    "सुल्तानपुर", "उन्नाव", "वाराणसी"
  ];

  return (
    <div className='legalaid-container' style={{ backgroundColor: '#001f3f', color: '#ffffff' }}>
      <h2 style={{ color: '#ffd700' }}>न्यायिक सहायता फॉर्म</h2>
      <form onSubmit={handleSubmit} className='legalaid-form'>
        <div className='form-group'>
          <label>पीड़ित का नाम:</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className='form-group'>
          <label>पीड़ित का मोबाइल नंबर:</label>
          <input type='number' value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </div>
        <div className='form-group'>
          <label>पीड़ित के पिता का नाम:</label>
          <input type='text' value={fatherName} onChange={(e) => setFatherName(e.target.value)} required />
        </div>
        <div className='form-group'>
          <label>पीड़ित की उम्र:</label>
          <input type='number' value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>
        <div className='form-group'>
          <label>क्या घटना से सम्बंधित थाना:</label>
          <input type='text' value={policeStation} onChange={(e) => setPoliceStation(e.target.value)} required />
        </div>
        <div className='form-group'>
          <label style={{ color: '#ffd700' }}>क्या घटना से सम्बंधित थाना पीड़ित के निवास के थाना क्षेत्र से अलग है ?</label>
          <select value={isDifferentPoliceStation ? 'Yes' : 'No'} onChange={handlePoliceStationChange} className='form-input'>
            <option value='Yes'>हाँ</option>
            <option value='No'>नहीं</option>
          </select>
        </div>
        {isDifferentPoliceStation && (
          <div className='form-group'>
            <label>पीड़ित के निवास के थाना क्षेत्र:</label>
            <input type='text' value={residencePoliceStation} onChange={(e) => setResidencePoliceStation(e.target.value)} required />
          </div>
        )}
        <div className='form-group'>
          <label>घटना किस जिले से जुड़ी है:</label>
          <select value={eventDistrict} onChange={(e) => setEventDistrict(e.target.value)} required>
            <option value=''>जिला चुनें</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))}
          </select>
        </div>
        <button type='submit' className='submit-button' style={{ backgroundColor: '#ffd700' }}>जमा करें</button>
      </form>
    </div>
  );
};

export default LegalAid;
