document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector("#u"),t=document.querySelector("#a"),a=document.querySelector("#s"),r=document.querySelector("#f"),s=document.querySelector("#j"),i=document.querySelector("#z"),n=document.querySelector("#v"),o=document.querySelector("#m"),d=document.querySelector("#g"),c=d.querySelector(".ro"),u=c.querySelector(".ru"),l=u.querySelector(".ra"),b=l.querySelector(".rc"),v=l.querySelector(".rh"),m=document.querySelector("#c"),f=document.querySelector("#p"),p=document.querySelector("#n"),g=document.querySelector("#y"),k=document.querySelector("#r"),h=document.querySelector("#b"),A=document.querySelector("#t"),y=document.querySelector("#q"),S=document.querySelector("#te"),w=document.querySelector("#h"),L=document.querySelector("#d");let q=-1;function E(e,t="desktop"){switch(e){case"tools":"desktop"===t?(s.setAttribute("aria-expanded","true"),i.setAttribute("data-state","visible")):(y.setAttribute("aria-expanded","true"),S.setAttribute("data-state","visible"));break;case"settings":"desktop"===t?(m.setAttribute("aria-expanded","true"),f.setAttribute("data-state","visible")):(w.setAttribute("aria-expanded","true"),L.setAttribute("data-state","visible"))}}function x(e,t="desktop"){switch(e){case"tools":"desktop"===t?(s.setAttribute("aria-expanded","false"),i.setAttribute("data-state","invisible")):(y.setAttribute("aria-expanded","false"),S.setAttribute("data-state","invisible"));break;case"settings":"desktop"===t?(m.setAttribute("aria-expanded","false"),f.setAttribute("data-state","invisible")):(w.setAttribute("aria-expanded","false"),L.setAttribute("data-state","invisible"));break;default:"desktop"===t?(s.setAttribute("aria-expanded","false"),i.setAttribute("data-state","invisible"),m.setAttribute("aria-expanded","false"),f.setAttribute("data-state","invisible")):"mobile"===t?(y.setAttribute("aria-expanded","false"),S.setAttribute("data-state","invisible"),w.setAttribute("aria-expanded","false"),L.setAttribute("data-state","invisible")):(s.setAttribute("aria-expanded","false"),i.setAttribute("data-state","invisible"),m.setAttribute("aria-expanded","false"),f.setAttribute("data-state","invisible"),y.setAttribute("aria-expanded","false"),S.setAttribute("data-state","invisible"),w.setAttribute("aria-expanded","false"),L.setAttribute("data-state","invisible"))}}function I(){d.setAttribute("aria-expanded","true"),setTimeout((()=>{b.focus()}),300)}function T(){l.style.transform="scale(95%)",setTimeout((()=>{c.style.opacity="0"}),300),setTimeout((()=>{l.removeAttribute("style"),c.removeAttribute("style"),d.setAttribute("aria-expanded","false"),b.value="",v.innerHTML="",q=-1}),450)}c.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),u.contains(e.target)||T()})),e.addEventListener("click",(function(e){"open"===t.getAttribute("data-state")?(E("tools","mobile"),x("settings","mobile"),this.setAttribute("data-state","inactive"),t.setAttribute("data-state","close")):(this.setAttribute("data-state","active"),t.setAttribute("data-state","open"))})),a.addEventListener("mouseenter",(function(){x("all","desktop")})),r.addEventListener("mouseenter",(function(){x("all","desktop")})),s.addEventListener("mouseenter",(function(e){x("all","desktop"),E("tools","desktop")})),i.addEventListener("mouseleave",(function(e){x("tools","desktop")})),s.addEventListener("click",(function(e){e.stopPropagation(),"true"===this.getAttribute("aria-expanded")?x("tools","desktop"):E("tools","desktop")})),n.addEventListener("mouseenter",(function(){x("all","desktop")})),n.addEventListener("click",(function(){I()})),o.addEventListener("mouseenter",(function(){x("all","desktop")})),o.addEventListener("click",(function(){I()})),m.addEventListener("mouseenter",(function(e){x("all","desktop"),E("settings","desktop")})),f.addEventListener("mouseleave",(function(e){x("settings","desktop")})),m.addEventListener("click",(function(e){e.stopPropagation(),"true"===this.getAttribute("aria-expanded")?x("settings","desktop"):E("settings","desktop")})),y.addEventListener("click",(function(e){"true"===this.getAttribute("aria-expanded")?x("tools","mobile"):E("tools","mobile")})),w.addEventListener("click",(function(e){"true"===this.getAttribute("aria-expanded")?x("settings","mobile"):E("settings","mobile")})),g.addEventListener("change",(function(e){const t=e.target.checked;t?document.querySelector(".ri").setAttribute("data-sticky-header","true"):document.querySelector(".ri").setAttribute("data-sticky-header","false"),window.localStorage.setItem("sticky-header",t)})),h.addEventListener("change",(function(e){const t=e.target.checked;t?document.querySelector(".ri").setAttribute("data-sticky-header","true"):document.querySelector(".ri").setAttribute("data-sticky-header","false"),window.localStorage.setItem("sticky-header",t)})),p.addEventListener("change",(function(e){window.localStorage.setItem("rv",e.target.checked),e.target.checked&&window.scrollY>200?A.classList.add("rm"):e.target.checked||A.classList.remove("rm")})),k.addEventListener("change",(function(e){window.localStorage.setItem("rv",e.target.checked),e.target.checked&&window.scrollY>200?A.classList.add("rm"):e.target.checked||A.classList.remove("rm")})),A.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){"true"===window.localStorage.getItem("rv")&&(window.scrollY>200?A.classList.add("rm"):A.classList.remove("rm"))})),document.addEventListener("keydown",(function(a){if("true"===d.getAttribute("aria-expanded"))return function(e){if("Escape"===e.key)return e.preventDefault(),void(0===b.value.length?T():(b.value="",v.innerHTML="",q=-1));const t=v.querySelectorAll(".rp");if(t.length)switch(e.key){case"ArrowUp":e.preventDefault(),q=(q-1+t.length)%t.length,a(t);break;case"ArrowDown":e.preventDefault(),q=(q+1)%t.length,a(t);break;case"Enter":e.preventDefault(),q>=0&&t[q]&&t[q].click()}function a(e){for(let t=0;t<e.length;t++){const a=e[t];t===q?(a.classList.add("rd"),a.scrollIntoView({block:"nearest"})):a.classList.remove("rd")}}}(a);"Escape"===a.key&&(a.preventDefault(),x("all"),e.setAttribute("data-state","inactive"),t.setAttribute("data-state","close"))})),document.addEventListener("click",(function(e){"true"===s.getAttribute("aria-expanded")&&(s.contains(e.target)||i.contains(e.target)||x("tools","desktop")),"true"===m.getAttribute("aria-expanded")&&(m.contains(e.target)||f.contains(e.target)||x("settings","desktop"))})),null===window.localStorage.getItem("rv")||"true"===window.localStorage.getItem("rv")?(p.setAttribute("checked",""),k.setAttribute("checked",""),null===window.localStorage.getItem("rv")&&window.localStorage.setItem("rv",!0)):(p.removeAttribute("checked"),k.removeAttribute("checked")),"true"===window.localStorage.getItem("sticky-header")?(g.setAttribute("checked",""),h.setAttribute("checked",""),document.querySelector(".ri").setAttribute("data-sticky-header","true")):(g.removeAttribute("checked"),h.removeAttribute("checked"),document.querySelector(".ri").setAttribute("data-sticky-header","false")),async function(){const e=await async function(){let e=sessionStorage.getItem("search-data");if(e)try{return JSON.parse(e)}catch(e){}try{const e=await fetch("/data/search.json",{method:"GET",headers:{"Content-Type":"application/json"}}),t=await e.json();return sessionStorage.setItem("search-data",JSON.stringify(t)),t}catch(e){return null}}(),t=function(e){const t=new FlexSearch.Index({tokenize:"forward",cache:!0});try{const e=sessionStorage.getItem("search-index");if(!e||0===e.length)throw new Error("Invalid search data found!");const a=JSON.parse(e);for(const[e,r]of Object.entries(a))t.import(e,r)}catch(a){for(let a of e)t.add(a.id,a.title);const r={};t.export(((e,t)=>{r[e]=JSON.parse(t),sessionStorage.setItem("search-index",JSON.stringify(r))}))}return t}(e);b.addEventListener("input",(function(a){if(""===this.value)return void(v.innerHTML="");const r=t.search(this.value);let s="";for(const t of r){const a=e[t];s+=`<div class="rp" data-location="${a.location}">${a.title}</div>`}v.innerHTML=s,function(){const e=v.querySelectorAll(".rp");if(e.length)for(let t=0;t<e.length;t++){const a=e[t];a.addEventListener("mouseenter",(()=>{for(let t=0;t<e.length;t++)e[t].classList.remove("rd");a.classList.add("rd"),q=t})),a.addEventListener("mouseleave",(()=>{a.classList.remove("rd"),q=-1})),a.addEventListener("click",(()=>{a.getAttribute("data-location")&&window.open(a.getAttribute("data-location"),"_self")}))}}()}))}()}));