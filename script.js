const serviceData = [
  {
    title: "Graphic Design",
    description: "Versatile visual design for campaigns, launches, and polished brand communication.",
    icon: "graphic",
  },
  {
    title: "Basic Animation",
    description: "Simple motion graphics that add energy and storytelling to digital content.",
    icon: "animation",
  },
  {
    title: "Brochure Design",
    description: "Editorial layouts that stay clean, persuasive, and easy to navigate.",
    icon: "brochure",
  },
  {
    title: "Logo Design",
    description: "Distinctive logo concepts that feel modern, balanced, and memorable.",
    icon: "logo",
  },
  {
    title: "Branding",
    description: "Complete visual systems with colors, typography, and cohesive design language.",
    icon: "branding",
  },
  {
    title: "Hoarding Design",
    description: "Bold outdoor layouts built for high visibility and quick message capture.",
    icon: "hoarding",
  },
  {
    title: "Stationery Design",
    description: "Business cards, letterheads, and print touchpoints designed for consistency.",
    icon: "stationery",
  },
  {
    title: "Packaging Design",
    description: "Packaging that looks premium on-screen and stands out in real-world spaces.",
    icon: "packaging",
  },
  {
    title: "Poster / Flyer Design",
    description: "Impact-focused promotional design for events, launches, and local campaigns.",
    icon: "poster",
  },
  {
    title: "Website Design & Coding",
    description: "Modern, responsive websites that blend clean visuals with practical front-end code.",
    icon: "web",
  },
  {
    title: "Application Design",
    description: "Sleek interface concepts built around clarity, flow, and user confidence.",
    icon: "app",
  },
  {
    title: "Social Media Post Design",
    description: "Platform-ready posts with strong hierarchy and consistent brand presence.",
    icon: "social",
  },
];

const skillData = [
  {
    name: "Illustrator",
    short: "Ai",
    level: 97,
    tone: "#ff9a00",
  },
  {
    name: "Photoshop",
    short: "Ps",
    level: 95,
    tone: "#31a8ff",
  },
  {
    name: "Figma",
    short: "Fg",
    level: 90,
    tone: "#a259ff",
  },
  {
    name: "After Effect",
    short: "Ae",
    level: 70,
    tone: "#9999ff",
  },
];

const portfolioData = [
  {
    title: "Brand Identity Design",
    category: "branding",
    description: "A premium identity system with logo architecture, palette, and brand rules.",
    accent: ["#5436e2", "#500bb6"],
    label: "Branding",
    image: "assets/portfolio/brand-identity-design.jpg",
  },
  {
    title: "Social Media Creatives",
    category: "social-media",
    description: "Scroll-stopping post creatives and campaign visuals for stronger engagement.",
    accent: ["#6448ff", "#381185"],
    label: "Social Media",
    image: "assets/portfolio/social-media-creatives.jpg",
  },
  {
    title: "Ad & Campaign Design",
    category: "marketing",
    description: "Performance-focused ad visuals and campaign kits for launches and promotions.",
    accent: ["#5436e2", "#7d24dd"],
    label: "Marketing",
    image: "assets/portfolio/ad-campaign-design.jpg",
  },
  {
    title: "Print Design",
    category: "print",
    description: "Bold brochure, flyer, and poster layouts with clean hierarchy and strong readability.",
    accent: ["#3920b8", "#5436e2"],
    label: "Print Design",
    image: "assets/portfolio/print-design.jpg",
  },
  {
    title: "Product Packaging",
    category: "packaging",
    description: "Shelf-ready packaging built to feel premium, modern, and brand-consistent.",
    accent: ["#500bb6", "#7858ff"],
    label: "Packaging",
    image: "assets/portfolio/product-packaging.jpg",
  },
  {
    title: "Digital Product Design",
    category: "web-app-design",
    description: "A sleek responsive website concept blending brand storytelling with conversion flow.",
    accent: ["#5436e2", "#500bb6"],
    label: "Web Design",
    image: "assets/portfolio/digital-product-design.jpg",
  },
  {
    title: "App Interface",
    category: "web-app-design",
    description: "Modern app UI screens designed for clarity, motion, and intuitive interaction.",
    accent: ["#6f35ff", "#32106e"],
    label: "App Design",
    image: "assets/portfolio/app-interface.jpg",
  },
  {
    title: "Motion Reveal Pack",
    category: "motion",
    description: "Short animated brand scenes and logo reveals crafted for reels and launch content.",
    accent: ["#5436e2", "#27245f"],
    label: "Motion",
    image: "assets/portfolio/motion-reveal-pack.jpg",
  },
  {
    title: "Elevate Brand Rollout",
    category: "branding",
    description: "Identity elements extended across print, packaging, and digital touchpoints.",
    accent: ["#7a44ff", "#290b69"],
    label: "Identity",
    image: "assets/portfolio/elevate-brand-rollout.jpg",
  },
];

const emailJsConfig = {
  publicKey: "b-mr0B9_OeUGQajJm",
  serviceId: "service_depd09f",
  templateId: "template_i6xvekq",
  recipientEmail: "chiraggajjar360@gmail.com",
};

function createIconMarkup(type) {
  const icons = {
    graphic:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5"/><path d="M7 7h10v10"/><circle cx="8" cy="16" r="2.4"/></svg>',
    animation:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="m10 8 6 4-6 4z"/></svg>',
    brochure:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h9a3 3 0 0 1 3 3v11H9a3 3 0 0 0-3 0z"/><path d="M6 5v14"/><path d="M10 9h5"/><path d="M10 12h5"/></svg>',
    logo:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 4 7 8-7 8-7-8z"/><path d="m12 8 3.5 4L12 16l-3.5-4z"/></svg>',
    branding:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4 4 8l8 4 8-4z"/><path d="m4 12 8 4 8-4"/><path d="m4 16 8 4 8-4"/></svg>',
    hoarding:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v9H4z"/><path d="M8 15v4"/><path d="M16 15v4"/><path d="M7 9h10"/></svg>',
    stationery:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 17 2 2 10-10-2-2z"/><path d="M14 6 16 8"/><path d="M4 20h4"/></svg>',
    packaging:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 21v-9"/><path d="m4 7.5 8 4.5 8-4.5"/></svg>',
    poster:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10v16H7z"/><path d="M10 8h4"/><path d="M10 12h4"/><path d="M10 16h2"/></svg>',
    web:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 8-4 4 4 4"/><path d="m15 8 4 4-4 4"/><path d="m13 5-2 14"/></svg>',
    app:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="3.5" width="10" height="17" rx="2.5"/><path d="M10 7h4"/><path d="M11 17h2"/></svg>',
    social:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="3"/><path d="M8 9h8"/><path d="M8 13h5"/><circle cx="16.5" cy="14.5" r="1.2"/></svg>',
  };

  return icons[type] || icons.graphic;
}

function buildServices() {
  const servicesGrid = document.querySelector("#services-grid");

  servicesGrid.innerHTML = serviceData
    .map(
      (service) => `
        <article class="service-card glass-panel reveal">
          <div class="service-card__icon">${createIconMarkup(service.icon)}</div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <span class="service-card__meta">Premium creative execution</span>
        </article>
      `
    )
    .join("");
}

function buildSkills() {
  const skillsGrid = document.querySelector("#skills-grid");

  skillsGrid.innerHTML = skillData
    .map(
      (skill) => `
        <article class="skill-card glass-panel reveal" style="--skill-brand: ${skill.tone}; --skill-level: ${skill.level}%;">
          <div class="skill-card__top">
            <div class="skill-logo" aria-hidden="true">${skill.short}</div>
            <div class="skill-card__copy">
              <h3>${skill.name}</h3>
              <span class="skill-card__meta">Creative workflow proficiency</span>
            </div>
            <strong class="skill-card__percent">${skill.level}%</strong>
          </div>
          <div class="skill-bar" aria-hidden="true">
            <span class="skill-bar__fill"></span>
          </div>
        </article>
      `
    )
    .join("");
}

function buildPortfolio() {
  const portfolioGrid = document.querySelector("#portfolio-grid");

  portfolioGrid.innerHTML = portfolioData
    .map(
      (item) => `
        <article
          class="portfolio-card glass-panel reveal"
          data-category="${item.category}"
          style="--thumb-start: ${item.accent[0]}; --thumb-end: ${item.accent[1]};"
        >
          <div class="portfolio-thumb">
            <img
              class="portfolio-thumb__image"
              src="${item.image}"
              alt="${item.title}"
              loading="lazy"
            />
            <span class="portfolio-thumb__label">${item.label}</span>
            <span class="portfolio-thumb__capsule">${formatCategory(item.category)}</span>
          </div>
          <div class="portfolio-copy">
            <span class="portfolio-type">${formatCategory(item.category)}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function formatCategory(value) {
  const labels = {
    branding: "Branding",
    "social-media": "Social Media",
    marketing: "Marketing",
    print: "Print",
    packaging: "Packaging",
    "web-app-design": "Web & App Design",
    motion: "Motion",
  };

  if (labels[value]) {
    return labels[value];
  }

  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function setupPortfolioFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".portfolio-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      buttons.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");

      cards.forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });
}

function setupRevealObserver() {
  const revealedInHero = document.querySelectorAll(".hero .reveal");
  revealedInHero.forEach((element, index) => {
    window.setTimeout(() => {
      element.classList.add("is-visible");
    }, 140 * (index + 1));
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    if (!element.closest(".hero")) {
      observer.observe(element);
    }
  });
}

function createParticles() {
  const particleField = document.querySelector("#particle-field");
  const particleCount = 18;

  Array.from({ length: particleCount }).forEach(() => {
    const particle = document.createElement("span");
    const size = (Math.random() * 3.5 + 1.5).toFixed(2);
    const duration = (Math.random() * 10 + 14).toFixed(2);
    const delay = (Math.random() * -20).toFixed(2);
    const left = (Math.random() * 100).toFixed(2);
    const top = (Math.random() * 100).toFixed(2);

    particle.className = "particle";
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.top = `${top}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    particleField.appendChild(particle);
  });
}

function setupTopbarState() {
  const topbar = document.querySelector(".topbar");

  const updateState = () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  updateState();
  window.addEventListener("scroll", updateState, { passive: true });
}

function setupContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) {
    return;
  }

  const status = document.querySelector("#form-status");
  const submitButton = form.querySelector('button[type="submit"]');
  const emailSubjectField = form.querySelector('input[name="_subject"]');
  const originalButtonText = submitButton ? submitButton.textContent : "Send Message";
  let resetButtonTimerId = null;
  const emailJsReady =
    typeof window.emailjs !== "undefined" &&
    Object.values(emailJsConfig)
      .slice(0, 3)
      .every((value) => value && !value.startsWith("YOUR_"));

  if (emailJsReady) {
    window.emailjs.init({
      publicKey: emailJsConfig.publicKey,
    });
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      showFormStatus("Please fill out all fields before sending.", "error");
      return;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const subjectLine = `${payload.name} + ${payload.subject}`.trim() || "New portfolio contact request";
    const messageBody = payload.message;

    if (emailSubjectField) {
      emailSubjectField.value = subjectLine;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }
    showFormStatus("Sending your message...", "sending");

    resetButtonTimerId = window.setTimeout(() => {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText || "Send Message";
      }
    }, 7000);

    try {
      if (emailJsReady) {
        await window.emailjs.send(emailJsConfig.serviceId, emailJsConfig.templateId, {
          from_name: payload.name,
          from_email: payload.email,
          subject: subjectLine,
          message: payload.message,
          to_email: emailJsConfig.recipientEmail,
          reply_to: payload.email,
        });

        form.reset();
        showFormStatus("Message sent successfully. Chirag will hear from you soon.", "success");
      } else {
        const subject = encodeURIComponent(subjectLine);
        const body = encodeURIComponent(messageBody);

        window.location.href = `mailto:${emailJsConfig.recipientEmail}?subject=${subject}&body=${body}`;
        form.reset();
        showFormStatus(
          "EmailJS keys are not configured yet, so your mail app was opened as a fallback.",
          "info"
        );
      }
    } catch (error) {
      showFormStatus("Something went wrong while sending. Please try again.", "error");
    } finally {
      if (resetButtonTimerId) {
        window.clearTimeout(resetButtonTimerId);
      }

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText || "Send Message";
      }
    }
  });

  function showFormStatus(message, state) {
    if (!status) {
      return;
    }

    status.textContent = message;
    status.dataset.state = state;
  }
}

function init() {
  buildServices();
  buildSkills();
  buildPortfolio();
  createParticles();
  setupPortfolioFilters();
  setupRevealObserver();
  setupTopbarState();
  setupContactForm();
}

document.addEventListener("DOMContentLoaded", init);
