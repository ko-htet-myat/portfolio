"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "my";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.process": "Process",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.badge": "Available for work",
    "hero.greeting": "Htet Myat Aung",
    "hero.role": "Frontend Developer",
    "hero.display_primary": "Frontend",
    "hero.display_secondary": "Developer",
    "hero.description":
      "I design and build clear, fast interfaces for complex web products.",
    "about.title": "ABOUT ME",
    "about.desc":
      "I am a passionate developer with experience in building web applications. I love learning new technologies and solving complex problems. My focus is on creating intuitive and performant user experiences.",
    "about.download_cv": "Download CV",
    "about.badge": "ABOUT ME // 01",
    "about.heading_prefix": "ABOUT ME",
    "about.heading_highlight": "precision & soul.",
    "about.tab_story": "Story",
    "about.tab_philosophy": "Tech Philosophy",
    "about.tab_highlights": "Highlights",
    "about.status_available": "Available for Work",
    "about.location": "Yangon, Myanmar",
    "about.copy_email": "Copy Email",
    "about.email_copied": "Copied to clipboard!",
    "about.contact_me": "Let's Talk",
    "about.story_lead":
      "I am a Frontend Developer obsessed with transforming complex requirements into smooth, intuitive, and high-performance digital products.",
    "about.story_body":
      "Over the past 4+ years, I have architected and shipped enterprise-grade interfaces, dynamic dashboards, and bespoke platforms. I bridge the gap between Figma design intuition and production-ready engineering, using modern React/Next.js architectures and agentic AI development pipelines to deliver quality at speed.",
    "about.card1_title": "Fluid UI & Motion",
    "about.card1_desc":
      "Creating 60fps micro-interactions, responsive systems, and engaging visual feedback.",
    "about.card2_title": "Performance First",
    "about.card2_desc":
      "Optimized Core Web Vitals, SSR, streaming, and efficient client state management.",
    "about.card3_title": "Agentic AI Coding",
    "about.card3_desc":
      "Harnessing cutting-edge AI agent workflows to build, refactor, and test rapidly.",
    "about.highlight1_val": "4+ Years",
    "about.highlight1_label": "Frontend Craftsmanship",
    "about.highlight2_val": "16+ Apps",
    "about.highlight2_label": "Shipped to Production",
    "about.highlight3_val": "100%",
    "about.highlight3_label": "Code Reliability & Detail",
    "about.highlight4_val": "Global",
    "about.highlight4_label": "Remote & On-Site Ready",
    "experience.title": "MY WORK EXPERIENCE",
    "experience.1.num": "4",
    "experience.1.label1": "+",
    "experience.1.label2": "YEARS\nOF EXPERIENCE",
    "experience.2.num": "12",
    "experience.2.label1": "+",
    "experience.2.label2": "PROJECTS\nDONE",
    "experience.3.num": "5",
    "experience.3.label1": "+",
    "experience.3.label2": "AWARDS\nWON",
    "experience.4.num": "4.8",
    "experience.4.label1": "+",
    "experience.4.label2": "OVERALL\nRATING",
    "process.title": "MY WORKING PROCESS",
    "sdlc.diagramLabel": "Interactive software development life cycle",
    "sdlc.panelLabel": "Project workflow",
    "sdlc.inProgress": "In motion",
    "sdlc.currentStage": "Current stage",
    "sdlc.output": "Key output",
    "sdlc.cycle": "Development cycle",
    "sdlc.hint": "Choose any card to explore a stage of the workflow",
    "sdlc.discover.title": "Discover",
    "sdlc.discover.short": "Listen & research",
    "sdlc.discover.detail": "I learn the audience, business goals, constraints, and the problem worth solving.",
    "sdlc.discover.output": "Clear problem definition",
    "sdlc.plan.title": "Plan",
    "sdlc.plan.short": "Scope & priorities",
    "sdlc.plan.detail": "I turn the research into a practical scope, milestones, and a technical direction.",
    "sdlc.plan.output": "Roadmap and requirements",
    "sdlc.design.title": "Design",
    "sdlc.design.short": "Flows & interfaces",
    "sdlc.design.detail": "I shape user flows and responsive interfaces before the build begins.",
    "sdlc.design.output": "Validated UI direction",
    "sdlc.build.title": "Build",
    "sdlc.build.short": "Code & integrate",
    "sdlc.build.detail": "I build the interface, connect the services, and keep the code maintainable.",
    "sdlc.build.output": "Working product increment",
    "sdlc.test.title": "Test",
    "sdlc.test.short": "Check & refine",
    "sdlc.test.detail": "I check behavior, accessibility, responsiveness, and performance across devices.",
    "sdlc.test.output": "Release-ready experience",
    "sdlc.launch.title": "Launch & iterate",
    "sdlc.launch.short": "Ship & learn",
    "sdlc.launch.detail": "I release, observe real use, and feed what we learn into the next improvement.",
    "sdlc.launch.output": "Live product and next steps",
    "process.1.num": "01.",
    "process.1.title": "Research",
    "process.1.desc":
      "I start by learning and researching based on client brief and resource to gain about the needs, goals, products, and requirements to do well.",
    "process.2.num": "02.",
    "process.2.title": "Strategy",
    "process.2.desc":
      "Then start to plan and structure the project process and budget based on the discovery phase before start the development.",
    "process.3.num": "03.",
    "process.3.title": "Development",
    "process.3.desc":
      "After I completed all the processes, goals, and scope, I started to do the development process such as architecting scalable frontend structures and integrating robust backend services.",
    "projects.title": "Selected Work",
    "projects.desc":
      "Selected interfaces across commerce, insurance, healthcare, and banking.",
    "footer.made": "Made with ❤️",
    "footer.by": "by me",
    "project.1.title": "E-Commerce Platform",
    "project.1.desc":
      "An e-commerce platform built with React and an Odoo backend.",
    "project.2.title": "Core Insurance System",
    "project.2.desc": "A comprehensive system for insurance management.",
    "project.3.title": "Clinic CMS Website",
    "project.3.desc": "A content management system for a medical clinic.",
    "project.4.title": "Banking Website",
    "project.4.desc": "A customizable banking website.",
    "cta.title1": "HAVE A PROJECT?",
    "cta.title2": "LET'S TALK",
    "cta.desc":
      "WHETHER YOU NEED INTUITIVE UI/UX DESIGN, ROBUST DEVELOPMENT, OR A SEAMLESS BLEND OF BOTH, I'M HERE TO HELP",
    "cta.button": "HIRE ME",
    "services.title": "SERVICES I AM PROVIDING",
    "services.desc":
      "Providing end-to-end web development and interface design. Committed to delivering pixel-perfect, high-performance applications tailored to your business goals.",
    "services.button": "GET IN TOUCH",
    "services.1.title": "Responsive Design",
    "services.1.desc":
      "Flawless layouts that automatically adapt to any screen size—from mobile phones to desktop monitors—ensuring an optimal user experience everywhere.",
    "services.2.title": "Clean Code",
    "services.2.desc":
      "Well-structured, optimized, and maintainable code built for fast load speeds, security, and effortless future upgrades.",
    "services.3.title": "SEO Optimization",
    "services.3.desc":
      "Implementing best practices for search engine optimization, ensuring your website ranks higher in search results and attracts more organic traffic.",
    "services.4.title": "Maintenance",
    "services.4.desc":
      "Reliable ongoing support, security monitoring, and updates to keep your website fast, safe, and running smoothly long after launch.",
    "services.5.title": "Agentic Coding",
    "services.5.desc":
      "Next-generation software development leveraging autonomous AI agents to generate, refactor, test, and debug code—dramatically accelerating build times while maintaining high code quality.",
    "skills.title": "My Skills",
    "skills.desc": "Here are some of the technologies I work with.",
  },
  my: {
    "nav.home": "ပင်မစာမျက်နှာ",
    "nav.about": "ကျွန်ုပ်အကြောင်း",
    "nav.process": "လုပ်ငန်းစဉ်",
    "nav.projects": "ပရောဂျက်များ",
    "nav.contact": "ဆက်သွယ်ရန်",
    "hero.badge": "အလုပ်လက်ခံရန် အသင့်ရှိသည်",
    "hero.greeting": "Htet Myat Aung",
    "hero.role": "Frontend developer နှင့် interface designer",
    "hero.display_primary": "Frontend",
    "hero.display_secondary": "& UI Designer",
    "hero.description":
      "ခေတ်မီ၊ အသုံးပြုရလွယ်ကူပြီး အတိုင်းအတာကျယ်ပြန့်သော အက်ပ်များကို တည်ဆောက်ပါသည်။ သန့်ရှင်းသော ကုဒ်နှင့် ကောင်းမွန်သော ဒီဇိုင်းကို ဝါသနာပါပါသည်။",
    "about.title": "ကျွန်ုပ်အကြောင်း",
    "about.desc":
      "ကျွန်ုပ်သည် ဝဘ်အက်ပ်လီကေးရှင်းများ တည်ဆောက်ရာတွင် အတွေ့အကြုံရှိသော စိတ်အားထက်သန်သည့် developer တစ်ဦးဖြစ်ပါသည်။ နည်းပညာအသစ်များကို လေ့လာခြင်းနှင့် ရှုပ်ထွေးသော ပြဿနာများကို ဖြေရှင်းခြင်းကို နှစ်သက်ပါသည်။ ကျွန်ုပ်၏ အဓိကရည်ရွယ်ချက်မှာ အသုံးပြုရလွယ်ကူပြီး စွမ်းဆောင်ရည်မြင့်မားသော အသုံးပြုသူအတွေ့အကြုံများကို ဖန်တီးရန်ဖြစ်သည်။",
    "about.download_cv": "CV ဒေါင်းလုဒ်လုပ်ရန်",
    "about.badge": "ကျွန်ုပ်အကြောင်း // ၀၁",
    "about.heading_prefix": "ဒီဇိုင်းတိကျမှုနှင့် စိတ်ကူးဉာဏ်ဖြင့်",
    "about.heading_highlight": "ခေတ်မီဆန်းသစ်သော အတွေ့အကြုံများ ဖန်တီးခြင်း။",
    "about.tab_story": "ကျွန်ုပ်၏ ခရီးစဉ်",
    "about.tab_philosophy": "ကုဒ်ရေးသားမှု ခံယူချက်",
    "about.tab_highlights": "အဓိက အားသာချက်များ",
    "about.status_available": "အလုပ်လက်ခံရန် အသင့်ရှိသည်",
    "about.location": "ရန်ကုန်၊ မြန်မာ",
    "about.copy_email": "အီးမေးလ် ကူးယူရန်",
    "about.email_copied": "ကူးယူပြီးပါပြီ!",
    "about.contact_me": "စကားပြောကြစို့",
    "about.story_lead":
      "ကျွန်ုပ်သည် ရှုပ်ထွေးသော လိုအပ်ချက်များကို ချောမွေ့၊ အသုံးပြုရလွယ်ကူပြီး စွမ်းဆောင်ရည်မြင့်မားသော ဒစ်ဂျစ်တယ်ထုတ်ကုန်များအဖြစ် ဖန်တီးပေးနေသော Frontend Developer တစ်ဦးဖြစ်ပါသည်။",
    "about.story_body":
      "လွန်ခဲ့သော ၄ နှစ်ကျော်အတွင်း လုပ်ငန်းသုံး ဝဘ်အင်တာဖေ့စ်များ၊ dynamic dashboards များနှင့် အဆင့်မြင့်ပလက်ဖောင်းများကို အောင်မြင်စွာ တည်ဆောက်ပေးခဲ့ပါသည်။ Figma ဒီဇိုင်းမှသည် လက်တွေ့အသုံးချနိုင်သော Next.js နှင့် Agentic AI နည်းပညာများဖြင့် အရည်အသွေးမြင့်မားစွာ အချိန်တိုအတွင်း ပေးပို့နိုင်ပါသည်။",
    "about.card1_title": "ချောမွေ့သော UI & Motion",
    "about.card1_desc":
      "အသုံးပြုသူ စိတ်ကျေနပ်မှုရှိစေမည့် 60fps micro-interactions နှင့် ခေတ်မီ responsive စနစ်များ။",
    "about.card2_title": "စွမ်းဆောင်ရည် ဦးစားပေး",
    "about.card2_desc":
      "အလွန်မြန်ဆန်သော ဖွင့်ချိန်၊ SSR နှင့် စနစ်ကျသော state စီမံခန့်ခွဲမှု။",
    "about.card3_title": "AI စွမ်းအင်သုံး တည်ဆောက်မှု",
    "about.card3_desc":
      "ခေတ်မီ AI Agent စနစ်များဖြင့် အရည်အသွေးမြင့် ကုဒ်များကို ပိုမိုမြန်ဆန်စွာ တည်ဆောက်ခြင်း။",
    "about.highlight1_val": "၄+ နှစ်",
    "about.highlight1_label": "Frontend အတွေ့အကြုံ",
    "about.highlight2_val": "၁၆+ ပရောဂျက်",
    "about.highlight2_label": "အောင်မြင်စွာ ပြီးစီးမှု",
    "about.highlight3_val": "၁၀၀%",
    "about.highlight3_label": "အရည်အသွေးနှင့် တိကျမှု",
    "about.highlight4_val": "ကမ္ဘာအနှံ့",
    "about.highlight4_label": "အဝေးမှ အလုပ်လုပ်နိုင်မှု",
    "experience.title": "ကျွန်ုပ်၏ လုပ်ငန်းအတွေ့အကြုံ",
    "experience.1.num": "၀၄",
    "experience.1.label1": "+",
    "experience.1.label2": "နှစ်\nအတွေ့အကြုံ",
    "experience.2.num": "၁၆",
    "experience.2.label1": "+",
    "experience.2.label2": "ပရောဂျက်\nပြီးစီးမှု",
    "experience.3.num": "၉",
    "experience.3.label1": "+",
    "experience.3.label2": "ဆု\nရရှိမှု",
    "experience.4.num": "၄.၈",
    "experience.4.label1": "+",
    "experience.4.label2": "အလုံးစုံ\nအဆင့်သတ်မှတ်ချက်",
    "process.title": "ကျွန်ုပ်၏ လုပ်ငန်းစဉ်",
    "sdlc.diagramLabel": "အပြန်အလှန် ကြည့်ရှုနိုင်သော ဆော့ဖ်ဝဲဖွံ့ဖြိုးရေး လုပ်ငန်းစဉ်",
    "sdlc.panelLabel": "ပရောဂျက် လုပ်ငန်းစဉ်",
    "sdlc.inProgress": "ဆက်လက်လုပ်ဆောင်နေသည်",
    "sdlc.currentStage": "လက်ရှိအဆင့်",
    "sdlc.output": "အဓိက ရလဒ်",
    "sdlc.cycle": "ဖွံ့ဖြိုးရေး စက်ဝန်း",
    "sdlc.hint": "အဆင့်တစ်ခုချင်းစီကို ကြည့်ရန် ကတ်ကို ရွေးပါ",
    "sdlc.discover.title": "လေ့လာခြင်း",
    "sdlc.discover.short": "နားထောင်၊ သုတေသနပြု",
    "sdlc.discover.detail": "အသုံးပြုသူများ၊ လုပ်ငန်းရည်မှန်းချက်များနှင့် ဖြေရှင်းရမည့် ပြဿနာကို နားလည်အောင် လေ့လာပါသည်။",
    "sdlc.discover.output": "ရှင်းလင်းသော ပြဿနာသတ်မှတ်ချက်",
    "sdlc.plan.title": "စီစဉ်ခြင်း",
    "sdlc.plan.short": "နယ်ပယ်နှင့် ဦးစားပေးများ",
    "sdlc.plan.detail": "သုတေသနရလဒ်ကို လက်တွေ့ကျသော လုပ်ငန်းနယ်ပယ်၊ အချိန်ဇယားနှင့် နည်းပညာလမ်းကြောင်းအဖြစ် ပြောင်းလဲပါသည်။",
    "sdlc.plan.output": "လမ်းပြမြေပုံနှင့် လိုအပ်ချက်များ",
    "sdlc.design.title": "ဒီဇိုင်း",
    "sdlc.design.short": "အသုံးပြုမှုပုံစံနှင့် UI",
    "sdlc.design.detail": "တည်ဆောက်မှုမစတင်မီ အသုံးပြုသူလမ်းကြောင်းနှင့် မျက်နှာပြင်အရွယ်အစားအလိုက် ကိုက်ညီသော UI ကို ဒီဇိုင်းဆွဲပါသည်။",
    "sdlc.design.output": "အတည်ပြုထားသော UI ဒီဇိုင်း",
    "sdlc.build.title": "တည်ဆောက်ခြင်း",
    "sdlc.build.short": "ကုဒ်ရေး၊ ချိတ်ဆက်",
    "sdlc.build.detail": "အသုံးပြုရလွယ်သော UI ကို တည်ဆောက်ပြီး ဝန်ဆောင်မှုများ ချိတ်ဆက်ကာ ကုဒ်ကို ထိန်းသိမ်းရလွယ်အောင် ရေးသားပါသည်။",
    "sdlc.build.output": "အလုပ်လုပ်သော ထုတ်ကုန်",
    "sdlc.test.title": "စမ်းသပ်ခြင်း",
    "sdlc.test.short": "စစ်ဆေး၊ ပြင်ဆင်",
    "sdlc.test.detail": "စက်အမျိုးမျိုးတွင် လုပ်ဆောင်ချက်၊ အသုံးပြုရလွယ်ကူမှု၊ responsive ပုံစံနှင့် မြန်နှုန်းကို စစ်ဆေးပါသည်။",
    "sdlc.test.output": "ထုတ်လွှင့်ရန် အသင့်ဖြစ်သော အတွေ့အကြုံ",
    "sdlc.launch.title": "ထုတ်လွှင့်ပြီး တိုးတက်စေခြင်း",
    "sdlc.launch.short": "ထုတ်လွှင့်၊ သင်ယူ",
    "sdlc.launch.detail": "ထုတ်ကုန်ကို ထုတ်လွှင့်ပြီး လက်တွေ့အသုံးပြုမှုမှ သင်ယူကာ နောက်ထပ်တိုးတက်မှုများ ပြုလုပ်ပါသည်။",
    "sdlc.launch.output": "အသုံးပြုနိုင်သော ထုတ်ကုန်နှင့် နောက်ခြေလှမ်းများ",
    "process.1.num": "၀၁.",
    "process.1.title": "သုတေသန",
    "process.1.desc":
      "လိုအပ်ချက်များ၊ ရည်မှန်းချက်များ၊ ထုတ်ကုန်များနှင့် ကောင်းမွန်စွာလုပ်ဆောင်ရန် လိုအပ်ချက်များကို သိရှိရန် ဖောက်သည်၏ အကျဉ်းချုပ်နှင့် အရင်းအမြစ်များအပေါ် အခြေခံ၍ လေ့လာခြင်းနှင့် သုတေသနပြုခြင်းဖြင့် စတင်ပါသည်။",
    "process.2.num": "၀၂.",
    "process.2.title": "မဟာဗျူဟာ",
    "process.2.desc":
      "ထို့နောက် ဖွံ့ဖြိုးတိုးတက်မှုမစတင်မီ ရှာဖွေတွေ့ရှိမှုအဆင့်အပေါ် အခြေခံ၍ ပရောဂျက်လုပ်ငန်းစဉ်နှင့် ဘတ်ဂျက်ကို စီစဉ်တည်ဆောက်ရန် စတင်ပါသည်။",
    "process.3.num": "၀၃.",
    "process.3.title": "ဖွံ့ဖြိုးတိုးတက်မှု",
    "process.3.desc":
      "လုပ်ငန်းစဉ်များ၊ ရည်မှန်းချက်များနှင့် နယ်ပယ်အားလုံးကို ပြီးစီးပြီးနောက်၊ အခြေခံကုဒ်များဖန်တီးခြင်းနှင့် ပရိုဂရမ်ရေးဆွဲခြင်းကဲ့သို့သော ဖွံ့ဖြိုးတိုးတက်မှုလုပ်ငန်းစဉ်ကို စတင်လုပ်ဆောင်ခဲ့သည်။",
    "projects.title": "ရွေးချယ်ထားသော အလုပ်များ",
    "projects.desc": "ကျွန်တော့်ရဲ့ လတ်တလော ပရောဂျက်များ စုစည်းမှု။",
    "footer.made": "ဖြင့်ပြုလုပ်သည် ❤️",
    "footer.by": "ကျွန်တော်",
    "project.1.title": "E-Commerce ပလက်ဖောင်း",
    "project.1.desc":
      "React နှင့် Odoo backend ဖြင့် တည်ဆောက်ထားသော e-commerce ပလက်ဖောင်း။",
    "project.2.title": "အာမခံစနစ်",
    "project.2.desc": "အာမခံလုပ်ငန်း စီမံခန့်ခွဲမှုစနစ်။",
    "project.3.title": "ဆေးခန်း CMS ဝဘ်ဆိုက်",
    "project.3.desc": "ဆေးခန်းအတွက် content management system။",
    "project.4.title": "ဘဏ်ဝဘ်ဆိုက်",
    "project.4.desc": "စိတ်ကြိုက်ပြင်ဆင်နိုင်သော ဘဏ်ဝဘ်ဆိုက်။",
    "cta.title1": "ပရောဂျက် ရှိပါသလား?",
    "cta.title2": "ဆွေးနွေးကြစို့",
    "cta.desc":
      "အသုံးပြုရလွယ်ကူသော UI/UX ဒီဇိုင်း၊ ခိုင်မာသော ဖွံ့ဖြိုးတိုးတက်မှု သို့မဟုတ် နှစ်ခုစလုံး၏ ချောမွေ့သော ပေါင်းစပ်မှု လိုအပ်သည်ဖြစ်စေ ကူညီရန် အသင့်ရှိပါသည်။",
    "cta.button": "ငှားရမ်းရန်",
    "services.title": "ကျွန်ုပ် ပေးဆောင်နေသော ဝန်ဆောင်မှုများ",
    "services.desc":
      "သင့်အတွက် လိုအပ်သော web ဝန်ဆောင်မှု အမျိုးအစားအားလုံးကို သင့်တင့်သော စျေးနှုန်းဖြင့် ပေးဆောင်နေပါသည်။ အကန့်အသတ်မရှိ ပြင်ဆင်မှုများဖြင့် အရည်အသွေးကို အာမခံပါသည်။ ထို့ကြောင့် အကောင်းဆုံး ဒီဇိုင်းကို ရရှိနိုင်ပါသည်။",
    "services.button": "ဆက်သွယ်ရန်",
    "services.1.title": "ဝဘ် ဒီဇိုင်း",
    "services.1.desc":
      "ဧည့်သည်များကို ဆွဲဆောင်နိုင်ပြီး ပြောင်းလဲမှုများကို ဖြစ်ပေါ်စေသော လှပပြီး တုံ့ပြန်မှုရှိသော ဝဘ်အင်တာဖေ့စ်များကို ဖန်တီးခြင်း။",
    "services.2.title": "အက်ပ် ဒီဇိုင်း",
    "services.2.desc":
      "အသုံးပြုသူအတွေ့အကြုံကို အဓိကထား၍ iOS နှင့် Android ပလက်ဖောင်းများအတွက် အလိုလိုသိမြင်နိုင်သော မိုဘိုင်းအက်ပ်လီကေးရှင်းများကို ဒီဇိုင်းဆွဲခြင်း။",
    "services.3.title": "ဒက်ရှ်ဘုတ် ဒီဇိုင်း",
    "services.3.desc":
      "နားလည်ရလွယ်ကူသော၊ သွားလာရလွယ်ကူသော ရှုပ်ထွေးသည့် ဒေတာပြသမှု ဒက်ရှ်ဘုတ်များကို တည်ဆောက်ခြင်း။",
    "services.4.title": "ဒီဇိုင်း မဟာဗျူဟာ",
    "services.4.desc":
      "ဒစ်ဂျစ်တယ် ထိတွေ့မှုအားလုံးတွင် အမှတ်တံဆိပ် ညီညွတ်မှုရှိစေရန် ပြီးပြည့်စုံသော ဒီဇိုင်းစနစ်များနှင့် မဟာဗျူဟာများကို ဖော်ဆောင်ခြင်း။",
    "services.5.title": "အက်ပ် ဖွံ့ဖြိုးတိုးတက်မှု",
    "services.5.desc":
      "အမြန်နှုန်းမြင့်မားပြီး အရည်အသွေးမြင့်မားသော အက်ပ်များကို ဖန်တီးရန် အဆင့်မြင့်နည်းပညာများနှင့် အကောင်းဆုံးလေ့ကျင့်မှုများကို အသုံးပြုခြင်း။",
    "skills.title": "ကျွန်ုပ်၏ ကျွမ်းကျင်မှုများ",
    "skills.desc": "ကျွန်ုပ်အသုံးပြုသော နည်းပညာအချို့ဖြစ်ပါသည်။",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "en" || saved === "my")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
