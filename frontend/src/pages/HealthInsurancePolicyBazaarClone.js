import React, { useState, useEffect } from 'react';
import FeatureSection from './FeatureSection';
import CitySelectionPB from './CitySelectionPB';
import { useNavigate } from 'react-router-dom';
// --- PAGE 1: SELECTION PAGE ---
 
// --- SVG Icon Components for Selection Page ---
const CheckmarkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const AffordableIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
const PartnerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const ClaimSupportIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><polyline points="12 6 12 12 16 14"></polyline></svg>;
const SelfIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
const WifeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M17.5 14.5c1.5-1 2.5-3 2.5-5A4.5 4.5 0 0 0 15.5 5"/></svg>
const ChildIconPage1 = () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><circle cx="12" cy="8" r="2.5"/></svg>
const SeniorIconPage1 = () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M5 14a7 7 0 0 0 14 0"/></svg>


const initialMembersData = [
    { id: 'self', name: 'Self', selected: true, count: 1, hasCounter: false, icon: <SelfIcon /> },
    { id: 'wife', name: 'Wife', selected: false, count: 0, hasCounter: false, icon: <WifeIcon /> },
    { id: 'son', name: 'Son', selected: false, count: 0, hasCounter: true, icon: <ChildIconPage1 /> },
    { id: 'daughter', name: 'Daughter', selected: false, count: 0, hasCounter: true, icon: <ChildIconPage1 /> },
    { id: 'father', name: 'Father', selected: false, count: 0, hasCounter: false, icon: <SeniorIconPage1 /> },
    { id: 'mother', name: 'Mother', selected: false, count: 0, hasCounter: false, icon: <SeniorIconPage1 /> },
    { id: 'grandfather', name: 'Grand Father', selected: false, count: 0, hasCounter: false, icon: <SeniorIconPage1 /> },
    { id: 'grandmother', name: 'Grand Mother', selected: false, count: 0, hasCounter: false, icon: <SeniorIconPage1 /> },
    { id: 'fatherinlaw', name: 'Father-in-law', selected: false, count: 0, hasCounter: false, icon: <SeniorIconPage1 /> },
    { id: 'motherinlaw', name: 'Mother-in-law', selected: false, count: 0, hasCounter: false, icon: <SeniorIconPage1 /> },
];

const plansData = [
    { id: 1, logo: 'https://www.policybazaar.com/images/insurer-logo/niva-bupa.png', name: 'Niva Bupa Health Insurance', hospitals: '10,000+', features: ['No Room Rent Capping', 'Re-instatement of Cover', 'Annual Health check-up'], coverage: '1 Cr', price: 987, bonus: 'No Claim Bonus up to 100%'},
    { id: 2, logo: 'https://www.policybazaar.com/images/insurer-logo/aditya-birla.png', name: 'Aditya Birla Health Insurance', hospitals: '11,000+', features: ['Day 1 cover for Chronic Illnesses', 'Up to 100% Health Returns', 'Annual Health check-up'], coverage: '1 Cr', price: 1125, bonus: '10% discount on 2-year policy' },
    { id: 3, logo: 'https://www.policybazaar.com/images/insurer-logo/star-health.png', name: 'Star Health Insurance', hospitals: '14,000+', features: ['No Pre-policy Medical check-up', 'Cover for maternity expenses', 'Automatic Restoration of Cover'], coverage: '1 Cr', price: 1050, bonus: '24x7 doctor teleconsultation' },
    { id: 4, logo: 'https://www.policybazaar.com/images/insurer-logo/HDFC-ERGO-Health-Insurance.png', name: 'HDFC ERGO Health Insurance', hospitals: '13,000+', features: ['Restore benefit up to 100%', 'No sub-limits on room rent', 'AYUSH treatments covered'], coverage: '1 Cr', price: 1210, bonus: 'Multiplier benefit up to 2x'},
];

const SelectionPage = ({ onContinue }) => {
    const [gender, setGender] = useState('male');
    const [members, setMembers] = useState(initialMembersData);
    const [visiblePlans, setVisiblePlans] = useState(3);

    const handleMemberToggle = (id) => {
        setMembers(members.map(member => {
            if (member.id === id) {
                const newSelectedState = !member.selected;
                return { ...member, selected: newSelectedState, count: newSelectedState ? 1 : 0 };
            }
            return member;
        }));
    };

    const handleMemberCount = (id, delta) => {
        setMembers(members.map(member => {
            if (member.id === id) {
                const newCount = member.count + delta;
                if (newCount >= 1) {
                    return { ...member, count: newCount, selected: true };
                } else {
                    return { ...member, count: 0, selected: false };
                }
            }
            return member;
        }));
    };
    
    const handleContinueClick = () => {
        const selected = members.filter(m => m.selected || m.count > 0);
        onContinue(selected);
        
    };

    const MemberCard = ({ member }) => (
        <div className={`member-card ${member.selected ? 'selected' : ''}`} onClick={() => !member.hasCounter && handleMemberToggle(member.id)}>
            <div className="member-icon-wrapper">{member.icon}</div>
            <p>{member.name}</p>
            {member.hasCounter && (
                <div className="member-counter" onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => handleMemberCount(member.id, -1)} disabled={member.count <= 0}>-</button>
                    <span>{member.count}</span>
                    <button onClick={() => handleMemberCount(member.id, 1)}>+</button>
                </div>
            )}
        </div>
    );
    
    return (
        <>
            {/* Styles are defined in the main App component to avoid duplication */}
            <div className="page-container">
                <header className="page-header">
                    <img src="https://www.policybazaar.com/images/pb-logo.svg" alt="PolicyBazaar" className="logo" />
                    <div className="header-actions">
                        <select className="language-dropdown"><option>English</option></select>
                        <button className="help-button">Help</button>
                    </div>
                </header>
                <main>
                    <section className="hero-section">
                        <h1>Ensure financial security with <span>1 crore coverage</span></h1>
                        <p className="subtitle">Plans starting ₹388/mo*</p>
                        <div className="gender-toggle">
                            <button className={gender === 'male' ? 'active' : ''} onClick={() => setGender('male')}>Male</button>
                            <button className={gender === 'female' ? 'active' : ''} onClick={() => setGender('female')}>Female</button>
                        </div>
                    </section>
                    <section className="member-selection-section">
                        <h2>Who would you like to insure?</h2>
                        <div className="members-grid">{members.map(member => <MemberCard key={member.id} member={member} />)}</div>
                    </section>
                    <section className="plans-section">
                        {plansData.slice(0, visiblePlans).map(plan => (
                            <div key={plan.id} className="plan-card">
                                <div className="plan-header">
                                    <img src={plan.logo} alt={`${plan.name} logo`} className="plan-logo" />
                                    <div>
                                        <h3>{plan.name}</h3>
                                        <p className="cashless-info"><span>{plan.hospitals}</span> Cashless Hospitals | <a href="#view-list">View list</a></p>
                                    </div>
                                </div>
                                <div className="plan-body">
                                    <div className="plan-features">
                                        <ul>{plan.features.map((feature, index) => (<li key={index}><CheckmarkIcon /> {feature}</li>))}</ul>
                                    </div>
                                    <div className="plan-pricing">
                                        <p className="coverage-amount">Cover <span>₹{plan.coverage}</span></p>
                                        <p className="price">₹{plan.price.toLocaleString('en-IN')}/mo</p>
                                        <p className="annual-price">₹{(plan.price * 12 * 0.95).toLocaleString('en-IN')} annually</p>
                                        <button className="check-premium-btn">Check Premium</button>
                                    </div>
                                </div>
                                <div className="plan-footer"><p>{plan.bonus}</p></div>
                            </div>
                        ))}
                        {visiblePlans < plansData.length && (<button className="show-more-btn" onClick={() => setVisiblePlans(plansData.length)}>Show more plans</button>)}
                    </section>
                     
                </main>
                <footer className="page-footer">
                    <button className="continue-button" onClick={handleContinueClick}>Continue</button>
                    <div className="footer-links"><a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Use</a> | <a href="#disclaimer">Disclaimer</a></div>
                </footer>
            </div>
        </>
    );
};


// --- PAGE 2: MEMBER DETAILS PAGE ---

// --- SVG Icon Components for Details Page ---
const UserIcon = () => <svg width="40" height="40" viewBox="0 0 24 24"><path fill="#6B7280" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>;
const FemaleIcon = () => <svg width="40" height="40" viewBox="0 0 24 24"><path fill="#6B7280" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z M17.5 9c.5 0 1-.5 1-1s-.5-1-1-1-1 .5-1 1 .5 1 1 1z"/></svg>;
const ChildIcon = () => <svg width="40" height="40" viewBox="0 0 24 24"><path fill="#6B7280" d="M12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>;
const SeniorIcon = () => <svg width="40" height="40" viewBox="0 0 24 24"><path fill="#6B7280" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z M4.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm15 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>;
const BestPriceIcon = () => <svg width="48" height="48" viewBox="0 0 24 24"><path fill="#FFD700" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.27l-6.18 3.75L7 14.14 2 9.27l6.91-1.01L12 2z"/><text x="12" y="15" fontSize="6" fill="#000" textAnchor="middle" dy="1" fontWeight="bold">BEST</text></svg>
const BackArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>;

// --- Icons for "Why Us" section on Details Page ---
const AffordableIconDetails = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00b09b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9"/><circle cx="12" cy="14" r="3"/></svg>;
const PartnerIconDetails = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00b09b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.27l-6.18 3.75L7 14.14 2 9.27l6.91-1.01L12 2z"/><path d="M12 15l-3.5-2.5 3.5-2.5 3.5 2.5-3.5 2.5z"/></svg>;
const ClaimSupportIconDetails = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00b09b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;


const getMemberInfo = (memberType) => {
    switch (memberType) {
        case 'self': return { icon: <UserIcon />, label: "Your age", defaultAge: 31 };
        case 'wife': return { icon: <FemaleIcon />, label: "Wife's age", defaultAge: 26 };
        case 'son': return { icon: <ChildIcon />, label: "Son's age", defaultAge: 7 };
        case 'daughter': return { icon: <ChildIcon />, label: "Daughter's age", defaultAge: 5 };
        case 'father': return { icon: <SeniorIcon />, label: "Father's age", defaultAge: 54 };
        case 'mother': return { icon: <SeniorIcon />, label: "Mother's age", defaultAge: 49 };
        case 'grandfather': return { icon: <SeniorIcon />, label: "Grand Father's age", defaultAge: 83 };
        case 'grandmother': return { icon: <SeniorIcon />, label: "Grand Mother's age", defaultAge: 74 };
        case 'fatherinlaw': return { icon: <SeniorIcon />, label: "Father-in-law's age", defaultAge: 60 };
        case 'motherinlaw': return { icon: <SeniorIcon />, label: "Mother-in-law's age", defaultAge: 58 };
        default: return { icon: <UserIcon />, label: `${memberType}'s age`, defaultAge: 30 };
    }
};

const MemberAgeCard = ({ member, age, onAgeChange }) => {
    const { icon, label } = getMemberInfo(member.id);
    return (
        <div className="member-age-card">
            <div className="member-icon">{icon}</div>
            <div className="age-selector-wrapper">
                <label>{label}</label>
                <select value={age} onChange={(e) => onAgeChange(member.id, parseInt(e.target.value))}>
                    {Array.from({ length: 100 }, (_, i) => i + 1).map(year => (<option key={year} value={year}>{year} yr</option>))}
                </select>
            </div>
        </div>
    );
};



const MemberDetailsPage = ({ selectedMembers = [], onBack }) => {
    const [memberAges, setMemberAges] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const initialAges = {};
        selectedMembers.forEach(member => {
            initialAges[member.id] = getMemberInfo(member.id).defaultAge;
        });
        setMemberAges(initialAges);
    }, [selectedMembers]);

    const handleAgeChange = (memberId, newAge) => {
        setMemberAges(prevAges => ({...prevAges, [memberId]: newAge}));
    };

    return (
        <div className="details-page-container">
            <div className="details-main-content">
                <header className="details-header">
                     <button onClick={onBack} className="back-button"><BackArrowIcon /></button>
                    <h1>Select age of covered member(s)</h1>
                </header>
                <div className="details-body">
                    <div className="members-list">
                        {selectedMembers.map((member) => (
                            <MemberAgeCard key={member.id} member={member} age={memberAges[member.id] || ''} onAgeChange={handleAgeChange} />
                        ))}
                    </div>
                    <aside className="best-price-card-wrapper">
                        <div className="best-price-card">
                            <BestPriceIcon />
                            <h3>Get best pricing</h3>
                            <p>This will help us in calculating the premium & discounts for your family member(s)</p>
                        </div>
                    </aside>
                </div>
                <footer className="details-footer">
                    <button className="details-continue-btn"  >Continue ›</button>
                </footer>
            </div>
            {/* <WhyPolicybazaarSection /> */}
            <FeatureSection />

        </div>
    );
};


// --- MAIN APP COMPONENT (Controller) ---

function App() {
    
    const [page, setPage] = useState('selection'); // 'selection' or 'details'
    const [selectedMembers, setSelectedMembers] = useState([]);

    const handleGoToDetails = (members) => {
        setSelectedMembers(members);
        setPage('details');
    };

    const handleGoBack = () => {
        setPage('selection');
    };

    return (
        <>
            <style>{`
                /* --- Global Styles --- */
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');

                :root {
                    --primary-orange: #ff7e5f; --primary-orange-dark: #feb47b;
                    --primary-green: #00b09b; --primary-green-dark: #96c93d;
                    --text-dark: #2c3e50; --text-light: #5a6a7a; --border-color: #e8eef3;
                    --background-light: #f9fafb; --white: #ffffff;
                    --shadow-sm: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05);
                    --shadow-md: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                }
                body { margin: 0; background-color: var(--background-light); color: var(--text-dark); }
                * { box-sizing: border-box; }

                /* --- Page 1: Selection Page Styles --- */
                .page-container {
                    font-family: 'Poppins', sans-serif;
                    max-width: 1200px; margin: 2rem auto; background-color: var(--white);
                    box-shadow: var(--shadow-md); border-radius: 16px; overflow: hidden;
                }
                .page-header { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2.5rem; border-bottom: 1px solid var(--border-color); }
                .logo { height: 32px; }
                .header-actions { display: flex; align-items: center; gap: 1.5rem; }
                .language-dropdown, .help-button { border: 1px solid var(--border-color); border-radius: 8px; padding: 0.6rem 1.2rem; background-color: var(--white); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: all 0.2s ease; }
                .help-button:hover { background-color: var(--background-light); color: var(--primary-green); }
                .hero-section { text-align: center; padding: 4rem 1rem; background-image: linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%); }
                .hero-section h1 { font-size: 3rem; font-weight: 700; margin: 0 0 0.5rem; letter-spacing: -1px; }
                .hero-section h1 span { background: -webkit-linear-gradient(45deg, var(--primary-green), var(--primary-green-dark)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .subtitle { font-size: 1.2rem; color: var(--text-light); margin-bottom: 2rem; }
                .gender-toggle { display: inline-flex; background-color: #eaf0f6; border-radius: 20px; padding: 4px; }
                .gender-toggle button { padding: 0.6rem 2.5rem; border: none; background-color: transparent; font-size: 1rem; font-weight: 500; color: var(--text-light); cursor: pointer; border-radius: 18px; transition: all 0.3s ease; }
                .gender-toggle button.active { background-color: var(--white); color: var(--primary-green); box-shadow: var(--shadow-sm); }
                .member-selection-section { padding: 3rem 2.5rem; text-align: center; }
                .member-selection-section h2 { font-size: 2rem; font-weight: 600; margin-bottom: 2.5rem; }
                .members-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 1.5rem; }
                .member-card { border: 2px solid var(--border-color); border-radius: 16px; padding: 1.2rem; cursor: pointer; transition: all 0.3s ease; text-align: center; background-color: var(--white); }
                .member-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
                .member-card.selected { border-color: var(--primary-green); box-shadow: 0 0 0 3px rgba(0, 176, 155, 0.2); }
                .member-icon-wrapper { color: var(--text-light); transition: color 0.3s ease; }
                .member-card.selected .member-icon-wrapper { color: var(--primary-green); }
                .member-card p { margin: 0.5rem 0 0; font-weight: 500; }
                .member-counter { display: flex; justify-content: center; align-items: center; gap: 0.8rem; margin-top: 0.8rem; }
                .member-counter button { width: 28px; height: 28px; border-radius: 50%; border: 1px solid var(--border-color); background-color: var(--white); font-size: 1.2rem; font-weight: 600; color: var(--primary-green); cursor: pointer; transition: all 0.2s ease; }
                .member-counter button:hover { background-color: var(--primary-green); color: var(--white); }
                .member-counter button:disabled { color: #ccc; background-color: #f5f5f5; cursor: not-allowed; }
                .plans-section { padding: 3rem 2.5rem; background-color: var(--background-light); }
                .plan-card { background-color: var(--white); border: 1px solid var(--border-color); border-radius: 16px; margin-bottom: 2rem; box-shadow: var(--shadow-sm); overflow: hidden; transition: all 0.3s ease; border-left: 5px solid transparent; }
                .plan-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); border-left-color: var(--primary-green); }
                .plan-header { display: flex; align-items: center; gap: 1.5rem; padding: 1.5rem; }
                .plan-logo { height: 40px; width: 100px; object-fit: contain; }
                .plan-header h3 { margin: 0; font-size: 1.25rem; font-weight: 600; }
                .cashless-info { font-size: 0.9rem; color: var(--text-light); margin: 0.2rem 0 0; }
                .cashless-info span { font-weight: 600; color: var(--text-dark); }
                .cashless-info a { color: var(--primary-orange-dark); text-decoration: none; font-weight: 500; }
                .plan-body { display: grid; grid-template-columns: 1fr 220px; gap: 2rem; padding: 0 1.5rem 1.5rem; align-items: center; }
                .plan-features ul { list-style: none; padding: 0; margin: 0; }
                .plan-features li { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 0.8rem; font-size: 0.95rem; font-weight: 500; }
                .plan-pricing { text-align: right; padding: 1.5rem; background-color: #f9fdfc; border-radius: 12px; }
                .coverage-amount { font-size: 1rem; color: var(--text-light); }
                .coverage-amount span { font-weight: 700; font-size: 1.5rem; color: var(--text-dark); }
                .price { font-size: 2rem; font-weight: 700; margin: 0.5rem 0; background: -webkit-linear-gradient(45deg, var(--primary-orange), var(--primary-orange-dark)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .annual-price { font-size: 0.9rem; color: var(--text-light); margin-bottom: 1.5rem; }
                .check-premium-btn { background-image: linear-gradient(to right, var(--primary-orange) 0%, var(--primary-orange-dark) 51%, var(--primary-orange) 100%); background-size: 200% auto; color: var(--white); border: none; border-radius: 8px; padding: 0.8rem 1.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; width: 100%; transition: 0.5s; }
                .check-premium-btn:hover { background-position: right center; }
                .plan-footer { background-color: rgba(0, 176, 155, 0.05); padding: 1rem 1.5rem; font-size: 0.9rem; font-weight: 500; color: var(--primary-green); text-align: center; }
                .show-more-btn { display: block; width: fit-content; margin: 1.5rem auto 0; padding: 0.8rem 2.5rem; border: 2px solid var(--primary-orange); background: transparent; color: var(--primary-orange); font-size: 1rem; font-weight: 600; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; }
                .show-more-btn:hover { background: var(--primary-orange); color: var(--white); }
                .why-us-section { padding: 4rem 2.5rem; text-align: center; }
                .why-us-section h2 { font-size: 2rem; font-weight: 600; margin-bottom: 2.5rem; }
                .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; max-width: 900px; margin: 0 auto 3rem; }
                .stat-item { background: var(--background-light); padding: 1rem; border-radius: 12px; }
                .stat-item strong { font-size: 2rem; font-weight: 700; display: block; color: var(--primary-green); }
                .stat-item p { margin: 0.2rem 0 0; color: var(--text-light); }
                .reviews { margin-bottom: 3.5rem; }
                .reviews span { font-size: 1.8rem; color: #ffc107; }
                .reviews p { margin-top: 0.5rem; }
                .benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; text-align: left; }
                .benefit-card { background: var(--white); padding: 2rem; border-radius: 16px; border: 1px solid var(--border-color); transition: all 0.3s ease; }
                .benefit-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
                .benefit-card svg { color: var(--primary-green); margin-bottom: 1rem; }
                .benefit-card h3 { margin: 0 0 0.5rem; font-size: 1.2rem; }
                .benefit-card p { margin: 0; color: var(--text-light); line-height: 1.6; }
                .page-footer { padding: 2rem 2.5rem; background: var(--white); border-top: 1px solid var(--border-color); text-align: center; position: sticky; bottom: 0; z-index: 10; }
                .continue-button { width: 100%; max-width: 500px; padding: 1rem; font-size: 1.2rem; font-weight: 700; background-image: linear-gradient(to right, var(--primary-orange) 0%, var(--primary-orange-dark) 51%, var(--primary-orange) 100%); background-size: 200% auto; color: var(--white); border: none; border-radius: 12px; cursor: pointer; margin-bottom: 1rem; transition: 0.5s; }
                .continue-button:hover { background-position: right center; }
                .footer-links { font-size: 0.9rem; }
                .footer-links a { color: var(--text-light); text-decoration: none; margin: 0 0.5rem; transition: color 0.2s; }
                .footer-links a:hover { color: var(--primary-orange); }

                /* --- Page 2: Details Page Styles --- */
                .details-page-container { font-family: 'Montserrat', sans-serif; background-color: #f8f9fa; min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding: 2rem; }
                .details-main-content { width: 100%; max-width: 900px; background: #fff; border-radius: 16px; padding: 2.5rem; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
                .details-header { position: relative; text-align: center; margin-bottom: 3rem; }
                .details-header h1 { font-size: 2.25rem; font-weight: 700; color: #2c3e50; }
                .back-button { position: absolute; left: 0; top: 50%; transform: translateY(-50%); background: transparent; border: none; cursor: pointer; color: #5a6a7a; }
                .details-body { display: flex; gap: 3rem; }
                .members-list { flex: 2; display: flex; flex-direction: column; gap: 1.5rem; }
                .best-price-card-wrapper { flex: 1; padding-top: 1rem; }
                .best-price-card { background-color: #f0f8ff; border: 1px dashed #aed6f1; border-radius: 12px; padding: 1.5rem; text-align: center; }
                .best-price-card h3 { margin: 1rem 0 0.5rem; color: #3498db; font-size: 1.2rem; }
                .best-price-card p { margin: 0; color: #5a6a7a; font-size: 0.95rem; line-height: 1.6; }
                .details-footer { margin-top: 3rem; text-align: center; }
                .details-continue-btn { background-image: linear-gradient(to right, #ff7e5f 0%, #feb47b 51%, #ff7e5f 100%); background-size: 200% auto; color: white; border: none; border-radius: 12px; padding: 1rem 3.5rem; font-size: 1.2rem; font-weight: 600; cursor: pointer; transition: all 0.5s; box-shadow: 0 5px 15px rgba(254, 180, 123, 0.4); }
                .details-continue-btn:hover { background-position: right center; }
                .member-age-card { display: flex; align-items: center; gap: 1.5rem; }
                .member-icon { flex-shrink: 0; }
                .age-selector-wrapper { width: 100%; }
                .age-selector-wrapper label { display: block; font-size: 1rem; font-weight: 500; color: #5a6a7a; margin-bottom: 0.5rem; }
                .age-selector-wrapper select { width: 100%; padding: 0.8rem 1rem; border-radius: 8px; border: 1px solid #ced4da; font-size: 1.1rem; font-weight: 600; color: #2c3e50; appearance: none; background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e") no-repeat right 0.75rem center/16px 12px; }
                
                /* --- Page 2: Why Us Section Styles --- */
                .details-why-us-section { width: 100%; max-width: 900px; margin-top: 2rem; font-family: 'Poppins', sans-serif;}
                .details-stats-bar { background: #fff; border-radius: 16px; padding: 1.5rem 2rem; box-shadow: 0 10px 25px rgba(0,0,0,0.05); text-align: center; }
                .details-stats-bar h4 { font-weight: 500; margin: 0; font-size: 1.1rem; }
                .details-stats-rating { color: #f5b000; font-size: 1.5rem; margin: 0.5rem 0; }
                .details-stats-rating small { font-size: 0.8rem; color: var(--text-light); }
                .details-stats-numbers { display: flex; justify-content: space-around; margin-top: 1rem; }
                .details-stats-numbers span { font-size: 1.2rem; font-weight: 700; color: var(--text-dark); }
                .details-stats-numbers p { font-size: 0.9rem; color: var(--text-light); margin: 0.2rem 0 0; }
                .details-benefits-section { margin-top: 3rem; text-align: center; }
                .details-benefits-section h2 { font-size: 1.8rem; font-weight: 600; margin-bottom: 2rem; }
                .details-benefits-section h2 strong { font-weight: 700; color: var(--primary-green); }
                .details-benefits-grid { display: grid; grid-template-columns: 1fr 1fr; grid-template-areas: "large small1" "large small2"; gap: 1.5rem; text-align: left; }
                .details-benefit-card { background: #fff; border-radius: 16px; padding: 2rem; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
                .details-benefit-card.large-card { grid-area: large; }
                .details-benefit-icon { margin-bottom: 1rem; }
                .details-benefit-card h3 { font-size: 1.2rem; font-weight: 600; margin: 0 0 0.5rem; }
                .details-benefit-card p { color: var(--text-light); line-height: 1.7; margin: 0; }

                /* --- Responsive Styles --- */
                @media (max-width: 768px) {
                    .page-container { margin: 1rem; }
                    .page-header { padding: 1rem; }
                    .hero-section h1 { font-size: 2.2rem; }
                    .members-grid { grid-template-columns: repeat(3, 1fr); gap: 1rem; }
                    .plan-body { grid-template-columns: 1fr; gap: 1.5rem; }
                    .plan-pricing { text-align: left; }
                    .stats-grid { grid-template-columns: repeat(2, 1fr); }
                    .details-body { flex-direction: column-reverse; gap: 2rem; }
                    .details-main-content { padding: 1.5rem; }
                    .details-header h1 { font-size: 1.8rem; margin-bottom: 2rem; }
                    .details-benefits-grid { grid-template-columns: 1fr; grid-template-areas: "large" "small1" "small2"; }
                }
                @media (max-width: 480px) {
                    body { font-size: 14px; }
                    .page-header { flex-direction: column; gap: 1rem;}
                    .hero-section { padding: 2rem 1rem; }
                    .hero-section h1 { font-size: 1.8rem; }
                    .members-grid { grid-template-columns: repeat(2, 1fr); }
                    .member-selection-section, .plans-section, .why-us-section, .page-footer, .details-page-container { padding-left: 1rem; padding-right: 1rem; }
                }
            `}</style>
            
            {page === 'selection' ? (
                <SelectionPage onContinue={handleGoToDetails} />
            ) : (
                <MemberDetailsPage selectedMembers={selectedMembers} onBack={handleGoBack} />
            )}
        </>
    );
}

export default App;

