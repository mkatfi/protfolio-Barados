import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="marouane.katfi2@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+212 603243113" Image={FiPhone} />
      <SingleInfo text="Ben Guerir, Morocco" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
