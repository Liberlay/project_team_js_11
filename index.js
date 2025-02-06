(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const n=document.querySelector(".benefits-button"),l=document.getElementById("work-together");n.addEventListener("click",()=>{l.scrollIntoView({behavior:"smooth"})});const a=[{id:1,alt:"Cover 1"},{id:2,alt:"Cover 2"},{id:3,alt:"Cover 3"},{id:4,alt:"Cover 4"},{id:5,alt:"Cover 5"},{id:6,alt:"Cover 6"},{id:7,alt:"Cover 7"},{id:8,alt:"Cover 8"},{id:9,alt:"Cover 9"},{id:10,alt:"Cover 10"}],d=a.map(({id:e,alt:o})=>`<li class="list-item">
       <a href="https://goit.global/ua/" target="_blank">
        <picture class="covers-img">
          <source
            media="(min-width:320px)"
            srcset="/images/covers/${e}.webp 1x, /images/covers/${e}_2x.webp 2x"
            type="image/webp"
          />
          <img
            class="covers-img"
            src="/images/covers/${e}.webp"
            alt="${o}"
            loading="lazy"
          />
        </picture>
      </a>
    </li>`).join(""),u=document.querySelectorAll(".item");function f(e){for(let o=e.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[e[o],e[s]]=[e[s],e[o]]}return e}u.forEach(e=>{e.innerHTML=d;const o=Array.from(e.children);f(o).forEach(i=>{e.appendChild(i)})});
//# sourceMappingURL=index.js.map
