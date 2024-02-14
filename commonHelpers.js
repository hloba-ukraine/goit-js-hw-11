import{i as l,S as m,a as h}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const r={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-btn")};r.loader.style.display="none";r.loadMore.style.display="none";const n={key:"42243795-d3e0b32c8a225c14b798958b0",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15,q:""};async function u(t){t.preventDefault(),r.gallery.innerHTML="",n.page=1,r.loader.style.display="block";const s=t.target.elements.input.value;n.q=s;const i=await g();try{d(i)}catch(o){l.show({message:"Error ",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),console.log(o)}r.loadMore.style.display="block",p(i),t.target.reset()}function d(t){if(t.hits.length===0)l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),r.gallery.innerHTML="";else{const i=t.hits.map(o=>`<a class="gallery-link" href="${o.largeImageURL}">
        <img class="gallery-image"
        src="${o.webformatURL}"
        alt="${o.tags}"
         </a>
        <div class="img-content">
        <div>
        <h3>Likes</h3>
        <p>${o.likes}</p>
        </div>

        <div>
        <h3>Views</h3>
        <p>${o.views}</p>
        </div>

        <div>
        <h3>Comments</h3>
        <p>${o.comments}</p>
        </div>

        <div>
        <h3>Downloads</h3>
        <p>${o.downloads}</p>
        </div>
        </div>
        `).join("");r.gallery.insertAdjacentHTML("beforeend",i)}new m(".gallery-link").refresh(),r.loader.style.display="none"}async function g(){const t=await h.get("https://pixabay.com/api/?",{params:n});try{return t.data}catch(s){l.show({message:"Error ",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),console.log(s)}}async function y(){const s=document.querySelector(".gallery-link").getBoundingClientRect().height*3;n.page+=1,r.loader.style.display="block";const i=await g();try{d(i)}catch(o){l.show({message:"Error ",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),console.log(o)}p(i),window.scrollBy({top:s,behavior:"smooth"})}function p(t){Math.ceil(t.totalHits/n.per_page)===n.page&&(r.loadMore.style.display="none",l.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"center",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}))}r.form.addEventListener("submit",u);r.loadMore.addEventListener("click",y);
//# sourceMappingURL=commonHelpers.js.map
