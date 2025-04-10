import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfileHeader from "@/components/profile/ProfileHeader";
import WantedPoster from "@/components/profile/WantedPoster";
import ScanlinePattern from "@/components/ui/patterns/ScanlinePattern";
import { GlitchText } from "@/components/ui/GlitchText";
import { TypingText } from "@/components/ui/TypingText";

// Profile data
const profileData = {
  name: "MAROUANE KATFI",
  image: "src/image/mer-enhanced.jpg", // Using the profile image you provided
  aliases: ["Software Developer", "C/C++ Specialist", "Frontend Engineer"],
  location: "Hay Ennour, Benguerir, Morocco",
  skills: [
    "System-level Programming (C/C++)",
    "Docker Virtualization",
    "Web Development (React.js)",
    "UI/UX Design (Figma)",
    "Video Editing & Montage",
    "Problem Solving & Architecture"
  ],
  threatLevel: "HIGH" as const,
  caseNumber: "FB-1337-MK",
  description: "Subject demonstrates exceptional ability in system-level programming and modern web technologies. Currently enrolled in 1337 Coding School's prestigious computer science program. Known for developing sophisticated applications including virtualized Docker systems and an IRC server from scratch following RFC 2812 specifications. Subject possesses advanced knowledge of UI/UX design and audiovisual content creation, making him a versatile and dangerous target."
};

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <ProfileHeader />
      <ScanlinePattern />
      
      {isLoading ? (
        <div className="h-screen flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-2 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <TypingText 
            text="ACCESSING CLASSIFIED DATABASE..." 
            className="text-green-500"
          />
        </div>
      ) : (
        <div className="container mx-auto px-6 pt-28 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="inline-block bg-red-900/30 border border-red-800 px-3 py-1 mb-2">
                  <GlitchText 
                    text="WANTED FUGITIVE" 
                    className="text-red-500 text-sm tracking-wider"
                  />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-green-500">
                  CRIMINAL DATABASE: <span className="text-white">ACTIVE TARGET</span>
                </h1>
              </motion.div>
              
              <div className="text-right mt-4 sm:mt-0">
                <div className="text-xs text-gray-500 mb-1">ACCESS LEVEL: CLASSIFIED</div>
                <div className="text-xs text-gray-500">
                  TIMESTAMP: {new Date().toISOString()}
                </div>
              </div>
            </div>
            
            <div className="bg-green-900/10 border border-green-900/30 p-4 mb-8 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-green-500/5"
                animate={{ 
                  opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity
                }}
              />
              <TypingText 
                text="WARNING: This file contains classified information about a high-priority target. Unauthorized access or distribution is punishable under federal law." 
                className="text-green-400 text-sm"
                typingSpeed={10}
              />
            </div>
          
            <WantedPoster {...profileData} />
          </motion.div>
        </div>
      )}
    </div>
  );
}