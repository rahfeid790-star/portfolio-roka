/**
 * RAHF PORTFOLIO — INTERNATIONALIZATION & BILINGUAL ENGINE
 * Seamless English (LTR) and Arabic (RTL) localization with instant reactive DOM translation.
 */

const i18nDictionary = {
  en: {
    lang_btn: 'العربية',
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_journey: 'Journey',
    nav_reviews: 'Reviews',
    nav_contact: 'Contact',
    nav_resume: 'Resume',
    
    hero_status: 'Available for New Projects & Roles',
    hero_greeting: "Hi, I'm",
    hero_name: 'Rahf',
    hero_bio: 'A passionate Full-Stack Engineer and Creative Technologist building intelligent, high-impact digital experiences where rigorous software architecture meets fluid aesthetic design.',
    hero_cta_projects: 'Explore Projects',
    hero_cta_contact: 'Get in Touch',
    hero_cta_cv: 'View Resume',

    hero_roles: [
      'Full-Stack Software Engineer',
      'Creative Technologist',
      'UI/UX & Interactive Designer',
      'AI Solutions Architect'
    ],

    stat_exp: '5+ Years',
    stat_exp_lbl: 'Industry Experience',
    stat_proj: '35+ Projects',
    stat_proj_lbl: 'Shipped to Production',
    stat_clients: '99.8%',
    stat_clients_lbl: 'Client Satisfaction',
    stat_awards: '14+ Awards',
    stat_awards_lbl: 'Hackathons & Honors',

    about_tag: 'Biography & Approach',
    about_title: 'Engineering Precision Meets Intuitive Aesthetics',
    about_p1: 'I am <strong>Rahf</strong>, a creative technologist and full-stack software engineer based in Riyadh, working with innovative global brands and ambitious tech teams. I bridge the divide between complex distributed systems and refined, responsive user interfaces.',
    about_p2: 'My philosophy is rooted in <strong>holistic digital craftsmanship</strong>: code should be as scalable, performant, and resilient under the hood as the final interface feels delightful and effortless to the human on the other side.',
    
    pillar1_title: 'Pixel-Perfect Craft',
    pillar1_desc: 'Meticulous attention to micro-interactions, responsive fluidity, typography, and modern accessibility standards.',
    pillar2_title: 'Scalable Systems',
    pillar2_desc: 'Architecting robust backend pipelines, microservices, and databases capable of effortlessly handling peak loads.',
    pillar3_title: 'AI & Spatial Tech',
    pillar3_desc: 'Integrating state-of-the-art LLMs, neural workflows, and interactive 3D WebGL visualizations.',
    pillar4_title: 'Product Strategy',
    pillar4_desc: 'Aligning technical roadmaps with measurable business outcomes and delightful user retention metrics.',

    proj_tag: 'Selected Portfolio',
    proj_title: 'Featured Works & Digital Inventions',
    proj_subtitle: 'A curated showcase of full-stack platforms, AI applications, fintech solutions, and design systems.',
    filter_all: 'All Works',
    filter_fullstack: 'Full-Stack',
    filter_design: 'UI/UX & Design',
    filter_ai: 'AI & Creative Tech',
    btn_case_study: 'View Case Study →',
    btn_live_demo: 'Live Demo',
    btn_code: 'Source',

    skills_tag: 'Technical Mastery',
    skills_title: 'Skills & Architecture Stack',
    skills_subtitle: 'Modern frameworks, distributed backends, and creative toolkits I leverage daily.',
    cat_frontend: 'Frontend Architecture',
    cat_backend: 'Backend & Cloud',
    cat_design: 'UI/UX & Prototyping',
    cat_ai: 'AI & Data Engineering',
    tools_title: 'Platforms & Tools I Frequently Use',

    journey_tag: 'Career Milestone',
    journey_title: 'Experience & Milestones',
    journey_subtitle: 'The journey from computer science honors to leading engineering and digital products.',

    reviews_tag: 'Testimonials',
    reviews_title: 'Endorsements & Recommendations',
    reviews_subtitle: 'What founders, engineering directors, and collaborative partners say about working together.',

    contact_tag: 'Connect With Me',
    contact_title: "Let's Build Something Extraordinary",
    contact_subtitle: 'Have an ambitious product idea, freelance inquiry, or engineering role? Reach out today.',
    contact_email_lbl: 'Email Address',
    contact_phone_lbl: 'Phone / WhatsApp',
    contact_loc_lbl: 'Location',
    contact_loc_val: 'Riyadh, Saudi Arabia (Open to Global Remote)',
    btn_copy: 'Copy',
    
    form_name_lbl: 'Your Name',
    form_name_ph: 'e.g., Sarah Al-Harbi',
    form_email_lbl: 'Email Address',
    form_email_ph: 'sarah@example.com',
    form_budget_lbl: 'Estimated Budget / Project Scope',
    form_budget_opt1: 'Select Budget Scope...',
    form_budget_opt2: '$5k – $15k (Prototype / MVP)',
    form_budget_opt3: '$15k – $35k (Full Production App)',
    form_budget_opt4: '$35k+ (Enterprise System)',
    form_budget_opt5: 'Full-Time / Contract Role',
    form_msg_lbl: 'Project Details',
    form_msg_ph: 'Tell me about your product vision, timeline, and goals...',
    btn_submit_msg: 'Send Message ⚡',

    footer_rights: 'All rights reserved. Designed & Engineered with precision.',
    cmd_k_ph: 'Type a command or jump to section...',
    cmd_k_hint: 'Press ESC to exit'
  },

  ar: {
    lang_btn: 'English',
    nav_about: 'عن رهف',
    nav_projects: 'المشاريع',
    nav_skills: 'المهارات',
    nav_journey: 'المسيرة',
    nav_reviews: 'التوصيات',
    nav_contact: 'تواصل معي',
    nav_resume: 'السيرة الذاتية',
    
    hero_status: 'متاحة للمشاريع الجديدة والفرص التقنية',
    hero_greeting: 'أهلاً، أنا',
    hero_name: 'رهف',
    hero_bio: 'مهندسة برمجيات متكاملة ومبتكرة تقنية أصنع تجارب رقمية ذكية تجمع بين دقة الهيكلية البرمجية وأناقة التصميم التفاعلي الحديث.',
    hero_cta_projects: 'استكشف المشاريع',
    hero_cta_contact: 'تواصل معي',
    hero_cta_cv: 'السيرة الذاتية',

    hero_roles: [
      'مهندسة برمجيات متكاملة (Full-Stack)',
      'مبتكرة ومصممة تجارب تفاعلية',
      'مصممة واجهات وتجربة المستخدم UI/UX',
      'مهندسة حلول الذكاء الاصطناعي'
    ],

    stat_exp: '+5 سنوات',
    stat_exp_lbl: 'خبرة في الصناعة التقنية',
    stat_proj: '+35 مشروع',
    stat_proj_lbl: 'تم إطلاقها بنجاح',
    stat_clients: '99.8%',
    stat_clients_lbl: 'نسبة رضا العملاء',
    stat_awards: '+14 جائزة',
    stat_awards_lbl: 'هاكاثونات وتكريمات',

    about_tag: 'السيرة والرؤية',
    about_title: 'حيث تلتقي دقة الهندسة مع روعة الإحساس البصري',
    about_p1: 'أنا <strong>رهف</strong>، مهندسة برمجيات ومبتكرة تقنية مقيمة في الرياض، أعمل مع شركات رائدة وفرق تقنية طموحة عالمياً ومحلياً لربط الأنظمة السحابية المعقدة بواجهات استخدام انسيابية واستثنائية.',
    about_p2: 'فلسفتي ترتكز على <strong>الحِرفية الرقمية الشاملة</strong>: يجب أن يكون الكود البرمجي بنفس القوة والقابلية للتوسع كما تبدو الواجهة النهائية سلسة ومبهجة للمستخدم.',
    
    pillar1_title: 'إتقان كل بكسل',
    pillar1_desc: 'عناية فائقة بأدق التفاصيل، الانسيابية الحركية، التناسق الطباعي، وتوافق معايير الوصول العالمية.',
    pillar2_title: 'أنظمة قابلة للتوسع',
    pillar2_desc: 'بناء معمارية برمجية وقواعد بيانات سحابية متينة تتحمل أعلى معدلات الزيارات والاستخدام.',
    pillar3_title: 'ذكاء اصطناعي وتقنيات ثلاثية',
    pillar3_desc: 'دمج نماذج الذكاء الاصطناعي اللغوية المتطورة مع العروض التفاعلية ثلاثية الأبعاد WebGL.',
    pillar4_title: 'استراتيجية المنتجات',
    pillar4_desc: 'مواءمة الخرائط التقنية مع أهداف الأعمال الواقعية ومؤشرات بقاء وتفاعل المستخدمين.',

    proj_tag: 'أعمال مختارة',
    proj_title: 'أبرز المشاريع والابتكارات الرقمية',
    proj_subtitle: 'مجموعة منتقاة من المنصات المتكاملة، أنظمة الذكاء الاصطناعي، تطبيقات التقنية المالية، والواجهات الفاخرة.',
    filter_all: 'كافة الأعمال',
    filter_fullstack: 'تطوير متكامل',
    filter_design: 'تصميم واجهات UI/UX',
    filter_ai: 'ذكاء اصطناعي وتقنية تفاعلية',
    btn_case_study: 'عرض دراسة الحالة ←',
    btn_live_demo: 'معاينة حية',
    btn_code: 'الكود المصدر',

    skills_tag: 'القدرات البرمجية',
    skills_title: 'المهارات والترسانة التقنية',
    skills_subtitle: 'أحدث أطر العمل والأنظمة السحابية وأدوات التصميم التي أستخدمها يومياً.',
    cat_frontend: 'هندسة الواجهات الأمامية',
    cat_backend: 'الأنظمة الخلفية والسحابة',
    cat_design: 'تصميم الواجهات والنماذج الأولية',
    cat_ai: 'الذكاء الاصطناعي وهندسة البيانات',
    tools_title: 'المنصات والأدوات الأكثر استخداماً',

    journey_tag: 'محطات الإنجاز',
    journey_title: 'المسيرة المهنية والتعليمية',
    journey_subtitle: 'رحلة من التفوق الأكاديمي مع مرتبة الشرف الأولى إلى قيادة هندسة المنتجات الرقمية الحديثة.',

    reviews_tag: 'آراء الشركاء',
    reviews_title: 'شهادات وتوصيات قادة التقنية',
    reviews_subtitle: 'ما يقوله المؤسسون، مدراء الهندسة، وشركاء المشاريع عن العمل والتعاون معي.',

    contact_tag: 'تواصلي معي',
    contact_title: 'لنصنع معاً تجربة رقمية استثنائية',
    contact_subtitle: 'هل لديك فكرة مشروع طموحة، استشارة تقنية، أو فرصة قيادية؟ يسعدني التواصل معك.',
    contact_email_lbl: 'البريد الإلكتروني',
    contact_phone_lbl: 'الهاتف / واتساب',
    contact_loc_lbl: 'الموقع الجغرافي',
    contact_loc_val: 'الرياض، المملكة العربية السعودية (متاحة للعمل عن بعد عالمياً)',
    btn_copy: 'نسخ',
    
    form_name_lbl: 'الاسم الكريم',
    form_name_ph: 'مثال: سارة الحربي',
    form_email_lbl: 'البريد الإلكتروني',
    form_email_ph: 'sarah@example.com',
    form_budget_lbl: 'الميزانية التقديرية / نطاق المشروع',
    form_budget_opt1: 'اختر نطاق الميزانية...',
    form_budget_opt2: '٥,٠٠٠$ – ١٥,٠٠٠$ (نموذج أولي / MVP)',
    form_budget_opt3: '١٥,٠٠٠$ – ٣٥,٠٠٠$ (تطبيق إنتاجي متكامل)',
    form_budget_opt4: '+٣٥,٠٠٠$ (منظومة مؤسسية ضخمة)',
    form_budget_opt5: 'فرصة عمل بدوام كامل أو استشاري',
    form_msg_lbl: 'تفاصيل المشروع',
    form_msg_ph: 'حدثني عن رؤيتك للمشروع، الجدول الزمني، والأهداف المرجوة...',
    btn_submit_msg: 'إرسال الرسالة ⚡',

    footer_rights: 'جميع الحقوق محفوظة. صُمم وبُرمج بكل إتقان.',
    cmd_k_ph: 'ابحث عن أمر أو انتقل إلى قسم...',
    cmd_k_hint: 'اضغط ESC للإغلاق'
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('rahf_lang') || 'en';
    this.applyLanguage(this.currentLang);
  }

  toggle() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('rahf_lang', this.currentLang);
    this.applyLanguage(this.currentLang);
    return this.currentLang;
  }

  applyLanguage(lang) {
    this.currentLang = lang;
    const dict = i18nDictionary[lang];
    if (!dict) return;

    // Set Document attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-ph]');
    placeholderElements.forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update Typewriter phrases
    if (window.heroTypewriter && dict.hero_roles) {
      window.heroTypewriter.setPhrases(dict.hero_roles);
    }

    // Update Toggle button label
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span>${dict.lang_btn}</span>
      `;
    }
  }
}

// Global instance
window.i18n = new I18nManager();

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      const newLang = window.i18n.toggle();
      if (window.soundFX) window.soundFX.playClick();
      if (window.showToast) {
        window.showToast(newLang === 'ar' ? 'تم تحويل اللغة إلى العربية' : 'Switched to English', 'success');
      }
    });
  }
});
