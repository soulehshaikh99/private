document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector("#u"),e=document.querySelector("#a"),a=document.querySelector("#te"),s=document.querySelector("#tt"),i=document.querySelector("#k"),r=document.querySelector("#j"),n=document.querySelector("#v"),o=document.querySelector("#tn"),d=document.querySelector("#l"),c=document.querySelector("#h"),u=document.querySelector("#n"),l=document.querySelector("#m"),b=document.querySelector("#r"),m=document.querySelector("#g"),p=document.querySelector("#t"),k=document.querySelector("#_"),g=document.querySelector("#q"),A=document.querySelector("#c"),h=document.querySelector("#p");function f(t,e="desktop"){switch(t){case"tools":"desktop"===e?(i.setAttribute("aria-expanded","true"),r.setAttribute("data-state","visible")):(k.setAttribute("aria-expanded","true"),g.setAttribute("data-state","visible"));break;case"settings":"desktop"===e?(d.setAttribute("aria-expanded","true"),c.setAttribute("data-state","visible")):(A.setAttribute("aria-expanded","true"),h.setAttribute("data-state","visible"))}}function v(t,e="desktop"){switch(t){case"tools":"desktop"===e?(i.setAttribute("aria-expanded","false"),r.setAttribute("data-state","invisible")):(k.setAttribute("aria-expanded","false"),g.setAttribute("data-state","invisible"));break;case"settings":"desktop"===e?(d.setAttribute("aria-expanded","false"),c.setAttribute("data-state","invisible")):(A.setAttribute("aria-expanded","false"),h.setAttribute("data-state","invisible"));break;default:"desktop"===e?(i.setAttribute("aria-expanded","false"),r.setAttribute("data-state","invisible"),d.setAttribute("aria-expanded","false"),c.setAttribute("data-state","invisible")):"mobile"===e?(k.setAttribute("aria-expanded","false"),g.setAttribute("data-state","invisible"),A.setAttribute("aria-expanded","false"),h.setAttribute("data-state","invisible")):(i.setAttribute("aria-expanded","false"),r.setAttribute("data-state","invisible"),d.setAttribute("aria-expanded","false"),c.setAttribute("data-state","invisible"),k.setAttribute("aria-expanded","false"),g.setAttribute("data-state","invisible"),A.setAttribute("aria-expanded","false"),h.setAttribute("data-state","invisible"))}}t.addEventListener("click",(function(t){"open"===e.getAttribute("data-state")?(f("tools","mobile"),v("settings","mobile"),this.setAttribute("data-state","inactive"),e.setAttribute("data-state","close")):(this.setAttribute("data-state","active"),e.setAttribute("data-state","open"))})),a.addEventListener("mouseenter",(function(){v("all","desktop")})),s.addEventListener("mouseenter",(function(){v("all","desktop")})),i.addEventListener("mouseenter",(function(t){v("all","desktop"),f("tools","desktop")})),r.addEventListener("mouseleave",(function(t){v("tools","desktop")})),i.addEventListener("click",(function(t){t.stopPropagation(),"true"===this.getAttribute("aria-expanded")?v("tools","desktop"):f("tools","desktop")})),n.addEventListener("mouseenter",(function(){v("all","desktop")})),o.addEventListener("mouseenter",(function(){v("all","desktop")})),d.addEventListener("mouseenter",(function(t){v("all","desktop"),f("settings","desktop")})),c.addEventListener("mouseleave",(function(t){v("settings","desktop")})),d.addEventListener("click",(function(t){t.stopPropagation(),"true"===this.getAttribute("aria-expanded")?v("settings","desktop"):f("settings","desktop")})),k.addEventListener("click",(function(t){"true"===this.getAttribute("aria-expanded")?v("tools","mobile"):f("tools","mobile")})),A.addEventListener("click",(function(t){"true"===this.getAttribute("aria-expanded")?v("settings","mobile"):f("settings","mobile")})),l.addEventListener("change",(function(t){const e=t.target.checked;e?document.querySelector(".nq").setAttribute("data-sticky-header","true"):document.querySelector(".nq").setAttribute("data-sticky-header","false"),window.localStorage.setItem("sticky-header",e)})),m.addEventListener("change",(function(t){const e=t.target.checked;e?document.querySelector(".nq").setAttribute("data-sticky-header","true"):document.querySelector(".nq").setAttribute("data-sticky-header","false"),window.localStorage.setItem("sticky-header",e)})),u.addEventListener("change",(function(t){window.localStorage.setItem("nz",t.target.checked),t.target.checked&&window.scrollY>200?p.classList.add("re"):t.target.checked||p.classList.remove("re")})),b.addEventListener("change",(function(t){window.localStorage.setItem("nz",t.target.checked),t.target.checked&&window.scrollY>200?p.classList.add("re"):t.target.checked||p.classList.remove("re")})),p.addEventListener("click",(function(t){t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){"true"===window.localStorage.getItem("nz")&&(window.scrollY>200?p.classList.add("re"):p.classList.remove("re"))})),document.addEventListener("keydown",(function(a){"Escape"===a.key&&(v("all"),t.setAttribute("data-state","inactive"),e.setAttribute("data-state","close"),headerUI.setAttribute("data-mobile-menu","close"))})),document.addEventListener("click",(function(t){"true"===i.getAttribute("aria-expanded")&&(i.contains(t.target)||r.contains(t.target)||v("tools","desktop")),"true"===d.getAttribute("aria-expanded")&&(d.contains(t.target)||c.contains(t.target)||v("settings","desktop"))})),null===window.localStorage.getItem("nz")||"true"===window.localStorage.getItem("nz")?(u.setAttribute("checked",""),b.setAttribute("checked",""),null===window.localStorage.getItem("nz")&&window.localStorage.setItem("nz",!0)):(u.removeAttribute("checked"),b.removeAttribute("checked")),"true"===window.localStorage.getItem("sticky-header")?(l.setAttribute("checked",""),m.setAttribute("checked",""),document.querySelector(".nq").setAttribute("data-sticky-header","true")):(l.removeAttribute("checked"),m.removeAttribute("checked"),document.querySelector(".nq").setAttribute("data-sticky-header","false")),async function(){!function(t){const e=new FlexSearch.Index({tokenize:"forward",cache:!0});try{const t=sessionStorage.getItem("search-index");if(!t||0===t.length)throw new Error("Invalid search data found!");const a=JSON.parse(t);for(const[t,s]of Object.entries(a))e.import(t,s)}catch(a){for(let a of t)e.add(a.id,a.title);const s={};e.export(((t,e)=>{s[t]=JSON.parse(e),sessionStorage.setItem("search-index",JSON.stringify(s))}))}}(await async function(){let t=sessionStorage.getItem("search-data");if(t)try{return JSON.parse(t)}catch(t){}try{const t=await fetch("/data/search.json",{method:"GET",headers:{"Content-Type":"application/json"}}),e=await t.json();return sessionStorage.setItem("search-data",JSON.stringify(e)),e}catch(t){return null}}())}()}));