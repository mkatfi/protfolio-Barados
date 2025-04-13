import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlitchText } from "@/components/ui/GlitchText";
import { Search } from "lucide-react";

export default function ProfileHeader() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0.6)", "rgba(10, 10, 10, 0.95)"]
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  return (
    <motion.header
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-green-900/30 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <span className="text-xl font-mono font-bold text-green-500 mr-2">
              FBI
            </span>
            <GlitchText 
              text="//CLASSIFIED" 
              className="text-xs text-red-500 font-bold"
              glitchIntensity="low"
            />
          </div>
        </Link>

        {/* Search bar with scanning animation */}
        <div className="hidden md:flex items-center relative flex-1 max-w-md mx-8">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
          <input 
            type="text" 
            placeholder="SEARCH CRIMINAL DATABASE..."
            className="w-full py-1 pl-10 pr-4 bg-black/50 border border-green-800/50 text-green-400 text-sm focus:outline-none focus:border-green-500 placeholder-green-900"
          />
          <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden">
            <motion.div 
              className="h-[1px] bg-green-500"
              animate={{ 
                x: ["0%", "100%", "0%"],
                opacity: [0.2, 1, 0.2]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/evidence">
            <span className={`font-mono text-sm cursor-pointer transition-colors ${
              isActive("/evidence") ? "text-green-400" : "text-green-700 hover:text-green-500"
            }`}>
              EVIDENCE
            </span>
          </Link>
          <Link href="/notes">
            <span className={`font-mono text-sm cursor-pointer transition-colors ${
              isActive("/notes") ? "text-green-400" : "text-green-700 hover:text-green-500"
            }`}>
              INTERROGATION NOTES
            </span>
          </Link>
          <Link href="/history">
            <span className={`font-mono text-sm cursor-pointer transition-colors ${
              isActive("/history") ? "text-green-400" : "text-green-700 hover:text-green-500"
            }`}>
              CRIMINAL HISTORY
            </span>
          </Link>
        </nav>

        <Button 
          variant="outline" 
          className="border-green-700 text-green-500 hover:bg-green-900/20 hover:text-green-400 font-mono text-xs"
        >
          ACCESS TERMINAL
        </Button>
      </div>
    </motion.header>
  );
}