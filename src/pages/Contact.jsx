import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import FormPage from "./FormPage";

const Contact = () => {
  const email = "ASInfrastructure@construction.com";
  const phoneNumbers = ["8989573939", "7828739190", "6268709201"]; // ✅ Store numbers in an array

  return (
    <div className="container mx-auto px-6 py-10 bg-gray-100">
      {/* Animated Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-3xl font-bold text-center mb-6"
      >
        Contact Us
      </motion.h2>

      {/* Contact Details & Map */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }} 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Contact Details */}
        <div className="space-y-4">
          <motion.p whileHover={{ scale: 1.05 }} className="text-lg">
            <strong>Email:</strong>{" "}
            <a href={`mailto:${email}?subject=Inquiry&body=Hello, I have a query about...`} 
               className="text-blue-600 hover:underline flex items-center">
              <FaEnvelope className="mr-2" /> {email}
            </a>
          </motion.p>

          {/* ✅ Correct Phone Number Rendering */}
          <motion.div whileHover={{ scale: 1.05 }} className="text-lg">
            <strong>Phone:</strong>{" "}
            {phoneNumbers.map((number, index) => (
              <p key={index} className="flex items-center">
                <FaPhone className="mr-2" />
                <a href={`tel:${number}`} className="text-blue-600 hover:underline">
                  {number}
                </a>
              </p>
            ))}
          </motion.div>

          <p className="text-lg">
            <strong>Office Address:</strong> Near Badora Chowki, Badora Chowk, Athner Road, Hirani Empire, Betul MP
          </p>
          <p className="text-lg">
            <strong>Office Time:</strong> 9 AM - 9 PM (Open 7 Days)
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <motion.a whileHover={{ scale: 1.2 }} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl text-blue-700 hover:scale-110 transition-transform" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/as_infrastructure_pvt_ltd/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-pink-600 hover:scale-110 transition-transform" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-blue-800 hover:scale-110 transition-transform" />
            </motion.a>
          </div>
        </div>

        {/* Google Map Embed */}
        <motion.iframe 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.842632045102!2d77.89632337513017!3d21.889268879984222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd609895d5df5ab%3A0xb174550d83478b2!2sGarima%20Stationery%20And%20Computer%20Badora%20Chowk%20Betul!5e1!3m2!1sen!2sin!4v1741406608159!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></motion.iframe>
      </motion.div>

      {/* Contact Form */}
      <FormPage />
    </div>
  );
};

export default Contact;
