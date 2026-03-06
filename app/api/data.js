const data = {
  "company": {
    "name": "Sparcley",
    "fullName": "Sparcley Ltd",
    "companyCode": "16125713",
    "tagline": "Creative Web Design and Development",
    "description": "We are not only about standout web design, development and marketing your business. We are about letting your customers feel your mission from the first glance, so as to become followers.",
    "mission": [
      "Use or develop digital technologies that generates sales with less human interaction",
      "Reducing Human mistakes with Business Process Automation"
    ],
    "founded": "15+ years in technology sector",
    "quote": "Sales magic happens at the moment a customer realizes you sincerely can help.",
    "studios": [
      {
        "country": "United Kingdom",
        "address": "124 City Road, London, EC1V 2NX, United Kingdom",
        "email": "uk@sparcley.co.uk",
        "phone": "+44 756 3100 295"
      },
      {
        "country": "Lithuania",
        "address": "L. Asanaviciutes str 14 - 144, Vilnius, 04303, European Union",
        "email": "LT@sparcley.co.uk",
        "phone": "+370 692 46 726"
      }
    ],
    "workingHours": {
      "days": "Monday to Friday",
      "from": "09:00",
      "to": "18:00"
    },
    "socialMedia": {
      "facebook": true,
      "instagram": true,
      "pinterest": true,
      "googleBusiness": true
    },
    "techStack": [
      "WordPress", "WooCommerce", "PrestaShop", "OpenCart",
      "CodeIgniter", "Laravel", "Java", "JavaScript",
      "HTML", "PHP", "CSS", "AI TOOLS"
    ]
  },
  "sitemap": [
    { "id": "01", "slug": "home", "label": "Home" },
    { "id": "02", "slug": "works", "label": "Works" },
    {
      "id": "03",
      "slug": "services",
      "label": "Services and Prices",
      "children": [
        { "slug": "webDev", "label": "Web Development" },
        { "slug": "digitalCare", "label": "Complete Digital Care" },
        { "slug": "crm", "label": "Customer Relationships Management" }
      ]
    },
    { "id": "04", "slug": "about", "label": "About Us" },
    { "id": "05", "slug": "contact", "label": "Contact Us" },
    { "id": "06", "slug": "blog", "label": "Digital Pulse (Blog)" }
  ],
  "pages": {
    "home": {
      "sections": [
        {
          "id": "hero",
          "type": "works-slider",
          "label": "Hero Section"
        },
        {
          "id": "about-intro",
          "heading": "What is Sparcley All About?",
          "content": "We are not only about standout web design, development and marketing your business. We are about letting your customers feel your mission from the first glance, so as to become followers."
        },
        {
          "id": "services-intro",
          "heading": "A Long Journey Needs a Trusted Partner",
          "services": [
            {
              "number": "01",
              "title": "Web Development",
              "slug": "webDev",
              "description": "User-friendly websites focused on sales and business growth"
            },
            {
              "number": "02",
              "title": "Complete Digital Care",
              "slug": "digitalCare",
              "description": "Website Maintenance & Support ensuring security, updates, technical stability, speed and continuous operation without disruptions, so your business can focus on growth."
            },
            {
              "number": "03",
              "title": "Customer Relationships Management",
              "slug": "crm",
              "description": "We have great experience integrating CRM systems into various business sectors: Products, Services and Manufacturing. Connecting and automating processes with accountants and e-commerce platforms."
            }
          ]
        },
        {
          "id": "ad-banner",
          "type": "advertisement",
          "content": "Complete Digital Care – First job free – to evaluate the quality of services, see the result and process."
        },
        { "id": "our-works", "type": "works-grid" },
        {
          "id": "video-section",
          "heading": "Why Talk? Let's Have a Look!",
          "type": "video"
        },
        { "id": "reviews", "type": "google-reviews" },
        { "id": "insights", "type": "blog-preview" },
        { "id": "clients", "type": "brand-logos" }
      ]
    },
    "works": {
      "intro": "We are a team of professional specialists who craft and execute your marketing strategy from development to designing.",
      "filters": ["All", "E-Commerce", "Real Estate", "Services"],
      "projects": [
        {
          "priority": 1,
          "name": "Marc Lauder",
          "category": "E-Commerce",
          "subtitle": "Unique Watch Designs manufacturer",
          "description": "Unique combinations – watch designs for successful Men and Women fused with a sporty feel.",
          "url": "http://marclauder.com/"
        },
        {
          "priority": 2,
          "name": "Andalusia Dream",
          "category": "Real Estate",
          "subtitle": "Real estate agency",
          "description": "Professional and most efficient services for renting, buying or selling real estate on the Costa del Sol, SPAIN.",
          "url": "https://andalusiadream.com/"
        },
        {
          "priority": 3,
          "name": "R King Beauty",
          "category": "Services",
          "subtitle": "Anti-Aging procedures",
          "description": "The goal is to listen to your needs and professionally help you to keep your skin healthy and young.",
          "url": "https://rkingbeauty.com"
        },
        {
          "priority": 4,
          "name": "Workon",
          "category": "Services",
          "subtitle": "Recruitment agency in Denmark",
          "description": "One of the leading recruitment companies in the industry. Workon is a driven, innovative and continuously growing Company that is committed to the quality of its services.",
          "url": "https://www.workon.dk"
        },
        {
          "priority": 5,
          "name": "Toptis",
          "category": "Services",
          "subtitle": "Cars Repair Service",
          "description": "The leading car service in Lithuania. Repairs cars of all brands.",
          "url": "https://toptis.lt/"
        },
        {
          "priority": 6,
          "name": "Graf & Becker",
          "category": "E-Commerce",
          "subtitle": "Watch manufacturer",
          "description": "Intelligently Watch design, brand, manufacturer, and ship high-end niche European collections with captivating flash stories at mass-market volumes.",
          "url": "https://grafbecker.com/"
        },
        {
          "priority": 7,
          "name": "Fashion Flair",
          "category": "E-Commerce",
          "subtitle": "Marketplace",
          "description": "Marketplace for brand watches, candles and more.",
          "url": "https://www.fashflair.com/"
        },
        {
          "priority": 8,
          "name": "Dessee Paris",
          "category": "E-Commerce",
          "subtitle": "Candles Manufacturer",
          "description": "DESSEE PARIS - 100% natural Soy wax candles manufacturer. Candle fragrances are authentic and extravagantly luxurious. Crafted to perfection with the dominating notes of nature.",
          "url": "http://deesseparis.com/"
        },
        {
          "priority": 9,
          "name": "Vilnius City Municipality",
          "category": "Services",
          "subtitle": "Vilnius city Municipality, Lithuania",
          "description": "For centuries, Vilnius has been a welcoming place for the peaceful coexistence of free citizens, while perfectly combining its magnificent history, spectacular natural environment and vibrant creativity.",
          "url": "http://vilnius.lt/"
        }
      ]
    },
    "services": {
      "webDevelopment": {
        "title": "Web Development",
        "subtitle": "User-friendly websites focused on sales and business growth",
        "packages": [
          {
            "name": "Brand Website",
            "price": 1900,
            "currency": "EUR",
            "duration": "8 weeks",
            "description": "Your face on the internet. For us designing a website every detail is important, selecting each button is an analytical process. As our goal is to design a website that generates sales with less interaction.",
            "features": [
              "Professional responsive design up to 8 pages (Mobile, tablet and desktop)",
              "Content management system (CMS)",
              "Professional copywriting up to 2000 words",
              "2 revision design and content",
              "1 language + auto AI translator to any language",
              "Professional classified contact/request form",
              "Contact form",
              "Blog",
              "GDPR pages (privacy policy, cookies, terms and conditions)",
              "3 months free hosting (SSL, professional email, secure UK-based servers)",
              "Technical SEO",
              "Analytics integration (GA4 conversions)",
              "Bing / Google Search Console sitemap integration",
              "12 months guarantee"
            ]
          },
          {
            "name": "E-Commerce Platform",
            "price": 4900,
            "currency": "EUR",
            "duration": "12 weeks",
            "description": "Full e-commerce solution: optimized product pages, fast performance, and conversion-driven design for a strong start and scalable growth.",
            "features": [
              "1 selected supplier integration (XML, CSV, Excel, API formats) or up to 50 product uploads",
              "3 months free hosting (SSL, professional email, secure UK-based servers)",
              "12 months guarantee",
              "2 revision design and content",
              "Professional copywriting up to 2000 words",
              "Content management system with full e-shop functionality",
              "Professional design (Mobile, tablet and desktop)",
              "1 language + auto AI translator to any language",
              "Contact form",
              "Category list by products / services / suppliers",
              "Products / Services filter system by categories",
              "Advanced search system with autocomplete",
              "Blog",
              "GDPR pages (privacy policy, cookies, terms and conditions)",
              "1 payment system integration",
              "1 post delivery system integration",
              "Technical SEO",
              "Analytics integration (GA4 conversions)",
              "Bing / Google Search Console sitemap integration",
              "Social login (Facebook, Google)"
            ]
          }
        ],
        "process": [
          {
            "step": "01",
            "title": "Case Study",
            "duration": "1 week",
            "description": "We perform a deep analysis of your case and select optimal solutions to implement the project."
          },
          {
            "step": "02",
            "title": "Wireframe & Design",
            "duration": "1–3 weeks",
            "description": "Before the development phase creating a prototype so you could see end results."
          },
          {
            "step": "03",
            "title": "Development",
            "duration": "3–4 weeks",
            "description": "We use the best technology solutions to ensure the highest quality of the work."
          },
          {
            "step": "04",
            "title": "Quality Control",
            "duration": "1 week",
            "description": "Before presenting the result of the developed solution, we perform quality tests so that you can enjoy the finished results."
          }
        ],
        "technologies": [
          "WordPress", "WooCommerce", "PrestaShop", "OpenCart",
          "CodeIgniter", "Laravel", "Java", "JavaScript", "HTML", "PHP", "CSS", "AI Tools"
        ]
      },
      "completeDigitalCare": {
        "title": "Complete Digital Care",
        "subtitle": "Website Maintenance & Support ensuring security, updates, technical stability, speed and continuous operation.",
        "price": 249,
        "currency": "EUR",
        "billingCycle": "monthly",
        "adBanner": "First job free – to evaluate the quality of services, see the result and process.",
        "packages": [
          {
            "name": "Standard Care",
            "price": 249,
            "currency": "EUR",
            "duration": "Monthly",
            "description": "Essential maintenance for growing businesses that require stability and security.",
            "features": [
              "Monthly system security audit",
              "Hosting on optimized servers",
              "Monthly reports & updates",
              "Incident resolution (3h)",
              "4h free support included",
              "Staging environment access"
            ]
          },
          {
            "name": "Priority Care",
            "price": 549,
            "currency": "EUR",
            "duration": "Monthly",
            "description": "High-priority support for enterprise platforms requiring zero downtime and rapid response.",
            "features": [
              "Weekly system security audit",
              "Priority hosting environment",
              "Weekly performance reports",
              "Instant incident resolution",
              "12h free support included",
              "Dedicated account manager",
              "Custom feature updates"
            ]
          }
        ],
        "features": [
          "System security audit",
          "Hosting on optimised and monitored server environment",
          "Staging environment for safe testing before deployment",
          "GitHub version control",
          "System monitoring for errors",
          "Monthly system maintenance and regular updates",
          "Two-factor authentication for admin panel",
          "Full audit logs of all user actions",
          "Access to internal Service Desk system with progress tracking",
          "Free consultations",
          "Invoiced only for actual work performed",
          "Monthly reports",
          "Incident resolution within 3 business hours",
          "4 hours free support included per month",
          "Extra work: 59 EUR/hour"
        ],
        "process": [
          {
            "step": "01",
            "title": "Security & Config",
            "duration": "1 Cycle",
            "description": "We establish high security standards and protect systems against potential threats from day one."
          },
          {
            "step": "02",
            "title": "Updates & Warranty",
            "duration": "Continuous",
            "description": "Regular system updates and highest quality assurance via our internal Service Desk system."
          },
          {
            "step": "03",
            "title": "Support 24/7",
            "duration": "Perpetual",
            "description": "Constant system monitoring and perpetual advisory on digital growth and technical stability."
          },
          {
            "step": "04",
            "title": "Optimization",
            "duration": "Performance",
            "description": "Continuous speed and performance audits to ensure your platform runs at peak efficiency."
          }
        ],
        "technologies": [
          "AWS", "Google Cloud", "DigitalOcean", "GitHub", "Sentry", "New Relic", "Cloudflare", "Docker"
        ]
      },
      "crm": {
        "title": "Customer Relationship Management",
        "subtitle": "High-performance ecosystem integration for Products, Services and Manufacturing sectors.",
        "priceFrom": 4980,
        "currency": "EUR",
        "packages": [
          {
            "name": "Core CRM",
            "price": 4980,
            "currency": "EUR",
            "duration": "4 weeks",
            "description": "Essential CRM integration for small to mid-sized teams focusing on lead management and sales workflows.",
            "features": [
              "Contact & lead management",
              "Sales pipeline automation",
              "Email integration",
              "Basic reporting dashboard",
              "Team training included"
            ]
          },
          {
            "name": "Enterprise CRM",
            "price": 9800,
            "currency": "EUR",
            "duration": "10 weeks",
            "description": "Full-scale operational intelligence with advanced automation, custom modules, and deep analytics.",
            "features": [
              "Multi-department synchronization",
              "Advanced workflow automation",
              "Custom module development",
              "Real-time analytics engine",
              "API & ERP integration",
              "Perpetual maintenance"
            ]
          }
        ],
        "features": [
          "Contact and customer management – stores client profiles, history, contacts",
          "Lead tracking – monitor new contacts, qualify them and convert into customers",
          "Sales pipeline management – see each deal stage by stage",
          "Automation and workflow automation – automate reminders, tasks, emails",
          "Invoicing and proposal creation – quickly prepare invoices and proposals",
          "Project and task management – delegate tasks, track execution",
          "Calendar and reminders – remember important dates and meetings",
          "Reports and analytics – monitor sales, services, customer statistics",
          "Customer service ticketing system – manage issue resolution and inquiries",
          "Custom fields and business-specific configuration – store additional information"
        ],
        "process": [
          {
            "step": "01",
            "title": "Discovery",
            "duration": "1 Cycle",
            "description": "Deep dive into your business model and complete workflow mapping for optimal logic flow."
          },
          {
            "step": "02",
            "title": "Architecture",
            "duration": "2 Cycles",
            "description": "Developing complex technical specifications and coordinating with management for seamless transition."
          },
          {
            "step": "03",
            "title": "Implementation",
            "duration": "4 Cycles",
            "description": "System adaptation to operations and complete data migration with zero downtime."
          },
          {
            "step": "04",
            "title": "Testing & Launch",
            "duration": "1 Cycle",
            "description": "Rigorous verification of the sales cycle and team training for immediate operational impact."
          }
        ],
        "technologies": [
          "Salesforce", "HubSpot", "Bitrix24", "Pipedrive", "Laravel", "PostgreSQL", "React", "Node.js"
        ]
      }
    },
    "about": {
      "heading": "With Diverse Talents and a Shared Passion for Your Success",
      "subheading": "We are a London-based top-notch creative web design and development agency",
      "description": "Sparcley brand is a result of working more than 15 years within the technology sector. We have brought together professional web developers, creative designers and digital marketers – who are focused on the highest level of results.",
      "philosophy": "For us designing a website every detail is important, selecting each button is an analytical process. As our goal is to design a website that generates sales with less human interaction.",
      "whyChooseUs": [
        "We think out of the box",
        "We have brought together professionals and experience from all over the world",
        "High quality projects",
        "We advise on various web development and digital marketing sectors",
        "Expert team members",
        "Instead of 1 specialist you get the whole team of professionals"
      ],
      "benefits": [
        "Improving your customer service",
        "Reducing costs and increasing profitability"
      ]
    },
    "contact": {
      "heading": "Let's turn ideas into experience!",
      "subheading": "Starting a collaboration is easy!",
      "form": true,
      "details": {
        "companyName": "Sparcley Ltd",
        "companyCode": "16125713",
        "studios": [
          {
            "country": "United Kingdom",
            "address": "124 City Road, London, EC1V 2NX, United Kingdom",
            "email": "uk@sparcley.co.uk",
            "phone": "+44 756 3100 295"
          },
          {
            "country": "Lithuania",
            "address": "L. Asanaviciutes str 14 - 144, Vilnius, 04303, European Union",
            "email": "LT@sparcley.co.uk",
            "phone": "+370 692 46 726"
          }
        ],
        "workingHours": {
          "days": "Monday to Friday",
          "from": "09:00",
          "to": "18:00"
        },
        "socialMedia": {
          "facebook": true,
          "instagram": true,
          "pinterest": true,
          "googleBusiness": true
        }
      }
    },
    "blog": {
      "intro": "Stay updated with the latest trends, strategies, and technical insights from our team of experts.",
      "posts": [
        {
          "id": 1,
          "date": "June 07, 2025",
          "category": "Design",
          "title": "The Most Popular Web Design Trends in 2025",
          "excerpt": "Explore the latest shifts in digital aesthetics, from glassmorphism to bento layouts and beyond.",
          "image": "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
          "content": "The landscape of web design is constantly evolving, and 2025 is no exception. This year, we're seeing a push towards more immersive and tactile experiences. Glassmorphism remains popular but is evolving into 'frosted glass' effects with more subtle depth. Bento layouts—inspired by Apple's design language—are becoming the standard for organizing complex information in a clean, modular way.\n\nAccessibility is no longer an afterthought; it's driving design decisions from the start. High-contrast themes and oversized typography aren't just for style—they're for usability. We're also seeing a comeback of 'raw' aesthetics—minimalistic, high-speed sites that prioritize content over heavy animations."
        },
        {
          "id": 2,
          "date": "May 24, 2025",
          "category": "Development",
          "title": "How to Build Scalable CRM Solutions for Small Business",
          "excerpt": "A deep dive into the architecture of modern customer relationship management systems.",
          "image": "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop",
          "content": "Building a CRM isn't just about a database; it's about the workflow. For small businesses, scalability means starting simple but having the infrastructure to grow. We focus on modular architectures where and individual modules (like lead tracking or invoicing) can be updated independently.\n\nIntegration is key. A modern CRM must talk to your email, your calendar, and your accounting software. By using robust APIs and serverless functions, we can build custom CRM solutions that are both powerful and cost-effective. Security is also a top priority—encrypting customer data and implementing strict access controls are foundational to our development process."
        },
        {
          "id": 3,
          "date": "May 12, 2025",
          "category": "Strategy",
          "title": "Why Continuous Digital Care is Crucial for Growth",
          "excerpt": "Maintenance is not just fixing bugs; it's about evolving your platform to meet user demands.",
          "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
          "content": "Many businesses make the mistake of launching a website and then forgetting about it. In reality, launch day is just the beginning. The digital environment is volatile—browsers update, security threats emerge, and user behavior shifts.\n\nContinuous Digital Care ensures your site remains at peak performance. This includes monthly security audits, speed optimizations, and proactive updates. When your platform is technically stable and always up-to-date, your team can focus on what they do best: growing the business. Our 'Digital Care' subscription is designed to be your technical safety net."
        }
      ]
    }
  }
}

export default data;