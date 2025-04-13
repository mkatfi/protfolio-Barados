// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiTypescript } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { SiNextdotjs } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

import { SiRedux } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGit} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss,  SiDocker} from "react-icons/si";
import { SiC, SiCplusplus } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const skills = [
  { skill: "C", icon: SiC },
  { skill: "C++", icon: SiCplusplus },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "ReactJS", icon: FaReact },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "NodeJS", icon: FaNodeJs },
  { skill: "Docker", icon: SiDocker },
  { skill: "TailwindCSS", icon: SiTailwindcss },
  { skill: "Git", icon: FaGit },
  { skill: "Redux",icon: SiRedux},
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
