import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "তানিয়া সুলতানা",
    role: "গ্রাফিক ডিজাইনার",
    text: "সাকিব ভাইয়ের কাজ সত্যিই অসাধারণ! খুব অল্প সময়ে প্রফেশনাল আউটপুট দিয়েছেন।",
    avatar: "https://i.ibb.co/Mwbkk40/x.jpg"
  },
  {
    name: "রাহিম আহমেদ",
    role: "কন্টেন্ট ক্রিয়েটর",
    text: "ভিডিও এডিটিংয়ের জন্য সাকিব সেরা। তার ক্রিয়েটিভিটি এবং দ্রুত ডেলিভারি আমাকে মুগ্ধ করেছে।",
    avatar: "https://i.ibb.co/TMrKFT0p/x.jpg"
  },
  {
    name: "ফারিহা ইসলাম",
    role: "মার্কেটিং স্পেশালিস্ট",
    text: "অসাধারণ এডিটিং এবং চমৎকার কমিউনিকেশন। সামনে আরও প্রজেক্টে তার সাথে কাজ করব।",
    avatar: "https://i.ibb.co/4gTTdcQ4/x.jpg"
  },
  {
    name: "করিম হাসান",
    role: "এন্টারপ্রেনার",
    text: "সাকিব ভাইয়ের কাজে আমি মুগ্ধ। প্রজেক্টের কোয়ালিটি এবং ডেডলাইন মেইনটেইন করাটা দারুণ।",
    avatar: "https://i.ibb.co/p6RhNMtd/x.jpg"
  },
  {
    name: "সাদিকুর রহমান",
    role: "ওয়েব ডেভেলপার",
    text: "আমি সাকিব ভাইয়ের কাজের ভক্ত। তার কাজের মান এবং সৃজনশীলতা অনন্য।",
    avatar: "https://i.ibb.co/fVz2FZBy/x.jpg"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-white dark:bg-zinc-950 transition-colors duration-300" id="testimonials">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bengali font-bold text-zinc-900 dark:text-white mb-4">সন্তুষ্ট গ্রাহকদের <span className="text-blue-600 dark:text-blue-400">মতামত</span></h2>
        <p className="text-zinc-600 dark:text-zinc-400 font-bengali mb-12">সাকিব হোসেন-এর সাথে কাজ করার অভিজ্ঞতা কেমন ছিল তা আমাদের গ্রাহকদের মুখ থেকেই শুনুন। আমরা শ্রেষ্ঠত্ব এবং গ্রাহক সন্তুষ্টিতে বিশ্বাসী।</p>
        
        <div className="relative flex items-center justify-center gap-4">
            <button onClick={prev} className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-lg">
                <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full max-w-lg min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white p-6 rounded-3xl shadow-xl border border-zinc-100 dark:border-zinc-800 flex flex-col items-center text-center aspect-square justify-between"
                >
                  <div className="flex flex-col items-center">
                      <div className="flex gap-1 justify-center mb-4 text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                      </div>
                      
                      <p className="text-base md:text-lg font-bengali text-zinc-700 dark:text-zinc-300 leading-relaxed italic overflow-y-auto max-h-32">
                        "{testimonials[index].text}"
                      </p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2 mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 w-full">
                    <img 
                      src={testimonials[index].avatar} 
                      alt={testimonials[index].name} 
                      className="w-14 h-14 rounded-full border-2 border-zinc-100 dark:border-zinc-800 shadow-sm object-cover" 
                    />
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white font-bengali mt-1">{testimonials[index].name}</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-bengali">{testimonials[index].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button onClick={next} className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-lg">
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
      </div>
    </section>
  );
}
