import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Star } from 'lucide-react';

const projectsData = [
  {
    id: 'ecommerce',
    title: 'প্রফেশনাল ই-কমার্স ওয়েবসাইট',
    description: 'উন্নত মানের ডিজাইন, ফাস্ট লোডিং এবং রেসপন্সিভ ই-কমার্স সাইট যা আপনার সেলস বাড়াতে সাহায্য করবে।',
    tags: ['ওয়ার্ডপ্রেস', 'উকমার্স', 'পেমেন্ট গেটওয়ে'],
    color: 'from-blue-500/20 to-blue-600/20',
  },
  {
    id: 'landing-page',
    title: 'হাই-কনভার্টিং ল্যান্ডিং পেজ',
    description: 'ফেসবুক অ্যাডস বা মার্কেটিং ক্যাম্পেইনের জন্য আকর্ষণীয় ল্যান্ডিং পেজ যা ভিজিটরকে ক্রেতায় পরিণত করবে।',
    tags: ['এলিমেন্টর', 'ফানেল', 'অ্যানিমেশন'],
    color: 'from-indigo-500/20 to-indigo-600/20',
  },
  {
    id: 'portfolio',
    title: 'পার্সোনাল পোর্টফোলিও বা ব্লগ',
    description: 'নিজের বা কোম্পানির পরিচিতি তুলে ধরতে সুন্দর পোর্টফোলিও বা ব্লগিং সাইট।',
    tags: ['ব্লগ', 'কাস্টম ডিজাইন', 'এসইও'],
    color: 'from-sky-500/20 to-sky-600/20',
  },
  {
    id: 'fb-ads',
    title: 'ফেসবুক মার্কেটিং ও অ্যাডস',
    description: 'সঠিক অডিয়েন্স টার্গেটিং, পিক্সেল সেটআপ এবং রিটার্গেটিং এর মাধ্যমে বিজ্ঞাপন অপ্টিমাইজেশন।',
    tags: ['অ্যাডস ম্যানেজার', 'পিক্সেল', 'ক্যাম্পেইন'],
    color: 'from-teal-500/20 to-teal-600/20',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 px-4 bg-white dark:bg-[#020202] border-t border-zinc-200 dark:border-zinc-900 scroll-mt-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-[#0a46b5] dark:text-blue-500 uppercase tracking-widest mb-2 md:mb-3 font-bengali">আমার সেবাসমূহ</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#022c4a] dark:text-white tracking-tight font-bengali mb-4 md:mb-6">আমি যা অফার করি</h3>
          <p className="text-zinc-700 dark:text-zinc-400 max-w-2xl mx-auto font-medium font-bengali text-sm md:text-lg leading-relaxed px-4">
            আপনার ব্যবসার ধরন অনুযায়ী আমি কাস্টমাইজড সলিউশন প্রদান করি যা আপনার বিজনেসকে আরো এক ধাপ এগিয়ে নিবে।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-[#f8fafc] dark:bg-[#080808] hover:border-[#0a46b5]/30 dark:hover:border-[#0a46b5]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#0a46b5]/5"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br ${project.color} blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative p-6 md:p-10 flex flex-col h-full z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-sm">
                    <Star className="w-6 h-6 text-[#0a46b5] dark:text-blue-500" />
                  </div>
                  <button className="text-zinc-400 hover:text-[#0a46b5] dark:hover:text-blue-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
                
                <h4 className="text-2xl font-bold text-[#022c4a] dark:text-white mb-4 font-bengali group-hover:text-[#0a46b5] dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 font-bengali leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-[#0a46b5] dark:text-blue-400 text-sm font-medium font-bengali border border-blue-100 dark:border-blue-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
