// Import the useRef hook from React
import { useRef } from 'react';

// Import the CSS file for styling
import './Testimonial.css';

// Import images for navigation buttons and user testimonials
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonial = () => {
  // Create a reference for the slider element
  const slider = useRef();
  // Initialize the translation value for sliding
  let tx = 0;

  // Function to slide forward
  const slideForward = () => {
    // Ensure the slider doesn't slide too far forward
    if (tx > -50) {
      tx -= 25;
    }
    // Apply the transformation to the slider
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  // Function to slide backward
  const slideBackward = () => {
    // Ensure the slider doesn't slide too far backward
    if (tx < 0) {
      tx += 25;
    }
    // Apply the transformation to the slider
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials'>
      {/* Navigation buttons */}
      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
      
      {/* Slider container */}
      <div className="slider">
        <ul ref={slider}>
          {/* Testimonial slides */}
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={user_1} alt="User 1" />
                <div>
                  <h3>Victoria Effiom</h3>
                  <span>Unical, CRS</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Unical was one of the best decisions I have 
                ever made. The supportive community, state-of-the-art facilities, and commitment
                to academic excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={user_2} alt="User 2" />
                <div>
                  <h3>Godson Emmanuel</h3>
                  <span>Unical, CRS</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Unical was one of the best decisions I have 
                ever made. The supportive community, state-of-the-art facilities, and commitment
                to academic excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={user_3} alt="User 3" />
                <div>
                  <h3>Bassey Etta</h3>
                  <span>Unical, CRS</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Unical was one of the best decisions I have
                ever made. The supportive community, state-of-the-art facilities, and commitment
                to academic excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userinfo">
                <img src={user_4} alt="User 4" />
                <div>
                  <h3>Nathaniel Okoi</h3>
                  <span>Unical, CRS</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Unical was one of the best decisions I have 
                ever made. The supportive community, state-of-the-art facilities, and commitment
                to academic excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
