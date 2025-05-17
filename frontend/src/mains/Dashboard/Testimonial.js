// import React, { useState } from 'react';
// import './Testimonial.css';
// import { FaStar, FaQuoteLeft } from 'react-icons/fa';
// import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

// const testimonials = [
//   {
//     name: 'Alice Johnson',
//     avatar: 'https://i.pravatar.cc/150?img=1',
//     rating: 5,
//     text: 'The service was outstanding and the process was seamless!',
//   },
//   {
//     name: 'Bob Smith',
//     avatar: 'https://i.pravatar.cc/150?img=2',
//     rating: 4,
//     text: 'Great platform. Helped me get what I needed quickly.',
//   },
//   {
//     name: 'Clara Davis',
//     avatar: 'https://i.pravatar.cc/150?img=3',
//     rating: 5,
//     text: 'Super intuitive and user-friendly. Highly recommend!',
//   },
//   {
//     name: 'Daniel Lee',
//     avatar: 'https://i.pravatar.cc/150?img=4',
//     rating: 5,
//     text: 'Reliable and efficient—exactly what I was looking for.',
//   },
//   {
//     name: 'Eva Green',
//     avatar: 'https://i.pravatar.cc/150?img=5',
//     rating: 4,
//     text: 'The support team is fantastic and always ready to help.',
//   },
//   {
//     name: 'Frank Moore',
//     avatar: 'https://i.pravatar.cc/150?img=6',
//     rating: 5,
//     text: 'Impressed by the quality and speed of the services provided.',
//   },
// ];

// const Testimonial = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const cardsPerSlide = 3;

//   const nextSlide = () => {
//     if (currentIndex < Math.ceil(testimonials.length / cardsPerSlide) - 1) {
//       setCurrentIndex(prev => prev + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(prev => prev - 1);
//     }
//   };

//   return (
//     <div className="testimonial-wrapper">
//       <h2 className="testimonial-title">What Our Clients Say</h2>
//       <div className="testimonial-carousel">
//         <button className="arrow-button left" onClick={prevSlide}>
//           <MdArrowBackIosNew />
//         </button>
//         <div className="carousel-container">
//           <div
//             className="testimonial-track"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <div className="testimonial-card" key={index}>
//                 <FaQuoteLeft className="quote-icon" />
//                 <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
//                 <p className="text">"{testimonial.text}"</p>
//                 <div className="stars">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <FaStar key={i} className="star" />
//                   ))}
//                 </div>
//                 <h4 className="name">{testimonial.name}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button className="arrow-button right" onClick={nextSlide}>
//           <MdArrowForwardIos />
//         </button>
//       </div>

//       {/* Pagination Dots */}
//       <div className="pagination-dots">
//         {Array.from({ length: Math.ceil(testimonials.length / cardsPerSlide) }).map((_, index) => (
//           <span
//             key={index}
//             className={`dot ${index === currentIndex ? 'active' : ''}`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonial;



import React from 'react';
import './Testimonial.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'FENNY NOVANTHO',
      role: 'CUSTOMER',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      name: 'JOHN SMITH',
      role: 'CLIENT',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      name: 'SARAH JOHNSON',
      role: 'USER',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h3 className="section-subtitle">OUR TESTIMONIALS</h3>
        <h2 className="section-title">WHAT THEY'RE SAYING</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="author-avatar"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;