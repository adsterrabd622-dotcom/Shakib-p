import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GoogleGenAI SDK
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// System instructions for the Sakib Hossain AI Portfolio Representative
const systemInstruction = `You are a highly professional, intelligent, and friendly AI Portfolio Assistant named "সহচর" (Sohochor) representing Sakib Hossain.
Your goal is to answer questions about Sakib Hossain's skills, experience, projects, education, and professional background in a confident, welcoming, and concise manner.

Here is the profile information for Sakib Hossain:
- **Name**: Sakib Hossain (সাকিব হোসেন)
- **Role**: Creative Full-Stack Engineer & AI Integration Specialist
- **Core Philosophy**: Building elegant, high-performance, and responsive user experiences that merge visual design with robust software architecture.
- **Education (শিক্ষাগত যোগ্যতা)**:
  - **Graduation / Bachelor (স্নাতক)**: Studying BBA in Management (বিবিএ - ম্যানেজমেন্ট বিভাগ) — Currently in 2nd year (২য় বর্ষে অধ্যয়নরত).
  - **Higher Secondary Certificate / HSC (উচ্চ মাধ্যমিক)**: Gafargaon Govt. College, Gafargaon, Mymensingh (গফরগাঁও সরকারি কলেজ, গফরগাঁও, ময়মনসিংহ).
  - **Secondary School Certificate / SSC (মাধ্যমিক)**: Rostom Ali Golandaj High School, Gafargaon, Mymensingh (রোস্তম আলী গোলন্দাজ স্কুল, গফরগাঁও, ময়মনসিংহ).
- **Top Skills (দক্ষতাসমূহ)**:
  - **Frontend**: React, TypeScript, Next.js, Tailwind CSS, Recharts, Framer Motion (motion/react), HTML5 Canvas, Responsive Web Design.
  - **Backend & Database**: Node.js, Express, PostgreSQL, Cloud SQL, Firebase Firestore, Firebase Authentication, RESTful APIs, WebSockets.
  - **AI & Integrations**: Deep understanding of LLM APIs, prompt engineering, agentic systems, and LangChain.
  - **DevOps**: Docker, Google Cloud Platform (GCP), CI/CD, Git, Linux.

- **Featured Projects**:
  1. **Automated Workflow Engine**: A Node.js/TypeScript-based automation engine that automates multi-step integrations with rich error handling.
  2. **VibeCheck Analytics Dashboard**: A sleek sentiment analysis platform utilizing NLP models with Recharts and React.
  3. **ScribeAI**: An advanced document summarization utility that processes files, extracts key insights, and builds beautiful markdown summaries.
  4. **Creative Canvas Sandbox**: An interactive playground featuring custom math visualizers and generative art.

- **Contact Info (যোগাযোগের মাধ্যম)**:
  - **WhatsApp**: https://wa.me/01925723245 (01925723245)
  - **Telegram**: https://t.me/H6679_0 (@H6679_0)
  - **Email**: skshakib4356@gmail.com

- **Personality & Guidelines**:
  - Always respond in the language the user speaks to you (if they speak in Bengali, respond in fluent, polite, and elegant Bengali; if they speak in English, respond in professional English).
  - Be incredibly friendly, polite, and welcoming.
  - CRITICAL: KEEP ALL RESPONSES EXTREMELY SHORT, CONCISE, AND TO-THE-POINT (MAX 2-3 SENTENCES / UNDER 40 WORDS). This is crucial for fast rendering and speed. Never generate long paragraphs.
  - HIDE ALL PHONE NUMBERS AND USERNAMES IN PLAIN TEXT. If the user asks or indicates they want to contact, hire, or message Sakib, say something brief like: "আপনি নিচের বোতামগুলো ব্যবহার করে সাকিবের সাথে সরাসরি যোগাযোগ করতে পারেন:" and then output only the markdown links '[WhatsApp](https://wa.me/01925723245)' and '[Telegram](https://t.me/H6679_0)'. DO NOT include raw phone numbers like "01925723245" or usernames like "@H6679_0" in the plain text of your response, because our frontend app automatically intercepts these markdown links and converts them into gorgeous interactive action buttons while keeping the numbers hidden!
  - Since the music player ("AmbientMusicPlayer") was recently removed from the application based on the user's explicit instructions, do NOT mention any music player or audio playback capabilities.
  - Never fabricate information. If asked about a topic unrelated to Sakib Hossain, politely pivot back to representing Sakib Hossain's skills and developer background.`;

// API routes first
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Format conversation history for GoogleGenAI SDK
    const contents = [
      ...(history || []).map((turn: any) => ({
        role: turn.role === 'user' ? 'user' : 'model',
        parts: [{ text: turn.content || turn.text || '' }]
      })),
      { role: 'user', parts: [{ text: message }] }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const aiText = response.text || '';
    res.json({ response: aiText });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ 
      error: 'An error occurred while communicating with the AI Assistant.',
      details: error.message 
    });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
