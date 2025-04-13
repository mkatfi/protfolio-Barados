import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Marouane Katfi, a software developer with a strong foundation in both system-level programming (C/C++) at 2 years at 1337 Coding School
        and modern web development . I thrive on building responsive, 
        user-friendly applications that balance performance with great UI/UX—thanks in part to my experience with 
        Figma and visual content creation.
        Currently studying in Mohammed VI Polytechnic University at 1337 Coding School, I work on real-world, peer-driven projects that sharpen my skills 
        in system design, version control, and team collaboration. I also bring creative experience in UI/UX design 
        using Figma and audiovisual content production.
        I’ve worked on projects ranging from Dockerized system environments to real-time web apps, and I’m always excited to take on new challenges. 
        Whether it’s a clean UI, solid backend, or team collaboration on GitHub—I’m all in.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
