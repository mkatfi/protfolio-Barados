// import ProjectsText from "./ProjectsText";
// import SingleProject from "./SingleProject";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";
// import { BsFillArrowUpRightCircleFill } from "react-icons/bs";


import ProjectsText from "./ProjectsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const projects = [
  {
    name: "Weather App",
    year: "Nov 2024",
    align: "right",
    image: "/img/weatherApp.png",
    link: "https://projects-java-script-tpni.vercel.app/",
  },
  {
    name: "Game Guess The Naruto Characters",
    year: "Dec 2024",
    align: "left",
    image: "/img/download.png",
    link: "https://game-guess-the-naruto-characters.vercel.app/",
  },
  {
    name: "Ft_Transcendance",
    year: "Nov 2024",
    align: "right",
    image: "/img/tran.png",
    link: "https://github.com/mkatfi/ft_transcendence",
  },
  {
    name: "CV Generator",
    year: "May 2025",
    align: "left",
    image: "/img/screenshot.png",
    link: "https://react-projects-weld-seven.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          const { name, year, align, image, link } = project;
          return (
            <motion.div
              key={index}
              variants={fadeIn("top", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
                align === "left" ? "md:flex-row" : "md:flex-row-reverse"
              } justify-end sm:flex-col`}
            >
              <div>
                <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
                <h2
                  className={`text-xl font-thin text-white font-special sm:text-center ${
                    align === "left" ? "md:text-right" : "md:text-left"
                  }`}
                >
                  {year}
                </h2>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
                    align === "left" ? "md:justify-self-end" : "md:justify-self-start"
                  }`}
                >
                  View <BsFillArrowUpRightCircleFill />
                </a>
              </div>

              <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
                <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
                <img src={image} alt={`${name} image`} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;


// const projects = [
//   {
//     name: "Weather App",
//     year: "Nov2024",
//     align: "right",
//     image: "../../public/img/weatherApp.png",
//     link: "https://projects-java-script-tpni.vercel.app/",
//   },
//   {
//     name: "Game Guess The Naruto Characters",
//     year: "Dec2024",
//     align: "left",
//     image: "../../public/img/download.png",
//     link: "https://game-guess-the-naruto-characters.vercel.app/",
//   },
//   {
//     name: "Ft_Transcendance",
//     year: "Nov2024",
//     align: "right",
//     image: "../../public/img/tran.png",
//     link: "https://github.com/mkatfi/ft_transcendence",
//   },
//   {
//     name: "CV Generatore",
//     year: "May2025",
//     align: "left",
//     image: "../../public/img/screenshot.png",
//     link: "https://react-projects-weld-seven.vercel.app/",
//   },
// ];

// const ProjectsMain = () => {
//   return (
//     <div id="projects" className="max-w-[1200px] mx-auto px-4">
//       <motion.div
//         variants={fadeIn("top", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <ProjectsText />
//       </motion.div>
//       <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
//         {projects.map((project, index) => {
//           return (
//             // <SingleProject
//             //   key={index}
//             //   name={project.name}
//             //   year={project.year}
//             //   align={project.align}
//             //   image={project.image}
//             // />

//              <motion.div
//                   key={index}
//                   variants={fadeIn("top", 0)}
//                   initial="hidden"
//                   whileInView="show"
//                   viewport={{ once: false, amount: 0.1 }}
//                   className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
//                     align === "left" ? "md:flex-row" : "md:flex-row-reverse"
//                   } justify-end sm:flex-col`}
//                 >
//                   <div>
//                     <h2 className="md:text-3xl sm:text-2xl text-orange ">{name}</h2>
//                     <h2
//                       className={`text-xl font-thin text-white font-special sm:text-center ${
//                         align === "left" ? "md:text-right" : "md:text-left"
//                       }`}
//                     >
//                       {year}
//                     </h2>
//                     <a
//                       href={link}
//                       className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
//                         align === "left" ? "md:justify-self-end" : "md:justify-self-start"
//                       }`}
//                     >
//                       View <BsFillArrowUpRightCircleFill />
//                     </a>
//                   </div>
//                   <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
//                     <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
//                     <img src={image} alt="website image" className="w-full h-full" />
//                   </div>
//                 </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProjectsMain;
