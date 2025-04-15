import React from 'react';

const HeroButton = () => {
  return (
    <div className="flex gap-4 gap-10 ml-10">
      <a
        href="../../../public/cv/Marouane-software.pdf"
        download
      >
        <button className="px-4 py-2 bg-orange text-black rounded hover:bg-orange text-xl font-bold font-body  border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow
        ">
          My CV
        </button>
      </a>

      <a
        href="https://github.com/mkatfi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="px-4 py-2 bg-orange text-black rounded hover:bg-orange text-xl font-bold font-body  border-cyan border flex items-center gap-1 bg-gradient-to-r from-orange to-darkCyan  transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
          My GitHub
        </button>
      </a>
    </div>
  );
};

export default HeroButton;
