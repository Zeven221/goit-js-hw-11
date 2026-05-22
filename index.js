import{a as n,S as c,i as m}from"./assets/vendor-GgwdjDaY.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function d(t){const i="https://pixabay.com/api/",o={key:"55949954-f9f721bb22bd9fe0f33f87243",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return n.get(i,{params:o})}const u=new c(".js-gallery .gallery-item .gallery-link",{captionSelector:"img",captionsData:"alt",captionDelay:250});function f(t){const i=t.map(o=>p(o)).join("");s.containerElem.innerHTML=i,u.refresh()}function p(t){return`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-image" src="${t.previewURL}" alt="${t.name}" />
  </a>
  <div class="gallery-item-desc-div">
    <ul class="gallery-item-desc-list">
    <li class="gallery-item-desc-item">
    Likes
    <p>${t.likes}</p>
    </li>
    <li class="gallery-item-desc-item">
    Views
    <p>${t.views}</p>
    </li>
    <li class="gallery-item-desc-item">
    Comments
    <p>${t.comments}</p>
    </li>
    <li class="gallery-item-desc-item">
    Download
    <p>${t.downloads}</p>
    </li>
    </ul>
  </div>
</li>
`}const s={formEl:document.querySelector(".js-form"),containerElem:document.querySelector(".js-gallery"),loadingElem:document.querySelector(".loader")};s.formEl.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(s.formEl).get("search-text").trim();o.length<0||(s.loadingElem.style.display="inline-block",d(o).then(l=>{s.loadingElem.style.display="none",l.data.hits.length!==0?f(l.data.hits):m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"})}))});
//# sourceMappingURL=index.js.map
