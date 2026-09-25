"use client";

import { useLanguage } from "./language-provider";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Send,
  MessageCircle,
  Phone,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();
  const email = process.env.NEXT_PUBLIC_EMAIL || "htetmyataung232002@gmail.com";

  const links = [
    { name: t("nav.home"), href: "/#home" },
    { name: t("nav.projects"), href: "/#projects" },
    { name: t("nav.about"), href: "/#about" },
    { name: t("nav.process"), href: "/#process" },
  ];

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      href: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/ko-htet-myat",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/htet-myat-aung-hma",
    },
    {
      name: "Telegram",
      icon: Send,
      href: process.env.NEXT_PUBLIC_TELEGRAM_URL || "",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: process.env.NEXT_PUBLIC_WHATSAPP_URL || "",
    },
    {
      name: "Call",
      icon: Phone,
      href: `tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER || "+959770106619"}`,
    },
    {
      name: "Email",
      icon: Mail,
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || "htetmyataung232002@gmail.com"}`,
    },
  ];

  return (
    <footer
      id="contact"
      className="bg-zinc-950 text-zinc-400 py-16 md:py-20 px-6 border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-8 mb-12 md:mb-14">
          <div className="col-span-2">
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-50 tracking-tighter mb-6 uppercase">
              Let&apos;s build something <br />
              <span className="text-violet-300">
                extraordinary
              </span>
            </h3>
            <p className="max-w-sm text-sm leading-relaxed mb-8">
              I&apos;m always open to discussing product design work or
              partnership opportunities.
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-zinc-50 font-medium hover:text-violet-300 transition-colors group"
            >
              {email}
              <HugeiconsIcon
                icon={ArrowUpRight}
                className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          <div>
            <h4 className="text-zinc-50 font-semibold mb-6 uppercase tracking-wider text-sm">
              Navigation
            </h4>
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-zinc-50 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-50 font-semibold mb-6 uppercase tracking-wider text-sm">
              Socials
            </h4>
            <ul className="flex flex-col gap-4">
              {socials.filter((social) => social.href && !social.href.includes("yourusername") && !social.href.includes("yourphonenumber")).map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    className="flex items-center gap-2 hover:text-zinc-50 transition-colors text-sm group"
                  >
                    <HugeiconsIcon
                      icon={social.icon}
                      className="w-4 h-4 transition-transform group-hover:scale-110"
                    />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800/50 text-xs">
          <p>&copy; {currentYear} Htet Myat Aung. All rights reserved.</p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            <span>{t("footer.made")}</span>
            <span className="text-zinc-50 font-medium">{t("footer.by")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
