// Import the CSS file for styling
import './Navbar.css';

// Import images for the logo and menu icon
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

// Import necessary hooks from React
import { useEffect, useState } from 'react';

// Import Link component from react-scroll for smooth scrolling
import { Link } from 'react-scroll';

const Navbar = () => {
  // State to track if the navbar should be sticky
  const [sticky, setSticky] = useState(false);

  // Use useEffect to add a scroll event listener
  useEffect(() => {
    // Function to check scroll position and update sticky state
    const handleScroll = () => {
      window.scrollY > 400 ? setSticky(true) : setSticky(false);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // State to track if the mobile menu is open
  const [mobileMenu, setMobileMenu] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'nav-bg' : ''}`}>
      {/* Logo */}
      <img src={logo} alt="Logo" className='logo' />
      
      {/* Navigation links */}
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to='hero' smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='program' smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to='campus' smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to='testimonials' smooth={true} offset={-260} duration={500}>
            Testimonial
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>
            Contact us
          </Link>
        </li>
      </ul>

      {/* Menu icon for toggling mobile menu */}
      <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
