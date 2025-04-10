import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ScanlinePattern from "@/components/ui/patterns/ScanlinePattern";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { GlitchText } from "@/components/ui/GlitchText";
import { TypingText } from "@/components/ui/TypingText";
import { RedactedText } from "@/components/ui/RedactedText";
import { Clock, AlertTriangle, FileWarning, Fingerprint } from "lucide-react";

// Timeline data matching Marouane's career progression
const timelineEvents = [
  {
    id: "TML-001",
    date: "2022 - Present",
    title: "1337 Coding School Infiltration",
    description: "Subject joined elite coding program at Mohammed VI Polytechnic University's 1337 School. Currently developing advanced systems using peer-to-peer learning methodology. Part of the prestigious 42 Network.",
    location: "Ben Guerir, Morocco",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop",
    tags: ["EDUCATIONAL", "CONFIRMED"],
    significance: "HIGH"
  },
  {
    id: "TML-002",
    date: "2021 - 2022",
    title: "Audiovisual Training Acquisition",
    description: "Subject obtained formal training in video editing and audiovisual content creation, enhancing ability to manipulate digital media and present technical concepts in accessible formats.",
    location: "Institut Specialise De Technologie Appliquee Benguerir",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1470&auto=format&fit=crop",
    tags: ["TRAINING", "CONFIRMED"],
    significance: "MODERATE"
  },
  {
    id: "TML-003",
    date: "2020 - 2021",
    title: "Youth Platform Involvement",
    description: "Subject participated in Rhamna youth platform capacity building program, expanding network and developing collaborative projects with other technically skilled individuals.",
    location: "Rhamna Region, Morocco",
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1674&auto=format&fit=crop",
    tags: ["NETWORKING", "CONFIRMED"],
    significance: "MODERATE"
  },
  {
    id: "TML-004",
    date: "2016 - 2019",
    title: "Legal Education Cover",
    description: "Subject engaged in extended legal education at university level, gaining knowledge of legal frameworks that could be leveraged for understanding regulatory limitations in technology sector.",
    location: "Marrakech, Morocco",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1470&auto=format&fit=crop",
    tags: ["EDUCATION", "CONFIRMED"],
    significance: "MODERATE"
  },
  {
    id: "TML-005",
    date: "2015 - 2016",
    title: "Initial Scientific Training",
    description: "Subject received foundational training in physical sciences, demonstrating early aptitude for technical subjects. This provided the scientific background necessary for later computational work.",
    location: "Benguerir, Morocco",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop",
    tags: ["EDUCATION", "CONFIRMED"],
    significance: "LOW"
  }
];

export default function History() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
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
            text="RETRIEVING CRIMINAL HISTORY..." 
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
              <div>
                <GlitchText 
                  text="CRIMINAL HISTORY" 
                  className="text-green-500 text-3xl font-bold mb-2"
                  glitchIntensity="low"
                />
                <div className="h-1 w-24 bg-green-500 mb-4"></div>
                <p className="text-gray-400">
                  Timeline of subject's tracked activities and operations.
                </p>
              </div>
              
              <motion.div 
                className="mt-4 sm:mt-0 flex space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center px-3 py-2 border border-green-800 bg-green-900/10">
                  <Clock className="h-4 w-4 mr-2 text-green-500" />
                  <span className="text-green-500 text-xs">CHRONOLOGICAL VIEW</span>
                </div>
              </motion.div>
            </div>
            
            <Card className="border border-green-900/30 bg-black/60 backdrop-blur-sm overflow-hidden p-6">
              <div className="relative pl-8 pb-1">
                {/* Vertical timeline line */}
                <div className="absolute left-3 top-0 bottom-0 w-px bg-green-900/50"></div>
                
                <div className="space-y-12">
                  {timelineEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-[-1.53rem] top-1.5 h-3 w-3 rounded-full bg-green-500"></div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-green-400 text-xs border border-green-900/50 px-2 py-1 bg-green-900/10">
                              {event.date}
                            </span>
                            
                            <Badge 
                              className={`font-mono text-xs
                                ${event.significance === "HIGH" 
                                  ? "bg-red-900/30 text-red-400 border-red-800" 
                                  : event.significance === "MODERATE"
                                  ? "bg-yellow-900/30 text-yellow-400 border-yellow-800"
                                  : "bg-blue-900/30 text-blue-400 border-blue-800"
                                }
                              `}
                            >
                              {event.significance} SIGNIFICANCE
                            </Badge>
                            
                            <div className="grow"></div>
                            
                            <span className="text-xs text-gray-500">
                              REF: {event.id}
                            </span>
                          </div>
                          
                          <h3 className="text-lg font-bold text-green-400 mb-2">
                            {event.title}
                          </h3>
                          
                          <p className="text-gray-300 text-sm mb-3">
                            {event.description}
                          </p>
                          
                          {event.location && (
                            <div className="mb-3">
                              <span className="text-gray-500 text-xs">LOCATION:</span>
                              <div className="text-gray-400 text-sm">
                                <RedactedText text={event.location} redactPercent={30} />
                              </div>
                            </div>
                          )}
                          
                          <div className="flex flex-wrap gap-2">
                            {event.tags.map((tag, i) => (
                              <span 
                                key={i} 
                                className="text-xs bg-green-900/20 text-green-500 px-2 py-1 rounded-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Evidence image */}
                        <div className="w-full md:w-1/3">
                          <div className="relative border-2 border-green-900/50 aspect-video overflow-hidden">
                            <img 
                              src={event.image} 
                              alt={event.title}
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
                                ease: "linear",
                                delay: index * 0.5
                              }}
                            />
                            
                            {/* Status overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-1 px-2">
                              <div className="text-xs font-mono text-green-500 flex items-center">
                                <Fingerprint className="h-3 w-3 mr-1" />
                                EVIDENCE {String(index + 1).padStart(3, '0')}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {index < timelineEvents.length - 1 && (
                        <Separator className="my-4 bg-green-900/30" />
                      )}
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="bg-yellow-900/10 border border-yellow-900/30 p-4 mt-8">
                      <div className="flex items-center mb-2">
                        <FileWarning className="text-yellow-500 h-4 w-4 mr-2" />
                        <span className="text-yellow-500 text-xs">HISTORICAL NOTE:</span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Earlier activity indicators exist but cannot be definitively linked to subject. Historical compilation ongoing. Additional intelligence pending clearance.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  );
}