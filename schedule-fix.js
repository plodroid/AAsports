/* AA Sport schedule UX refinements */
(function(){
  if(!document.querySelector('link[href="extra-polish.css"]')){
    const link=document.createElement('link');
    link.rel='stylesheet';
    link.href='extra-polish.css';
    document.head.appendChild(link);
  }

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

  renderPreviewSessions();
  applyLanguage(currentLang);
})();