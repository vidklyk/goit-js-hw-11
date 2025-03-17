import{a as u,S as d,i as m}from"./assets/vendor-D-1act8A.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="17309902-7cbadf7b99e6a7450a84508e7";function p(t){const a="https://pixabay.com/api/",o={key:h,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(a,{params:o}).then(s=>s.data).catch(s=>{throw console.error("Fetch error:",s),s})}const f=t=>`
    <li class="gallery-card">
      <a href="${t.largeImageURL}" target="_blank">
        <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img" />
      </a>
      <div class="info">
        <p><b>Likes</b> ${t.likes}</p>
        <p><b>Views</b> ${t.views}</p>
        <p><b>Comments</b> ${t.comments}</p>
        <p><b>Downloads</b> ${t.downloads}</p>
      </div>
    </li>`,y=()=>new d(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250,scrollZoom:!1}),g=document.querySelector(".form"),b=document.querySelector(".gallery"),l=document.querySelector(".loader.is-hidden");let c=null;function L(){l.classList.remove("is-hidden")}function n(){l.classList.add("is-hidden")}const w=t=>{t.preventDefault(),L();const a=t.currentTarget.elements.search_text.value.trim();if(!a){n();return}t.currentTarget.elements.search_text.value="",p(a).then(o=>{if(o.hits.length===0){m.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!"}),n();return}const s=o.hits.map(f).join("");b.innerHTML=s,c?c.refresh():c=y(),o.hits.forEach(e=>{console.log(e.webformatURL),console.log(e.tags)})}).catch(o=>{console.error(o)}).finally(()=>{n()})};g.addEventListener("submit",w);document.addEventListener("DOMContentLoaded",()=>{n()});
//# sourceMappingURL=index.js.map
