import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TypingText } from "@/components/ui/TypingText";
import { RedactedText } from "@/components/ui/RedactedText";
import { GlitchText } from "@/components/ui/GlitchText";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, FileWarning } from "lucide-react";

interface WantedPosterProps {
  name: string;
  image: string;
  aliases?: string[];
  location?: string;
  skills: string[];
  threatLevel: "LOW" | "MODERATE" | "HIGH" | "EXTREME";
  caseNumber: string;
  description: string;
}

export default function WantedPoster({
  name,
  image,
  aliases = [],
  location,
  skills,
  threatLevel,
  caseNumber,
  description
}: WantedPosterProps) {
  // Function to get threat level styling
  const getThreatLevelStyle = (level: string) => {
    switch (level) {
      case "LOW":
        return "bg-blue-900/30 text-blue-400 border-blue-800";
      case "MODERATE":
        return "bg-yellow-900/30 text-yellow-400 border-yellow-800";
      case "HIGH":
        return "bg-orange-900/30 text-orange-400 border-orange-800";
      case "EXTREME":
        return "bg-red-900/30 text-red-400 border-red-800";
      default:
        return "bg-gray-900/30 text-gray-400 border-gray-800";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* Top secret header */}
      <div className="relative border border-red-800 bg-black/80 px-4 py-2 mb-4 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-red-500/10"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <AlertTriangle className="text-red-500 mr-2 h-5 w-5" />
            <GlitchText 
              text="TOP SECRET" 
              className="text-red-500 font-bold tracking-widest"
              glitchIntensity="medium"
            />
          </div>
          
          <div className="font-mono text-xs text-gray-500">
            CASE FILE: <span className="text-green-500">{caseNumber}</span>
          </div>
        </div>
      </div>
      
      <Card className="border border-green-900/50 bg-black/80 backdrop-blur-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* Left column - Mugshot */}
          <div className="col-span-1">
            <div className="relative border-2 border-green-900/50 aspect-[3/4] overflow-hidden mb-4">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover"
              />
              
              {/* Scan effect */}
              <motion.div 
                className="absolute inset-0 bg-green-500/10 pointer-events-none"
                animate={{ 
                  y: ["-100%", "100%", "-100%"],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear"
                }}
              />
              
              {/* Status overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-1 px-2">
                <div className="text-xs font-mono text-green-500">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  FACIAL RECOGNITION: CONFIRMED
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Badge 
                className={`font-mono ${getThreatLevelStyle(threatLevel)} text-xs py-1 px-4`}
              >
                THREAT LEVEL: {threatLevel}
              </Badge>
            </div>
          </div>
          
          {/* Right column - Profile info */}
          <div className="col-span-1 md:col-span-2 font-mono">
            <div className="text-green-500 mb-4">
              <span className="text-gray-500 text-xs">SUBJECT NAME:</span>
              <h1 className="text-2xl font-bold mt-1">
                <GlitchText text={name} glitchIntensity="low" />
              </h1>
            </div>
            
            {aliases.length > 0 && (
              <div className="mb-4">
                <span className="text-gray-500 text-xs">KNOWN ALIASES:</span>
                <div className="mt-1 text-yellow-400 text-sm">
                  {aliases.join(" • ")}
                </div>
              </div>
            )}
            
            {location && (
              <div className="mb-4">
                <span className="text-gray-500 text-xs">LAST KNOWN LOCATION:</span>
                <div className="mt-1 text-red-400 text-sm">
                  <RedactedText text={location} redactPercent={30} />
                </div>
              </div>
            )}
            
            <div className="mb-4">
              <span className="text-gray-500 text-xs">SPECIAL ABILITIES:</span>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-1 h-1 bg-green-500 mr-2"></div>
                    <span className="text-green-400 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator className="my-4 bg-green-900/30" />
            
            <div>
              <div className="flex items-center mb-2">
                <FileWarning className="text-yellow-500 h-4 w-4 mr-2" />
                <span className="text-gray-500 text-xs">AGENT NOTES:</span>
              </div>
              <div className="text-gray-400 text-sm">
                <TypingText 
                  text={description} 
                  typingSpeed={20}
                  startDelay={500}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}