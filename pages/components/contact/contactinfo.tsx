import {
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaClock,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactInfo() {
  return (
    <div className="space-y-10 rounded-lg">
      <div className="flex flex-col gap-4">
        <h2 className="text-[32px] lg:text-[36px] font-semibold">
          Let’s Connect
        </h2>

        <div className="flex item-center space-x-4 text-primary-main">
          <RiInstagramFill className="text-[42px] cursor-pointer" />
          <FaFacebook className="text-[40px] cursor-pointer" />
          <FaLinkedin className="text-[40px] cursor-pointer" />
        </div>
      </div>

      <div className="flex space-x-4">
        <FiPhone className="mt-1" />
        <div className="flex flex-col gap-2">
          <p className="text-xl ">Phone</p>
          <p className="text-base text-default ">+23456768090</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <HiOutlineMail className="mt-1"/>
        <div className="flex flex-col gap-2">
          <p className="text-xl">Email</p>
          <p className="text-base text-default">beatrixcoach@gmail.com</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <FaMapMarkerAlt className="text-black mt-1" />
        <div className="flex flex-col gap-2">
          <p className="text-xl">Location</p>
          <p className="text-base text-default ">
            Virtual consultations available worldwide
          </p>
        </div>
      </div>

      <div className="flex space-x-4">
        <FaClock className="text-black mt-1" />
        <div className="flex flex-col gap-1">
          <p className="text-xl mb-3">Opening Hours</p>

          <div className="flex items-start gap-1">
            <span className="text-lg text-black">•</span>
            <p className="text-base text-default">
              45 mins Free Consultations: Mondays & Fridays:
              <br/>
              <span>10am, 11:15am, 12:30pm, 1:45pm & 3pm WAT</span>
            </p>
          </div>

          <div className="flex items-start gap-1">
            <span className="text-lg text-black">•</span>
            <p className="text-base text-default">
              50 mins Health Coaching: Tuesdays & Thursdays:
              <br/>
              <span>10am, 11:30am, 1pm & 2:30pm</span>
            </p>
          </div>

          <div className="flex items-start gap-1">
            <span className="text-lg text-black">•</span>
            <p className="text-base text-default">
              Weekend appointments available upon request
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
