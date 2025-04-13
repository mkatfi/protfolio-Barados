import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ScanlinePattern from "@/components/ui/patterns/ScanlinePattern";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlitchText } from "@/components/ui/GlitchText";
import { TypingText } from "@/components/ui/TypingText";
import { RedactedText } from "@/components/ui/RedactedText";
import { FileText, User, Award, MessageCircle, AlertTriangle, Eye } from "lucide-react";

export default function Notes() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
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
            text="ACCESSING INTERROGATION RECORDS..." 
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
                  text="INTERROGATION NOTES" 
                  className="text-green-500 text-3xl font-bold mb-2"
                  glitchIntensity="low"
                />
                <div className="h-1 w-24 bg-green-500 mb-4"></div>
                <p className="text-gray-400">
                  Declassified subject analysis and background information.
                </p>
              </div>
              
              <motion.div 
                className="mt-4 sm:mt-0 px-3 py-2 border border-yellow-800 bg-yellow-900/20"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center text-yellow-500 text-xs">
                  <Eye className="h-3 w-3 mr-2" />
                  CLEARANCE LEVEL 4 REQUIRED
                </div>
              </motion.div>
            </div>
            
            <Card className="border border-green-900/30 bg-black/60 backdrop-blur-sm overflow-hidden p-6">
              <Tabs 
                defaultValue="profile" 
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="bg-black/50 border border-green-900/50 mb-6">
                  <TabsTrigger 
                    value="profile"
                    className={`font-mono text-xs data-[state=active]:bg-green-900/30 data-[state=active]:text-green-400`}
                  >
                    <User className="h-4 w-4 mr-2" />
                    PROFILE
                  </TabsTrigger>
                  <TabsTrigger 
                    value="skills"
                    className={`font-mono text-xs data-[state=active]:bg-green-900/30 data-[state=active]:text-green-400`}
                  >
                    <Award className="h-4 w-4 mr-2" />
                    SKILL ASSESSMENT
                  </TabsTrigger>
                  <TabsTrigger 
                    value="interview"
                    className={`font-mono text-xs data-[state=active]:bg-green-900/30 data-[state=active]:text-green-400`}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    INTERVIEW TRANSCRIPT
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile" className="mt-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-green-500 text-lg font-semibold mb-3">SUBJECT BACKGROUND</h3>
                      <p className="text-gray-300 mb-4">
                        The subject is a highly skilled web developer and software engineer with a comprehensive understanding of modern development technologies, frameworks, and security practices. Initial monitoring began after the subject demonstrated exceptional capabilities in creating complex web applications.
                      </p>
                      <div className="bg-green-900/10 border border-green-900/30 p-4 text-sm text-gray-400">
                        <div className="flex items-center mb-2">
                          <AlertTriangle className="text-yellow-500 h-4 w-4 mr-2" />
                          <span className="text-yellow-500 text-xs">AGENT OBSERVATION:</span>
                        </div>
                        Subject has shown unusual ability to rapidly learn and implement new technologies. Exhibits a distinctive pattern of problem-solving that suggests formal computer science training combined with self-taught techniques. Most notable is the subject's capability to synthesize disparate technologies into cohesive, functional systems.
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-green-400 text-sm font-semibold mb-2">EDUCATION</h4>
                        <ul className="space-y-3">
                          <li className="text-sm text-gray-300">
                            <div className="text-xs text-green-500 mb-1">2022 - Present</div>
                            <RedactedText 
                              text="Computer Science - 1337 Coding School, Mohammed VI Polytechnic University" 
                              redactPercent={20}
                            />
                          </li>
                          <li className="text-sm text-gray-300">
                            <div className="text-xs text-green-500 mb-1">2016-2019</div>
                            <RedactedText 
                              text="Bachelor's in Arabic Private Law - Cadi Ayyad University, Marrakech" 
                              redactPercent={30}
                            />
                          </li>
                          <li className="text-sm text-gray-300">
                            <div className="text-xs text-green-500 mb-1">2015-2016</div>
                            <RedactedText 
                              text="Baccalaureate in Physical Sciences - Essalam High School, Benguerir" 
                              redactPercent={40}
                            />
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-green-400 text-sm font-semibold mb-2">KNOWN ASSOCIATES</h4>
                        <ul className="space-y-3">
                          <li className="text-sm text-gray-300">
                            <div className="text-xs text-green-500 mb-1">CONTACT ID: A-7824</div>
                            <RedactedText 
                              text="Silicon Valley Tech Collective" 
                              redactPercent={60}
                            />
                          </li>
                          <li className="text-sm text-gray-300">
                            <div className="text-xs text-green-500 mb-1">CONTACT ID: A-9035</div>
                            <RedactedText 
                              text="International Developer Guild" 
                              redactPercent={80}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="skills" className="mt-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-green-500 text-lg font-semibold mb-3">TECHNICAL CAPABILITY ASSESSMENT</h3>
                      <p className="text-gray-300 mb-4">
                        Subject exhibits mastery across multiple development domains. The following assessment is based on digital forensics analysis of recovered code repositories and deployed applications.
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-green-400 text-sm font-semibold mb-3">SYSTEMS & LOW-LEVEL PROGRAMMING</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-gray-400 text-sm">C/C++</span>
                              <span className="text-green-500 text-xs">EXPERT</span>
                            </div>
                            <div className="w-full bg-gray-900 h-2">
                              <div className="bg-green-600 h-2" style={{ width: "95%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-gray-400 text-sm">Docker/Docker Compose</span>
                              <span className="text-green-500 text-xs">EXPERT</span>
                            </div>
                            <div className="w-full bg-gray-900 h-2">
                              <div className="bg-green-600 h-2" style={{ width: "90%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-gray-400 text-sm">Problem Solving</span>
                              <span className="text-green-500 text-xs">EXPERT</span>
                            </div>
                            <div className="w-full bg-gray-900 h-2">
                              <div className="bg-green-600 h-2" style={{ width: "93%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-green-400 text-sm font-semibold mb-3">WEB DEVELOPMENT</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-gray-400 text-sm">JavaScript/React.js</span>
                              <span className="text-green-500 text-xs">ADVANCED</span>
                            </div>
                            <div className="w-full bg-gray-900 h-2">
                              <div className="bg-green-600 h-2" style={{ width: "88%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-gray-400 text-sm">HTML & CSS</span>
                              <span className="text-green-500 text-xs">EXPERT</span>
                            </div>
                            <div className="w-full bg-gray-900 h-2">
                              <div className="bg-green-600 h-2" style={{ width: "92%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-gray-400 text-sm">TailwindCSS</span>
                              <span className="text-green-500 text-xs">ADVANCED</span>
                            </div>
                            <div className="w-full bg-gray-900 h-2">
                              <div className="bg-green-600 h-2" style={{ width: "87%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-green-400 text-sm font-semibold mb-3">SPECIALIZED SKILLS</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-gray-400 text-sm">Figma Design</span>
                              <span className="text-green-500 text-xs">ADVANCED</span>
                            </div>
                            <div className="w-full bg-gray-900 h-2">
                              <div className="bg-green-600 h-2" style={{ width: "85%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-gray-400 text-sm">Video Editing/Montage</span>
                              <span className="text-green-500 text-xs">ADVANCED</span>
                            </div>
                            <div className="w-full bg-gray-900 h-2">
                              <div className="bg-green-600 h-2" style={{ width: "82%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-gray-400 text-sm">Git & GitHub</span>
                              <span className="text-green-500 text-xs">EXPERT</span>
                            </div>
                            <div className="w-full bg-gray-900 h-2">
                              <div className="bg-green-600 h-2" style={{ width: "90%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="interview" className="mt-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-green-500 text-lg font-semibold mb-3">TRANSCRIPT FROM INTERVIEW 03A-7</h3>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>DATE: <RedactedText text="April 02, 2025" redactPercent={30} /></span>
                        <span>LOCATION: <RedactedText text="San Francisco Field Office" redactPercent={70} /></span>
                      </div>
                    </div>
                    
                    <div className="border border-green-900/30 bg-black/80 p-4 text-gray-300 font-mono text-sm">
                      <div className="space-y-4">
                        <div>
                          <div className="text-green-500 text-xs mb-1">
                            AGENT KELSO:
                          </div>
                          <p>
                            When did you first begin developing web applications at this level of sophistication?
                          </p>
                        </div>
                        
                        <div>
                          <div className="text-red-500 text-xs mb-1">
                            SUBJECT:
                          </div>
                          <p>
                            I started coding when I was twelve. Built my first full-stack app at sixteen. It's not about sophistication—it's about solving problems efficiently.
                          </p>
                        </div>
                        
                        <div>
                          <div className="text-green-500 text-xs mb-1">
                            AGENT KELSO:
                          </div>
                          <p>
                            Your work shows distinctive patterns. Where would you say your approach differs from other developers?
                          </p>
                        </div>
                        
                        <div>
                          <div className="text-red-500 text-xs mb-1">
                            SUBJECT:
                          </div>
                          <p>
                            I don't follow trends. I focus on fundamentals and build from first principles. Most developers get caught in framework cycles. I treat code as a craft, not just a tool.
                          </p>
                        </div>
                        
                        <div>
                          <div className="text-green-500 text-xs mb-1">
                            AGENT KELSO:
                          </div>
                          <p>
                            What are your motivations for creating these projects?
                          </p>
                        </div>
                        
                        <div>
                          <div className="text-red-500 text-xs mb-1">
                            SUBJECT:
                          </div>
                          <p>
                            <RedactedText text="I build systems that should exist but don't. The web is fragmenting—becoming more controlled. My work ensures digital freedom remains accessible to everyone." redactPercent={40} />
                          </p>
                        </div>
                        
                        <div>
                          <div className="text-green-500 text-xs mb-1">
                            AGENT KELSO:
                          </div>
                          <p>
                            Are you aware that some of your methods skirt legal boundaries?
                          </p>
                        </div>
                        
                        <div>
                          <div className="text-red-500 text-xs mb-1">
                            SUBJECT:
                          </div>
                          <p>
                            <RedactedText text="Innovation always happens at boundaries. The law follows technology, not the other way around. I don't break laws—I expose their limitations." redactPercent={60} />
                          </p>
                        </div>
                        
                        <div className="border-t border-green-900/30 pt-4">
                          <div className="text-yellow-500 text-xs mb-1">
                            TRANSCRIPT NOTE:
                          </div>
                          <p className="text-yellow-500 italic text-xs">
                            Remainder of interview classified under directive 482-B. Full access requires Level 5 clearance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  );
}