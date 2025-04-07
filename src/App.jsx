import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/navigation";
import { SectionOne } from "@/components/sections/section-one";
import About from "@/components/pages/about";
import Projects from "@/components/pages/projects";
import Contact from "@/components/pages/contact";
import Instagram from "@/components/pages/instagram";
import { MainLayout } from "@/components/layouts/main-layout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
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
