import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/navigation";
import { SectionOne } from "@/components/sections/section-one";
import About from "@/components/pages/about";
import Projects from "@/components/pages/projects";
import Contact from "@/components/pages/contact";
import Instagram from "@/components/pages/instagram";
import { MainLayout } from "@/components/layouts/main-layout";
import { Toaster } from "react-hot-toast";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { useState, useEffect } from "react";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <MainLayout>
        {isLoading && <LoadingScreen />}
        <ScrollToTop />
        <Toaster 
          position="top-center"
          toastOptions={{
            className: '',
            style: {
              background: 'rgba(10, 10, 10, 0.9)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              padding: '16px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            },
            success: {
              iconTheme: {
                primary: '#3b82f6',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
        <div className="sm:h-20 xs:h-20" />
        <Navigation />
        <Routes>
          <Route path="/" element={<SectionOne />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/instagram" element={<Instagram />} />
        </Routes>
        <div className="sm:h-40 xs:h-40" />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
