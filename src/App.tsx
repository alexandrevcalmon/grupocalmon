import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Page Components using React.lazy
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Team = lazy(() => import('./pages/Team'));
const Clients = lazy(() => import('./pages/Clients'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

// Service Detail Pages using React.lazy
const AIBusinessService = lazy(() => import('./pages/services/AIBusinessService'));
const EmotionalIntelligenceService = lazy(() => import('./pages/services/EmotionalIntelligenceService'));
const AIHealthService = lazy(() => import('./pages/services/AIHealthService'));
const AIGenerate360 = lazy(() => import('./pages/services/AIGenerate360'));
const AIBusinessLecture = lazy(() => import('./pages/services/AIBusinessLecture'));

// Blog Detail Pages using React.lazy
const MarketingAI = lazy(() => import('./pages/blog/MarketingAI'));
const BusinessAI = lazy(() => import('./pages/blog/BusinessAI'));
const FutureWork = lazy(() => import('./pages/blog/FutureWork'));

// Team Member Pages using React.lazy
const AlexandreCalmon = lazy(() => import('./pages/team/AlexandreCalmon'));
const DanielaMagno = lazy(() => import('./pages/team/DanielaMagno'));
const CarloRachid = lazy(() => import('./pages/team/CarloRachid'));
const FernandoMenezes = lazy(() => import('./pages/team/FernandoMenezes'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Carregando página...</div>}>
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
          <Route path="/services/ai-generate-360" element={<AIGenerate360 />} />

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
      </Suspense>
    </Layout>
  );
}

export default App;