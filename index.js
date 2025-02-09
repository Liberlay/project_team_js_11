import{A as w,S as d,N as u,K as m,M as L,a as E,b as k,i as g}from"./assets/vendor-BHqu_VaH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const S=document.querySelector(".headerMenuTitle"),l=document.querySelector(".headerMenuNav"),q=document.querySelectorAll(".headerNavLink");S.addEventListener("click",()=>{l.classList.contains("hidden")?l.classList.remove("hidden"):l.classList.add("hidden")});q.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const r=e.getAttribute("href"),n=document.querySelector(r);n&&n.scrollIntoView({behavior:"smooth",block:"start"})})});const v=document.querySelector(".headerOrderBtn");v.addEventListener("click",()=>{event.preventDefault();const e=v.getAttribute("href"),t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})});const C=document.querySelector(".headerItemMenu"),a=document.querySelector(".headerMobMenu"),I=document.querySelector(".mobMenuCloseBttn"),M=document.querySelectorAll(".headerMobNavLink"),f=document.querySelector(".headerMobOrderBtn");C.addEventListener("click",()=>{a.classList.remove("hidden"),document.body.classList.add("active")});I.addEventListener("click",()=>{a.classList.add("hidden"),document.body.classList.remove("active")});M.forEach(e=>{e.addEventListener("click",t=>{a.classList.add("hidden"),document.body.classList.remove("active"),t.preventDefault();const r=e.getAttribute("href"),n=document.querySelector(r);n&&n.scrollIntoView({behavior:"smooth",block:"start"})})});f.addEventListener("click",()=>{a.classList.add("hidden"),document.body.classList.remove("active"),event.preventDefault();const e=f.getAttribute("href"),t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})});const A=document.querySelectorAll(".about-me .ac-trigger");A.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".about-me .ac-svg").classList.toggle("rotated")})});const x=new w(".about-me .accordion-container",{duration:700});x.open(0);new d(".about-me-slider",{modules:[u,m,L],containerModifierClass:"about-me-slider-",wrapperClass:"about-me-slider-wrapper",slideClass:"about-me-slider-slide",slideActiveClass:"about-me-slider-slide-active",slidesPerView:2,grabCursor:!0,loop:!0,navigation:{enabled:!0,nextEl:".about-me-slider-button-next"},keyboard:{enabled:!0},mousewheel:{enabled:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});const B=document.querySelector(".benefits-button"),N=document.getElementById("#work-together");B.addEventListener("click",()=>{N.scrollIntoView({behavior:"smooth"})});new d(".projects-swiper",{spaceBetween:30,grabCursor:!0,allowTouchMove:!0,modules:[u,m,E],navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},a11y:!0});new w(".faq .accordion-container",{duration:700,showMultiple:!0});const V=document.querySelectorAll(".faq .ac-trigger");V.forEach(e=>{e.addEventListener("click",()=>{e.querySelector(".faq .ac-svg").classList.toggle("active")})});const O=[{id:1,alt:"Cover 1"},{id:2,alt:"Cover 2"},{id:3,alt:"Cover 3"},{id:4,alt:"Cover 4"},{id:5,alt:"Cover 5"},{id:6,alt:"Cover 6"},{id:7,alt:"Cover 7"},{id:8,alt:"Cover 8"},{id:9,alt:"Cover 9"},{id:10,alt:"Cover 10"}],P=O.map(({id:e,alt:t})=>`<li class="covers-item">
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
    </li>`).join(""),$=document.querySelectorAll(".covers-wrapper");function j(e){for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}$.forEach(e=>{e.innerHTML=P;const t=Array.from(e.children);j(t).forEach(n=>{e.appendChild(n)})});const p=document.querySelector(".reviews-swiper-wrapper");async function T(){try{return(await k.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return console.error("Error fetching reviews:",e),null}}async function D(){const e=await T();if(!e){p.innerHTML='<li class="swiper-slide">Not Found</li>';return}p.innerHTML=e.map(t=>`
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
      </li>`).join("")}async function z(){await D();const e=document.querySelector(".reviews-prev-btn"),t=document.querySelector(".reviews-next-btn");new d(".reviews .swiper-reviews",{modules:[u,m],direction:"horizontal",spaceBetween:16,navigation:{prevEl:e,nextEl:t},allowTouchMove:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},on:{init:function(){r(this)},slideChange:function(){r(this)}}});function r(n){e&&t&&(e.classList.toggle("swiper-button-disabled",n.isBeginning),t.classList.toggle("swiper-button-disabled",n.isEnd))}}z();const b=document.querySelector(".work-together-form");document.querySelector('.work-together-form-input[type="email"]');const y=document.querySelector('.work-together-form-input[name="comments"]'),i=document.querySelector(".work-together-backdrop"),R=document.querySelector(".work-together-modal"),F=document.querySelector(".work-together-modal-close-btn");y.addEventListener("input",H);function H(e){const t=parseInt(y.getAttribute("maxlength"));let r=e.target.value;r.length>t&&(e.target.value=r.slice(0,t),e.target.style.whiteSpace="nowrap",e.target.style.overflow="hidden",e.target.style.textOverflow="ellipsis")}b.addEventListener("submit",K);function K(e){e.preventDefault();const t=e.target.elements.email.value.trim(),r=e.target.elements.comments.value.trim(),n="https://portfolio-js.b.goit.study/api/requests",o={email:`${t}`,comment:`${r}`};return fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(s=>s.ok?s.json():g.error({title:"Error",message:"Sorry, try again!",messageColor:"white",messageSize:"16",backgroundColor:"red",theme:"dark",position:"topRight"})).then(s=>{i.classList.add("is-open"),R.classList.add("is-open"),b.reset()}).catch(s=>g.error({title:"Error",message:"Sorry,  network is fall, check your modem and try again!",messageColor:"white",messageSize:"16",backgroundColor:"red",theme:"dark",position:"topRight"}))}F.addEventListener("click",h);i.addEventListener("click",h);document.addEventListener("keydown",e=>{(e.key==="Escape"||e.key==="Esc"||e.code===27)&&h()});function h(){i.classList.remove("is-open"),i.classList.remove("is-open")}const _=document.querySelectorAll(".work-together-form-input");_.forEach(e=>{e.addEventListener("input",()=>{let t=30;e.value.length>t&&(e.value=e.value.substring(0,t)+"...")})});
//# sourceMappingURL=index.js.map
