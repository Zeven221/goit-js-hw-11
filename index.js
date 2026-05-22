import{a as c,S as m,i as n}from"./assets/vendor-GgwdjDaY.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function d(t){const i="https://pixabay.com/api/",o={key:"55949954-f9f721bb22bd9fe0f33f87243",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get(i,{params:o})}const u=new m(".gallery .gallery-item .gallery-link",{captionSelector:"img",captionsData:"alt",captionDelay:250});function f(t){const i=t.map(o=>p(o)).join("");l.containerElem.innerHTML=i,u.refresh()}function p(t){return`<li class="gallery-item">
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
`}const l={formEl:document.querySelector(".js-form"),containerElem:document.querySelector(".gallery"),loadingElem:document.querySelector(".loader")};l.formEl.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(l.formEl).get("search-text").trim();if(o.length===0){n.show({close:!1,messageColor:"#FFFFFF",message:"Fill please field",position:"topRight",progressBar:!0,progressBarColor:"rgb(181, 27, 27)",color:"#EF4040",maxWidth:432});return}l.loadingElem.style.display="inline-block",d(o).then(s=>{l.loadingElem.style.display="none",s.data.hits.length!==0?f(s.data.hits):n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"})})});
//# sourceMappingURL=index.js.map
