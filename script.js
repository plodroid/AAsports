const DAYS = ['friday','saturday','sunday','monday','tuesday','wednesday','thursday'];

const dayLabels = {
  en: { all:'All days', friday:'Fri', saturday:'Sat', sunday:'Sun', monday:'Mon', tuesday:'Tue', wednesday:'Wed', thursday:'Thu' },
  fr: { all:'Tous', friday:'Ven', saturday:'Sam', sunday:'Dim', monday:'Lun', tuesday:'Mar', wednesday:'Mer', thursday:'Jeu' },
  ar: { all:'كامل', friday:'الجمعة', saturday:'السبت', sunday:'الأحد', monday:'الإثنين', tuesday:'الثلاثاء', wednesday:'الأربعاء', thursday:'الخميس' }
};

const names = {
  'VIP 1': { fr:'VIP 1', ar:'VIP 1' }, 'VIP 2': { fr:'VIP 2', ar:'VIP 2' }, 'VIP 3': { fr:'VIP 3', ar:'VIP 3' }, 'VIP 4': { fr:'VIP 4', ar:'VIP 4' }, 'VIP': { fr:'VIP', ar:'VIP' },
  'Jujutsu Kids': { fr:'Jujutsu Kids', ar:'جوجيتسو للصغار' },
  'Lutte Kids': { fr:'Lutte Kids', ar:'مصارعة للصغار' },
  'Boxe Kids': { fr:'Boxe Kids', ar:'بوكس للصغار' },
  'Taekwondo': { fr:'Taekwondo', ar:'تايكواندو' },
  'Aérobic Kids': { fr:'Aérobic Kids', ar:'أيروبيك للصغار' },
  'Boxe Femme': { fr:'Boxe Femme', ar:'بوكس للنساء' },
  'Boxe Fille': { fr:'Boxe Fille', ar:'بوكس للبنات' },
  'Self Defense Fille': { fr:'Self Défense Fille', ar:'دفاع عن النفس للبنات' },
  'Boxe Compétitif': { fr:'Boxe Compétitif', ar:'بوكس تنافسي' },
  'Boxe Libre': { fr:'Boxe Libre', ar:'بوكس حر' },
  'Boxe Loisirs': { fr:'Boxe Loisirs', ar:'بوكس ترفيهي' },
  'Boxe Adulte': { fr:'Boxe Adulte', ar:'بوكس للكبار' },
  'MMA': { fr:'MMA', ar:'MMA' },
  'Judo': { fr:'Judo', ar:'جيدو' },
  'Lutte': { fr:'Lutte', ar:'مصارعة' },
  'Jujutsu': { fr:'Jujutsu', ar:'جوجيتسو' },
  'Self Defense': { fr:'Self Défense', ar:'دفاع عن النفس' },
  'Aérobic': { fr:'Aérobic', ar:'أيروبيك' },
  'Zumba': { fr:'Zumba', ar:'زومبا' },
  'Gymnastique': { fr:'Gymnastique', ar:'جمباز' },
  'Tabata': { fr:'Tabata', ar:'تاباتا' },
  'Libre': { fr:'Libre', ar:'حصة حرة' }
};

const categoryLabels = {
  en:{kids:'Kids',women:'Women / Girls',combat:'Combat',fitness:'Fitness',vip:'VIP'},
  fr:{kids:'Enfants',women:'Femmes / Filles',combat:'Combat',fitness:'Fitness',vip:'VIP'},
  ar:{kids:'الصغار',women:'نساء / بنات',combat:'رياضات قتالية',fitness:'لياقة',vip:'VIP'}
};

const schedule = [
  ['friday','07:30','VIP 1','vip'], ['saturday','07:30','VIP','vip'], ['sunday','07:30','VIP 1','vip'], ['monday','07:30','VIP 2','vip'], ['tuesday','07:30','VIP 1','vip'], ['wednesday','07:30','VIP','vip'], ['thursday','07:30','VIP 2','vip'],
  ['friday','09:00','Jujutsu Kids','kids'], ['saturday','09:00','Taekwondo','kids'], ['sunday','09:00','Boxe Compétitif','combat'], ['monday','09:00','VIP 3','vip'], ['tuesday','09:00','Boxe Compétitif','combat'], ['wednesday','09:00','VIP 3','vip'], ['thursday','09:00','Boxe Compétitif','combat'],
  ['friday','10:30','Lutte Kids','kids'], ['saturday','10:30','Jujutsu Kids','kids'], ['sunday','10:30','Boxe Femme','women'], ['monday','10:30','Self Defense Fille','women'], ['tuesday','10:30','Boxe Femme','women'], ['wednesday','10:30','Self Defense Fille','women'], ['thursday','10:30','Boxe Femme','women'],
  ['saturday','13:00','Boxe Kids','kids'], ['sunday','13:00','Boxe Libre','combat'], ['monday','13:00','Boxe Libre','combat'], ['tuesday','13:00','Lutte Kids','kids'], ['wednesday','13:00','Boxe Libre','combat'], ['thursday','13:00','Boxe Libre','combat'],
  ['friday','14:30','Boxe Kids','kids'], ['saturday','14:30','Aérobic Kids','kids'], ['sunday','14:30','Boxe Fille','women'], ['monday','14:30','Zumba','fitness'], ['tuesday','14:30','Boxe Fille','women'], ['wednesday','14:30','Libre','fitness'], ['thursday','14:30','Aérobic Kids','kids'],
  ['friday','16:00','Taekwondo','kids'], ['saturday','16:00','Aérobic','fitness'], ['sunday','16:00','Zumba','fitness'], ['monday','16:00','Aérobic','fitness'], ['tuesday','16:00','Gymnastique','fitness'], ['wednesday','16:00','Tabata','fitness'], ['thursday','16:00','Aérobic','fitness'],
  ['friday','17:30','Boxe Loisirs','combat'], ['saturday','17:30','Boxe Compétitif','combat'], ['sunday','17:30','MMA','combat'], ['monday','17:30','MMA','combat'], ['tuesday','17:30','Boxe Compétitif','combat'], ['wednesday','17:30','MMA','combat'], ['thursday','17:30','Boxe Compétitif','combat'],
  ['friday','19:00','Judo','combat'], ['saturday','19:00','Boxe Adulte','combat'], ['sunday','19:00','Judo','combat'], ['monday','19:00','Lutte','combat'], ['tuesday','19:00','Judo','combat'], ['wednesday','19:00','Boxe Adulte','combat'], ['thursday','19:00','Lutte','combat'],
  ['friday','20:30','VIP 2','vip'], ['saturday','20:30','Jujutsu','combat'], ['sunday','20:30','Self Defense','combat'], ['monday','20:30','Jujutsu','combat'], ['tuesday','20:30','Boxe Loisirs','combat'], ['wednesday','20:30','Self Defense','combat'], ['thursday','20:30','VIP 4','vip'],
  ['friday','21:30','VIP 3','vip'], ['saturday','21:30','VIP 1','vip'], ['sunday','21:30','VIP 4','vip'], ['monday','21:30','VIP 2','vip'], ['tuesday','21:30','VIP 1','vip'], ['wednesday','21:30','VIP 3','vip'], ['thursday','21:30','VIP 2','vip']
].map(([day,time,name,category]) => ({day,time,name,category}));

const i18n = {
  en: {
    navPrograms:'Programs', navSchedule:'Schedule', navCoaches:'Coaches', navLocation:'Location', joinNow:'Join now',
    heroEyebrow:'Multi-discipline training · Annaba', heroLine1:'TRAIN', heroLine2:'WITHOUT LIMITS.', heroDesc:'Boxing, MMA, judo, wrestling, self-defense, kids programs and fitness — all under one roof in the heart of Annaba.', viewSchedule:'View schedule', findUs:'Find us', sessionsWeek:'weekly session types', openWeek:'training days', firstSession:'first session', todayAt:'TODAY AT AA SPORT',
    programKicker:'Choose your discipline', programTitle:'ONE GYM. <em>EVERY FIGHT.</em>', programIntro:'From your first class to competitive training, AA Sport has a place for every age and every level.', combatLabel:'Combat sports', combatTitle:'Boxing · MMA · Judo', combatText:'Technical training, conditioning and competitive sessions with experienced coaches.', fitnessLabel:'Fitness', fitnessTitle:'Zumba · Aerobic', fitnessText:'High-energy sessions built for movement, strength and confidence.', kidsLabel:'Youth', kidsTitle:'Kids programs', kidsText:'Jujutsu, wrestling, boxing, taekwondo and aerobic classes for younger athletes.', womenLabel:'Women', womenTitle:'Women & girls', womenText:'Dedicated boxing and self-defense sessions in a focused training environment.', vipLabel:'Private', vipTitle:'VIP sessions', vipText:'Early-morning and late-night VIP slots available throughout the week.',
    scheduleKicker:'Weekly timetable', scheduleTitle:'FIND YOUR <em>SESSION.</em>', scheduleIntro:'Filter by day or category. Times shown are the current weekly schedule supplied by AA Sport.', filterLabel:'Category', filterAll:'All programs', filterKids:'Kids', filterWomen:'Women / Girls', filterCombat:'Combat', filterFitness:'Fitness', filterVip:'VIP', noSessions:'No sessions match these filters.',
    coachesKicker:'The team', coachesTitle:'TRAIN WITH <em>COACHES.</em>', coachesIntro:'Experienced coaches across boxing, self-defense, wrestling and more.', selfDefense:'SELF DEFENSE', coachPlaceholder:'AA Sport Coach', imageNote:'Photo-ready setup: drop your final images into the assets folder using the filenames shown above. The website will load them automatically.',
    locationKicker:'Visit AA Sport', locationTitle:'YOUR NEXT SESSION <em>STARTS HERE.</em>', locationText:'13 Av. Colonel Amirouche, Annaba 23000, Hippone, Annaba, Algeria.', addressLabel:'ADDRESS', openMaps:'Open in Google Maps',
    contactKicker:'Ready to train?', contactTitle:'STEP IN. <em>LEVEL UP.</em>', contactText:'For prices, registration and more information, contact AA Sport directly on Instagram.', checkTimetable:'Check timetable', rights:'All rights reserved.', backTop:'Back to top', next:'Next'
  },
  fr: {
    navPrograms:'Disciplines', navSchedule:'Planning', navCoaches:'Coachs', navLocation:'Adresse', joinNow:'Nous rejoindre',
    heroEyebrow:'Salle multidisciplinaire · Annaba', heroLine1:'ENTRAÎNE-TOI', heroLine2:'SANS LIMITES.', heroDesc:'Boxe, MMA, judo, lutte, self-défense, programmes enfants et fitness — tout au même endroit, au cœur d’Annaba.', viewSchedule:'Voir le planning', findUs:'Nous trouver', sessionsWeek:'types de séances', openWeek:'jours d’entraînement', firstSession:'première séance', todayAt:'AUJOURD’HUI À AA SPORT',
    programKicker:'Choisis ta discipline', programTitle:'UNE SALLE. <em>TOUS LES COMBATS.</em>', programIntro:'Du premier entraînement à la compétition, AA Sport accueille tous les âges et tous les niveaux.', combatLabel:'Sports de combat', combatTitle:'Boxe · MMA · Judo', combatText:'Technique, préparation physique et séances compétitives avec des coachs expérimentés.', fitnessLabel:'Fitness', fitnessTitle:'Zumba · Aérobic', fitnessText:'Des séances dynamiques pour bouger, se renforcer et gagner en confiance.', kidsLabel:'Jeunes', kidsTitle:'Programmes enfants', kidsText:'Jujutsu, lutte, boxe, taekwondo et aérobic pour les jeunes sportifs.', womenLabel:'Femmes', womenTitle:'Femmes & filles', womenText:'Séances dédiées de boxe et self-défense dans un cadre concentré.', vipLabel:'Privé', vipTitle:'Séances VIP', vipText:'Créneaux VIP tôt le matin et tard le soir pendant toute la semaine.',
    scheduleKicker:'Emploi du temps', scheduleTitle:'TROUVE TA <em>SÉANCE.</em>', scheduleIntro:'Filtre par jour ou catégorie. Les horaires affichés correspondent au planning hebdomadaire actuel fourni par AA Sport.', filterLabel:'Catégorie', filterAll:'Tous les programmes', filterKids:'Enfants', filterWomen:'Femmes / Filles', filterCombat:'Combat', filterFitness:'Fitness', filterVip:'VIP', noSessions:'Aucune séance ne correspond à ces filtres.',
    coachesKicker:'L’équipe', coachesTitle:'ENTRAÎNE-TOI AVEC <em>NOS COACHS.</em>', coachesIntro:'Des coachs expérimentés en boxe, self-défense, lutte et plus encore.', selfDefense:'SELF DÉFENSE', coachPlaceholder:'Coach AA Sport', imageNote:'Prêt pour les photos : place les images finales dans le dossier assets avec les noms affichés ci-dessus. Le site les chargera automatiquement.',
    locationKicker:'Venir à AA Sport', locationTitle:'TA PROCHAINE SÉANCE <em>COMMENCE ICI.</em>', locationText:'13 Av. Colonel Amirouche, Annaba 23000, Hippone, Annaba, Algérie.', addressLabel:'ADRESSE', openMaps:'Ouvrir dans Google Maps',
    contactKicker:'Prêt à t’entraîner ?', contactTitle:'ENTRE. <em>PASSE AU NIVEAU SUPÉRIEUR.</em>', contactText:'Pour les tarifs, l’inscription et plus d’informations, contactez AA Sport directement sur Instagram.', checkTimetable:'Voir le planning', rights:'Tous droits réservés.', backTop:'Retour en haut', next:'Prochaine'
  },
  ar: {
    navPrograms:'الرياضات', navSchedule:'البرنامج', navCoaches:'الكوتشات', navLocation:'المكان', joinNow:'سجّل معنا',
    heroEyebrow:'قاعة متعددة الرياضات · عنابة', heroLine1:'تدرّب', heroLine2:'بلا حدود.', heroDesc:'بوكس، MMA، جيدو، مصارعة، دفاع عن النفس، حصص للصغار ولياقة — كامل في بلاصة وحدة في قلب عنابة.', viewSchedule:'شوف البرنامج', findUs:'لقانا', sessionsWeek:'أنواع حصص كل أسبوع', openWeek:'أيام تدريب', firstSession:'أول حصة', todayAt:'اليوم في AA SPORT',
    programKicker:'اختار الرياضة تاعك', programTitle:'قاعة وحدة. <em>كل الرياضات القتالية.</em>', programIntro:'من أول حصة حتى للمنافسة، في AA Sport كاين بلاصة لكل عمر ولكل مستوى.', combatLabel:'رياضات قتالية', combatTitle:'بوكس · MMA · جيدو', combatText:'تقنيات، لياقة وتحضير للمنافسات مع كوتشات عندهم خبرة.', fitnessLabel:'لياقة', fitnessTitle:'زومبا · أيروبيك', fitnessText:'حصص فيها طاقة باش تتحرك، تقوى وتزيد ثقة.', kidsLabel:'الصغار', kidsTitle:'حصص الصغار', kidsText:'جوجيتسو، مصارعة، بوكس، تايكواندو وأيروبيك للصغار.', womenLabel:'نساء', womenTitle:'نساء وبنات', womenText:'حصص بوكس ودفاع عن النفس مخصصين للنساء والبنات.', vipLabel:'خاص', vipTitle:'حصص VIP', vipText:'حصص VIP بكري الصباح وبالليل طول الأسبوع.',
    scheduleKicker:'برنامج الأسبوع', scheduleTitle:'لقى <em>الحصة تاعك.</em>', scheduleIntro:'تقدر تختار النهار ولا نوع الرياضة. هاذي هي الأوقات الأسبوعية الحالية تاع AA Sport.', filterLabel:'النوع', filterAll:'كامل الرياضات', filterKids:'الصغار', filterWomen:'نساء / بنات', filterCombat:'رياضات قتالية', filterFitness:'لياقة', filterVip:'VIP', noSessions:'ماكان حتى حصة بهاد الفيلتر.',
    coachesKicker:'الفريق', coachesTitle:'تدرّب مع <em>الكوتشات.</em>', coachesIntro:'كوتشات بخبرة في البوكس، الدفاع عن النفس، المصارعة ورياضات أخرى.', selfDefense:'دفاع عن النفس', coachPlaceholder:'كوتش AA Sport', imageNote:'الموقع واجد للصور: حط الصور النهائية في dossier assets بنفس الأسماء لي باينين فوق، والموقع يحمّلهم وحدو.',
    locationKicker:'زور AA Sport', locationTitle:'الحصة الجاية <em>تبدا من هنا.</em>', locationText:'13 شارع العقيد عميروش، عنابة، الجزائر.', addressLabel:'العنوان', openMaps:'حل في Google Maps',
    contactKicker:'واجد تتدرّب؟', contactTitle:'ادخل. <em>وطوّر مستواك.</em>', contactText:'للأسعار، التسجيل ولا معلومات أكثر، تواصل مع AA Sport مباشرة في Instagram.', checkTimetable:'شوف البرنامج', rights:'جميع الحقوق محفوظة.', backTop:'اطلع للفوق', next:'الجاي'
  }
};

let currentLang = localStorage.getItem('aa-lang') || 'en';
let selectedDay = 'all';
let selectedCategory = 'all';

function formatTime(time) {
  const [h,m] = time.split(':').map(Number);
  const suffix = h >= 12 ? 'PM' : 'AM';
  const hh = ((h + 11) % 12 + 1).toString().padStart(2,'0');
  return `${hh}:${m.toString().padStart(2,'0')} ${suffix}`;
}

function localizedName(name) {
  if (currentLang === 'en') return name;
  return names[name]?.[currentLang] || name;
}

function renderDayFilters() {
  const wrap = document.getElementById('dayFilters');
  wrap.innerHTML = ['all',...DAYS].map(day => `<button class="day-filter ${selectedDay===day?'active':''}" data-day="${day}">${dayLabels[currentLang][day]}</button>`).join('');
  wrap.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
    selectedDay = btn.dataset.day;
    renderDayFilters();
    renderSchedule();
  }));
}

function renderSchedule() {
  const grid = document.getElementById('scheduleGrid');
  const filtered = schedule.filter(s => (selectedDay === 'all' || s.day === selectedDay) && (selectedCategory === 'all' || s.category === selectedCategory));
  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state">${i18n[currentLang].noSessions}</div>`;
    return;
  }
  grid.innerHTML = filtered.map(s => `
    <article class="session-card">
      <div class="session-top"><div><div class="session-time">${formatTime(s.time)}</div><div class="session-day">${dayLabels[currentLang][s.day]}</div></div><span class="session-tag ${s.category}">${categoryLabels[currentLang][s.category]}</span></div>
      <div class="session-name">${localizedName(s.name)}</div>
    </article>`).join('');
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('aa-lang',lang);
  document.documentElement.lang = lang === 'ar' ? 'ar' : lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  renderDayFilters();
  renderSchedule();
  updateHeroNextClass();
}

function jsDayToScheduleDay(jsDay) {
  return ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'][jsDay];
}

function updateHeroNextClass() {
  const now = new Date();
  const today = jsDayToScheduleDay(now.getDay());
  const minutes = now.getHours()*60 + now.getMinutes();
  const todays = schedule.filter(s => s.day === today).sort((a,b)=>a.time.localeCompare(b.time));
  let next = todays.find(s => {
    const [h,m] = s.time.split(':').map(Number);
    return h*60+m >= minutes;
  });
  let day = today;
  if (!next) {
    for (let offset=1;offset<=7 && !next;offset++) {
      const d = jsDayToScheduleDay((now.getDay()+offset)%7);
      const candidate = schedule.filter(s=>s.day===d).sort((a,b)=>a.time.localeCompare(b.time))[0];
      if (candidate) { next=candidate; day=d; }
    }
  }
  const target = document.getElementById('heroNextClass');
  if (target && next) target.textContent = `${localizedName(next.name)} · ${dayLabels[currentLang][day]} ${formatTime(next.time)}`;
}

function loadImageSlots() {
  document.querySelectorAll('.image-slot[data-image]').forEach(slot => {
    const path = `assets/${slot.dataset.image}`;
    const probe = new Image();
    probe.onload = () => {
      slot.style.backgroundImage = `url("${path}")`;
      slot.classList.add('has-image');
    };
    probe.src = path;
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.1,rootMargin:'0px 0px -30px'});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function setupNavigation() {
  const menu = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  menu.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click',()=>{
    links.classList.remove('open');
    menu.setAttribute('aria-expanded','false');
  }));
}

document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click',()=>applyLanguage(btn.dataset.lang)));
document.getElementById('categoryFilter').addEventListener('change',e=>{selectedCategory=e.target.value;renderSchedule();});
document.getElementById('year').textContent = new Date().getFullYear();

setupNavigation();
setupReveal();
loadImageSlots();
applyLanguage(currentLang);
setInterval(updateHeroNextClass, 60000);
