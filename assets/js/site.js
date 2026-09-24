(function(){
  function cleanPath(){
    return window.location.pathname.replace(/index\.html$/,'');
  }
  function isActive(prefix){
    var path=cleanPath();
    return path===prefix || (prefix!=='/' && path.indexOf(prefix)===0);
  }
  function ext(url){
    return url.indexOf('http')===0 ? ' target="_blank" rel="noopener"' : '';
  }
  function navItem(label,href,active,items){
    var links=items.map(function(item){
      return '<a href="'+item[1]+'"'+ext(item[1])+'>'+item[0]+'</a>';
    }).join('');
    return '<div class="nav-item">'+
      '<a class="nav-link '+(active?'active':'')+'" href="'+href+'">'+label+'<i data-lucide="chevron-down" aria-hidden="true"></i></a>'+
      '<div class="dropdown">'+links+'</div>'+
    '</div>';
  }
  function headerHtml(){
    return '<a class="skip-link" href="#main-content">Skip to main content</a>'+
    '<div class="utility-bar"><div class="container utility-inner">'+
      '<a href="https://logins2.renweb.com/" target="_blank" rel="noopener">Family Portal</a>'+
      '<a href="https://calendar.google.com/calendar/embed?ctz=America/New_York&src=fyi@unityschool.com" target="_blank" rel="noopener">Calendar</a>'+
      '<a href="https://unityschool.nutrislice.com/menu/unity-school/lunch/" target="_blank" rel="noopener">Lunch Menu</a>'+
      '<a href="/athletics/">Athletics</a><a href="/contact/">Contact</a>'+
    '</div></div>'+
    '<header class="site-header"><div class="container header-inner">'+
      '<a class="brand" href="/" aria-label="Unity School home"><span class="brand-mark" aria-hidden="true">U</span><span class="brand-copy"><strong>Unity School</strong><span>Delray Beach, Florida</span></span></a>'+
      '<nav class="main-nav" aria-label="Primary navigation">'+
        navItem('About','/about/',isActive('/about/'),[
          ['Mission & Vision','/about/#mission'],['History','/about/#history'],['Leadership','/about/#leadership'],['Facilities','/about/#facilities'],['Contact','/contact/']
        ])+
        navItem('Academics','/academics/',isActive('/academics/'),[
          ['Montessori Preschool','/academics/montessori-preschool/'],['Elementary','/academics/elementary/'],['Middle School','/academics/middle-school/'],['Lessons in Living','/academics/lessons-in-living/']
        ])+
        navItem('Student Life','/student-life/',isActive('/student-life/'),[
          ['Campus Life','/student-life/'],['Athletics','/athletics/'],['Arts','/student-life/#arts'],['Traditions','/student-life/#traditions']
        ])+
        navItem('Admissions','/admissions/',isActive('/admissions/'),[
          ['Admissions Process','/admissions/#process'],['Tuition','/admissions/#tuition'],['Financial Assistance','/admissions/#aid'],['Schedule a Tour','/contact/#tour']
        ])+
        navItem('Families','/families/',isActive('/families/'),[
          ['Family Dashboard','/families/'],['Calendar','https://calendar.google.com/calendar/embed?ctz=America/New_York&src=fyi@unityschool.com'],['Lunch','https://unityschool.nutrislice.com/menu/unity-school/lunch/'],['Resources','/families/#resources']
        ])+
        '<div class="nav-item"><a class="nav-link '+(isActive('/support-unity/')?'active':'')+'" href="/support-unity/">Support Unity</a></div>'+
      '</nav>'+
      '<div class="header-actions"><button class="search-button" type="button" aria-label="Search Unity School" data-open-search><i data-lucide="search"></i></button><a class="btn btn-gold" href="/contact/#tour">Schedule a Tour</a></div>'+
    '</div></header>'+
    '<dialog class="search-dialog" id="siteSearch"><div class="search-panel">'+
      '<header><h2>Search Unity School</h2><button class="search-close" type="button" data-close-search aria-label="Close search"><i data-lucide="x"></i></button></header>'+
      '<form class="search-form" action="https://unityschool.com/" method="get"><input type="search" name="s" placeholder="What are you looking for?" aria-label="Search"><button class="btn btn-blue" type="submit">Search</button></form>'+
    '</div></dialog>';
  }
  function footerHtml(){
    return '<footer class="site-footer">'+
      '<div class="container footer-main">'+
        '<div class="footer-brand"><a class="brand" href="/"><span class="brand-mark" aria-hidden="true">U</span><span class="brand-copy"><strong style="color:white">Unity School</strong><span>Delray Beach, Florida</span></span></a><p>Educating the entire child—mind, body and spirit—in a safe, nurturing learning community.</p><p>101 NW 22nd Street<br>Delray Beach, FL 33444<br><a href="tel:+15612764414">561-276-4414</a></p></div>'+
        '<div class="footer-column"><h3>Discover</h3><a href="/about/">About Unity</a><a href="/academics/">Academics</a><a href="/student-life/">Student Life</a><a href="/athletics/">Athletics</a></div>'+
        '<div class="footer-column"><h3>Admissions</h3><a href="/admissions/">Admissions</a><a href="/admissions/#tuition">Tuition</a><a href="/contact/#tour">Schedule a Tour</a><a href="https://ud-fl.client.renweb.com/oa/index.cfm?memberid=1526" target="_blank" rel="noopener">Apply</a></div>'+
        '<div class="footer-column"><h3>Families</h3><a href="/families/">Family Dashboard</a><a href="https://logins2.renweb.com/" target="_blank" rel="noopener">FACTS / RenWeb</a><a href="https://unityschool.nutrislice.com/menu/unity-school/lunch/" target="_blank" rel="noopener">Lunch Menu</a><a href="/contact/">Contact</a></div>'+
      '</div>'+
      '<div class="container footer-bottom"><span>© 2026 Unity School. Redesign staging build.</span><span>Delray Beach, Florida</span></div>'+
    '</footer>';
  }
  document.addEventListener('DOMContentLoaded',function(){
    var h=document.getElementById('site-header');
    var f=document.getElementById('site-footer');
    if(h) h.innerHTML=headerHtml();
    if(f) f.innerHTML=footerHtml();
    if(window.lucide) window.lucide.createIcons();

    var dialog=document.getElementById('siteSearch');
    var open=document.querySelector('[data-open-search]');
    var close=document.querySelector('[data-close-search]');
    if(open && dialog) open.addEventListener('click',function(){dialog.showModal();});
    if(close && dialog) close.addEventListener('click',function(){dialog.close();});
    if(dialog) dialog.addEventListener('click',function(e){if(e.target===dialog) dialog.close();});

    document.querySelectorAll('.accordion-trigger').forEach(function(trigger){
      trigger.addEventListener('click',function(){
        var item=trigger.closest('.accordion-item');
        item.classList.toggle('open');
        trigger.setAttribute('aria-expanded',item.classList.contains('open')?'true':'false');
      });
    });

    var resourceSearch=document.getElementById('resourceSearch');
    if(resourceSearch){
      var cards=Array.prototype.slice.call(document.querySelectorAll('.resource-card'));
      var empty=document.getElementById('noResourceResults');
      resourceSearch.addEventListener('input',function(){
        var q=resourceSearch.value.trim().toLowerCase();
        var matches=0;
        cards.forEach(function(card){
          var hay=((card.dataset.resource||'')+' '+card.textContent).toLowerCase();
          var show=!q || hay.indexOf(q)!==-1;
          card.classList.toggle('is-hidden',!show);
          if(show) matches++;
        });
        if(empty) empty.hidden=matches!==0;
      });
    }

    var contactForm=document.getElementById('unityContactForm');
    if(contactForm){
      contactForm.addEventListener('submit',function(e){
        e.preventDefault();
        function val(id){var el=document.getElementById(id);return el?el.value.trim():'';}
        var subject=encodeURIComponent('Website Inquiry: '+val('contactSubject'));
        var body=encodeURIComponent('Name: '+val('contactFirstName')+' '+val('contactLastName')+'\nEmail: '+val('contactEmail')+'\n\n'+val('contactMessage'));
        window.location.href='mailto:info@unityschool.com?subject='+subject+'&body='+body;
      });
    }
  });
})();