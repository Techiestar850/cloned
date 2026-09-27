const DATA = {
  site: {
    name: "David Akimara",
    title: "David Akimara — Portfolio",
    monogram: "DA",
    location: "Nairobi, Kenya"
  },
  hero: {
    title: "Certified Freelancer",
    summary: "A multidisciplinary freelancer offering academic writing, copywriting, data entry, AI training and data annotation support."
  },
  about: [
    "I am David Akimara, a student and certified freelancer developing practical skills across writing, research, digital work and AI-related services.",
    "My portfolio brings together academic writing, copywriting, data entry, data annotation and other online freelance capabilities, with an emphasis on accuracy, clear communication and dependable delivery."
  ],
  skills: [
    "Academic Writing","Copywriting","Research","Data Entry","Data Annotation",
    "AI Training","Content Writing","Proofreading","Web Research","HTML & CSS"
  ],
  experience: [
    {title:"Freelance Writing & Digital Work", org:"Independent Freelancer", period:"Current", text:"Academic writing, content development, research, data-focused tasks and digital freelance projects."},
    {title:"AI / Data Training Practice", org:"Independent Projects", period:"Current", text:"Building practical experience with data annotation, labeling, transcription and AI-training workflows."}
  ],
  education: [
    {title:"Bachelor of Dental Surgery (BDS)", org:"Dental education", period:"Current — 3rd Year", text:"Undergraduate dental studies with continuing development in biomedical and clinical sciences."}
  ],
  projects: [
    {title:"Freelance Portfolio Website", text:"A responsive GitHub Pages portfolio for presenting freelance services, skills and work samples.", link:"https://techiestar850.github.io/tecky/"},
    {title:"Academic Writing Samples", text:"Structured academic assignments and research-based writing developed using formal academic conventions.", link:"#contact"},
    {title:"AI & Data Work Samples", text:"Practice projects covering data labeling, annotation, transcription and related AI-training workflows.", link:"#contact"}
  ],
  tools: [
    {name:"Microsoft Word / WPS Office", level:"Writing & document production"},
    {name:"GitHub & GitHub Pages", level:"Version control and web publishing"},
    {name:"HTML / CSS / JavaScript", level:"Web development fundamentals"},
    {name:"YAML", level:"Structured portfolio/configuration data"},
    {name:"AI tools", level:"Research, drafting and productivity workflows"}
  ],
  contact: [
    {label:"Location", value:"Nairobi, Kenya"},
    {label:"Portfolio", value:"techiestar850.github.io/tecky/", href:"https://techiestar850.github.io/tecky/"},
    {label:"Availability", value:"Open to freelance opportunities"}
  ]
};

const $ = id => document.getElementById(id);
$("site-name").textContent = DATA.site.name;
$("monogram").textContent = DATA.site.monogram;
$("hero-name").textContent = DATA.site.name;
$("hero-title").textContent = DATA.hero.title;
$("hero-summary").textContent = DATA.hero.summary;
$("location").textContent = DATA.site.location;
$("avatar").textContent = DATA.site.monogram;
$("year").textContent = new Date().getFullYear();

$("about-content").innerHTML = DATA.about.map(p => `<p>${p}</p>`).join("");
$("skills-list").innerHTML = DATA.skills.map(x => `<span class="chip">${x}</span>`).join("");
$("experience-list").innerHTML = DATA.experience.map(x => `<article class="timeline-item"><h3>${x.title}</h3><div class="meta">${x.org} · ${x.period}</div><p>${x.text}</p></article>`).join("");
$("education-list").innerHTML = DATA.education.map(x => `<article class="card"><h3>${x.title}</h3><div class="meta">${x.org} · ${x.period}</div><p>${x.text}</p></article>`).join("");
$("projects-list").innerHTML = DATA.projects.map(x => `<article class="project"><h3>${x.title}</h3><p>${x.text}</p><a href="${x.link}" target="_blank" rel="noopener">View / learn more →</a></article>`).join("");
$("tools-list").innerHTML = DATA.tools.map(x => `<article class="tool"><strong>${x.name}</strong><span>${x.level}</span></article>`).join("");
$("contact-list").innerHTML = DATA.contact.map(x => `<article class="contact-item"><strong>${x.label}</strong><p>${x.href ? `<a href="${x.href}" target="_blank" rel="noopener">${x.value}</a>` : x.value}</p></article>`).join("");

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  nav.style.display = open ? "" : "flex";
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  if (window.innerWidth <= 800) { nav.style.display = ""; toggle.setAttribute("aria-expanded","false"); }
}));
