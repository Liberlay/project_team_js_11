import{S as a,N as l,K as c,M as d,A as p,a as w,b as f}from"./assets/vendor-l7z3QiwT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();new a(".about-me-slider",{modules:[l,c,d],containerModifierClass:"about-me-slider-",wrapperClass:"about-me-slider-wrapper",slideClass:"about-me-slider-slide",slideActiveClass:"about-me-slider-slide-active",slidesPerView:2,grabCursor:!0,loop:!0,navigation:{enabled:!0,nextEl:".about-me-slider-button-next"},keyboard:{enabled:!0},mousewheel:{enabled:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});const v=document.querySelector(".benefits-button"),m=document.getElementById("work-together");v.addEventListener("click",()=>{m.scrollIntoView({behavior:"smooth"})});new a(".projects-swiper",{spaceBetween:30,grabCursor:!0,allowTouchMove:!0,modules:[l,c,p],navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},a11y:!0});const g=new w(".accordion-container-faq",{duration:400,showMultiple:!0});g.open(0);const h=document.querySelectorAll(".faq-show-text-button");h.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".icon-faq").classList.toggle("arrow-up")})});const b=[{id:1,alt:"Cover 1"},{id:2,alt:"Cover 2"},{id:3,alt:"Cover 3"},{id:4,alt:"Cover 4"},{id:5,alt:"Cover 5"},{id:6,alt:"Cover 6"},{id:7,alt:"Cover 7"},{id:8,alt:"Cover 8"},{id:9,alt:"Cover 9"},{id:10,alt:"Cover 10"}],y=b.map(({id:e,alt:t})=>`<li class="covers-item">
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
    </li>`).join(""),C=document.querySelectorAll(".covers-wrapper");function E(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}C.forEach(e=>{e.innerHTML=y;const t=Array.from(e.children);E(t).forEach(i=>{e.appendChild(i)})});const u=document.querySelector(".reviews-swiper-wrapper");async function q(){try{return(await f.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return console.error("Error fetching reviews:",e),null}}async function x(){const e=await q();if(!e){u.innerHTML='<li class="swiper-slide">Not Found</li>';return}u.innerHTML=e.map(t=>`
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
      </li>`).join("")}async function L(){await x();const e=document.querySelector(".reviews-prev-btn"),t=document.querySelector(".reviews-next-btn");new a(".reviews-section .swiper-reviews",{modules:[l,c],direction:"horizontal",spaceBetween:16,navigation:{prevEl:e,nextEl:t},allowTouchMove:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},on:{init:function(){s(this)},slideChange:function(){s(this)}}});function s(i){e&&t&&(e.classList.toggle("swiper-button-disabled",i.isBeginning),t.classList.toggle("swiper-button-disabled",i.isEnd))}}L();
//# sourceMappingURL=index.js.map
