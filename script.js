(function(){
  var t=document.getElementById('themeBtn');
  var root=document.documentElement;
  var mode=localStorage.getItem('djkoike')||'dark';
  apply(mode);
  t.addEventListener('click',function(){var m=localStorage.getItem('djkoike')||'dark';apply(m==='dark'?'light':'dark');});
  function apply(m){if(m==='light'){root.style.setProperty('--bg','#f6f8f9');root.style.setProperty('--text','#0b1a1f');localStorage.setItem('djkoike','light');}else{root.style.setProperty('--bg','#0a0f12');root.style.setProperty('--text','#eaf2f4');localStorage.setItem('djkoike','dark');}}
})();