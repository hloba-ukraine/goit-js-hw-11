import{i as l,S as m,a as u}from"./assets/vendor-5401a4b0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const t={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-btn")};t.loader.style.display="none";t.loadMore.style.display="none";const n={key:"42243795-d3e0b32c8a225c14b798958b0",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15,q:""};async function h(r){r.preventDefault(),t.gallery.innerHTML="",n.page=1,t.loader.style.display="block";const a=r.target.elements.input.value;n.q=a;const i=await p();try{d(i)}catch(o){l.show({message:"Error ",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),console.log(o)}t.loadMore.style.display="block",g(i),r.target.reset()}function d(r){if(r.hits.length===0)l.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),t.gallery.innerHTML="";else{const i=r.hits.map(o=>`<a class="gallery-link" href="${o.largeImageURL}">
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
        `).join("");t.gallery.insertAdjacentHTML("beforeend",i)}new m(".gallery-link").refresh(),t.loader.style.display="none"}async function p(){return(await u.get("https://pixabay.com/api/?",{params:n})).data}async function y(){const a=document.querySelector(".gallery-link").getBoundingClientRect().height*3;n.page+=1,t.loader.style.display="block";const i=await p();try{d(i)}catch(o){l.show({message:"Error ",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),console.log(o)}g(i),window.scrollBy({top:a,behavior:"smooth"})}function g(r){Math.ceil(r.totalHits/n.per_page)===n.page&&(t.loadMore.style.display="none",l.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"center",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}))}t.form.addEventListener("submit",h);t.loadMore.addEventListener("click",y);
//# sourceMappingURL=commonHelpers.js.map
