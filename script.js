const DAYS = ['friday','saturday','sunday','monday','tuesday','wednesday','thursday'];

const dayLabels = {
  en:{all:'All days',friday:'Fri',saturday:'Sat',sunday:'Sun',monday:'Mon',tuesday:'Tue',wednesday:'Wed',thursday:'Thu'},
  fr:{all:'Tous',friday:'Ven',saturday:'Sam',sunday:'Dim',monday:'Lun',tuesday:'Mar',wednesday:'Mer',thursday:'Jeu'},
  ar:{all:'كامل',friday:'الجمعة',saturday:'السبت',sunday:'الأحد',monday:'الإثنين',tuesday:'الثلاثاء',wednesday:'الأربعاء',thursday:'الخميس'}
};

const names = {
  'VIP 1':{fr:'VIP 1',ar:'VIP 1'},'VIP 2':{fr:'VIP 2',ar:'VIP 2'},'VIP 3':{fr:'VIP 3',ar:'VIP 3'},'VIP 4':{fr:'VIP 4',ar:'VIP 4'},'VIP':{fr:'VIP',ar:'VIP'},
  'Jujutsu Kids':{fr:'Jujutsu enfants',ar:'جوجيتسو للصغار'},
  'Lutte Kids':{fr:'Lutte enfants',ar:'مصارعة للصغار'},
  'Boxe Kids':{fr:'Boxe enfants',ar:'بوكس للصغار'},
  'Taekwondo':{fr:'Taekwondo',ar:'تايكواندو'},
  'Aérobic Kids':{fr:'Aérobic enfants',ar:'أيروبيك للصغار'},
  'Boxe Femme':{fr:'Boxe femme',ar:'بوكس للنساء'},
  'Boxe Fille':{fr:'Boxe fille',ar:'بوكس للبنات'},
  'Self Defense Fille':{fr:'Self-défense fille',ar:'دفاع عن النفس للبنات'},
  'Boxe Compétitif':{fr:'Boxe compétitive',ar:'بوكس تنافسي'},
  'Boxe Libre':{fr:'Boxe libre',ar:'بوكس حر'},
  'Boxe Loisirs':{fr:'Boxe loisirs',ar:'بوكس ترفيهي'},
  'Boxe Adulte':{fr:'Boxe adulte',ar:'بوكس للكبار'},
  'MMA':{fr:'MMA',ar:'MMA'},
  'Judo':{fr:'Judo',ar:'جيدو'},
  'Lutte':{fr:'Lutte',ar:'مصارعة'},
  'Jujutsu':{fr:'Jujutsu',ar:'جوجيتسو'},
  'Self Defense':{fr:'Self-défense',ar:'دفاع عن النفس'},
  'Aérobic':{fr:'Aérobic',ar:'أيروبيك'},
  'Zumba':{fr:'Zumba',ar:'زومبا'},
  'Gymnastique':{fr:'Gymnastique',ar:'جمباز'},
  'Tabata':{fr:'Tabata',ar:'تاباتا'},
  'Libre':{fr:'Libre',ar:'حصة حرة'}
};

const categoryLabels = {
  en:{kids:'Kids',women:'Women / Girls',combat:'Combat',fitness:'Fitness',vip:'VIP'},
  fr:{kids:'Enfants',women:'Femmes / Filles',combat:'Combat',fitness:'Fitness',vip:'VIP'},
  ar:{kids:'الصغار',women:'نساء / بنات',combat:'رياضات قتالية',fitness:'لياقة',vip:'VIP'}
};

const categoryQuick = {
  en:[['all','Everything'],['combat','Combat'],['fitness','Fitness'],['kids','Kids'],['women','Women'],['vip','VIP']],
  fr:[['all','Tout'],['combat','Combat'],['fitness','Fitness'],['kids','Enfants'],['women','Femmes'],['vip','VIP']],
  ar:[['all','الكل'],['combat','قتال'],['fitness','لياقة'],['kids','صغار'],['women','نساء'],['vip','VIP']]
};

const sportTicker = {
  en:['BOXING','MMA','JUDO','WRESTLING','JUJUTSU','ZUMBA','SELF DEFENSE'],
  fr:['BOXE','MMA','JUDO','LUTTE','JUJUTSU','ZUMBA','SELF-DÉFENSE'],
  ar:['بوكس','MMA','جيدو','مصارعة','جوجيتسو','زومبا','دفاع عن النفس']
};

const teamDisciplineLabels = {
  en:['MMA','JUDO','JUJUTSU','SELF DEFENSE','KIDS','FITNESS'],
  fr:['MMA','JUDO','JUJUTSU','SELF-DÉFENSE','ENFANTS','FITNESS'],
  ar:['MMA','جيدو','جوجيتسو','دفاع عن النفس','الصغار','لياقة']
};

const schedule = [
  ['friday','07:30','VIP 1','vip'],['saturday','07:30','VIP','vip'],['sunday','07:30','VIP 1','vip'],['monday','07:30','VIP 2','vip'],['tuesday','07:30','VIP 1','vip'],['wednesday','07:30','VIP','vip'],['thursday','07:30','VIP 2','vip'],
  ['friday','09:00','Jujutsu Kids','kids'],['saturday','09:00','Taekwondo','kids'],['sunday','09:00','Boxe Compétitif','combat'],['monday','09:00','VIP 3','vip'],['tuesday','09:00','Boxe Compétitif','combat'],['wednesday','09:00','VIP 3','vip'],['thursday','09:00','Boxe Compétitif','combat'],
  ['friday','10:30','Lutte Kids','kids'],['saturday','10:30','Jujutsu Kids','kids'],['sunday','10:30','Boxe Femme','women'],['monday','10:30','Self Defense Fille','women'],['tuesday','10:30','Boxe Femme','women'],['wednesday','10:30','Self Defense Fille','women'],['thursday','10:30','Boxe Femme','women'],
  ['saturday','13:00','Boxe Kids','kids'],['sunday','13:00','Boxe Libre','combat'],['monday','13:00','Boxe Libre','combat'],['tuesday','13:00','Lutte Kids','kids'],['wednesday','13:00','Boxe Libre','combat'],['thursday','13:00','Boxe Libre','combat'],
  ['friday','14:30','Boxe Kids','kids'],['saturday','14:30','Aérobic Kids','kids'],['sunday','14:30','Boxe Fille','women'],['monday','14:30','Zumba','fitness'],['tuesday','14:30','Boxe Fille','women'],['wednesday','14:30','Libre','fitness'],['thursday','14:30','Aérobic Kids','kids'],
  ['friday','16:00','Taekwondo','kids'],['saturday','16:00','Aérobic','fitness'],['sunday','16:00','Zumba','fitness'],['monday','16:00','Aérobic','fitness'],['tuesday','16:00','Gymnastique','fitness'],['wednesday','16:00','Tabata','fitness'],['thursday','16:00','Aérobic','fitness'],
  ['friday','17:30','Boxe Loisirs','combat'],['saturday','17:30','Boxe Compétitif','combat'],['sunday','17:30','MMA','combat'],['monday','17:30','MMA','combat'],['tuesday','17:30','Boxe Compétitif','combat'],['wednesday','17:30','MMA','combat'],['thursday','17:30','Boxe Compétitif','combat'],
  ['friday','19:00','Judo','combat'],['saturday','19:00','Boxe Adulte','combat'],['sunday','19:00','Judo','combat'],['monday','19:00','Lutte','combat'],['tuesday','19:00','Judo','combat'],['wednesday','19:00','Boxe Adulte','combat'],['thursday','19:00','Lutte','combat'],
  ['friday','20:30','VIP 2','vip'],['saturday','20:30','Jujutsu','combat'],['sunday','20:30','Self Defense','combat'],['monday','20:30','Jujutsu','combat'],['tuesday','20:30','Boxe Loisirs','combat'],['wednesday','20:30','Self Defense','combat'],['thursday','20:30','VIP 4','vip'],
  ['friday','21:30','VIP 3','vip'],['saturday','21:30','VIP 1','vip'],['sunday','21:30','VIP 4','vip'],['monday','21:30','VIP 2','vip'],['tuesday','21:30','VIP 1','vip'],['wednesday','21:30','VIP 3','vip'],['thursday','21:30','VIP 2','vip']
].map(([day,time,name,category])=>({day,time,name,category}));

const i18n = {
  en:{
    navSchedule:'Schedule',navTeam:'Team',navLocation:'Location',joinNow:'Join now',
    heroLabel:'AA SPORT · ANNABA',heroLine1:'TRAIN',heroLine2:'WITHOUT LIMITS.',heroDesc:'Boxing, MMA, judo, wrestling, self-defense, kids programs and fitness — all under one roof in the heart of Annaba.',viewSchedule:'View schedule',findUs:'Find us',sessionsWeek:'weekly session types',openWeek:'training days',firstSession:'first session',heroCaptionEyebrow:'MULTI-DISCIPLINE TRAINING',heroCaption:'Built for every level.',
    scheduleKicker:'Weekly timetable',scheduleTitle:'FIND YOUR <em>SESSION.</em>',scheduleIntro:'Pick a day and training type. The schedule updates instantly so you can get straight to the session you want.',quickPick:'What do you want to train?',filterLabel:'Category',filterAll:'All programs',filterKids:'Kids',filterWomen:'Women / Girls',filterCombat:'Combat',filterFitness:'Fitness',filterVip:'VIP',noSessions:'No sessions match these filters.',summaryAll:'Showing all weekly sessions',summaryFiltered:'Showing {count} matching sessions',
    teamKicker:'AA Sport team',teamTitle:'BUILT AROUND <em>REAL TRAINING.</em>',teamIntro:'Different disciplines need different coaching. AA Sport brings combat, conditioning and youth training together without turning the team section into a wall of random names.',boxingCoach:'BOXING · COMPETITION',abdouText:'Boxing-focused coaching for technique, conditioning and competitive sessions.',seeBoxingTimes:'See combat times',hamidText:'Technical wrestling sessions focused on movement, control and development.',specialists:'SPECIALIST TRAINING',teamRangeTitle:'One team. More ways to train.',teamRangeText:'Tap a discipline to jump straight to matching sessions.',selfDefenseChip:'SELF DEFENSE',kidsChip:'KIDS',
    locationKicker:'Visit AA Sport',locationTitle:'YOUR NEXT SESSION <em>STARTS HERE.</em>',locationText:'13 Av. Colonel Amirouche, Annaba 23000, Hippone, Annaba, Algeria.',addressLabel:'ADDRESS',openMaps:'Open in Google Maps',
    contactKicker:'Ready to train?',contactTitle:'STEP IN. <em>LEVEL UP.</em>',contactText:'For prices, registration and more information, contact AA Sport directly on Instagram.',messageInstagram:'Message on Instagram',checkTimetable:'Check timetable',rights:'All rights reserved.',backTop:'Back to top'
  },
  fr:{
    navSchedule:'Planning',navTeam:'Équipe',navLocation:'Adresse',joinNow:'Nous rejoindre',
    heroLabel:'AA SPORT · ANNABA',heroLine1:'ENTRAÎNE-TOI',heroLine2:'SANS LIMITES.',heroDesc:'Boxe, MMA, judo, lutte, self-défense, programmes enfants et fitness — tout au même endroit, au cœur d’Annaba.',viewSchedule:'Voir le planning',findUs:'Nous trouver',sessionsWeek:'types de séances',openWeek:'jours d’entraînement',firstSession:'première séance',heroCaptionEyebrow:'ENTRAÎNEMENT MULTIDISCIPLINAIRE',heroCaption:'Pour tous les niveaux.',
    scheduleKicker:'Planning hebdomadaire',scheduleTitle:'TROUVE TA <em>SÉANCE.</em>',scheduleIntro:'Choisis un jour et un type d’entraînement. Le planning se met à jour instantanément pour trouver rapidement ta séance.',quickPick:'Tu veux entraîner quoi ?',filterLabel:'Catégorie',filterAll:'Tous les programmes',filterKids:'Enfants',filterWomen:'Femmes / Filles',filterCombat:'Combat',filterFitness:'Fitness',filterVip:'VIP',noSessions:'Aucune séance ne correspond à ces filtres.',summaryAll:'Toutes les séances de la semaine',summaryFiltered:'{count} séances correspondent à ta recherche',
    teamKicker:'L’équipe AA Sport',teamTitle:'UNE ÉQUIPE POUR <em>LE VRAI TRAVAIL.</em>',teamIntro:'Chaque discipline demande un encadrement différent. AA Sport réunit combat, conditionnement et entraînement des jeunes dans une seule salle.',boxingCoach:'BOXE · COMPÉTITION',abdouText:'Coaching de boxe axé sur la technique, le conditionnement et la préparation compétitive.',seeBoxingTimes:'Voir les horaires combat',hamidText:'Séances de lutte axées sur la technique, le mouvement, le contrôle et la progression.',specialists:'ENTRAÎNEMENTS SPÉCIALISÉS',teamRangeTitle:'Une équipe. Plusieurs façons de progresser.',teamRangeText:'Appuie sur une discipline pour afficher directement les séances correspondantes.',selfDefenseChip:'SELF-DÉFENSE',kidsChip:'ENFANTS',
    locationKicker:'Venir à AA Sport',locationTitle:'TA PROCHAINE SÉANCE <em>COMMENCE ICI.</em>',locationText:'13 Av. Colonel Amirouche, Annaba 23000, Hippone, Annaba, Algérie.',addressLabel:'ADRESSE',openMaps:'Ouvrir dans Google Maps',
    contactKicker:'Prêt à t’entraîner ?',contactTitle:'ENTRE. <em>PASSE AU NIVEAU SUPÉRIEUR.</em>',contactText:'Pour les tarifs, l’inscription et plus d’informations, contacte AA Sport directement sur Instagram.',messageInstagram:'Écrire sur Instagram',checkTimetable:'Voir le planning',rights:'Tous droits réservés.',backTop:'Retour en haut'
  },
  ar:{
    navSchedule:'البرنامج',navTeam:'الفريق',navLocation:'المكان',joinNow:'سجّل معنا',
    heroLabel:'AA SPORT · عنابة',heroLine1:'تدرّب',heroLine2:'بلا حدود.',heroDesc:'بوكس، MMA، جيدو، مصارعة، دفاع عن النفس، حصص للصغار ولياقة — كامل في بلاصة وحدة في قلب عنابة.',viewSchedule:'شوف البرنامج',findUs:'لقانا',sessionsWeek:'أنواع حصص في الأسبوع',openWeek:'أيام تدريب',firstSession:'أول حصة',heroCaptionEyebrow:'تدريب متعدد الرياضات',heroCaption:'لكل مستوى كاين بلاصتو.',
    scheduleKicker:'برنامج الأسبوع',scheduleTitle:'لقى <em>الحصة تاعك.</em>',scheduleIntro:'اختار النهار ونوع التدريب، والبرنامج يتبدل مباشرة باش تلقى الحصة لي تحتاجها بلا تعقيد.',quickPick:'واش حاب تتمرن؟',filterLabel:'الفئة',filterAll:'كل الحصص',filterKids:'الصغار',filterWomen:'نساء / بنات',filterCombat:'رياضات قتالية',filterFitness:'لياقة',filterVip:'VIP',noSessions:'ماكان حتى حصة توافق هاذ الفيلتر.',summaryAll:'هاذي كامل حصص الأسبوع',summaryFiltered:'لقينا {count} حصص توافق اختيارك',
    teamKicker:'فريق AA Sport',teamTitle:'فريق مبني على <em>تدريب حقيقي.</em>',teamIntro:'كل رياضة تحتاج تدريبها الخاص. في AA Sport تلقى رياضات قتالية، لياقة، وحصص للصغار كامل في نفس القاعة.',boxingCoach:'بوكس · منافسة',abdouText:'تدريب بوكس مركز على التقنية، اللياقة والتحضير للمنافسات.',seeBoxingTimes:'شوف أوقات القتال',hamidText:'حصص مصارعة مركزة على التقنية، الحركة، التحكم والتطور.',specialists:'تدريب متخصص',teamRangeTitle:'فريق واحد، طرق كثيرة باش تتطور.',teamRangeText:'اضغط على الرياضة باش تروح مباشرة للحصص تاعها.',selfDefenseChip:'دفاع عن النفس',kidsChip:'الصغار',
    locationKicker:'زور AA Sport',locationTitle:'الحصة الجاية <em>تبدا من هنا.</em>',locationText:'13 شارع العقيد عميروش، عنابة 23000، الجزائر.',addressLabel:'العنوان',openMaps:'افتح في Google Maps',
    contactKicker:'واجد تتمرن؟',contactTitle:'ادخل. <em>وطلع المستوى.</em>',contactText:'للأسعار، التسجيل ومعلومات أكثر، تواصل مع AA Sport مباشرة في Instagram.',messageInstagram:'ابعث في Instagram',checkTimetable:'شوف البرنامج',rights:'جميع الحقوق محفوظة.',backTop:'اطلع للفوق'
  }
};

let currentLang = localStorage.getItem('aa-lang') || 'en';
if(!i18n[currentLang]) currentLang = 'en';
let selectedDay = 'all';
let selectedCategory = 'all';

function localizedName(name){
  if(currentLang === 'en') return name;
  return names[name]?.[currentLang] || name;
}

function formatTime(time){
  const [h,m] = time.split(':').map(Number);
  if(currentLang === 'en'){
    const suffix = h >= 12 ? 'PM' : 'AM';
    const hour = h % 12 || 12;
    return `${hour}:${String(m).padStart(2,'0')} ${suffix}`;
  }
  return time;
}

function renderQuickPicks(){
  const wrap = document.getElementById('quickPicks');
  if(!wrap) return;
  wrap.innerHTML = categoryQuick[currentLang].map(([value,label]) => `<button class="quick-pick ${selectedCategory===value?'active':''}" data-category="${value}">${label}</button>`).join('');
  wrap.querySelectorAll('.quick-pick').forEach(btn=>btn.addEventListener('click',()=>{
    selectedCategory = btn.dataset.category;
    const select = document.getElementById('categoryFilter');
    if(select) select.value = selectedCategory;
    renderQuickPicks();
    renderSchedule();
  }));
}

function renderDayFilters(){
  const wrap = document.getElementById('dayFilters');
  if(!wrap) return;
  const allDays = ['all',...DAYS];
  wrap.innerHTML = allDays.map(day=>`<button class="day-filter ${selectedDay===day?'active':''}" data-day="${day}">${dayLabels[currentLang][day]}</button>`).join('');
  wrap.querySelectorAll('.day-filter').forEach(btn=>btn.addEventListener('click',()=>{
    selectedDay = btn.dataset.day;
    renderDayFilters();
    renderSchedule();
  }));
}

function renderSchedule(){
  const grid = document.getElementById('scheduleGrid');
  if(!grid) return;
  const filtered = schedule.filter(s=>(selectedDay==='all'||s.day===selectedDay)&&(selectedCategory==='all'||s.category===selectedCategory));
  const summary = document.getElementById('scheduleSummary');
  if(summary){
    summary.textContent = (selectedDay==='all'&&selectedCategory==='all')
      ? i18n[currentLang].summaryAll
      : i18n[currentLang].summaryFiltered.replace('{count}',filtered.length);
  }
  if(!filtered.length){
    grid.innerHTML = `<div class="empty-state">${i18n[currentLang].noSessions}</div>`;
    return;
  }
  grid.innerHTML = filtered.map((s,index)=>`
    <article class="session-card" style="animation-delay:${Math.min(index*20,180)}ms">
      <div class="session-top">
        <div><div class="session-time">${formatTime(s.time)}</div><div class="session-day">${dayLabels[currentLang][s.day]}</div></div>
        <span class="session-tag ${s.category==='vip'?'vip':''}">${categoryLabels[currentLang][s.category]}</span>
      </div>
      <div class="session-name">${localizedName(s.name)}</div>
    </article>`).join('');
}

function translateTicker(){
  const spans = document.querySelectorAll('.ticker-track span');
  const labels = sportTicker[currentLang];
  spans.forEach((span,index)=>{ span.textContent = labels[index % labels.length]; });
}

function translateTeamDisciplineButtons(){
  const buttons = document.querySelectorAll('.discipline-cloud button');
  const labels = teamDisciplineLabels[currentLang];
  buttons.forEach((btn,index)=>{ btn.textContent = labels[index] || btn.textContent; });
  const role = document.querySelector('.coach-line span');
  if(role) role.textContent = currentLang==='ar' ? 'مصارعة' : 'LUTTE';
}

function applyLanguage(lang){
  currentLang = lang;
  localStorage.setItem('aa-lang',lang);
  document.documentElement.lang = lang === 'ar' ? 'ar' : lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===lang));
  translateTicker();
  translateTeamDisciplineButtons();
  renderQuickPicks();
  renderDayFilters();
  renderSchedule();
}

function setupNavigation(){
  const menu = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  const nav = document.querySelector('.navigation');
  if(menu && links){
    menu.addEventListener('click',()=>{
      const open = links.classList.toggle('open');
      menu.classList.toggle('open',open);
      menu.setAttribute('aria-expanded',String(open));
    });
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      links.classList.remove('open');menu.classList.remove('open');menu.setAttribute('aria-expanded','false');
    }));
  }
  window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',window.scrollY>30),{passive:true});
}

function setupReveal(){
  const elements = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){elements.forEach(el=>el.classList.add('visible'));return;}
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
    });
  },{threshold:.1,rootMargin:'0px 0px -35px'});
  elements.forEach(el=>observer.observe(el));
}

function setupScrollProgress(){
  const bar = document.getElementById('scrollProgress');
  if(!bar) return;
  const update=()=>{
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${max>0 ? Math.min(100,(window.scrollY/max)*100) : 0}%`;
  };
  window.addEventListener('scroll',update,{passive:true});
  update();
}

function setupCursorGlow(){
  const glow = document.getElementById('cursorGlow');
  if(!glow || !matchMedia('(pointer:fine)').matches) return;
  window.addEventListener('pointermove',e=>{
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  },{passive:true});
}

function setupMagneticButtons(){
  if(!matchMedia('(pointer:fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.magnetic').forEach(el=>{
    el.addEventListener('pointermove',e=>{
      const r = el.getBoundingClientRect();
      const x = (e.clientX-r.left-r.width/2)*.12;
      const y = (e.clientY-r.top-r.height/2)*.12;
      el.style.transform = `translate(${x}px,${y}px)`;
    });
    el.addEventListener('pointerleave',()=>el.style.transform='');
  });
}

function jumpToCategory(category){
  selectedCategory = category;
  selectedDay = 'all';
  const select = document.getElementById('categoryFilter');
  if(select) select.value = category;
  renderQuickPicks();
  renderDayFilters();
  renderSchedule();
  document.getElementById('schedule')?.scrollIntoView({behavior:'smooth',block:'start'});
}

function setupInteractiveJumps(){
  document.querySelectorAll('[data-scroll]').forEach(el=>el.addEventListener('click',()=>document.querySelector(el.dataset.scroll)?.scrollIntoView({behavior:'smooth'})));
  document.querySelectorAll('[data-category-jump]').forEach(el=>el.addEventListener('click',()=>jumpToCategory(el.dataset.categoryJump)));
  const select = document.getElementById('categoryFilter');
  select?.addEventListener('change',e=>{
    selectedCategory = e.target.value;
    renderQuickPicks();
    renderSchedule();
  });
}

document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>applyLanguage(btn.dataset.lang)));
document.getElementById('year').textContent = new Date().getFullYear();

setupNavigation();
setupReveal();
setupScrollProgress();
setupCursorGlow();
setupMagneticButtons();
setupInteractiveJumps();
applyLanguage(currentLang);
