const e=document.querySelector("#a"),t=document.querySelector("#f"),n=document.querySelector("#t"),a=document.querySelector("#n"),i=document.querySelector("#i"),d=document.querySelector("#s"),o=document.querySelector("#o"),r=document.querySelector("#u"),s=document.querySelector("#h"),c=document.querySelector("#l"),u=document.querySelector("#c");function l(e="desktop"){"desktop"===e?(n.setAttribute("aria-expanded","true"),a.setAttribute("data-state","visible")):(c.setAttribute("aria-expanded","true"),u.setAttribute("data-state","visible"))}function b(e="desktop"){"desktop"===e?(n.setAttribute("aria-expanded","false"),a.setAttribute("data-state","invisible")):(c.setAttribute("aria-expanded","false"),u.setAttribute("data-state","invisible"))}function m(e="desktop"){"desktop"===e&&(i.setAttribute("aria-expanded","true"),d.setAttribute("data-state","visible"))}function v(e="desktop"){"desktop"===e&&(i.setAttribute("aria-expanded","false"),d.setAttribute("data-state","invisible"))}function p(){b(),v()}e.addEventListener("click",(function(e){"open"===t.getAttribute("data-state")?(this.setAttribute("data-state","inactive"),t.setAttribute("data-state","close")):(this.setAttribute("data-state","active"),t.setAttribute("data-state","open"))})),n.addEventListener("mouseenter",(function(e){p(),l()})),a.addEventListener("mouseleave",(function(e){b()})),n.addEventListener("click",(function(e){e.stopPropagation(),"true"===this.getAttribute("aria-expanded")?b():l()})),i.addEventListener("mouseenter",(function(e){p(),m()})),d.addEventListener("mouseleave",(function(e){v()})),i.addEventListener("click",(function(e){e.stopPropagation(),"true"===this.getAttribute("aria-expanded")?v():m()})),o.addEventListener("change",(function(e){const t=e.target.checked;window.localStorage.setItem("nd",t)})),r.addEventListener("change",(function(e){const t=e.target.checked;t?document.querySelector("header").classList.add("n"):document.querySelector("header").classList.remove("n"),window.localStorage.setItem("sticky-header",t)})),c.addEventListener("click",(function(e){"true"===this.getAttribute("aria-expanded")?b("mobile"):l("mobile")})),document.addEventListener("keydown",(function(n){"Escape"===n.key&&(b("desktop"),v("desktop"),b("mobile"),v("mobile"),e.setAttribute("data-state","inactive"),t.setAttribute("data-state","close"))})),document.addEventListener("click",(function(e){"true"===n.getAttribute("aria-expanded")&&(n.contains(e.target)&&a.contains(e.target)||b("desktop"))})),document.addEventListener("DOMContentLoaded",(function(){"true"===window.localStorage.getItem("nd")?o.setAttribute("checked",""):o.removeAttribute("checked"),"true"===window.localStorage.getItem("sticky-header")?(r.setAttribute("checked",""),document.querySelector("header").classList.add("n")):(r.removeAttribute("checked"),document.querySelector("header").classList.remove("n")),window.addEventListener("scroll",(function(){window.scrollY>200?s.classList.add("nv"):s.classList.remove("nv")}))})),s.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}));