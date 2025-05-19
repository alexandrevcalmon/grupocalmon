import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Clients from './pages/Clients';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AIBusinessService from './pages/services/AIBusinessService';
import EmotionalIntelligenceService from './pages/services/EmotionalIntelligenceService';
import AIHealthService from './pages/services/AIHealthService';
import AIGenerate360 from './pages/services/AIGenerate360'; // Importação correta
import AIBusinessLecture from './pages/services/AIBusinessLecture';
import MarketingAI from './pages/blog/MarketingAI';
import BusinessAI from './pages/blog/BusinessAI';
import FutureWork from './pages/blog/FutureWork';

// Team Member Pages
import AlexandreCalmon from './pages/team/AlexandreCalmon';
import DanielaMagno from './pages/team/DanielaMagno';
import CarloRachid from './pages/team/CarloRachid';
import FernandoMenezes from './pages/team/FernandoMenezes';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Service Detail Pages */}
        <Route path="/services/ai-business" element={<AIBusinessService />} />
        <Route path="/services/emotional-intelligence" element={<EmotionalIntelligenceService />} />
        <Route path="/services/ai-health" element={<AIHealthService />} />
        <Route path="/services/ai-business-lecture" element={<AIBusinessLecture />} />
        <Route path="/services/ai-generate-360" element={<AIGenerate360 />} /> {/* Rota correta */}

        {/* Blog Detail Pages */}
        <Route path="/blog/marketing-ai" element={<MarketingAI />} />
        <Route path="/blog/business-ai" element={<BusinessAI />} />
        <Route path="/blog/future-work" element={<FutureWork />} />

        {/* Team Member Pages */}
        <Route path="/team/alexandre-calmon" element={<AlexandreCalmon />} />
        <Route path="/team/daniela-magno" element={<DanielaMagno />} />
        <Route path="/team/carlo-rachid" element={<CarloRachid />} />
        <Route path="/team/fernando-menezes" element={<FernandoMenezes />} />
      </Routes>
    </Layout>
  );
}

export default App;