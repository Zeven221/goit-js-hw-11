import{a as c,S as m,i as n}from"./assets/vendor-Cce4fIue.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=l(r);fetch(r.href,t)}})();function u(e){const i="https://pixabay.com/api/",l={key:"55949954-f9f721bb22bd9fe0f33f87243",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get(i,{params:l}).then(o=>o.data.hits).catch(o=>console.log(o,"promise-error"))}const d=new m(".gallery .gallery-item .gallery-link",{captionSelector:"img",captionsData:"alt",captionDelay:250});function f(e){const i=e.map(l=>g(l)).join("");s.containerElem.innerHTML=i,d.refresh()}function g(e){return`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img class="gallery-image" src="${e.webformatURL}" alt="${e.name||e.tags}" />
  </a>
  <div class="gallery-item-desc-div">
    <ul class="gallery-item-desc-list">
    <li class="gallery-item-desc-item">
    Likes
    <p>${e.likes}</p>
    </li>
    <li class="gallery-item-desc-item">
    Views
    <p>${e.views}</p>
    </li>
    <li class="gallery-item-desc-item">
    Comments
    <p>${e.comments}</p>
    </li>
    <li class="gallery-item-desc-item">
    Download
    <p>${e.downloads}</p>
    </li>
    </ul>
  </div>
</li>
`}function p(){s.containerElem.innerHTML=""}function y(){s.loadingElem.style.display="inline-block"}function h(){s.loadingElem.style.display="none"}const s={formEl:document.querySelector(".js-form"),containerElem:document.querySelector(".gallery"),loadingElem:document.querySelector(".loader")};s.formEl.addEventListener("submit",e=>{e.preventDefault();const l=new FormData(s.formEl).get("search-text").trim();if(l.length===0){n.show({close:!1,messageColor:"#FFFFFF",message:"Fill please field",position:"topRight",progressBar:!0,progressBarColor:"rgb(181, 27, 27)",color:"#EF4040",maxWidth:432});return}y(),p(),u(l).then(o=>{if(o.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432,color:"#EF4040",messageColor:"#FAFAFB"});return}f(o)}).finally(()=>{h()})});
//# sourceMappingURL=index.js.map
