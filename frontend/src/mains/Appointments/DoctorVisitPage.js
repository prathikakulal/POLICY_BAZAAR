
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './DoctorVisitPage.css';

// const DoctorVisitPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [doctor, setDoctor] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [selectedLanguage, setSelectedLanguage] = useState('English');
//   const [consultationType, setConsultationType] = useState(
//     window.location.pathname.includes('/visit') ? 'CLINIC VISIT' : 'DIGITAL CONSULT'
//   );

//   // Mock available dates
//   const dates = [
//     { day: 'Fri', date: 15, month: 'May' },
//     { day: 'Sat', date: 16, month: 'May' },
//     { day: 'Sun', date: 17, month: 'May' },
//     { day: 'Mon', date: 18, month: 'May' },
//     { day: 'Tue', date: 19, month: 'May' },
//     { day: 'Wed', date: 20, month: 'May' },
//   ];

//   // Mock available times
//   const times = ['09:20 PM', '09:30 PM', '09:40 PM'];

//   // Mock languages
//   const languages = ['English', 'Hindi', 'Telugu'];

//   useEffect(() => {
//     const fetchDoctor = async () => {
//       try {
//         await new Promise(resolve => setTimeout(resolve, 500));
        
//         const mockDoctors = [
//           {
//             id: 1,
//             name: "Dr. Sumanta Chatterjee",
//             specialty: "Cardiologist",
//             experience: 12,
//             qualifications: "MBBS, MD GENERAL MEDICINE, DM CARDIOLOGY",
//             location: "Kolkata",
//             clinic: "HealthYou Speciality Clinic & Diagnostics, Kolkata",
//             address: "Trixon Park Radhakrishna Mandir, AB, Santoshpur Ave, Kolkata",
//             rating: 80,
//             patients: 25,
//             fee: 375,
//             available: "Available tomorrow at 08:00 AM",
//             image: "https://randomuser.me/api/portraits/men/1.jpg"
//           },
//           {
//             id: 2,
//             name: "Dr. Dixit Garg",
//             specialty: "Cardiologist",
//             experience: 10,
//             qualifications: "MBBS, DNB (GENERAL MEDICINE), DM CARDIOLOGY",
//             location: "Gurugram",
//             clinic: "Smiles & Hearts, Gurugram",
//             address: "Sector 14, Gurugram, Haryana",
//             rating: 92,
//             patients: 50,
//             fee: 500,
//             available: "Available in 2 minutes",
//             image: "https://randomuser.me/api/portraits/men/2.jpg"
//           },
//           {
//             id: 3,
//             name: "Dr. Sibashankar Kar",
//             specialty: "Cardiologist",
//             experience: 10,
//             qualifications: "MBBS, DNB",
//             location: "Bangalore",
//             clinic: "Heart Care Center, Bangalore",
//             address: "MG Road, Bangalore, Karnataka",
//             rating: 85,
//             patients: 35,
//             fee: 600,
//             available: "Available today at 04:00 PM",
//             image: "https://randomuser.me/api/portraits/men/3.jpg"
//           }
//         ];
        
//         const foundDoctor = mockDoctors.find(doc => doc.id === parseInt(id)) || mockDoctors[0];
//         setDoctor(foundDoctor);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching doctor:", error);
//         setLoading(false);
//       }
//     };

//     fetchDoctor();
//   }, [id]);

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//     setSelectedTime(null);
//   };

//   const handleBookAppointment = () => {
//     if (selectedDate && selectedTime) {
//       alert(`Appointment booked with ${doctor.name} on ${selectedDate.day} ${selectedDate.date} ${selectedDate.month} at ${selectedTime} (${consultationType})`);
//       navigate('/');
//     } else {
//       alert('Please select both date and time');
//     }
//   };

//   if (loading) return <div className="loading">Loading doctor details...</div>;
//   if (!doctor) return <div className="error">Doctor not found</div>;

//   return (
//     <div className="doctor-visit-container">
//       <div className="header">
//         <h1>Anollo</h1>
//         <div className="app-version">24.17</div>
//       </div>

      

//       <div className="doctor-profile-section">
//         <div className="doctor-info">
//           <h2>{doctor.name}</h2>
//           <p className="specialty">{doctor.specialty}</p>
//           <p className="experience">{doctor.experience} years • {doctor.qualifications}</p>
//           <p className="location">{doctor.location}</p>
//           <p className="clinic">{doctor.clinic}</p>
//           <p className="rating">{doctor.rating}% ({doctor.patients}+ patients)</p>
//         </div>

//         <div className="consultation-type">
//           <button 
//             className={consultationType === 'DIGITAL CONSULT' ? 'active' : ''}
//             onClick={() => setConsultationType('DIGITAL CONSULT')}
//             disabled={window.location.pathname.includes('/visit')}
//           >
//             DIGITAL CONSULT
//           </button>
//           <button 
//             className={consultationType === 'CLINIC VISIT' ? 'active' : ''}
//             onClick={() => setConsultationType('CLINIC VISIT')}
//             disabled={!window.location.pathname.includes('/visit')}
//           >
//             CLINIC VISIT
//           </button>
//         </div>
//       </div>

//       <div className="clinic-info">
//         <h3>{doctor.clinic}</h3>
//         <p className="address">{doctor.address}</p>
//       </div>

//       <div className="date-selection">
//         <h3>Select Date</h3>
//         <div className="date-grid">
//           {dates.map((dateObj, index) => (
//             <div 
//               key={index}
//               className={`date-box ${selectedDate?.date === dateObj.date ? 'selected' : ''}`}
//               onClick={() => handleDateSelect(dateObj)}
//             >
//               <div className="day">{dateObj.day}</div>
//               <div className="date">{dateObj.date}</div>
//               <div className="month">{dateObj.month}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {selectedDate && (
//         <div className="time-selection">
//           <h3>Select Time</h3>
//           <div className="time-slots">
//             {times.map((time, index) => (
//               <div 
//                 key={index}
//                 className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
//                 onClick={() => setSelectedTime(time)}
//               >
//                 {time}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="language-selection">
//         <h3>Language</h3>
//         <div className="language-options">
//           {languages.map((language, index) => (
//             <div 
//               key={index}
//               className={`language-option ${selectedLanguage === language ? 'selected' : ''}`}
//               onClick={() => setSelectedLanguage(language)}
//             >
//               {language}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="payment-section">
//         <div className="fee-display">
//           <span className="fee-amount">₹{doctor.fee}</span>
//           <span className="fee-label">Consultation Fee</span>
//         </div>
//         <div className="payment-options">
//           <div className="payment-option">
//             <input type="radio" id="payOnline" name="payment" defaultChecked />
//             <label htmlFor="payOnline">Pay Online</label>
//           </div>
//           <div className="payment-option">
//             <input type="radio" id="payAtClinic" name="payment" />
//             <label htmlFor="payAtClinic">Pay at Clinic</label>
//           </div>
//         </div>
//       </div>

//       <div className="action-buttons">
//         <button className="continue-btn" onClick={handleBookAppointment}>
//           Continue
//         </button>
//       </div>

//       <div className="footer-info">
//         <p>DNC IN</p>
//         <p>01/03/2023</p>
//         <p>21:13</p>
//         <p>15-05-2025</p>
//       </div>
//     </div>
//   );
// };

// export default DoctorVisitPage;






import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DoctorVisitPage.css';

const DoctorVisitPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [consultationType, setConsultationType] = useState(
    window.location.pathname.includes('/visit') ? 'CLINIC VISIT' : 'DIGITAL CONSULT'
  );

   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      days.push({
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: i,
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        fullDate: date
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Mock available times
  const times = ['09:20 AM', '10:30 AM', '11:40 AM', '02:20 PM', '03:30 PM', '04:40 PM', '05:20 PM', '06:30 PM', '07:40 PM'];

  // Mock languages
  const languages = ['English', 'Hindi', 'Telugu'];

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));

        const mockDoctors = [
          {
            id: 1,
            name: "Dr. Sumanta Chatterjee",
            specialty: "Cardiologist",
            experience: 12,
            qualifications: "MBBS, MD GENERAL MEDICINE, DM CARDIOLOGY",
            location: "Kolkata",
            clinic: "HealthYou Speciality Clinic & Diagnostics, Kolkata",
            address: "Trixon Park Radhakrishna Mandir, AB, Santoshpur Ave, Kolkata",
            rating: 80,
            patients: 25,
            fee: 375,
            available: "Available tomorrow at 08:00 AM",
            image: "https://randomuser.me/api/portraits/men/1.jpg"
          },
          {
            id: 2,
            name: "Dr. Dixit Garg",
            specialty: "Cardiologist",
            experience: 10,
            qualifications: "MBBS, DNB (GENERAL MEDICINE), DM CARDIOLOGY",
            location: "Gurugram",
            clinic: "Smiles & Hearts, Gurugram",
            address: "Sector 14, Gurugram, Haryana",
            rating: 92,
            patients: 50,
            fee: 500,
            available: "Available in 2 minutes",
            image: "https://randomuser.me/api/portraits/men/2.jpg"
          },
          {
            id: 3,
            name: "Dr. Sibashankar Kar",
            specialty: "Cardiologist",
            experience: 10,
            qualifications: "MBBS, DNB",
            location: "Bangalore",
            clinic: "Heart Care Center, Bangalore",
            address: "MG Road, Bangalore, Karnataka",
            rating: 85,
            patients: 35,
            fee: 600,
            available: "Available today at 04:00 PM",
            image: "https://randomuser.me/api/portraits/men/3.jpg"
          }
        ];
        
        const foundDoctor = mockDoctors.find(doc => doc.id === parseInt(id)) || mockDoctors[0];
        setDoctor(foundDoctor);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctor:", error);
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  const handleDateSelect = (date) => {
    if (!date) return; // Skip empty calendar cells
    
    // Check if the date is in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date.fullDate < today) {
      alert("You cannot select a date in the past");
      return;
    }
    
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      alert(`Appointment booked with ${doctor.name} on ${selectedDate.day} ${selectedDate.date} ${selectedDate.month} at ${selectedTime} (${consultationType})`);
      navigate('/');
    } else {
      alert('Please select both date and time');
    }
  };

  if (loading) return <div className="loading">Loading doctor details...</div>;
  if (!doctor) return <div className="error">Doctor not found</div>;

  return (
        
    <div className="doctor-visit-container">
        <div className="header">
        <h1>Anollo</h1>
        <div className="app-version">24.17</div>
      </div>

      

      <div className="doctor-profile-section">
        <div className="doctor-info">
          <h2>{doctor.name}</h2>
          <p className="specialty">{doctor.specialty}</p>
          <p className="experience">{doctor.experience} years • {doctor.qualifications}</p>
          <p className="location">{doctor.location}</p>
          <p className="clinic">{doctor.clinic}</p>
          <p className="rating">{doctor.rating}% ({doctor.patients}+ patients)</p>
        </div>

        <div className="consultation-type">
          <button 
            className={consultationType === 'DIGITAL CONSULT' ? 'active' : ''}
            onClick={() => setConsultationType('DIGITAL CONSULT')}
            disabled={window.location.pathname.includes('/visit')}
          >
            DIGITAL CONSULT
          </button>
          <button 
            className={consultationType === 'CLINIC VISIT' ? 'active' : ''}
            onClick={() => setConsultationType('CLINIC VISIT')}
            disabled={!window.location.pathname.includes('/visit')}
          >
            CLINIC VISIT
          </button>
        </div>
      </div>

      <div className="clinic-info">
        <h3>{doctor.clinic}</h3>
        <p className="address">{doctor.address}</p>
      </div>
      {/* ... other existing components ... */}

      <div className="date-selection">
        <h3>Select Date</h3>
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>&lt;</button>
          <h4>
            {new Date(currentYear, currentMonth).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric'
            })}
          </h4>
          <button onClick={handleNextMonth}>&gt;</button>
        </div>
        
        <div className="calendar-grid">
          {/* Weekday headers */}
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="calendar-weekday">
              {day}
            </div>
          ))}
          
          {/* Calendar days */}
          {calendarDays.map((dateObj, index) => (
            <div
              key={index}
              className={`calendar-day ${
                !dateObj ? 'empty' : ''
              } ${
                selectedDate?.date === dateObj?.date && 
                selectedDate?.month === dateObj?.month ? 'selected' : ''
              } ${
                dateObj && new Date(dateObj.fullDate).setHours(0,0,0,0) === new Date().setHours(0,0,0,0) ? 'today' : ''
              }`}
              onClick={() => handleDateSelect(dateObj)}
            >
              {dateObj ? dateObj.date : ''}
            </div>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div className="time-selection">
          <h3>Select Time</h3>
          <div className="time-slots">
            {times.map((time, index) => (
              <div 
                key={index}
                className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="language-selection">
        <h3>Language</h3>
        <div className="language-options">
          {languages.map((language, index) => (
            <div 
              key={index}
              className={`language-option ${selectedLanguage === language ? 'selected' : ''}`}
              onClick={() => setSelectedLanguage(language)}
            >
              {language}
            </div>
          ))}
        </div>
      </div>

      <div className="payment-section">
        <div className="fee-display">
          <span className="fee-amount">₹{doctor.fee}</span>
          <span className="fee-label">Consultation Fee</span>
        </div>
        <div className="payment-options">
          <div className="payment-option">
            <input type="radio" id="payOnline" name="payment" defaultChecked />
            <label htmlFor="payOnline">Pay Online</label>
          </div>
          <div className="payment-option">
            <input type="radio" id="payAtClinic" name="payment" />
            <label htmlFor="payAtClinic">Pay at Clinic</label>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button className="continue-btn" onClick={handleBookAppointment}>
          Continue
        </button>
      </div>

      
    </div>
  );
};

export default DoctorVisitPage;







