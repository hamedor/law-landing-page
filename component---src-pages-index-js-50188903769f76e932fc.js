"use strict";(self.webpackChunklaw_landing_page=self.webpackChunklaw_landing_page||[]).push([[678],{72:function(A){var e=function(A,e){if("string"!=typeof A&&!Array.isArray(A))throw new TypeError("Expected the input to be `string | string[]`");e=Object.assign({pascalCase:!1},e);var a;return A=Array.isArray(A)?A.map((function(A){return A.trim()})).filter((function(A){return A.length})).join("-"):A.trim(),0===A.length?"":1===A.length?e.pascalCase?A.toUpperCase():A.toLowerCase():(A!==A.toLowerCase()&&(A=function(A){for(var e=!1,a=!1,t=!1,i=0;i<A.length;i++){var n=A[i];e&&/[a-zA-Z]/.test(n)&&n.toUpperCase()===n?(A=A.slice(0,i)+"-"+A.slice(i),e=!1,t=a,a=!0,i++):a&&t&&/[a-zA-Z]/.test(n)&&n.toLowerCase()===n?(A=A.slice(0,i-1)+"-"+A.slice(i-1),t=a,a=!1,e=!0):(e=n.toLowerCase()===n&&n.toUpperCase()!==n,t=a,a=n.toUpperCase()===n&&n.toLowerCase()!==n)}return A}(A)),A=A.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(A,e){return e.toUpperCase()})).replace(/\d+(\w|$)/g,(function(A){return A.toUpperCase()})),a=A,e.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};A.exports=e,A.exports.default=e},3723:function(A,e,a){a.d(e,{L:function(){return m},M:function(){return b},P:function(){return B},S:function(){return I},_:function(){return s},a:function(){return r},b:function(){return c},g:function(){return o},h:function(){return l}});var t=a(7294),i=(a(72),a(5697)),n=a.n(i);function r(){return r=Object.assign?Object.assign.bind():function(A){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(A[t]=a[t])}return A},r.apply(this,arguments)}function s(A,e){if(null==A)return{};var a,t,i={},n=Object.keys(A);for(t=0;t<n.length;t++)e.indexOf(a=n[t])>=0||(i[a]=A[a]);return i}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(A,e,a,t,i){return void 0===i&&(i={}),r({},a,{loading:t,shouldLoad:A,"data-main-image":"",style:r({},i,{opacity:e?1:0})})}function o(A,e,a,t,i,n,s,l){var c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=t,c.height=i,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var o=r({},A,{"aria-hidden":!0,"data-placeholder-image":"",style:r({opacity:e?0:1,transition:"opacity 500ms linear"},c)});return o}var d,g=["children"],u=function(A){var e=A.layout,a=A.width,i=A.height;return"fullWidth"===e?t.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===e?t.createElement("div",{style:{maxWidth:a,display:"block"}},t.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(A){var e=A.children,a=s(A,g);return t.createElement(t.Fragment,null,t.createElement(u,r({},a)),e,null)},E=["src","srcSet","loading","alt","shouldLoad"],p=["fallback","sources","shouldLoad"],f=function(A){var e=A.src,a=A.srcSet,i=A.loading,n=A.alt,l=void 0===n?"":n,c=A.shouldLoad,o=s(A,E);return t.createElement("img",r({},o,{decoding:"async",loading:i,src:c?e:void 0,"data-src":c?void 0:e,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},h=function(A){var e=A.fallback,a=A.sources,i=void 0===a?[]:a,n=A.shouldLoad,l=void 0===n||n,c=s(A,p),o=c.sizes||(null==e?void 0:e.sizes),d=t.createElement(f,r({},c,e,{sizes:o,shouldLoad:l}));return i.length?t.createElement("picture",null,i.map((function(A){var e=A.media,a=A.srcSet,i=A.type;return t.createElement("source",{key:e+"-"+i+"-"+a,type:i,media:e,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:o})})),d):d};f.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},h.displayName="Picture",h.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var w=["fallback"],B=function(A){var e=A.fallback,a=s(A,w);return e?t.createElement(h,r({},a,{fallback:{src:e},"aria-hidden":!0,alt:""})):t.createElement("div",r({},a))};B.displayName="Placeholder",B.propTypes={fallback:i.string,sources:null==(d=h.propTypes)?void 0:d.sources,alt:function(A,e,a){return A[e]?new Error("Invalid prop `"+e+"` supplied to `"+a+"`. Validation failed."):null}};var b=function(A){return t.createElement(t.Fragment,null,t.createElement(h,r({},A)),t.createElement("noscript",null,t.createElement(h,r({},A,{shouldLoad:!0}))))};b.displayName="MainImage",b.propTypes=h.propTypes;var Q,j,v=function(A,e,a){for(var t=arguments.length,i=new Array(t>3?t-3:0),r=3;r<t;r++)i[r-3]=arguments[r];return A.alt||""===A.alt?n().string.apply(n(),[A,e,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:n().object.isRequired,alt:v},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],y=["style","className"],x=new Set,Y=function(A){var e=A.as,i=void 0===e?"div":e,n=A.image,c=A.style,o=A.backgroundColor,d=A.className,g=A.class,u=A.onStartLoad,m=A.onLoad,E=A.onError,p=s(A,C),f=n.width,h=n.height,w=n.layout,B=function(A,e,a){var t={},i="gatsby-image-wrapper";return"fixed"===a?(t.width=A,t.height=e):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:t}}(f,h,w),b=B.style,v=B.className,N=s(B,y),Y=(0,t.useRef)(),R=(0,t.useMemo)((function(){return JSON.stringify(n.images)}),[n.images]);g&&(d=g);var D=function(A,e,a){var t="";return"fullWidth"===A&&(t='<div aria-hidden="true" style="padding-top: '+a/e*100+'%;"></div>'),"constrained"===A&&(t='<div style="max-width: '+e+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+e+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),t}(w,f,h);return(0,t.useEffect)((function(){Q||(Q=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(A){var e=A.renderImageToString,a=A.swapPlaceholderImage;return j=e,{renderImageToString:e,swapPlaceholderImage:a}})));var A,e,t=Y.current.querySelector("[data-gatsby-image-ssr]");return t&&l()?(t.complete?(null==u||u({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){t.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),t.addEventListener("load",(function A(){t.removeEventListener("load",A),null==m||m({wasCached:!0}),setTimeout((function(){t.removeAttribute("data-gatsby-image-ssr")}),0)}))),void x.add(R)):j&&x.has(R)?void 0:(Q.then((function(a){var t=a.renderImageToString,i=a.swapPlaceholderImage;Y.current&&(Y.current.innerHTML=t(r({isLoading:!0,isLoaded:x.has(R),image:n},p)),x.has(R)||(A=requestAnimationFrame((function(){Y.current&&(e=i(Y.current,R,x,c,u,m,E))}))))})),function(){A&&cancelAnimationFrame(A),e&&e()})}),[n]),(0,t.useLayoutEffect)((function(){x.has(R)&&j&&(Y.current.innerHTML=j(r({isLoading:x.has(R),isLoaded:x.has(R),image:n},p)),null==u||u({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,t.createElement)(i,r({},N,{style:r({},b,c,{backgroundColor:o}),className:v+(d?" "+d:""),ref:Y,dangerouslySetInnerHTML:{__html:D},suppressHydrationWarning:!0}))},R=(0,t.memo)((function(A){return A.image?(0,t.createElement)(Y,A):null}));R.propTypes=N,R.displayName="GatsbyImage";var D,S=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],k=function(A,e){for(var a=arguments.length,t=new Array(a>2?a-2:0),i=2;i<a;i++)t[i-2]=arguments[i];return"fullWidth"!==A.layout||"width"!==e&&"height"!==e||!A[e]?n().number.apply(n(),[A,e].concat(t)):new Error('"'+e+'" '+A[e]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),M={src:n().string.isRequired,alt:v,width:k,height:k,sizes:n().string,layout:function(A){if(void 0!==A.layout&&!_.has(A.layout))return new Error("Invalid value "+A.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},I=(D=R,function(A){var e=A.src,a=A.__imageData,i=A.__error,n=s(A,S);return i&&console.warn(i),a?t.createElement(D,r({image:a},n)):(console.warn("Image not loaded",e),null)});I.displayName="StaticImage",I.propTypes=M},8215:function(A,e,a){a.r(e),a.d(e,{Head:function(){return E},default:function(){return m}});var t={};a.r(t),a.d(t,{G:function(){return n},C9:function(){return r},CT:function(){return s}});var i=a(7294),n=(a(1597),"Navigation-module--navigation--U9f2d"),r="Navigation-module--navigation__link--oQn7M",s="Navigation-module--navigation__list--iR6Zu",l=function(){return i.createElement("nav",{className:n},i.createElement("ul",{className:s},i.createElement("li",{className:t.navigation__item},i.createElement("button",{className:r},"link")),i.createElement("li",{className:t.navigation__item},i.createElement("button",{className:r},"link")),i.createElement("li",{className:t.navigation__item},i.createElement("button",{className:r},"link")),i.createElement("li",{className:t.navigation__item},i.createElement("button",{className:r},"link"))))},c=function(){return i.createElement("div",{className:"Hero-module--hero--OA7DO"},i.createElement("h1",{className:"Hero-module--hero__title--D-J15"},"Page Title"))},o=a(3723),d="Advantages-module--advantages__item--PTZCS",g="Advantages-module--advantages__text--odaeb",u=function(){return i.createElement("div",{className:"Advantages-module--advantages--ygV9u"},i.createElement("h2",{className:"Advantages-module--advantages__title--hq09T"},"Lorem ipsum dolor"),i.createElement("div",{className:"Advantages-module--advantages__list--DD2aX"},i.createElement("div",{className:d},i.createElement("p",{className:g},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"),i.createElement("div",{className:"advantages__image"},i.createElement(o.S,{src:"../../static/images/cats/cat1.jpg",alt:"image",placeholder:"blurred",layout:"fixed",width:300,height:300,__imageData:a(8388)}))),i.createElement("div",{className:d},i.createElement("div",{className:"advantages__image"},i.createElement(o.S,{src:"../../static/images/cats/cat2.jpg",alt:"image",placeholder:"blurred",layout:"fixed",width:300,height:300,__imageData:a(9997)})),i.createElement("p",{className:g},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat")),i.createElement("div",{className:d},i.createElement("p",{className:g},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"),i.createElement("div",{className:"advantages__image"},i.createElement(o.S,{src:"../../static/images/cats/cat3.jpg",alt:"image",placeholder:"blurred",layout:"fixed",width:300,height:300,__imageData:a(7616)}))),i.createElement("div",{className:d},i.createElement("div",{className:"advantages__image"},i.createElement(o.S,{src:"../../static/images/cats/cat4.jpg",alt:"image",placeholder:"blurred",layout:"fixed",width:300,height:300,__imageData:a(8104)})),i.createElement("p",{className:g},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"))))},m=function(){return i.createElement("div",{className:"background__image"},i.createElement("div",{className:"wrapper"},i.createElement("header",null,i.createElement(l,null)),i.createElement("main",null,i.createElement(c,null),i.createElement(u,null))))},E=function(){return i.createElement("title",null,"Home Page")}},8388:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUBBAP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABtTKfEcail9sEwH//xAAcEAACAgIDAAAAAAAAAAAAAAAAAgEDBBIQERP/2gAIAQEAAQUCLcyK3nPg3Uen0s0UlV64/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPwExX//EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwEr/8QAHBAAAQUAAwAAAAAAAAAAAAAAAAECAxIxECFB/9oACAEBAAY/AiqscdRqaWk8xDDOf//EABwQAAICAgMAAAAAAAAAAAAAAAABESExQRBhcf/aAAgBAQABPyEZ6reCXZXpIqViERNYejoFZGB8f//aAAwDAQACAAMAAAAQwM+B/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEQUWH/2gAIAQMBAT8QVmg4/8QAFxEAAwEAAAAAAAAAAAAAAAAAABARUf/aAAgBAgEBPxClYRf/xAAbEAEAAwEBAQEAAAAAAAAAAAABABEhUWGRsf/aAAgBAQABPxCp1taq3oclj7pI/jC20kzpjASUTADr1fhK8qqVFW10FTCE7P/Z"},"images":{"fallback":{"src":"/law-lending-page/static/33c8e0bf807b3941f48a3fa09b1a8a77/0fdf4/cat1.jpg","srcSet":"/law-lending-page/static/33c8e0bf807b3941f48a3fa09b1a8a77/0fdf4/cat1.jpg 300w,\\n/law-lending-page/static/33c8e0bf807b3941f48a3fa09b1a8a77/a89ca/cat1.jpg 600w","sizes":"300px"},"sources":[{"srcSet":"/law-lending-page/static/33c8e0bf807b3941f48a3fa09b1a8a77/078c3/cat1.webp 300w,\\n/law-lending-page/static/33c8e0bf807b3941f48a3fa09b1a8a77/6d09e/cat1.webp 600w","type":"image/webp","sizes":"300px"}]},"width":300,"height":300}')},7616:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCAQT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAfZCk4vTZlOBIH//xAAaEAACAwEBAAAAAAAAAAAAAAAAAQIRMSFC/9oACAEBAAEFAmzzHOlSajlGFH//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAaEAABBQEAAAAAAAAAAAAAAAAAAhAgITEy/9oACAEBAAY/AjptKVH/xAAcEAEAAwEAAwEAAAAAAAAAAAABABExIUFRYXH/2gAIAQEAAT8h+JBG1sjuey8voj2AfwidvTYE8SgtSlrWz//aAAwDAQACAAMAAAAQ0yC9/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAQEf/aAAgBAwEBPxAMjf8A/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAQEf/aAAgBAgEBPxBdhf8A/8QAHBABAAMBAAMBAAAAAAAAAAAAAQARITFBobHR/9oACAEBAAE/EB19MtGzbFBuWfmZR+RX4QbHyPADhQOwIrjkuRrOQXAVbS9n/9k="},"images":{"fallback":{"src":"/law-lending-page/static/e4209c9df5ba147c26eb36b4b9db3858/0fdf4/cat3.jpg","srcSet":"/law-lending-page/static/e4209c9df5ba147c26eb36b4b9db3858/0fdf4/cat3.jpg 300w,\\n/law-lending-page/static/e4209c9df5ba147c26eb36b4b9db3858/a89ca/cat3.jpg 600w","sizes":"300px"},"sources":[{"srcSet":"/law-lending-page/static/e4209c9df5ba147c26eb36b4b9db3858/078c3/cat3.webp 300w,\\n/law-lending-page/static/e4209c9df5ba147c26eb36b4b9db3858/6d09e/cat3.webp 600w","type":"image/webp","sizes":"300px"}]},"width":300,"height":300}')},8104:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDBAH/xAAVAQEBAAAAAAAAAAAAAAAAAAADAv/aAAwDAQACEAMQAAABo8fTEFNGBIvSg78CR//EABwQAAICAwEBAAAAAAAAAAAAAAECAAMEEzEhMv/aAAgBAQABBQJeW5Ou7J9tTmY5a1w0H1aQJvdZ/8QAGBEBAQADAAAAAAAAAAAAAAAAAQACEBH/2gAIAQMBAT8BXhNlr//EABkRAAIDAQAAAAAAAAAAAAAAAAABAhAxIf/aAAgBAgEBPwFdYsI7X//EACEQAAIBAQkBAAAAAAAAAAAAAAABAiIREiExMkFxcoGR/9oACAEBAAY/AlwKLVJ4R6l3aJHPSeDoj8LE8D//xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhMUFRYZH/2gAIAQEAAT8hd2+M5QssZaLSNRfJLy9EQXNHJgA1G+a5VtMKlTBWp//aAAwDAQACAAMAAAAQM9+9/8QAGREBAAIDAAAAAAAAAAAAAAAAAQARECEx/9oACAEDAQE/EKlJs3ODH//EABgRAQEAAwAAAAAAAAAAAAAAAAEAECEx/9oACAECAQE/EAKNqC7Y/8QAHxABAQACAQQDAAAAAAAAAAAAAREAQSExUWGRgaGx/9oACAEBAAE/ELOKu+jLRWONtdnedsYXhEUSdckFu34MYEgTyUq/nrGujWnXH1MgQAgDQOCoc0SXja4iBIREE6HjP//Z"},"images":{"fallback":{"src":"/law-lending-page/static/98111671fce179d07198a40c89f184d3/0fdf4/cat4.jpg","srcSet":"/law-lending-page/static/98111671fce179d07198a40c89f184d3/0fdf4/cat4.jpg 300w,\\n/law-lending-page/static/98111671fce179d07198a40c89f184d3/a89ca/cat4.jpg 600w","sizes":"300px"},"sources":[{"srcSet":"/law-lending-page/static/98111671fce179d07198a40c89f184d3/078c3/cat4.webp 300w,\\n/law-lending-page/static/98111671fce179d07198a40c89f184d3/6d09e/cat4.webp 600w","type":"image/webp","sizes":"300px"}]},"width":300,"height":300}')},9997:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EABgBAAIDAAAAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAAHqWrZEC1kiA1//xAAaEAACAgMAAAAAAAAAAAAAAAAAARARICEi/9oACAEBAAEFAsbUPQuj/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQMf/aAAgBAwEBPwGMWH//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAZEAABBQAAAAAAAAAAAAAAAAAAARARIDH/2gAIAQEABj8Crryp/8QAGRABAAMBAQAAAAAAAAAAAAAAAQAQESGB/9oACAEBAAE/IbKScQezI1aKQAw6z//aAAwDAQACAAMAAAAQQzi9/8QAFxEBAQEBAAAAAAAAAAAAAAAAADEBEf/aAAgBAwEBPxB3EJP/xAAXEQADAQAAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/EJrGf//EABsQAQEAAwADAAAAAAAAAAAAAAEAESExEEFh/9oACAEBAAE/EAk1Brw7Plx6QQfsEeA2EZ7OO3//2Q=="},"images":{"fallback":{"src":"/law-lending-page/static/f3a75dd9a0d412d81fc36b2dd58975a7/0fdf4/cat2.jpg","srcSet":"/law-lending-page/static/f3a75dd9a0d412d81fc36b2dd58975a7/0fdf4/cat2.jpg 300w,\\n/law-lending-page/static/f3a75dd9a0d412d81fc36b2dd58975a7/a89ca/cat2.jpg 600w","sizes":"300px"},"sources":[{"srcSet":"/law-lending-page/static/f3a75dd9a0d412d81fc36b2dd58975a7/078c3/cat2.webp 300w,\\n/law-lending-page/static/f3a75dd9a0d412d81fc36b2dd58975a7/6d09e/cat2.webp 600w","type":"image/webp","sizes":"300px"}]},"width":300,"height":300}')}}]);
//# sourceMappingURL=component---src-pages-index-js-50188903769f76e932fc.js.map