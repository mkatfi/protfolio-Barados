import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CalendarDays, User, ArrowRight } from "lucide-react";
import GridPattern from "@/components/ui/patterns/GridPattern";
import Header from "@/components/layout/Header";

const posts = [
  {
    title: "The Future of B2B SaaS in 2025",
    excerpt: "Explore the emerging trends shaping the B2B SaaS landscape",
    author: "Sarah Johnson",
    date: "Feb 1, 2025",
    category: "Industry Trends"
  },
  {
    title: "Maximizing Team Productivity",
    excerpt: "Learn how to optimize your team's workflow with our platform",
    author: "Michael Chen",
    date: "Jan 28, 2025",
    category: "Best Practices"
  },
  {
    title: "Enterprise Security Essentials",
    excerpt: "Key security features every enterprise solution needs",
    author: "Alex Rodriguez",
    date: "Jan 25, 2025",
    category: "Security"
  },
  {
    title: "Scaling Your SaaS Business",
    excerpt: "Strategic insights for growing your SaaS company",
    author: "Emma Williams",
    date: "Jan 22, 2025",
    category: "Growth"
  }
];

export default function Blog() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="relative pt-20">
        <GridPattern />
        
        <div className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-6">Latest Updates</h1>
            <p className="text-gray-400 text-lg">
              Insights, news, and expert perspectives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <span className="px-2 py-1 rounded-full bg-gray-800">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
