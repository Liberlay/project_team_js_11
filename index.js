import{A as h,S as l,N as d,K as u,M as p,a as b,b as w}from"./assets/vendor-pNZvjbJf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const g=document.querySelector(".headerMenu"),a=document.querySelector(".headerMenuNav"),y=document.querySelectorAll(".headerNavLink");g.addEventListener("click",()=>{a.classList.contains("hidden")?a.classList.remove("hidden"):a.classList.add("hidden")});y.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const s=e.getAttribute("href"),r=document.querySelector(s);r&&r.scrollIntoView({behavior:"smooth",block:"start"})})});const m=document.querySelector(".headerOrderBtn");m.addEventListener("click",()=>{event.preventDefault();const e=m.getAttribute("href"),t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})});const L=document.querySelector(".headerItemMenu"),i=document.querySelector(".headerMobMenu"),E=document.querySelector(".mobMenuCloseBttn"),q=document.querySelectorAll(".headerMobNavLink"),v=document.querySelector(".headerMobOrderBtn");L.addEventListener("click",()=>{i.classList.remove("hidden"),document.body.classList.add("active")});E.addEventListener("click",()=>{i.classList.add("hidden"),document.body.classList.remove("active")});q.forEach(e=>{e.addEventListener("click",t=>{i.classList.add("hidden"),document.body.classList.remove("active"),t.preventDefault();const s=e.getAttribute("href"),r=document.querySelector(s);r&&r.scrollIntoView({behavior:"smooth",block:"start"})})});v.addEventListener("click",()=>{i.classList.add("hidden"),document.body.classList.remove("active"),event.preventDefault();const e=v.getAttribute("href"),t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".accordion-container-about .ac-trigger"),t=e.closest(".ac");e.addEventListener("click",function(){t.classList.toggle("is-rotated")})});const M=new h(".accordion-container-about",{duration:700});M.open(0);new l(".about-me-slider",{modules:[d,u,p],containerModifierClass:"about-me-slider-",wrapperClass:"about-me-slider-wrapper",slideClass:"about-me-slider-slide",slideActiveClass:"about-me-slider-slide-active",slidesPerView:2,grabCursor:!0,loop:!0,navigation:{enabled:!0,nextEl:".about-me-slider-button-next"},keyboard:{enabled:!0},mousewheel:{enabled:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});const S=document.querySelector(".benefits-button"),I=document.getElementById("work-together");S.addEventListener("click",()=>{I.scrollIntoView({behavior:"smooth"})});new l(".projects-swiper",{spaceBetween:30,grabCursor:!0,allowTouchMove:!0,modules:[d,u,b],navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},a11y:!0});const C=new h(".accordion-container-faq",{duration:400,showMultiple:!0});C.open(0);const k=document.querySelectorAll(".faq-show-text-button");k.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".icon-faq").classList.toggle("arrow-up")})});const A=[{id:1,alt:"Cover 1"},{id:2,alt:"Cover 2"},{id:3,alt:"Cover 3"},{id:4,alt:"Cover 4"},{id:5,alt:"Cover 5"},{id:6,alt:"Cover 6"},{id:7,alt:"Cover 7"},{id:8,alt:"Cover 8"},{id:9,alt:"Cover 9"},{id:10,alt:"Cover 10"}],x=A.map(({id:e,alt:t})=>`<li class="covers-item">
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
    </li>`).join(""),B=document.querySelectorAll(".covers-wrapper");function V(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}B.forEach(e=>{e.innerHTML=x;const t=Array.from(e.children);V(t).forEach(r=>{e.appendChild(r)})});const f=document.querySelector(".reviews-swiper-wrapper");async function N(){try{return(await w.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return console.error("Error fetching reviews:",e),null}}async function P(){const e=await N();if(!e){f.innerHTML='<li class="swiper-slide">Not Found</li>';return}f.innerHTML=e.map(t=>`
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
      </li>`).join("")}async function O(){await P();const e=document.querySelector(".reviews-prev-btn"),t=document.querySelector(".reviews-next-btn");new l(".reviews-section .swiper-reviews",{modules:[d,u],direction:"horizontal",spaceBetween:16,navigation:{prevEl:e,nextEl:t},allowTouchMove:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},on:{init:function(){s(this)},slideChange:function(){s(this)}}});function s(r){e&&t&&(e.classList.toggle("swiper-button-disabled",r.isBeginning),t.classList.toggle("swiper-button-disabled",r.isEnd))}}O();
//# sourceMappingURL=index.js.map
