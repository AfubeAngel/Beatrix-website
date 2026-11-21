import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
//import Select, { GroupBase, StylesConfig } from "react-select";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./components/Navbar";
import Breadcrumbs from "./components/forms/breadcrumbs";
import PreferredDatePicker from "./components/forms/preferreddatepicker";
import dayjs, { Dayjs } from "dayjs";
import TimePicker from "./components/forms/timepicker";

// Define TypeScript Interface for Form Data
interface ConsultationFormData {
  date: string;
  time: string;
}

export default function Consultation() {
  const { handleSubmit, setValue } = useForm<ConsultationFormData>();
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [time, setTime] = useState<string | null>("10:00am");

  // Sync local state with react-hook-form
  useEffect(() => {
    if (date) setValue("date", date.toISOString());
  }, [date, setValue]);

  useEffect(() => {
    if (time) setValue("time", time);
  }, [time, setValue]);

  const onSubmit: SubmitHandler<ConsultationFormData> = () => undefined;

  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <div className="min-h-screen flex max-w-7xl mx-auto py-10 px-4 lg:px-[150px]">
        <div className="bg-white rounded-lg w-full">
          <h2 className="text-[36px] lg:text-[64px] font-bold tracking-tighter leading-10 lg:leading-20 text-center mb-4">
            Schedule Your Appointment
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Take the first step towards your health transformation with a
            personalized 30-minute consultation.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className=" items-center ">
            <div className="mt-10 lg:mt-[100px]">
              <div>
                <h3 className="text-2xl lg:text-[36px] font-bold ">
                  Pick Your Consultation Time
                </h3>
                <p>
                  Select a date and time that works best for you. Your
                  consultation will be held via
                </p>
                <span>
                  Google Meet, and you’ll receive a link after booking
                </span>
              </div>

              <hr className="my-10 text-[#E7E4E3]" />

              <div>
                <h3 className="text-2xl lg:text-[36px] font-bold ">
                  Available Hours
                </h3>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-15">
                  <div className="flex lg:flex-col gap-2">
                    <p>Monday & Friday</p>
                    <p>10:00 AM - 3:00 PM</p>
                  </div>
                  <div className="flex lg:flex-col gap-2">
                    <p>Tuesday & Thursday</p>
                    <p>10:00 AM - 2:30 PM</p>
                  </div>
                </div>
              </div>

              <hr className="my-10 text-[#E7E4E3]" />

              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                  <PreferredDatePicker value={date} onChange={setDate} />
                  <TimePicker value={time} onSelect={setTime} />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-100 ">
              <button
                type="submit"
                className="w-[198px] h-[52px] cursor-pointer bg-primary-main text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Book your consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
