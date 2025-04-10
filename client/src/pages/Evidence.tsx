import { useState } from "react";
import { motion } from "framer-motion";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ScanlinePattern from "@/components/ui/patterns/ScanlinePattern";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/ui/GlitchText";
import { TypingText } from "@/components/ui/TypingText";
import { Folder, ExternalLink, Lock, FileText, Code, Layout } from "lucide-react";

// Projects data based on Marouane's actual work
const evidenceItems = [
  {
    id: "EVD-001",
    title: "Inception",
    description: "A sophisticated system administration project utilizing Docker to virtualize multiple images within a self-configured virtual machine. Shows advanced knowledge of container orchestration.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1812&auto=format&fit=crop",
    tags: ["Docker", "Virtualization", "System Admin", "Networking"],
    status: "DECLASSIFIED",
    demoLink: "#",
    codeLink: "#",
    type: "security"
  },
  {
    id: "EVD-002",
    title: "IRC Server Project",
    description: "A complete recreation of an IRC server built from scratch in C++. Follows the RFC 2812 specification and is compatible with existing IRC clients, demonstrating low-level network programming expertise.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1740&auto=format&fit=crop", 
    tags: ["C++", "Networking", "Systems Programming", "RFC 2812"],
    status: "CLASSIFIED",
    demoLink: null,
    codeLink: "#",
    type: "security"
  },
  {
    id: "EVD-003",
    title: "Ft_Transcendance",
    description: "A dynamic web application featuring real-time ping-pong gameplay with smooth animations, developed using pure JavaScript. Demonstrates frontend expertise and game development skills.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1470&auto=format&fit=crop",
    tags: ["JavaScript", "Web Development", "Real-time", "Animation"],
    status: "DECLASSIFIED",
    demoLink: "#",
    codeLink: "#",
    type: "web"
  },
  {
    id: "EVD-004",
    title: "UI/UX Design Portfolio",
    description: "A collection of user interface designs showcasing subject's expertise in Figma and design principles. Projects feature responsive layouts and modern aesthetic with attention to user experience.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1780&auto=format&fit=crop",
    tags: ["Figma", "UI/UX", "Design", "Prototyping"],
    status: "DECLASSIFIED",
    demoLink: "#",
    codeLink: null,
    type: "web"
  },
  {
    id: "EVD-005",
    title: "Audiovisual Content Creation",
    description: "A portfolio of video editing and montage work demonstrating the subject's ability to manipulate visual media, create cohesive narratives, and apply advanced editing techniques.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1470&auto=format&fit=crop",
    tags: ["Video Editing", "Montage", "Visual Media", "Content Creation"],
    status: "RESTRICTED",
    demoLink: null,
    codeLink: null,
    type: "mobile"
  }
];

export default function Evidence() {
  const [filter, setFilter] = useState<string>("all");
  
  const filteredEvidence = filter === "all" 
    ? evidenceItems 
    : evidenceItems.filter(item => item.type === filter);
  
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <ProfileHeader />
      <ScanlinePattern />
      
      <div className="container mx-auto px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <GlitchText 
              text="EVIDENCE ARCHIVE" 
              className="text-green-500 text-3xl font-bold mb-2"
              glitchIntensity="low"
            />
            <div className="h-1 w-24 bg-green-500 mb-4"></div>
            <TypingText 
              text="Documentation of subject's known operations and digital artifacts." 
              className="text-gray-400"
              typingSpeed={30}
            />
          </div>
          
          {/* Filter tabs */}
          <div className="flex space-x-2 mb-8 overflow-x-auto">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              className={`font-mono text-xs ${filter === "all" ? "bg-green-900 text-green-100" : "border-green-800 text-green-600"}`}
              onClick={() => setFilter("all")}
            >
              <Folder className="mr-2 h-4 w-4" />
              ALL FILES
            </Button>
            <Button
              variant={filter === "web" ? "default" : "outline"}
              className={`font-mono text-xs ${filter === "web" ? "bg-green-900 text-green-100" : "border-green-800 text-green-600"}`}
              onClick={() => setFilter("web")}
            >
              <Layout className="mr-2 h-4 w-4" />
              WEB OPERATIONS
            </Button>
            <Button
              variant={filter === "mobile" ? "default" : "outline"}
              className={`font-mono text-xs ${filter === "mobile" ? "bg-green-900 text-green-100" : "border-green-800 text-green-600"}`}
              onClick={() => setFilter("mobile")}
            >
              <FileText className="mr-2 h-4 w-4" />
              MOBILE ARTIFACTS
            </Button>
            <Button
              variant={filter === "security" ? "default" : "outline"}
              className={`font-mono text-xs ${filter === "security" ? "bg-green-900 text-green-100" : "border-green-800 text-green-600"}`}
              onClick={() => setFilter("security")}
            >
              <Lock className="mr-2 h-4 w-4" />
              SECURITY BREACHES
            </Button>
          </div>
          
          {/* Evidence grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredEvidence.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border border-green-900/30 bg-black/60 backdrop-blur-sm">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 z-20">
                      <div className={`text-xs font-mono px-2 py-1 rounded-sm
                        ${item.status === "DECLASSIFIED" ? "bg-green-900/70 text-green-400" :
                          item.status === "CLASSIFIED" ? "bg-red-900/70 text-red-400" :
                          "bg-yellow-900/70 text-yellow-400"
                        }`}
                      >
                        {item.status}
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 z-20 text-xs text-gray-500 px-2 py-1 bg-black/60 font-mono">
                      {item.id}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-green-400 mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-green-900/20 text-green-500 px-2 py-1 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      {item.demoLink ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-green-800 text-green-500 hover:bg-green-900/20 hover:text-green-400 font-mono text-xs"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          VIEW DEMO
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-red-800 text-red-500 hover:bg-red-900/20 hover:text-red-400 font-mono text-xs"
                          disabled
                        >
                          <Lock className="mr-2 h-3 w-3" />
                          ACCESS DENIED
                        </Button>
                      )}
                      
                      {item.codeLink && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-blue-800 text-blue-500 hover:bg-blue-900/20 hover:text-blue-400 font-mono text-xs"
                        >
                          <Code className="mr-2 h-3 w-3" />
                          SOURCE CODE
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}