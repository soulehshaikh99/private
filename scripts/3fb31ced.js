document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector("#c"),e=document.querySelector("#h"),a=document.querySelector("#t"),s=document.querySelector("#n"),i=document.querySelector("#r"),n=document.querySelector("#i"),r=document.querySelector("#s"),d=document.querySelector("#o"),o=document.querySelector("#u"),c=document.querySelector("#a"),u=document.querySelector("#f"),l=document.querySelector("#l"),b=document.querySelector("#g"),m=document.querySelector("#y"),k=document.querySelector("#b"),p=document.querySelector("#p"),A=document.querySelector("#d"),g=document.querySelector("#v"),v=document.querySelector("#m");function h(t,e="desktop"){switch(t){case"tools":"desktop"===e?(n.setAttribute("aria-expanded","true"),r.setAttribute("data-state","visible")):(p.setAttribute("aria-expanded","true"),A.setAttribute("data-state","visible"));break;case"settings":"desktop"===e?(o.setAttribute("aria-expanded","true"),c.setAttribute("data-state","visible")):(g.setAttribute("aria-expanded","true"),v.setAttribute("data-state","visible"))}}function f(t,e="desktop"){switch(t){case"tools":"desktop"===e?(n.setAttribute("aria-expanded","false"),r.setAttribute("data-state","invisible")):(p.setAttribute("aria-expanded","false"),A.setAttribute("data-state","invisible"));break;case"settings":"desktop"===e?(o.setAttribute("aria-expanded","false"),c.setAttribute("data-state","invisible")):(g.setAttribute("aria-expanded","false"),v.setAttribute("data-state","invisible"));break;default:"desktop"===e?(n.setAttribute("aria-expanded","false"),r.setAttribute("data-state","invisible"),o.setAttribute("aria-expanded","false"),c.setAttribute("data-state","invisible")):"mobile"===e?(p.setAttribute("aria-expanded","false"),A.setAttribute("data-state","invisible"),g.setAttribute("aria-expanded","false"),v.setAttribute("data-state","invisible")):(n.setAttribute("aria-expanded","false"),r.setAttribute("data-state","invisible"),o.setAttribute("aria-expanded","false"),c.setAttribute("data-state","invisible"),p.setAttribute("aria-expanded","false"),A.setAttribute("data-state","invisible"),g.setAttribute("aria-expanded","false"),v.setAttribute("data-state","invisible"))}}function y(){try{return function(t){try{"string"==typeof t&&(t=JSON.parse(t))}catch(e){t={}}return t}(sessionStorage.getItem("search-data"))}catch(t){return null}}t.addEventListener("click",(function(t){"open"===e.getAttribute("data-state")?(this.setAttribute("data-state","inactive"),e.setAttribute("data-state","close")):(this.setAttribute("data-state","active"),e.setAttribute("data-state","open"))})),a.addEventListener("mouseenter",(function(){f("all","desktop")})),s.addEventListener("mouseenter",(function(){f("all","desktop")})),i.addEventListener("mouseenter",(function(){f("all","desktop")})),n.addEventListener("mouseenter",(function(t){f("all","desktop"),h("tools","desktop")})),r.addEventListener("mouseleave",(function(t){f("tools","desktop")})),n.addEventListener("click",(function(t){t.stopPropagation(),"true"===this.getAttribute("aria-expanded")?f("tools","desktop"):h("tools","desktop")})),d.addEventListener("mouseenter",(function(){f("all","desktop")})),o.addEventListener("mouseenter",(function(t){f("all","desktop"),h("settings","desktop")})),c.addEventListener("mouseleave",(function(t){f("settings","desktop")})),o.addEventListener("click",(function(t){t.stopPropagation(),"true"===this.getAttribute("aria-expanded")?f("settings","desktop"):h("settings","desktop")})),p.addEventListener("click",(function(t){"true"===this.getAttribute("aria-expanded")?f("tools","mobile"):(f("all","mobile"),h("tools","mobile"))})),g.addEventListener("click",(function(t){"true"===this.getAttribute("aria-expanded")?f("settings","mobile"):(f("all","mobile"),h("settings","mobile"))})),l.addEventListener("change",(function(t){const e=t.target.checked;e?document.querySelector(".ss").setAttribute("data-sticky-header","true"):document.querySelector(".ss").setAttribute("data-sticky-header","false"),window.localStorage.setItem("sticky-header",e)})),m.addEventListener("change",(function(t){const e=t.target.checked;e?document.querySelector(".ss").setAttribute("data-sticky-header","true"):document.querySelector(".ss").setAttribute("data-sticky-header","false"),window.localStorage.setItem("sticky-header",e)})),u.addEventListener("change",(function(t){window.localStorage.setItem("nq",t.target.checked),t.target.checked&&window.scrollY>200?k.classList.add("nz"):t.target.checked||k.classList.remove("nz")})),b.addEventListener("change",(function(t){window.localStorage.setItem("nq",t.target.checked),t.target.checked&&window.scrollY>200?k.classList.add("nz"):t.target.checked||k.classList.remove("nz")})),k.addEventListener("click",(function(t){t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){"true"===window.localStorage.getItem("nq")&&(window.scrollY>200?k.classList.add("nz"):k.classList.remove("nz"))})),document.addEventListener("keydown",(function(a){"Escape"===a.key&&(f("all"),t.setAttribute("data-state","inactive"),e.setAttribute("data-state","close"),headerUI.setAttribute("data-mobile-menu","close"))})),document.addEventListener("click",(function(t){"true"===n.getAttribute("aria-expanded")&&(n.contains(t.target)||r.contains(t.target)||f("tools","desktop")),"true"===o.getAttribute("aria-expanded")&&(o.contains(t.target)||c.contains(t.target)||f("settings","desktop"))})),null===window.localStorage.getItem("nq")||"true"===window.localStorage.getItem("nq")?(u.setAttribute("checked",""),b.setAttribute("checked",""),null===window.localStorage.getItem("nq")&&window.localStorage.setItem("nq",!0)):(u.removeAttribute("checked"),b.removeAttribute("checked")),"true"===window.localStorage.getItem("sticky-header")?(l.setAttribute("checked",""),m.setAttribute("checked",""),document.querySelector(".ss").setAttribute("data-sticky-header","true")):(l.removeAttribute("checked"),m.removeAttribute("checked"),document.querySelector(".ss").setAttribute("data-sticky-header","false")),async function(){let t=y();t||(t=await async function(){let t=[];try{const e=await fetch("/data/search.json",{method:"GET",headers:{"Content-Type":"application/json"}});t=await e.json()}catch(t){}return t}(),t.length&&sessionStorage.setItem("search-data",JSON.stringify(t)))}()}));