(function(){
  var b=document.getElementById('theme'),r=document.documentElement;
  function cur(){var t=r.getAttribute('data-theme');if(t)return t;return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
  b.addEventListener('click',function(){r.setAttribute('data-theme',cur()==='dark'?'light':'dark');});
})();