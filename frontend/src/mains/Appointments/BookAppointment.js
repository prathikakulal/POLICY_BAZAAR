import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookAppointment.css';
import DoctorVisitPage from './DoctorVisitPage';
function BookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    mode: ['hospital', 'online'],
    experience: ['0-5', '6-10', '11-16'],
    fees: ['100-500', '500-1000', '1000+'],
    language: ['english', 'hindi']
  });
  const navigate = useNavigate();

  // Mock API call
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockDoctors = [
          {
            id: 1,
            name: "Dr. Sumanta Chatterjee",
            specialty: "Cardiologist",
            experience: 12,
            qualifications: "MBBS, MD GENERAL MEDICINE, DM CARDIOLOGY",
            location: "Kolkata",
            clinic: "HealthYou Speciality Clinic & Diagnostics, Kolkata",
            rating: 80,
            patients: 25,
            fee: 500,
            available: "Available tomorrow at 08:00 AM",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            modes: ['hospital', 'online'],
            languages: ['english', 'hindi']
          },
          {
            id: 2,
            name: "Dr. Dixit Garg",
            specialty: "Cardiologist",
            experience: 10,
            qualifications: "MBBS, DNB (GENERAL MEDICINE), DM CARDIOLOGY",
            location: "Gurugram",
            clinic: "Smiles & Hearts, Gurugram",
            rating: 92,
            patients: 50,
            fee: 750,
            available: "Available in 2 minutes",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            modes: ['online'],
            languages: ['english']
          },
          {
            id: 3,
            name: "Dr. Sibashankar Kar",
            specialty: "Cardiologist",
            experience: 10,
            qualifications: "MBBS, DNB",
            location: "Bangalore",
            clinic: "Heart Care Center, Bangalore",
            rating: 85,
            patients: 35,
            fee: 600,
            available: "Available today at 04:00 PM",
            image: "https://randomuser.me/api/portraits/men/3.jpg",
            modes: ['hospital'],
            languages: ['hindi']
          }
        ];
        
        setDoctors(mockDoctors);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const newFilters = {...prev};
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
      } else {
        newFilters[filterType] = [...newFilters[filterType], value];
      }
      return newFilters;
    });
  };

  const filteredDoctors = doctors.filter(doctor => {
    if (filters.mode.length > 0 && !filters.mode.some(mode => doctor.modes.includes(mode))) {
      return false;
    }
    
    if (filters.experience.length > 0) {
      const meetsExp = filters.experience.some(range => {
        const [min, max] = range.split('-').map(Number);
        if (max) return doctor.experience >= min && doctor.experience <= max;
        return doctor.experience >= min;
      });
      if (!meetsExp) return false;
    }
    
    if (filters.fees.length > 0) {
      const meetsFees = filters.fees.some(range => {
        const [min, max] = range.split('-').map(Number);
        if (max) return doctor.fee >= min && doctor.fee <= max;
        return doctor.fee >= min;
      });
      if (!meetsFees) return false;
    }
    
    if (filters.language.length > 0 && !filters.language.some(lang => doctor.languages.includes(lang))) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Apple Health</h1>
        <div className="location-selectors">
          <select className="form-select">
            <option>Select Location</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
          </select>
          <select className="form-select">
            <option>Select Address</option>
            <option>Home</option>
            <option>Work</option>
          </select>
        </div>
      </header>

      <div className="main-content">
        <div className="filters-column">
          <div className="filter-section">
            <h5>Filters</h5>
            <button className="btn btn-sm btn-outline-primary">Clear All</button>
            <button className="btn btn-sm btn-primary">Show Doctors Near Me</button>
            
            <h6>Mode of Consult</h6>
            <div className="form-check">
              <input 
                type="checkbox" 
                id="hospitalVisit" 
                checked={filters.mode.includes('hospital')} 
                onChange={() => handleFilterChange('mode', 'hospital')} 
              />
              <label htmlFor="hospitalVisit">Hospital Visit</label>
            </div>
            <div className="form-check">
              <input 
                type="checkbox" 
                id="onlineConsult" 
                checked={filters.mode.includes('online')} 
                onChange={() => handleFilterChange('mode', 'online')} 
              />
              <label htmlFor="onlineConsult">Online Consult</label>
            </div>
            
            <h6>Experience (In Years)</h6>
            {['0-5', '6-10', '11-16'].map(range => (
              <div className="form-check" key={range}>
                <input 
                  type="checkbox" 
                  id={`exp-${range}`}
                  checked={filters.experience.includes(range)} 
                  onChange={() => handleFilterChange('experience', range)} 
                />
                <label htmlFor={`exp-${range}`}>{range}</label>
              </div>
            ))}
            
            <h6>Fees (In Rupees)</h6>
            {['100-500', '500-1000', '1000+'].map(range => (
              <div className="form-check" key={range}>
                <input 
                  type="checkbox" 
                  id={`fees-${range}`}
                  checked={filters.fees.includes(range)} 
                  onChange={() => handleFilterChange('fees', range)} 
                />
                <label htmlFor={`fees-${range}`}>{range}</label>
              </div>
            ))}
            
            <h6>Language</h6>
            <div className="form-check">
              <input 
                type="checkbox" 
                id="english" 
                checked={filters.language.includes('english')} 
                onChange={() => handleFilterChange('language', 'english')} 
              />
              <label htmlFor="english">English</label>
            </div>
            <div className="form-check">
              <input 
                type="checkbox" 
                id="hindi" 
                checked={filters.language.includes('hindi')} 
                onChange={() => handleFilterChange('language', 'hindi')} 
              />
              <label htmlFor="hindi">Hindi</label>
            </div>
          </div>
          
          <div className="quick-links">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#">Lab Tests</a></li>
              <li><a href="#">Circle Membership</a></li>
              <li><a href="#">Health Records</a></li>
              <li><a href="#">Diabetes Reversal</a></li>
              <li><a href="#">Buy Insurance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="doctors-column">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Doctors</a></li>
              <li className="breadcrumb-item active">Cardiologists</li>
            </ol>
          </nav>
          
          <div className="doctors-header">
            <h2>Consult Cardiologists Online - Heart Specialists</h2>
            <span className="badge">{filteredDoctors.length} doctors</span>
          </div>
          
          <div className="filter-tabs">
            <button className="active">All</button>
            <button>Available Today</button>
            <button>Near Me</button>
            <button>Top Rated</button>
          </div>
          
          {loading ? (
            <div className="loading">Loading doctors...</div>
          ) : filteredDoctors.length === 0 ? (
            <div className="no-doctors">No doctors match your filters</div>
          ) : (
            <div className="doctors-list">
              {filteredDoctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} navigate={navigate} />
              ))}
            </div>
          )}
        </div>
      </div>
      
      <footer className="app-footer">
        <p><strong>Need help consult the right doctor?</strong></p>
        <p>Call +01-8640245897 to host instantly</p>
      </footer>
    </div>
  );
}

function DoctorCard({ doctor, navigate }) {
  const handleConsultClick = () => {
    navigate(`/doctor/${doctor.id}`);
  };

  const handleVisitClick = () => {
    navigate(`/doctor/${doctor.id}/visit`);
  };

  return (
    <div className="doctor-card">
      <div className="doctor-image">
        <img src={doctor.image} alt={doctor.name} />
      </div>
      <div className="doctor-info">
        <h3>{doctor.name}</h3>
        <p className="specialty">{doctor.specialty}</p>
        <p className="experience">{doctor.experience} YEARS • {doctor.qualifications}</p>
        <p className="location">{doctor.location}</p>
        <p className="clinic">{doctor.clinic}</p>
        <p className="rating">{doctor.rating}% ({doctor.patients}+ Patients)</p>
      </div>
      <div className="doctor-actions">
        <p className="fee">₹{doctor.fee} consultation fee</p>
        <p className="availability"><span className="available-icon">✓</span> {doctor.available}</p>
        <button className="consult-btn" onClick={handleConsultClick}>
          Consult Online
        </button>
        <p className="no-fees"><span className="icon">🔔</span> No Booking Fees</p>
        <p className="visit" onClick={handleVisitClick}>
          <span className="icon">👨‍⚕️</span> Visit Doctor
        </p>
      </div>
    </div>
  );
}

export default BookAppointment;