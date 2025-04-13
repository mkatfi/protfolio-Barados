import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RedactedText } from "@/components/ui/RedactedText";
import { GlitchText } from "@/components/ui/GlitchText";
import { TypingText } from "@/components/ui/TypingText";

interface ProfileCardProps {
  name: string;
  aliases?: string[];
  photo: string;
  caseNumber: string;
  threatLevel: number; // 1-10
  lastKnownLocation?: string;
  skills: string[];
  classificationLevel?: "CONFIDENTIAL" | "SECRET" | "TOP SECRET" | "COSMIC TOP SECRET";
}

export default function ProfileCard({
  name,
  aliases = [],
  photo,
  caseNumber,
  threatLevel,
  lastKnownLocation,
  skills,
  classificationLevel = "TOP SECRET"
}: ProfileCardProps) {
  // Generate threat level label based on number
  const getThreatLabel = (level: number) => {
    if (level <= 3) return "LOW";
    if (level <= 6) return "MODERATE";
    if (level <= 8) return "HIGH";
    return "EXTREME";
  };

  // Define threat color based on level
  const getThreatColor = (level: number) => {
    if (level <= 3) return "bg-blue-500";
    if (level <= 6) return "bg-yellow-500";
    if (level <= 8) return "bg-orange-500";
    return "bg-red-500";
  };
  
  return (
    <Card className="w-full bg-black/60 backdrop-blur-md border border-green-900/30 overflow-hidden">
      {/* Classification banner */}
      <div className={`w-full py-1 text-center font-mono text-black font-bold text-sm
        ${classificationLevel === "CONFIDENTIAL" && "bg-blue-500"}
        ${classificationLevel === "SECRET" && "bg-yellow-500"} 
        ${classificationLevel === "TOP SECRET" && "bg-red-500"}
        ${classificationLevel === "COSMIC TOP SECRET" && "bg-purple-500"}`
      }>
        <GlitchText text={classificationLevel} glitchIntensity="low" />
      </div>
      
      {/* File header with case number */}
      <div className="border-b border-green-900/30 px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-mono text-green-500 text-xs">CASE FILE:</span>
          <span className="font-mono text-green-300 text-xs ml-2">{caseNumber}</span>
        </div>
        <div className="font-mono text-green-500 text-xs">
          <span className="mr-2">ACCESSED:</span>
          <span className="text-green-300">{new Date().toISOString().split('T')[0]}</span>
        </div>
      </div>
      
      {/* Main content with photo and details */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Photo with threat level */}
        <div className="space-y-4">
          <div className="relative">
            <div className="aspect-square w-full bg-gray-900 mb-4 overflow-hidden border border-green-900/50 relative">
              {photo && (
                <img 
                  src={photo} 
                  alt={name} 
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-90"
                />
              )}
              
              {/* Scan effect */}
              <motion.div
                className="absolute inset-0 bg-green-500/10 z-10 pointer-events-none"
                animate={{
                  y: ["-100%", "100%"],
                  opacity: [0, 0.2, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500"></div>
            </div>
            
            {/* Threat level indicator */}
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-xs text-green-500">
                <span>THREAT LEVEL</span>
                <span>{getThreatLabel(threatLevel)}</span>
              </div>
              <div className="relative h-2 w-full bg-gray-900 border border-green-900/50">
                <div 
                  className={`absolute top-0 left-0 h-full ${getThreatColor(threatLevel)}`} 
                  style={{ width: `${threatLevel * 10}%` }}
                />
              </div>
            </div>
          </div>
          
          {/* Last known location */}
          {lastKnownLocation && (
            <div className="p-3 border border-green-900/30 bg-gray-900/50">
              <div className="font-mono text-xs text-green-500 mb-1">LAST KNOWN LOCATION</div>
              <RedactedText 
                text={lastKnownLocation}
                className="text-green-300 text-sm"
                redactPercent={30}
              />
            </div>
          )}
        </div>
        
        {/* Subject details */}
        <div className="md:col-span-2 space-y-5">
          {/* Name and aliases */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white inline-block border-b-2 border-green-500 pb-1">
              <GlitchText 
                text={name} 
                className="font-mono tracking-wide"
                glitchIntensity="medium"
              />
            </h2>
            
            {aliases.length > 0 && (
              <div className="mt-2">
                <span className="font-mono text-xs text-green-500 mb-2 block">KNOWN ALIASES</span>
                <div className="flex flex-wrap gap-2">
                  {aliases.map((alias, index) => (
                    <Badge 
                      key={index}
                      className="bg-green-900/50 text-green-400 hover:bg-green-900 border-green-800"
                    >
                      {alias}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Special abilities / Skills */}
          <div className="space-y-3 p-3 border border-green-900/30 bg-gray-900/50">
            <h3 className="font-mono text-xs text-green-500 border-b border-green-900/50 pb-1">SPECIAL ABILITIES</h3>
            <ul className="space-y-2 list-disc list-inside">
              {skills.map((skill, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-green-300 text-sm font-mono"
                >
                  <span className="text-green-500">&#62;</span> {skill}
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Caution notes */}
          <div className="p-3 border border-red-900/30 bg-red-900/10">
            <h3 className="font-mono text-xs text-red-500 border-b border-red-900/50 pb-1 mb-2">CAUTION</h3>
            <TypingText
              text="Subject is considered armed and extremely dangerous. Approach with caution. Do not attempt to apprehend without specialized training and equipment."
              className="text-red-300 text-sm font-mono"
              typingSpeed={20}
            />
          </div>
        </div>
      </div>
      
      {/* Footer with access information */}
      <div className="p-4 border-t border-green-900/30 font-mono text-xs text-green-700">
        <div className="flex justify-between">
          <span>AUTHORIZED ACCESS ONLY</span>
          <span>CLEARANCE LEVEL 5 REQUIRED</span>
        </div>
      </div>
    </Card>
  );
}