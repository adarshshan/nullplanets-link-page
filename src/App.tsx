import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import "./App.css";
import LinkCard from "./components/LinkCard";
import { Globe } from "lucide-react";
import logoWhite from "../public/logowhitetheme.png";

const links = [
  {
    href: "https://nullplanets.com",
    icon: Globe,
    platform: "Website",
    label: "Visit our official website",
    iconColor: "#4F46E5", // Indigo-600
  },
  {
    href: "https://www.instagram.com/nullplanets",
    icon: FaInstagram,
    platform: "Instagram",
    label: "Follow us for daily updates",
    iconColor: "#E1306C", // Instagram Pink
  },
  {
    href: "https://wa.me/7356683993?text=Hello NullPlanents! I'm interested in your services.",
    icon: FaWhatsapp,
    platform: "WhatsApp",
    label: "Chat with us directly",
    iconColor: "#25D366", // WhatsApp Green
  },
  {
    href: "https://www.linkedin.com/company/nullplanets-technologies",
    icon: FaLinkedinIn,
    platform: "LinkedIn",
    label: "Professional network & careers",
    iconColor: "#0077B5", // LinkedIn Blue
  },
  {
    href: "https://www.facebook.com/profile.php?id=61590354202604",
    icon: FaFacebook,
    platform: "Facebook",
    label: "Connect with our community",
    iconColor: "#1877F2", // Facebook Blue
  },
];
function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 sm:p-12">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md flex flex-col items-center">
        {/* Company Logo Placeholder */}
        <img
          src={logoWhite}
          className="size-28 bg-transparent rounded-xl"
          alt="//Company Logo"
        />

        {/* Header content */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-nowrap text-gradient">
            Null<span className="">Planets</span> Technologies
          </h1>
          <p className="text-gray-600 font-medium">
            Connect with us everywhere
          </p>
        </div>

        {/* Links Grid */}
        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <div
              key={link.platform}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <LinkCard {...link} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NullPlanets Technologies. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
