import styles from "./Navbar.module.css";
import ContactForm from "../contact/ContactForm";
import { useState } from "react";


function Navbar() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  }

  return (
    <nav className={`${styles.Navbar} container`}>
      <div className="logo">
        <img src="/Images/brand_logo.png" alt="nike-logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#" onClick={handleContactClick} >Contact</li>
      </ul>

      <button className="rounded">Login</button>

      {showContactForm && <ContactForm />}
    </nav>
  );
}

export default Navbar;
