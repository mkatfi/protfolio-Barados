
import SingleSkillTop from "./SingleSkillTop";
import SingleSkillBottom from "./SingleSkillBottom"
// import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGit} from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import { SiNextdotjs, SiTailwindcss,  SiDocker} from "react-icons/si";
// import { SiC, SiCplusplus } from "react-icons/si";
// import { motion } from "framer-motion";


// import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import {  SiRedux, SiNextdotjs, SiTailwindcss,SiDocker, SiNginx, SiSass, SiLess, SiBootstrap, SiPython, SiLinux, SiFigma, SiNpm, SiGnubash } from "react-icons/si";
// import { SiC, SiCplusplus } from "react-icons/si";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";
import SubSkills from "./SubSkills";

// import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss, SiStyledcomponents, SiDocker, SiNginx, SiSass, SiLess, SiBootstrap, SiPython, SiLinux, SiFigma, SiNpm, SiGnubash } from "react-icons/si";
import { SiC, SiCplusplus } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { SiVite } from "react-icons/si";
import { SiWebpack } from "react-icons/si";




const skills = [
  { skill: "C", icon: SiC },
  { skill: "C++", icon: SiCplusplus },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "Typescript", icon: SiTypescript },
  { skill: "Sass", icon: SiSass },
  { skill: "Less", icon: SiLess },
  { skill: "ReactJS", icon: FaReact },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "Redux",icon: SiRedux},
  { skill: "NodeJS", icon: FaNodeJs },
  { skill: "Python", icon: SiPython },
  
  { skill: "Docker", icon: SiDocker },
  { skill: "TailwindCSS", icon: SiTailwindcss },
  { skill: "Bootstrap", icon: SiBootstrap },
  { skill: "Styled Components", icon: SiStyledcomponents },
  { skill: "Nginx", icon: SiNginx },
  { skill: "Bash", icon: SiGnubash },
  { skill: "Linux", icon: SiLinux },
  { skill: "Git", icon: FaGit },
  { skill: "GitHub", icon: FaGithub },
  { skill: "Figma", icon: SiFigma },
  { skill: "npm", icon: SiNpm },
  { skill: "Webpack", icon: SiWebpack },
  { skill: "Vite", icon: SiVite }, 
];


const AllSkills = () => {
  const half = Math.ceil(skills.length / 2);
  const topSkills = skills.slice(0, half);
  const bottomSkills = skills.slice(half);

  return (
    <div className="flex flex-col  gap-4 mx-auto">
      {/* Top Row */}
      <div className="flex items-center justify-center gap-4">
        {topSkills.map((item, index) => (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={`top-${index}`}
          >
            <SingleSkillTop
              text={item.skill}
              imgSvg={<item.icon />}
            />
          </motion.div>
        ))}
      </div>
      <div>

        <SubSkills/>
      </div>
      {/* Bottom Row */}
      <div className="flex items-center justify-center gap-4">
        {bottomSkills.map((item, index) => (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={`bottom-${index}`}
          >
            <SingleSkillBottom
              text={item.skill}
              imgSvg={<item.icon />}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// const AllSkills = () => {
//   return (
//     <div>
//       <div className="flex items-center justify-center relative gap-2  mx-auto">
//         {skills.map((item, index) => {

//           return (
//             <motion.div
//               variants={fadeIn("up", `0.${index}`)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: false, amount: 0 }}
//               key={index}
//             >
              
              
//               <SingleSkillTop
//                 key={index}
//                 text={item.skill}
//                 imgSvg={<item.icon />}
//               />
              
//               {/* <SingleSkillButtom
//                 key={index}
//                 text={item.skill}
//                 imgSvg={<item.icon />}
//               /> */}
            
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export default AllSkills;
