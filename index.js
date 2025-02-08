import{A as u,S as a,N as c,K as l,M as p,a as f,b as w}from"./assets/vendor-pNZvjbJf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".accordion-container-about .ac-trigger"),t=e.closest(".ac");e.addEventListener("click",function(){t.classList.toggle("is-rotated")})});const v=new u(".accordion-container-about",{duration:700});v.open(0);new a(".about-me-slider",{modules:[c,l,p],containerModifierClass:"about-me-slider-",wrapperClass:"about-me-slider-wrapper",slideClass:"about-me-slider-slide",slideActiveClass:"about-me-slider-slide-active",slidesPerView:2,grabCursor:!0,loop:!0,navigation:{enabled:!0,nextEl:".about-me-slider-button-next"},keyboard:{enabled:!0},mousewheel:{enabled:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});const m=document.querySelector(".benefits-button"),g=document.getElementById("work-together");m.addEventListener("click",()=>{g.scrollIntoView({behavior:"smooth"})});new a(".projects-swiper",{spaceBetween:30,grabCursor:!0,allowTouchMove:!0,modules:[c,l,f],navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},a11y:!0});const b=new u(".accordion-container-faq",{duration:400,showMultiple:!0});b.open(0);const h=document.querySelectorAll(".faq-show-text-button");h.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".icon-faq").classList.toggle("arrow-up")})});const y=[{id:1,alt:"Cover 1"},{id:2,alt:"Cover 2"},{id:3,alt:"Cover 3"},{id:4,alt:"Cover 4"},{id:5,alt:"Cover 5"},{id:6,alt:"Cover 6"},{id:7,alt:"Cover 7"},{id:8,alt:"Cover 8"},{id:9,alt:"Cover 9"},{id:10,alt:"Cover 10"}],C=y.map(({id:e,alt:t})=>`<li class="covers-item">
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
    </li>`).join(""),E=document.querySelectorAll(".covers-wrapper");function L(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}E.forEach(e=>{e.innerHTML=C;const t=Array.from(e.children);L(t).forEach(i=>{e.appendChild(i)})});const d=document.querySelector(".reviews-swiper-wrapper");async function q(){try{return(await w.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return console.error("Error fetching reviews:",e),null}}async function x(){const e=await q();if(!e){d.innerHTML='<li class="swiper-slide">Not Found</li>';return}d.innerHTML=e.map(t=>`
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
      </li>`).join("")}async function M(){await x();const e=document.querySelector(".reviews-prev-btn"),t=document.querySelector(".reviews-next-btn");new a(".reviews-section .swiper-reviews",{modules:[c,l],direction:"horizontal",spaceBetween:16,navigation:{prevEl:e,nextEl:t},allowTouchMove:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},on:{init:function(){s(this)},slideChange:function(){s(this)}}});function s(i){e&&t&&(e.classList.toggle("swiper-button-disabled",i.isBeginning),t.classList.toggle("swiper-button-disabled",i.isEnd))}}M();
//# sourceMappingURL=index.js.map
