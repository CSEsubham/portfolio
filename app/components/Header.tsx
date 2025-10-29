"use client";
import { BiHomeAlt, BiUser, BiFile, BiMailSend, BiCodeAlt } from "react-icons/bi";
import { motion } from "framer-motion";

export default function FloatingNav() {
  const items = [
    { icon: <BiHomeAlt size={22} />, label: "Home", link: "#home" },
    { icon: <BiUser size={22} />, label: "About", link: "#about" },
    { icon: <BiFile size={22} />, label: "Resume", link: "#resume" },
    { icon: <BiMailSend size={22} />, label: "Contact", link: "#contact" },
    { icon: <BiCodeAlt size={22} />, label: "Projects", link: "#projects" },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-50">
      {items.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          whileHover={{ scale: 1.12 }}
          className="group relative flex items-center cursor-pointer"
          aria-label={item.label}
        >
          {/* Tooltip Label */}
          <span className="absolute right-14 bg-gray-900 text-white text-sm font-medium px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap shadow-md">
            {item.label}
          </span>

          {/* Icon Circle */}
          <div className="p-3 rounded-full bg-gray-700 text-white hover:bg-yellow-500 active:bg-yellow-600 transition-all duration-300 shadow-lg border border-yellow-300 backdrop-blur-sm">
            {item.icon}
          </div>
        </motion.a>
      ))}
    </div>
  );
}
