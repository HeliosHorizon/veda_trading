import React from "react";
import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@Horizon1145",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://github.com/HeliosHorizon",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/kshitiz-jain-8b3725248/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  
];

const SocialMedia = ({ className = "", iconClassName = "", tooltipClassName = "" }) => {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {socialLink.map((item) => (
        <a
          key={item.title}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 border rounded-full hover:text-white hover:border-white transition ${iconClassName}`}
          title={item.title} // Basic browser tooltip
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
