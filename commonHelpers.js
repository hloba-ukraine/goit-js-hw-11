import{i as c,S as g,a as y}from"./assets/vendor-5401a4b0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-btn")};o.loader.style.display="none";o.loadMore.style.display="none";const n={key:"42243795-d3e0b32c8a225c14b798958b0",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15,q:""};async function m(r){r.preventDefault(),o.gallery.innerHTML="",n.page=1,o.loader.style.display="block";const a=r.target.elements.input.value;n.q=a;const i=await p();try{d(i)}catch(t){console.log(t)}o.loadMore.style.display="block",u(i),r.target.reset()}function d(r){if(r.hits.length===0)c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),o.gallery.innerHTML="";else{const i=r.hits.map(t=>`<a class="gallery-link" href="${t.largeImageURL}">
        <img class="gallery-image"
        src="${t.webformatURL}"
        alt="${t.tags}"
         </a>
        <div class="img-content">
        <div>
        <h3>Likes</h3>
        <p>${t.likes}</p>
        </div>

        <div>
        <h3>Views</h3>
        <p>${t.views}</p>
        </div>

        <div>
        <h3>Comments</h3>
        <p>${t.comments}</p>
        </div>

        <div>
        <h3>Downloads</h3>
        <p>${t.downloads}</p>
        </div>
        </div>
        `).join("");o.gallery.insertAdjacentHTML("beforeend",i)}new g(".gallery-link").refresh(),o.loader.style.display="none"}async function p(){return(await y.get("https://pixabay.com/api/?",{params:n})).data}async function h(){const a=document.querySelector(".gallery-link").getBoundingClientRect().height*3;n.page+=1,o.loader.style.display="block";const i=await p();d(i),u(i),window.scrollBy({top:a,behavior:"smooth"})}function u(r){Math.ceil(r.totalHits/n.per_page)===n.page&&(o.loadMore.style.display="none",c.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"center",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}))}o.form.addEventListener("submit",m);o.loadMore.addEventListener("click",h);
//# sourceMappingURL=commonHelpers.js.map
