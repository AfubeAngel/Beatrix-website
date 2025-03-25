import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaClock,
  FaInstagram,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="space-y-10 rounded-lg">
      <h2 className="text-[32px] lg:text-[40px] font-semibold">
        Let’s Connect
      </h2>

      <div className="flex space-x-4">
        <FaPhone className="text-black mt-1" />
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Phone</p>
          <p className="text-base text-default ">+23456768090</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <FaEnvelope className="text-black mt-1" />
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Email</p>
          <p className="text-base text-default">besthealth@gmail.com</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <FaMapMarkerAlt className="text-black mt-1" />
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Address</p>
          <p className="text-base text-default ">Lagos, Nigeria (Virtual Consultations Worldwide)</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <FaClock className="text-black mt-1" />
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">Opening Hours</p>
          <ul>
            <li className="text-base text-default">
              45 mins Free Consultations: Monday - Friday: 9:00 AM - 5:00 PM WAT
            </li>
            <li className="text-base text-default">50 mins Health Coaching: Tuesdays, Thursday</li>
            <li className="text-base text-default">Weekend appointments available upon request</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4 text-primary-main">
        <FaInstagram className="text-[40px] cursor-pointer" />
        <FaFacebook className="text-[40px] cursor-pointer" />
        <FaLinkedin className="text-[40px] cursor-pointer" />
      </div>
    </div>
  );
}
