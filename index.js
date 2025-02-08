import{S as l,N as a,K as c,M as u,A as p,a as v}from"./assets/vendor-DhIuj_UR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();new l(".about-me-slider",{modules:[a,c,u],containerModifierClass:"about-me-slider-",wrapperClass:"about-me-slider-wrapper",slideClass:"about-me-slider-slide",slideActiveClass:"about-me-slider-slide-active",slidesPerView:2,grabCursor:!0,loop:!0,navigation:{enabled:!0,nextEl:".about-me-slider-button-next"},keyboard:{enabled:!0},mousewheel:{enabled:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});const w=document.querySelector(".benefits-button"),f=document.getElementById("work-together");w.addEventListener("click",()=>{f.scrollIntoView({behavior:"smooth"})});new l(".projects-swiper",{spaceBetween:30,grabCursor:!0,allowTouchMove:!0,modules:[a,c,p],navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},a11y:!0});const m=[{id:1,alt:"Cover 1"},{id:2,alt:"Cover 2"},{id:3,alt:"Cover 3"},{id:4,alt:"Cover 4"},{id:5,alt:"Cover 5"},{id:6,alt:"Cover 6"},{id:7,alt:"Cover 7"},{id:8,alt:"Cover 8"},{id:9,alt:"Cover 9"},{id:10,alt:"Cover 10"}],g=m.map(({id:e,alt:t})=>`<li class="covers-item">
       <a href="https://goit.global/ua/" target="_blank">
        <picture class="covers-img">
          <source
            media="(min-width:320px)"
            srcset="images/covers/${e}.webp 1x, images/covers/${e}_2x.webp 2x"
          />
          <img
            class="covers-img"
            src="images/covers/${e}.webp"
            alt="${t}"
          />
        </picture>
      </a>
    </li>`).join(""),b=document.querySelectorAll(".covers-wrapper");function h(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}b.forEach(e=>{e.innerHTML=g;const t=Array.from(e.children);h(t).forEach(o=>{e.appendChild(o)})});const d=document.querySelector(".reviews-swiper-wrapper");async function y(){try{return(await v.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return console.error("Error fetching reviews:",e),null}}async function C(){const e=await y();if(!e){d.innerHTML='<li class="swiper-slide">Not Found</li>';return}d.innerHTML=e.map(t=>`
      <li class="swiper-slide reviews-swiper-slide">
          <img src="${t.avatar_url}" 
               loading="lazy" 
               alt="${t.author}" 
               class="reviews-img" 
               width="48" height="48">
          <div class="reviews-desc">
              <h3 class="reviews-item-subtitle">${t.author}</h3>
              <div class="reviews-text">${t.review}</div>
          </div>
      </li>`).join("")}async function E(){await C();const e=document.querySelector(".reviews-prev-btn"),t=document.querySelector(".reviews-next-btn");new l(".reviews-section .swiper-reviews",{modules:[a,c],direction:"horizontal",spaceBetween:16,navigation:{prevEl:e,nextEl:t},allowTouchMove:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},on:{init:function(){i(this)},slideChange:function(){i(this)}}});function i(o){e&&t&&(e.classList.toggle("swiper-button-disabled",o.isBeginning),t.classList.toggle("swiper-button-disabled",o.isEnd))}}E();
//# sourceMappingURL=index.js.map
