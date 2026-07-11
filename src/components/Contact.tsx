import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMessage('অনুগ্রহ করে সবগুলো ঘর সঠিকভাবে পূরণ করুন।');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    try {
      let sentSuccessfully = false;

      // 1. Attempt server delivery first (if available)
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json().catch(() => ({}));
        if (response.ok && data.success) {
          sentSuccessfully = true;
        }
      } catch (localErr) {
        console.warn('Backend server not available, trying direct Telegram fallback...', localErr);
      }

      // 2. Fallback to direct client-side Telegram API if server is not available (e.g. static Vercel host)
      if (!sentSuccessfully) {
        const token = '8107974096:AAHSkNKdEtW_rLawGnAqkwriJHop8LUJP-g';
        const chatId = '7731349577';
        
        // Escape HTML special characters for safe Telegram parsing
        const escapedName = formData.name.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const escapedPhone = formData.phone.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const escapedMessage = formData.message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

        const text = `📩 <b>নতুন পোর্টফোলিও মেসেজ (Direct Client)</b>\n\n👤 <b>নাম:</b> ${escapedName}\n📞 <b>ফোন নম্বর:</b> ${escapedPhone}\n💬 <b>মেসেজ:</b> ${escapedMessage}`;

        const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
        const response = await fetch(telegramUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: 'HTML',
          }),
        });

        const data = await response.json().catch(() => ({}));
        if (response.ok && data.ok) {
          sentSuccessfully = true;
        } else {
          throw new Error(data.description || 'টেলিগ্রাম সার্ভারে সরাসরি মেসেজ পাঠানো ব্যর্থ হয়েছে।');
        }
      }

      if (sentSuccessfully) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        throw new Error('মেসেজ পাঠানো সম্ভব হয়নি। দয়া করে আবার চেষ্টা করুন।');
      }
    } catch (err: any) {
      console.error('Contact form error:', err);
      setErrorMessage(err.message || 'মেসেজ পাঠানো সম্ভব হয়নি। দয়া করে আবার চেষ্টা করুন।');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 px-4 bg-[#f4f7fb] dark:bg-[#050505] border-t border-zinc-200 dark:border-zinc-900 scroll-mt-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-[#0a46b5] dark:text-blue-500 uppercase tracking-widest mb-2 md:mb-3 font-bengali">যোগাযোগ করুন</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#022c4a] dark:text-white tracking-tight font-bengali mb-4 md:mb-6">আপনার প্রজেক্ট নিয়ে আলোচনা করুন</h3>
          <p className="text-zinc-700 dark:text-zinc-400 max-w-2xl mx-auto font-medium font-bengali text-sm md:text-lg leading-relaxed px-4">
            যেকোনো প্রশ্ন, পরামর্শ বা কাজের জন্য সরাসরি যোগাযোগ করতে পারেন। আমি যত দ্রুত সম্ভব উত্তর দেয়ার চেষ্টা করব।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Side Details card - Redesigned to show beautiful social media buttons directly inline */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm relative overflow-hidden"
          >
            <h4 className="text-xl md:text-2xl font-bold text-[#022c4a] dark:text-white mb-6 md:mb-8 font-bengali">সরাসরি যোগাযোগ মাধ্যম</h4>
            
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-bengali mb-6">
              নিচের যেকোনো একটি বাটন ক্লিক করে সরাসরি আমার সাথে যোগাযোগ করতে পারেন। কোনো ফোন নম্বর বা ইউজারনেম ছাড়াই সরাসরি চ্যাট শুরু হবে:
            </p>

            <div className="space-y-4">
              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/8801925723245" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/5 dark:bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-300 hover:-translate-y-1 group" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.459h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-bengali group-hover:text-[#25D366] transition-colors">WhatsApp-এ সরাসরি মেসেজ</h5>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-bengali">১ ক্লিকে চ্যাট শুরু করুন</p>
                </div>
              </a>

              {/* Telegram Button */}
              <a 
                href="https://t.me/H6679_0" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0088cc]/5 dark:bg-[#0088cc]/10 hover:bg-[#0088cc]/20 border border-[#0088cc]/20 hover:border-[#0088cc]/40 transition-all duration-300 hover:-translate-y-1 group" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0088cc] text-white flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.384-1.362 5.962-.169.668-.415.892-.653.914-.518.047-.91-.343-1.411-.671-.786-.514-1.229-.831-1.993-1.334-.883-.581-.31-1.002.193-1.523.131-.137 2.415-2.212 2.459-2.4.006-.024.011-.113-.041-.159-.053-.046-.13-.031-.186-.018-.08.018-1.353.858-3.821 2.522-.362.249-.69.371-.983.365-.323-.006-.944-.181-1.407-.331-.567-.184-1.018-.282-1.018-.282.029-.313.315-.615.856-.906 3.321-1.442 5.538-2.394 6.649-2.857 3.175-1.319 3.834-1.548 4.264-1.556.095-.002.306.021.444.133.116.095.148.225.156.318.008.093.018.3-.01.558z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-bengali group-hover:text-[#0088cc] transition-colors">Telegram-এ সরাসরি মেসেজ</h5>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-bengali">১ ক্লিকে চ্যাট শুরু করুন</p>
                </div>
              </a>

              {/* Email Button */}
              <a 
                href="mailto:skshakib4356@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800/20 dark:hover:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-950 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-bengali">সরাসরি ইমেইল পাঠান</h5>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-bengali">skshakib4356@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-white dark:bg-zinc-900/30 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-zinc-700 dark:text-zinc-300 font-bengali">আপনার নাম</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#f4f7fb] dark:bg-[#050505] border border-zinc-200 dark:border-zinc-800 rounded-xl px-5 py-3.5 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-[#0a46b5] focus:ring-1 focus:ring-[#0a46b5] dark:focus:border-blue-500 dark:focus:ring-blue-500 transition-all font-bengali focus:shadow-[0_0_15px_rgba(10,70,181,0.08)]"
                    placeholder="নাম লিখুন"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-zinc-700 dark:text-zinc-300 font-bengali">ফোন নম্বর</label>
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#f4f7fb] dark:bg-[#050505] border border-zinc-200 dark:border-zinc-800 rounded-xl px-5 py-3.5 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-[#0a46b5] focus:ring-1 focus:ring-[#0a46b5] dark:focus:border-blue-500 dark:focus:ring-blue-500 transition-all font-bengali focus:shadow-[0_0_15px_rgba(10,70,181,0.08)]"
                    placeholder="ফোন নম্বর লিখুন"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-zinc-700 dark:text-zinc-300 font-bengali">আপনার মেসেজ</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full bg-[#f4f7fb] dark:bg-[#050505] border border-zinc-200 dark:border-zinc-800 rounded-xl px-5 py-3.5 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-[#0a46b5] focus:ring-1 focus:ring-[#0a46b5] dark:focus:border-blue-500 dark:focus:ring-blue-500 transition-all resize-none font-bengali focus:shadow-[0_0_15px_rgba(10,70,181,0.08)]"
                  placeholder="কি বিষয়ে জানতে চান তা বিস্তারিত লিখুন..."
                />
              </div>

              {status === 'error' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-500 text-sm font-bengali">
                  <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              {status === 'success' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 text-sm font-bengali">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>আপনার মেসেজ সফলভাবে পাঠানো হয়েছে!</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 bg-[#0a46b5] hover:bg-[#08368b] text-white px-6 py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed text-lg font-bold font-bengali shadow-lg hover:shadow-blue-500/30 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">পাঠানো হচ্ছে... <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /></span>
                ) : (
                  <>মেসেজ পাঠান <Send className="w-5 h-5 ml-2" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
