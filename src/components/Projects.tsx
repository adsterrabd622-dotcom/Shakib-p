import React from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Star, 
  MessageSquare, 
  Mail, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Zap 
} from 'lucide-react';

// @ts-ignore
import statusBanglaImg from '../assets/images/status_bangla_laptop_1783690257923.jpg';
// @ts-ignore
import tempMailImg from '../assets/images/temp_mail_laptop_1783690271669.jpg';

const featuredProjects = [
  {
    id: 'status-bangla',
    title: 'স্ট্যাটাস বাংলা (Status Bangla)',
    tagline: 'বাংলা স্ট্যাটাস ও ক্যাপশন হাব',
    description: 'সোশ্যাল মিডিয়ার জন্য আকর্ষণীয় বাংলা স্ট্যাটাস, উক্তি ও ক্যাপশন সংগ্রহ ও সহজে ১-ক্লিক কপি করার আধুনিক ও চমৎকার ওয়েব অ্যাপ্লিকেশন।',
    url: 'https://statusbangla.vercel.app/',
    image: statusBanglaImg,
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    bgGradient: 'from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5',
    accentColor: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'group-hover:border-emerald-500/40 dark:group-hover:border-emerald-500/30',
    icon: MessageSquare,
    badge: 'জনপ্রিয় প্রজেক্ট'
  },
  {
    id: 'temp-mail',
    title: 'টেম্প মেইল (Temp Mail Gename)',
    tagline: 'নিরাপদ ও স্প্যাম-মুক্ত অস্থায়ী ইনবক্স',
    description: '১-ক্লিকে চমৎকার কাস্টম বা র্যান্ডম অস্থায়ী ইমেইল এড্রেস জেনারেট করে নিজের ব্যক্তিগত ইনবক্সকে স্প্যাম এবং ফিশিং থেকে সুরক্ষিত রাখার নির্ভরযোগ্য ইউটিলিটি।',
    url: 'https://temp-mail-gename.vercel.app/',
    image: tempMailImg,
    tech: ['React.js', 'Vite', 'Tailwind', 'RapidAPI'],
    bgGradient: 'from-indigo-500/10 to-blue-500/10 dark:from-indigo-500/5 dark:to-blue-500/5',
    accentColor: 'text-indigo-600 dark:text-indigo-400',
    borderColor: 'group-hover:border-indigo-500/40 dark:group-hover:border-indigo-500/30',
    icon: Mail,
    badge: 'সেরা ইউটিলিটি'
  }
];

const servicesData = [
  {
    id: 'ecommerce',
    title: 'প্রফেশনাল ই-কমার্স ওয়েবসাইট',
    description: 'উন্নত মানের ডিজাইন, ফাস্ট লোডিং এবং রেসপন্সিভ ই-কমার্স সাইট যা আপনার সেলস বাড়াতে সাহায্য করবে।',
    tags: ['ওয়ার্ডপ্রেস', 'উকমার্স', 'পেমেন্ট গেটওয়ে'],
    color: 'from-blue-500/10 to-blue-600/10 hover:border-blue-500/30 dark:hover:border-blue-500/40',
  },
  {
    id: 'landing-page',
    title: 'হাই-কনভার্টিং ল্যান্ডিং পেজ',
    description: 'ফেসবুক অ্যাডস বা মার্কেটিং ক্যাম্পেইনের জন্য আকর্ষণীয় ল্যান্ডিং পেজ যা ভিজিটরকে ক্রেতায় পরিণত করবে।',
    tags: ['এলিমেন্টর', 'ফানেল', 'অ্যানিমেশন'],
    color: 'from-indigo-500/10 to-indigo-600/10 hover:border-indigo-500/30 dark:hover:border-indigo-500/40',
  },
  {
    id: 'portfolio',
    title: 'পার্সোনাল পোর্টফোলিও বা ব্লগ',
    description: 'নিজের বা কোম্পানির পরিচিতি তুলে ধরতে সুন্দর পোর্টফোলিও বা ব্লগিং সাইট।',
    tags: ['ব্লগ', 'কাস্টম ডিজাইন', 'এসইও'],
    color: 'from-sky-500/10 to-sky-600/10 hover:border-sky-500/30 dark:hover:border-sky-500/40',
  },
  {
    id: 'fb-ads',
    title: 'ফেসবুক মার্কেটিং ও অ্যাডস',
    description: 'সঠিক অডিয়েন্স টার্গেটিং, পিক্সেল সেটআপ এবং রিটার্গেটিং এর মাধ্যমে বিজ্ঞাপন অপ্টিমাইজেশন।',
    tags: ['অ্যাডস ম্যানেজার', 'পিক্সেল', 'ক্যাম্পেইন'],
    color: 'from-teal-500/10 to-teal-600/10 hover:border-teal-500/30 dark:hover:border-teal-500/40',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 px-4 bg-white dark:bg-[#020202] border-t border-zinc-200 dark:border-zinc-900 scroll-mt-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* ================= SECTION 1: FEATURED PROJECTS (CARDS STYLE) ================= */}
        <div className="text-center mb-12">
          <h2 className="text-xs md:text-sm font-bold text-[#0a46b5] dark:text-blue-500 uppercase tracking-widest mb-2 md:mb-3 font-bengali">আমার প্রজেক্টস</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#022c4a] dark:text-white tracking-tight font-bengali mb-4 md:mb-6">লাইভ প্রজেক্ট গ্যালারি</h3>
          <p className="text-zinc-700 dark:text-zinc-400 max-w-2xl mx-auto font-medium font-bengali text-sm md:text-lg leading-relaxed px-4">
            আমি বাস্তব কাজের নির্ভরযোগ্যতা প্রদান করি। নিচে আমার তৈরি চমৎকার দুটি প্রজেক্টের কার্ড ও সরাসরি ভিজিট লিংক দেওয়া রয়েছে।
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {featuredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`group relative rounded-3xl overflow-hidden border border-zinc-250 dark:border-zinc-850 bg-[#fbfcfd] dark:bg-[#070707] transition-all duration-300 ${project.borderColor} hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col`}
              >
                {/* Background Gradient Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.bgGradient} blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* PC Screenshot Preview Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-[#0f0f0f] border-b border-zinc-200/60 dark:border-zinc-850">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle glass overlay/reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/5 pointer-events-none" />
                </div>

                <div className="relative p-6 sm:p-8 flex flex-col flex-1 justify-between z-10">
                  
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-sm">
                        <IconComponent className={`w-6 h-6 ${project.accentColor}`} />
                      </div>
                      <div>
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-850 text-zinc-500 dark:text-zinc-400 px-2.5 py-1 rounded-md">
                          {project.badge}
                        </span>
                      </div>
                    </div>
                    
                    {/* Live URL Link */}
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-zinc-50 hover:bg-[#0a46b5] dark:bg-zinc-900 dark:hover:bg-blue-500 text-zinc-500 hover:text-white dark:text-zinc-400 dark:hover:text-white flex items-center justify-center border border-zinc-200 dark:border-zinc-800 transition-all shadow-sm"
                      title="লাইভ সাইট ভিজিট করুন"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-xl md:text-2xl font-black text-[#022c4a] dark:text-white font-bengali leading-tight group-hover:text-[#0a46b5] dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className={`text-xs md:text-sm font-bold font-bengali ${project.accentColor}`}>
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 font-medium font-bengali leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack & CTA */}
                  <div className="space-y-6 mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(tag => (
                        <span 
                          key={tag} 
                          className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-xs font-semibold font-sans border border-zinc-200 dark:border-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#0a46b5] hover:bg-[#08368b] text-white text-xs md:text-sm font-bold py-3 px-5 rounded-xl transition-all shadow-md hover:shadow-blue-500/25 group font-bengali"
                      >
                        প্রজেক্টটি লাইভ দেখুন
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= SECTION 2: SERVICES (EXISTING OFfers) ================= */}
        <div className="border-t border-zinc-200/60 dark:border-zinc-900/60 pt-20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-xs md:text-sm font-bold text-[#0a46b5] dark:text-blue-500 uppercase tracking-widest mb-2 md:mb-3 font-bengali">আমার সেবাসমূহ</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#022c4a] dark:text-white tracking-tight font-bengali mb-4">আমি যা অফার করি</h3>
            <p className="text-zinc-700 dark:text-zinc-400 max-w-2xl mx-auto font-medium font-bengali text-sm md:text-base leading-relaxed px-4">
              আপনার ব্যবসার ধরন অনুযায়ী আমি কাস্টমাইজড সলিউশন প্রদান করি যা আপনার বিজনেসকে আরো এক ধাপ এগিয়ে নিবে।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {servicesData.map((project, index) => (
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
                  </div>
                  
                  <h4 className="text-2xl font-bold text-[#022c4a] dark:text-white mb-4 font-bengali group-hover:text-[#0a46b5] dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 font-bengali leading-relaxed flex-grow text-sm">
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

      </div>
    </section>
  );
}
