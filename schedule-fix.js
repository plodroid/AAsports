/* AA Sport schedule UX refinements */
(function(){
  const copy={
    en:{intro:'Pick a day to see every session running that day. Open the full timetable to see the whole week in one place.',note:'Every session for the selected day is shown here. Open the full timetable for the complete week.'},
    fr:{intro:'Choisis un jour pour voir toutes les séances prévues ce jour-là. Ouvre le planning complet pour voir toute la semaine au même endroit.',note:'Toutes les séances du jour sélectionné sont affichées ici. Ouvre le planning complet pour toute la semaine.'},
    ar:{intro:'اختار النهار باش تشوف كامل الحصص تاع ذاك النهار. افتح البرنامج كامل باش تشوف الأسبوع كامل في بلاصة وحدة.',note:'هنا يبانولك كامل حصص النهار لي اخترتو. افتح البرنامج كامل باش تشوف الأسبوع كامل.'}
  };

  if(typeof i18n!=='undefined'){
    Object.entries(copy).forEach(([lang,text])=>{
      if(i18n[lang]){
        i18n[lang].scheduleIntro=text.intro;
        i18n[lang].scheduleNote=text.note;
      }
    });
  }

  renderPreviewSessions=function(){
    const sessions=schedule.filter(s=>s.day===previewDay);
    const grid=document.getElementById('schedulePreview');
    if(!grid)return;
    grid.innerHTML=sessions.length?sessions.map((s,index)=>`<article class="preview-session" style="--session-delay:${index}"><div class="preview-session-top"><span class="preview-session-time">${formatTime(s.time)}</span><span class="preview-session-tag">${localizedCategory(s.category)}</span></div><div class="preview-session-name">${localizedName(s.name)}</div></article>`).join(''):`<div class="empty-state">${t('noSessions')}</div>`;
  };

  const originalOpenSchedule=openSchedule;
  openSchedule=function(category){
    const requested=category||'all';
    if(requested==='all'){
      selectedDay='all';
      selectedCategory='all';
    }
    originalOpenSchedule(requested);
  };

  /* Use the newer Coach Abdou JPG and make the coach feature feel like a real spotlight. */
  const coachImage=document.querySelector('.coach-photo-card img');
  if(coachImage){
    coachImage.src='assets/abdulAtalha.jpg';
    coachImage.alt='Coach Abdou Attala';
  }

  const coachStyle=document.createElement('style');
  coachStyle.textContent=`
    .coach-spotlight{grid-template-columns:minmax(300px,.92fr) minmax(0,1.15fr) minmax(250px,.8fr);gap:30px;align-items:stretch}
    .coach-photo-card{position:relative;z-index:1;min-height:430px;border-radius:28px;overflow:hidden;border:1px solid var(--line-gold);background:#111;box-shadow:0 24px 70px rgba(0,0,0,.32)}
    .coach-photo-card::after{content:"";position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.78),rgba(0,0,0,.08) 58%,transparent 78%),linear-gradient(120deg,rgba(245,200,66,.11),transparent 42%);pointer-events:none}
    .coach-photo-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 28%;transition:transform .9s cubic-bezier(.2,.8,.2,1),filter .4s ease}
    .coach-photo-card:hover img{transform:scale(1.055);filter:saturate(1.06) contrast(1.03)}
    .coach-photo-label{position:absolute;left:16px;right:16px;bottom:16px;z-index:2;display:flex;justify-content:space-between;align-items:center;gap:12px;padding:13px 14px;border-radius:14px;border:1px solid rgba(255,255,255,.14);background:rgba(8,8,8,.62);backdrop-filter:blur(14px)}
    .coach-photo-label span{font-size:.66rem;font-weight:900;letter-spacing:.14em;color:var(--gold)}
    .coach-photo-label small{font-size:.54rem;letter-spacing:.1em;color:#d1c9bb;text-align:right}
    @media(max-width:1040px){.coach-spotlight{grid-template-columns:minmax(280px,.9fr) 1.1fr}.coach-photo-card{min-height:410px}.coach-points{grid-column:1/-1}}
    @media(max-width:760px){.coach-spotlight{grid-template-columns:1fr}.coach-photo-card{min-height:540px}.coach-photo-card img{object-position:center 24%}}
    @media(max-width:480px){.coach-photo-card{min-height:450px;border-radius:22px}.coach-photo-label{align-items:flex-start;flex-direction:column}.coach-photo-label small{text-align:left}}
  `;
  document.head.appendChild(coachStyle);

  renderPreviewSessions();
  applyLanguage(currentLang);
})();