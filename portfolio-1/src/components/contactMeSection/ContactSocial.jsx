import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/marouane-katfi-61363921b/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/mkatfi" Icon={FiGithub} />
      <SingleContactSocial link="https://x.com/MarouaneKatfi" Icon={FaXTwitter} />
      <SingleContactSocial link="https://www.instagram.com/marouane_katfi/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
