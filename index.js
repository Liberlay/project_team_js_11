import{S as l,N as c,K as a,M as d}from"./assets/vendor-CIlSHZRv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();new l(".swiper",{modules:[c,a,d],slidesPerView:2,slidesOffsetAfter:83,grabCursor:!0,rewind:!0,navigation:{enabled:!0,prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},keyboard:{enabled:!0},mousewheel:{enabled:!0}});const u=document.querySelector(".benefits-button"),f=document.getElementById("work-together");u.addEventListener("click",()=>{f.scrollIntoView({behavior:"smooth"})});const m=[{id:1,alt:"Cover 1"},{id:2,alt:"Cover 2"},{id:3,alt:"Cover 3"},{id:4,alt:"Cover 4"},{id:5,alt:"Cover 5"},{id:6,alt:"Cover 6"},{id:7,alt:"Cover 7"},{id:8,alt:"Cover 8"},{id:9,alt:"Cover 9"},{id:10,alt:"Cover 10"}],p=m.map(({id:e,alt:r})=>`<li class="covers-item">
       <a href="https://goit.global/ua/" target="_blank">
        <picture class="covers-img">
          <source
            media="(min-width:320px)"
            srcset="./images/covers/${e}.webp 1x, ./images/covers/${e}_2x.webp 2x"
            type="image/webp"
          />
          <img
            class="covers-img"
            src="./images/covers/${e}.webp"
            alt="${r}"
            loading="lazy"
          />
        </picture>
      </a>
    </li>`).join(""),g=document.querySelectorAll(".covers-wrapper");function v(e){for(let r=e.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[e[r],e[s]]=[e[s],e[r]]}return e}g.forEach(e=>{e.innerHTML=p;const r=Array.from(e.children);v(r).forEach(i=>{e.appendChild(i)})});
//# sourceMappingURL=index.js.map
