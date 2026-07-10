import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, MessageCircle, Mail, Download, ShieldAlert } from 'lucide-react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const [showRightClickToast, setShowRightClickToast] = useState(false);
  const [currentWarning, setCurrentWarning] = useState({
    title: "সুরক্ষা সতর্কতা!",
    desc: "অনুমতি ব্যতীত কন্টাক্ট ইনফো কপি বা অননুমোদিত কাজ করার অনুমতি নেই।"
  });

  const WARNING_MESSAGES = [
    {
      title: "সুরক্ষা সতর্কতা! 🔒",
      desc: "অনুমতি ব্যতীত কন্টাক্ট ইনফো কপি বা অননুমোদিত কাজ করার অনুমতি নেই।"
    },
    {
      title: "আরে! রাইট ক্লিক নিষেধ 😉",
      desc: "আমার ওয়েবসাইটে রাইট-ক্লিক ব্লক করা আছে বস! সরাসরি কথা বলুন।"
    },
    {
      title: "কপি করার চেষ্টা? 🤫",
      desc: "কোনো কন্টেন্ট বা কোড কপি করার জন্য সাকিবের বিশেষ অনুমতি প্রয়োজন!"
    },
    {
      title: "সরাসরি যোগাযোগ করুন 🤝",
      desc: "কপি-পেস্ট না করে সরাসরি নিচে দেয়া সামাজিক মাধ্যমে মেসেজ পাঠান।"
    },
    {
      title: "সোর্স কোড লকড! 💻",
      desc: "সোর্স কোড বা কন্টেন্ট চুরি করার কোনো সুযোগ নেই ভাইয়া!"
    },
    {
      title: "অননুমোদিত প্রবেশ নিষেধ 🚫",
      desc: "এই ওয়েবসাইটের ডিজাইন এবং কন্টেন্ট সম্পূর্ণ কপিরাইট সংরক্ষিত।"
    }
  ];

  // Disable right-click globally
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      const randomIndex = Math.floor(Math.random() * WARNING_MESSAGES.length);
      setCurrentWarning(WARNING_MESSAGES[randomIndex]);
      setShowRightClickToast(true);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  // Auto-hide right-click toast notification
  useEffect(() => {
    if (showRightClickToast) {
      const timer = setTimeout(() => {
        setShowRightClickToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showRightClickToast]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true); // scrolling down
      } else {
        setIsHidden(false); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = id === 'contact' ? 40 : 80; // Smaller offset for contact to bring it fully into view
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: id === 'contact' ? Math.min(offsetPosition, document.documentElement.scrollHeight) : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 font-sans antialiased selection:bg-teal-500/30 selection:text-teal-200">
      
      {/* Navigation Header */}
      <nav 
        className={`fixed left-0 right-0 z-50 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 ${
          isHidden ? '-translate-y-[150%]' : 'translate-y-0'
        }`}
      >
        <div className={`w-full max-w-6xl flex items-center justify-between transition-all duration-300 h-16 sm:h-18 bg-white/70 dark:bg-[#050505]/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg shadow-zinc-200/20 dark:shadow-black/20 rounded-full px-4 sm:px-6 md:px-8`}>
          {/* Logo */}
          <div className="flex-1 flex items-center justify-start">
            <div className="flex items-center gap-2 md:gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#1e40af] to-[#3b82f6] text-white flex items-center justify-center font-bold text-base sm:text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-all">
                 S
              </div>
              <span className="font-bengali font-black text-[#022c4a] dark:text-white tracking-tight text-lg sm:text-xl">সাকিব</span>
            </div>
          </div>

          {/* Center Actions */}
          <div className="flex-1 flex justify-center">
            <a href="#" download className="relative inline-flex active:scale-95 transition-all overflow-hidden rounded-full p-[1px] focus:outline-none cursor-pointer group h-9 sm:h-10">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#393BB2_0%,#E2CBFF_50%,#393BB2_100%)] transition-colors duration-500" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-950 px-4 sm:px-6 py-1 font-bold text-[#022c4a] dark:text-white backdrop-blur-3xl font-bengali text-[11px] sm:text-sm">
                ডাউনলোড সিভি
              </span>
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex-1 flex justify-end items-center gap-2 sm:gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-[#0a46b5] hover:border-[#0a46b5]/30 transition-all cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-zinc-900 dark:text-white hover:text-[#0a46b5] bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/50 dark:border-zinc-800/50 rounded-full transition-all cursor-pointer">
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-24 bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-900 z-40 flex flex-col px-6 py-8 space-y-6 shadow-2xl"
          >
            <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setIsMobileMenuOpen(false);}} className="text-left text-lg font-bold text-zinc-700 dark:text-zinc-300 hover:text-[#0a46b5] dark:hover:text-blue-500 font-bengali">হোম</button>
            <button onClick={() => scrollToSection('skills')} className="text-left text-lg font-bold text-zinc-700 dark:text-zinc-300 hover:text-[#0a46b5] dark:hover:text-blue-500 font-bengali">সেবাসমূহ</button>
            <button onClick={() => scrollToSection('projects')} className="text-left text-lg font-bold text-zinc-700 dark:text-zinc-300 hover:text-[#0a46b5] dark:hover:text-blue-500 font-bengali">পোর্টফোলিও</button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-lg font-bold text-zinc-700 dark:text-zinc-300 hover:text-[#0a46b5] dark:hover:text-blue-500 font-bengali">যোগাযোগ</button>
            
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
               <button
                 onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark'); setIsMobileMenuOpen(false);}}
                 className="flex-1 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center justify-center gap-2 font-bengali font-bold"
               >
                 {theme === 'dark' ? <><Sun className="w-5 h-5" /> লাইট মোড</> : <><Moon className="w-5 h-5" /> ডার্ক মোড</>}
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Layout Sections */}
      <main>
        <Hero 
          onExploreSkills={() => scrollToSection('skills')} 
          onContact={() => scrollToSection('contact')} 
        />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      {/* Clean, humble Footer */}
      <footer className="py-12 px-4 bg-zinc-50 dark:bg-[#050505] text-center border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-zinc-600 dark:text-zinc-400 font-bengali">
          <span className="text-sm">© {new Date().getFullYear()} সাকিব হোসেন. সর্বস্বত্ব সংরক্ষিত।</span>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Download className="w-4 h-4" /> ইনস্টল অ্যাপ</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">প্রাইভেসি পলিসি</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">টার্মস অফ সার্ভিস</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">রিফান্ড পলিসি</a>
          </div>
        </div>
      </footer>

      {/* Right Click Prevention Toast Notification */}
      <AnimatePresence>
        {showRightClickToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, x: '-50%' }}
            animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
            exit={{ opacity: 0, y: 20, scale: 0.9, x: '-50%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-10 left-1/2 z-50 flex items-center gap-3.5 px-5 py-4 bg-zinc-900/95 dark:bg-white text-zinc-100 dark:text-zinc-900 rounded-2xl border border-zinc-800 dark:border-zinc-200/30 shadow-2xl backdrop-blur-xl w-[90%] max-w-sm sm:max-w-md select-none font-bengali pointer-events-none"
          >
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 dark:text-red-600 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5.5 h-5.5 animate-pulse" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-black text-red-400 dark:text-red-600 mb-0.5">{currentWarning.title}</p>
              <p className="text-[11px] sm:text-xs text-zinc-350 dark:text-zinc-600 font-medium leading-relaxed">
                {currentWarning.desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
