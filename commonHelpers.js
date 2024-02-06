import{i as c,S as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.loader.style.display="none";const a={key:"42243795-d3e0b32c8a225c14b798958b0",image_type:"photo",orientation:"horizontal",safesearch:!0,q:""};function u(s){s.preventDefault(),n.loader.style.display="block";const r=s.target.elements.input.value;a.q=r,f().then(i=>p(i)).catch(i=>console.log(i)),s.target.reset()}function p(s){if(s.hits.length===0)c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"topRight",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px"}),n.gallery.innerHTML="";else{const i=s.hits.map(o=>`<a class="gallery-link" href="${o.largeImageURL}">
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
        `).join("");n.gallery.innerHTML=i}new d(".gallery-link").refresh(),n.loader.style.display="none"}function f(){const s=new URLSearchParams(a);return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(r.ok)return r.json();throw new Error(r.status)})}n.form.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers.js.map
