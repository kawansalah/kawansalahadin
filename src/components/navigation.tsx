import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { MobileNavigation } from "@/components/mobile-navigation";
import { HomeIcon, UserIcon, MailIcon, CodeIcon, InstagramIcon } from "lucide-react";
import logo from "@/assets/logo.png";

export function Navigation() {
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
          { name: "Instagram", url: "/instagram", icon: InstagramIcon },
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
} 