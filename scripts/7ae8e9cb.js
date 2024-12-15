document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector("#c"),e=document.querySelector("#h"),a=document.querySelector("#t"),s=document.querySelector("#n"),i=document.querySelector("#r"),n=document.querySelector("#i"),o=document.querySelector("#s"),r=document.querySelector("#o"),d=document.querySelector("#u"),c=document.querySelector("#a"),u=document.querySelector("#f"),l=document.querySelector("#l"),b=document.querySelector("#g"),m=document.querySelector("#y"),p=document.querySelector("#b"),v=document.querySelector("#p"),A=document.querySelector("#d"),k=document.querySelector("#v"),g=document.querySelector("#m");function f(t,e="desktop"){switch(t){case"tools":"desktop"===e?(n.setAttribute("aria-expanded","true"),o.setAttribute("data-state","visible")):(v.setAttribute("aria-expanded","true"),A.setAttribute("data-state","visible"));break;case"settings":"desktop"===e?(d.setAttribute("aria-expanded","true"),c.setAttribute("data-state","visible")):(k.setAttribute("aria-expanded","true"),g.setAttribute("data-state","visible"))}}function h(t,e="desktop"){switch(t){case"tools":"desktop"===e?(n.setAttribute("aria-expanded","false"),o.setAttribute("data-state","invisible")):(v.setAttribute("aria-expanded","false"),A.setAttribute("data-state","invisible"));break;case"settings":"desktop"===e?(d.setAttribute("aria-expanded","false"),c.setAttribute("data-state","invisible")):(k.setAttribute("aria-expanded","false"),g.setAttribute("data-state","invisible"));break;default:"desktop"===e?(n.setAttribute("aria-expanded","false"),o.setAttribute("data-state","invisible"),d.setAttribute("aria-expanded","false"),c.setAttribute("data-state","invisible")):"mobile"===e?(v.setAttribute("aria-expanded","false"),A.setAttribute("data-state","invisible"),k.setAttribute("aria-expanded","false"),g.setAttribute("data-state","invisible")):(n.setAttribute("aria-expanded","false"),o.setAttribute("data-state","invisible"),d.setAttribute("aria-expanded","false"),c.setAttribute("data-state","invisible"),v.setAttribute("aria-expanded","false"),A.setAttribute("data-state","invisible"),k.setAttribute("aria-expanded","false"),g.setAttribute("data-state","invisible"))}}t.addEventListener("click",(function(t){"open"===e.getAttribute("data-state")?(this.setAttribute("data-state","inactive"),e.setAttribute("data-state","close")):(this.setAttribute("data-state","active"),e.setAttribute("data-state","open"))})),a.addEventListener("mouseenter",(function(){h("all","desktop")})),s.addEventListener("mouseenter",(function(){h("all","desktop")})),i.addEventListener("mouseenter",(function(){h("all","desktop")})),n.addEventListener("mouseenter",(function(t){h("all","desktop"),f("tools","desktop")})),o.addEventListener("mouseleave",(function(t){h("tools","desktop")})),n.addEventListener("click",(function(t){t.stopPropagation(),"true"===this.getAttribute("aria-expanded")?h("tools","desktop"):f("tools","desktop")})),r.addEventListener("mouseenter",(function(){h("all","desktop")})),d.addEventListener("mouseenter",(function(t){h("all","desktop"),f("settings","desktop")})),c.addEventListener("mouseleave",(function(t){h("settings","desktop")})),d.addEventListener("click",(function(t){t.stopPropagation(),"true"===this.getAttribute("aria-expanded")?h("settings","desktop"):f("settings","desktop")})),v.addEventListener("click",(function(t){"true"===this.getAttribute("aria-expanded")?h("tools","mobile"):(h("all","mobile"),f("tools","mobile"))})),k.addEventListener("click",(function(t){"true"===this.getAttribute("aria-expanded")?h("settings","mobile"):(h("all","mobile"),f("settings","mobile"))})),l.addEventListener("change",(function(t){const e=t.target.checked;e?document.querySelector(".t").classList.add("n"):document.querySelector(".t").classList.remove("n"),window.localStorage.setItem("sticky-header",e)})),m.addEventListener("change",(function(t){const e=t.target.checked;e?document.querySelector(".t").classList.add("n"):document.querySelector(".t").classList.remove("n"),window.localStorage.setItem("sticky-header",e)})),u.addEventListener("change",(function(t){window.localStorage.setItem("nq",t.target.checked)})),b.addEventListener("change",(function(t){window.localStorage.setItem("nq",t.target.checked)})),p.addEventListener("click",(function(t){t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){"true"===window.localStorage.getItem("nq")&&(window.scrollY>200?p.classList.add("nz"):p.classList.remove("nz"))})),document.addEventListener("keydown",(function(a){"Escape"===a.key&&(h("all"),t.setAttribute("data-state","inactive"),e.setAttribute("data-state","close"))})),document.addEventListener("click",(function(t){"true"===n.getAttribute("aria-expanded")&&(n.contains(t.target)||o.contains(t.target)||h("tools","desktop")),"true"===d.getAttribute("aria-expanded")&&(d.contains(t.target)||c.contains(t.target)||h("settings","desktop"))})),null===window.localStorage.getItem("nq")||"true"===window.localStorage.getItem("nq")?(u.setAttribute("checked",""),b.setAttribute("checked",""),null===window.localStorage.getItem("nq")&&window.localStorage.setItem("nq",!0)):(u.removeAttribute("checked"),b.removeAttribute("checked")),"true"===window.localStorage.getItem("sticky-header")?(l.setAttribute("checked",""),m.setAttribute("checked",""),document.querySelector(".t").classList.add("n")):(l.removeAttribute("checked"),m.removeAttribute("checked"),document.querySelector(".t").classList.remove("n")),async function(){try{const t=await fetch("/api/search-data",{method:"GET",headers:{"Content-Type":"application/json"}}),e=await t.json();console.log(e)}catch(t){console.error(t)}}()}));