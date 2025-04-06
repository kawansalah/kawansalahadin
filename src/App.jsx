import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { SectionOne } from "@/components/sections/section-one";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { MobileNavigation } from "@/components/mobile-navigation";
import { HomeIcon, UserIcon, MailIcon, CodeIcon } from "lucide-react";
import logo from "@/assets/logo.png";
import About from "@/components/pages/about";
import Projects from "@/components/pages/projects";
import Contact from "@/components/pages/contact";
const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <MobileNavigation
        logo={
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="uppercase text-sm font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              {" "}
              Kawan <br /> Salahadin
            </span>
          </Link>
        }
        getInTouch={{
          text: "Get in Touch",
          onClick: () => {
            navigate("/contact");
          },
        }}
      />
      <NavBar
        items={[
          { name: "Home", url: "/", icon: HomeIcon },
          { name: "About", url: "/about", icon: UserIcon },
          { name: "Projects", url: "/projects", icon: CodeIcon },
          { name: "Contact", url: "/contact", icon: MailIcon },
        ]}
        className="dark"
        logo={
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-14 h-14" />
            <span className="uppercase text-md font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              {" "}
              Kawan <br /> Salahadin
            </span>
          </Link>
        }
        getInTouch={{
          text: "Get in Touch",
          onClick: () => {
            navigate("/contact");
          },
        }}
      />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<SectionOne />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
