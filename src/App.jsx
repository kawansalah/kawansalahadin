import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/navigation";
import { SectionOne } from "@/components/sections/section-one";
import About from "@/components/pages/about";
import Projects from "@/components/pages/projects";
import Contact from "@/components/pages/contact";
import { MainLayout } from "@/components/layouts/main-layout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Navigation />
        <Routes>
          <Route path="/" element={<SectionOne />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
