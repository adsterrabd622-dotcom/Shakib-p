import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, LayoutTemplate, Megaphone, Play } from 'lucide-react';

interface HeroProps {
  onExploreSkills: () => void;
  onContact: () => void;
}

export default function Hero({ onExploreSkills, onContact }: HeroProps) {

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-[#f4f7fb] dark:bg-[#050505] pt-28 md:pt-36 pb-4 md:pb-12 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center gap-2 md:gap-12">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left z-10">
          <motion.p 
            className="text-xs md:text-lg font-bold text-zinc-800 dark:text-zinc-200 mb-2 md:mb-4 font-bengali"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            আসসালামুয়ালাইকুম, আপনাকে স্বাগতম
          </motion.p>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] md:leading-[1.2] text-[#022c4a] dark:text-white mb-3 md:mb-6 font-bengali"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            হ্যালো,<br className="hidden md:block" />
            আমি <span className="text-[#0a46b5] dark:text-blue-500">সাকিব হোসেন..</span>
          </motion.h1>
          <motion.p 
            className="text-xs sm:text-sm md:text-lg text-zinc-700 dark:text-zinc-400 mb-4 md:mb-8 leading-relaxed max-w-xl font-medium font-bengali"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ময়মনসিংহ জেলার গফরগাঁও উপজেলার বাসিন্দা। বর্তমানে ম্যানেজমেন্ট বিভাগে বিবিএ (২য় বর্ষ) অধ্যয়ন করছি। নতুন কিছু শেখা, নিজের দক্ষতা বৃদ্ধি করা এবং প্রযুক্তি ও সৃজনশীল কাজের মাধ্যমে ভবিষ্যতে একজন সফল পেশাজীবী হিসেবে নিজেকে গড়ে তোলাই আমার লক্ষ্য।
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button 
              onClick={onContact}
              className="bg-[#0a46b5] hover:bg-[#08368b] text-white px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl flex items-center gap-2 md:gap-3 text-sm md:text-lg font-bold font-bengali transition-all shadow-lg hover:shadow-blue-500/30 cursor-pointer"
            >
              <div className="bg-white rounded-full p-1"><ArrowRight className="w-3 h-3 md:w-5 md:h-5 text-[#0a46b5]" strokeWidth={3} /></div>
              যোগাযোগ করুন
            </button>
          </motion.div>
        </div>

        {/* Right Image Content */}
        <div className="w-full md:w-1/2 relative mt-16 md:mt-24 flex flex-col items-center justify-center translate-y-4 md:translate-y-8">
           <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[420px] aspect-square mb-8 md:mb-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Blue Background Circle */}
                <div className="absolute inset-x-0 bottom-0 top-[10%] bg-gradient-to-br from-[#1e40af] to-[#3b82f6] rounded-full z-0 shadow-2xl scale-[0.85] md:scale-90"></div>

                {/* Sakib's Image Container with overflow hidden to cut bottom, but extended top so head isn't cut */}
                <div className="absolute inset-x-0 bottom-0 top-[-40%] z-10 flex items-end justify-center overflow-hidden rounded-b-[160px] md:rounded-b-[210px] pb-0">
                  <img 
                    src="https://i.ibb.co/4zm9Zhr/x.png" 
                    alt="Sakib Hossain" 
                    className="w-[90%] md:w-[85%] h-auto object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] translate-y-[2%]" 
                  />
                </div>
              </motion.div>

              {/* WordPress Logo (Top Left) */}
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[0%] left-[-5%] z-20 backdrop-blur-xl bg-white/60 dark:bg-white/10 p-3 md:p-4 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-white/50 dark:border-white/10"
              >
                 <img src="https://i.ibb.co/PstBszwG/x.png" alt="WordPress" className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-md" />
              </motion.div>

              {/* Elementor Logo (Top Right) */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[15%] right-[-10%] z-20 backdrop-blur-xl bg-white/60 dark:bg-white/10 p-2.5 md:p-3.5 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-white/50 dark:border-white/10"
              >
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#92003b] flex items-center justify-center drop-shadow-md">
                    <LayoutTemplate className="w-4 h-4 md:w-6 md:h-6 text-white" />
                 </div>
              </motion.div>

              {/* Facebook Ads (Bottom Right) */}
              <motion.div 
                animate={{ y: [0, 15, 0], rotate: [0, 10, -5, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[15%] right-[-5%] z-20 backdrop-blur-xl bg-white/60 dark:bg-white/10 p-3 md:p-4 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-white/50 dark:border-white/10"
              >
                 <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 fill-[#1877F2] drop-shadow-md"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </motion.div>

              {/* Photoshop (Bottom Left) */}
              <motion.div 
                animate={{ y: [0, 10, 0], rotate: [0, -10, 5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute bottom-[20%] left-[-10%] z-20 backdrop-blur-xl bg-white/60 dark:bg-white/10 p-2.5 md:p-3.5 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-white/50 dark:border-white/10"
              >
                 <div className="w-8 h-8 md:w-10 md:h-10 bg-[#001d26] flex items-center justify-center rounded-xl border border-[#31a8ff] drop-shadow-md">
                   <span className="text-[#31a8ff] font-bold text-lg md:text-xl leading-none mt-0.5 tracking-tight">Ps</span>
                 </div>
              </motion.div>

              {/* Video Editing (Top Left Inner) */}
              <motion.div 
                animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-[40%] left-[-15%] z-20 backdrop-blur-xl bg-white/60 dark:bg-white/10 p-2.5 md:p-3.5 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-white/50 dark:border-white/10"
              >
                 <div className="w-8 h-8 md:w-10 md:h-10 bg-[#00005b] flex items-center justify-center rounded-xl border border-[#9999ff] drop-shadow-md">
                   <span className="text-[#9999ff] font-bold text-lg md:text-xl leading-none mt-0.5 tracking-tight">Pr</span>
                 </div>
              </motion.div>

              {/* CapCut (Right Middle) */}
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                className="absolute top-[35%] right-[-15%] z-20 backdrop-blur-xl bg-white/60 dark:bg-white/10 p-3 md:p-4 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-white/50 dark:border-white/10 flex items-center justify-center"
              >
                 <svg viewBox="0 0 32 24" className="w-6 h-6 md:w-8 md:h-8 fill-black dark:fill-white drop-shadow-md">
                   <path d="M 31.056 4.979 V 0.215 l -5.73 3.008 v -0.178 C 25.326 1.146 23.965 0 21.994 0 H 3.831 C 1.755 0 0.5 1.146 0.5 3.045 v 4.8 L 8.523 12 L 0.5 16.191 v 4.8 C 0.5 22.854 1.755 24 3.831 24 h 18.162 c 1.97 0 3.33 -1.146 3.33 -3.009 v -0.25 l 5.731 3.044 V 18.95 L 17.73 12 l 13.327 -7.021 Z M 13.11 14.363 l 9.852 5.16 H 3.22 l 9.888 -5.16 Z m 9.78 -9.885 L 13.109 9.6 L 3.222 4.478 h 19.666 Z" />
                 </svg>
              </motion.div>
           </div>
        </div>
      </div>
      
      {/* Education Section - Moved outside to be full-width-ish row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-12 md:mt-20 flex justify-center">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="w-full max-w-lg bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-lg border border-white/50 dark:border-zinc-800"
           >
              <h3 className="text-xl md:text-2xl font-bold text-[#022c4a] dark:text-white mb-6 md:mb-8 font-bengali flex items-center justify-center gap-2">🏫 শিক্ষাগত যোগ্যতা</h3>
              <div className="grid md:grid-cols-1 gap-6">
                <div>
                   <h4 className="font-bold text-zinc-900 dark:text-white font-bengali">🎓 স্নাতক (চলমান)</h4>
                   <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-bengali">বিবিএ (ম্যানেজমেন্ট বিভাগ) — বর্তমানে ২য় বর্ষে অধ্যয়নরত।</p>
                </div>
                <div>
                   <h4 className="font-bold text-zinc-900 dark:text-white font-bengali">🏫 উচ্চ মাধ্যমিক (HSC)</h4>
                   <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-bengali">গফরগাঁও সরকারি কলেজ, গফরগাঁও, ময়মনসিংহ।</p>
                </div>
                <div>
                   <h4 className="font-bold text-zinc-900 dark:text-white font-bengali">🏫 মাধ্যমিক (SSC)</h4>
                   <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-bengali">রোস্তম আলী গোলন্দাজ স্কুল, গফরগাঁও, ময়মনসিংহ।</p>
                </div>
              </div>
           </motion.div>
      </div>
    </section>
  );
}
