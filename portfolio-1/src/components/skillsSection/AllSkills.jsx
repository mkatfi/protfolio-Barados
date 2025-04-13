// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiTypescript } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { SiRedux } from "react-icons/si";
// import { SiNextdotjs } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// import SingleSkill from "./SingleSkill";
// import { FaDiscord } from "react-icons/fa";

import SingleSkill from "./SingleSkill";
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
];


const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2  mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
