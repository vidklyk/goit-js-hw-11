import{i as c}from"./assets/vendor-I1I71QQ2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function a(o){return fetch(`https://pixabay.com/api/?key=17309902-7cbadf7b99e6a7450a84508e7&q=${o}&image_type=photo$orientation=horizontal$safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const l=document.querySelector(".form"),u=document.querySelector(".gallery"),f=o=>`<li class="gallery-card">
            <img src="${o.webformatURL}" alt="${o.tags}" class="gallery-img">
          </li>`,m=o=>{o.preventDefault();const t=o.currentTarget.elements.search_text.value.trim();t&&a(t).then(s=>{const i=s.hits.map(f).join("");u.innerHTML=i;const e=s.hits;s.hits.length===0&&c.show({color:"red",message:`Sorry, there are no images matching your search query. Please try again!
`}),e.forEach(r=>{console.log(r.webformatURL),console.log(r.tags)})})};l.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
