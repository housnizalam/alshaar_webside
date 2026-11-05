// ==================================================
// SECTION: UI Translations
// ==================================================

export const ui = {
  ar: {
    brand: {
      name: "الشعار",
      description: "للمساحة والمقاولات",
    },

    nav: {
      home: "الرئيسية",
      projects: "المشاريع",
      services: "الخدمات",
      about: "من نحن",
      certificates: "الشهادات",
      contact: "تواصل معنا",
      menuLabel: "فتح قائمة التنقل",
    },
    // ==================================================
    // SECTION: Hero Translations
    // ==================================================

    hero: {
      title: "الدقة أساس كل مشروع",
      description:
        "مكتب الشعار للمساحة والمقاولات — خبرة راسخة في أعمال المساحة الهندسية والتنفيذ الإنشائي في سوريا. لمشاريع دقيقة وموثوقة من الفكرة حتى التسليم.",
      services: [
        "المساحات الطبوغرافية",
        "تحديد ورسم حدود الأراضي",
        "التخطيط الموقعي للإنشاءات",
        "التنفيذ والمقاولات المدنية",
      ],
      buttons: {
        services: "تعرّف على خدماتنا",
        contact: "تواصل معنا",
      },
    },

    // ==================================================
    // SECTION: Services Translations
    // ==================================================

    servicesSection: {
      title: "خدماتنا",
      description:
        "نقدم حلولًا متكاملة في أعمال المساحة الهندسية والمقاولات، اعتمادًا على الخبرة والتقنيات الحديثة.",
      items: [
        {
          title: "المساحات الطبوغرافية",
          description:
            "رفع مساحي دقيق للمواقع وإعداد الخرائط والمخططات الطبوغرافية.",
        },
        {
          title: "تحديد ورسم حدود الأراضي",
          description: "تحديد حدود العقارات والأراضي وقياس المساحات بدقة.",
        },
        {
          title: "التخطيط الموقعي للإنشاءات",
          description:
            "توقيع المحاور والنقاط الهندسية اللازمة لتنفيذ المشاريع.",
        },
        {
          title: "التنفيذ والمقاولات المدنية",
          description:
            "تنفيذ الأعمال الإنشائية ومتابعتها وفق المخططات الهندسية.",
        },
      ],
    },
  },

  en: {
    brand: {
      name: "AL SHAAR",
      description: "Surveying & Contracting",
    },

    nav: {
      home: "Home",
      projects: "Projects",
      services: "Services",
      about: "About Us",
      certificates: "Certificates",
      contact: "Contact",
      menuLabel: "Open navigation menu",
    },
    hero: {
      title: "Precision Is the Foundation of Every Project",
      description:
        "AL SHAAR Surveying & Contracting provides professional surveying and construction services in Syria. Delivering accurate and reliable projects from planning to completion.",
      services: [
        "Topographic Surveying",
        "Land Boundary Surveying",
        "Construction Site Planning",
        "Civil Construction",
      ],
      buttons: {
        services: "Explore Our Services",
        contact: "Contact Us",
      },
    },

    servicesSection: {
      title: "Our Services",
      description:
        "We provide integrated surveying and construction solutions using professional expertise and modern technology.",
      items: [
        {
          title: "Topographic Surveying",
          description: "Accurate site surveys and topographic maps.",
        },
        {
          title: "Land Boundary Surveying",
          description: "Precise land measurement and boundary determination.",
        },
        {
          title: "Construction Site Planning",
          description:
            "Accurate setting out of construction axes and reference points.",
        },
        {
          title: "Civil Construction",
          description: "Execution and supervision of construction works.",
        },
      ],
    },
  },
};

// ==================================================
// SECTION: Translation Helper
// ==================================================

export function getTranslations(lang = "ar") {
  return ui[lang] ?? ui.ar;
}
