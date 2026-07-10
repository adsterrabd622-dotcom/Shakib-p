import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, LayoutTemplate, Megaphone, PenTool, MonitorPlay, Zap
} from 'lucide-react';
import { Skill } from '../types';

const skillsData: Skill[] = [
  { name: 'ওয়ার্ডপ্রেস (WordPress)', level: 95, category: 'creative', description: 'কাস্টম ওয়েবসাইট তৈরি এবং থিম কাস্টমাইজেশন' },
  { name: 'এলিমেন্টর (Elementor)', level: 92, category: 'creative', description: 'ল্যান্ডিং পেজ এবং ই-কমার্স সাইট ডিজাইন' },
  { name: 'ফেসবুক অ্যাডস (Facebook Ads)', level: 88, category: 'creative', description: 'টার্গেটেড অডিয়েন্স এবং সেলস ফানেল তৈরি' },
  { name: 'অ্যাডোবি ফটোশপ (Photoshop)', level: 90, category: 'creative', description: 'ব্যানার, লোগো এবং সোশ্যাল মিডিয়া পোস্ট ডিজাইন' },
  { name: 'ভিডিও এডিটিং (Video Editing)', level: 85, category: 'creative', description: 'ইউটিউব, রিলস এবং প্রোমো ভিডিও এডিটিং' },
];

const getSkillIcon = (name: string) => {
  switch(name) {
    case 'ওয়ার্ডপ্রেস (WordPress)': return <Globe className="w-8 h-8 text-[#0a46b5] dark:text-[#0a46b5] shrink-0" />;
    case 'এলিমেন্টর (Elementor)': return <LayoutTemplate className="w-8 h-8 text-[#0a46b5] dark:text-[#0a46b5] shrink-0" />;
    case 'ফেসবুক অ্যাডস (Facebook Ads)': return <Megaphone className="w-8 h-8 text-[#0a46b5] dark:text-[#0a46b5] shrink-0" />;
    case 'অ্যাডোবি ফটোশপ (Photoshop)': return <PenTool className="w-8 h-8 text-[#0a46b5] dark:text-[#0a46b5] shrink-0" />;
    case 'ভিডিও এডিটিং (Video Editing)': return <MonitorPlay className="w-8 h-8 text-[#0a46b5] dark:text-[#0a46b5] shrink-0" />;
    default: return <Zap className="w-8 h-8 text-[#0a46b5] dark:text-[#0a46b5] shrink-0" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 px-4 bg-[#f4f7fb] dark:bg-[#050505] border-t border-zinc-200 dark:border-zinc-900 scroll-mt-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-[#0a46b5] dark:text-blue-500 uppercase tracking-widest mb-2 md:mb-3 font-bengali">আমার দক্ষতাসমূহ</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#022c4a] dark:text-white tracking-tight font-bengali mb-4 md:mb-6">যেসব বিষয়ে আমি কাজ করি</h3>
          <p className="text-zinc-700 dark:text-zinc-400 max-w-2xl mx-auto font-medium font-bengali text-sm md:text-lg leading-relaxed px-4">
            আমি মূলত ওয়ার্ডপ্রেস এবং ডিজিটাল মার্কেটিং নিয়ে কাজ করি। ক্লায়েন্টের ব্যবসার প্রসারে আমি নিচের কাজগুলো প্রফেশনালি করে থাকি।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-zinc-900/50 rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all group relative overflow-hidden"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                {getSkillIcon(skill.name)}
              </div>
              <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 font-bengali">{skill.name}</h4>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium font-bengali leading-relaxed text-sm md:text-base">
                {(skill as any).description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
