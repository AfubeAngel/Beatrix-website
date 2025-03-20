import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <div className="space-y-6 bg-gray-100 p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold">Let’s Connect</h2>
      
      <div className="flex items-center space-x-2">
        <FaPhone className="text-green-600" />
        <p>+234 567 890</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-green-600" />
        <p>besthealth@gmail.com</p>
      </div>

      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-green-600" />
        <p>Lagos, Nigeria (Virtual Consultations Worldwide)</p>
      </div>

      <div className="flex space-x-4 text-green-600">
        <FaFacebook className="text-xl cursor-pointer" />
        <FaLinkedin className="text-xl cursor-pointer" />
      </div>
    </div>
  );
}
