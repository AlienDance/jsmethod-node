(function(e){function t(t){for(var o,l,r=t[0],s=t[1],i=t[2],d=0,b=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&b.push(a[l][0]),a[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={app:0},c=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0428":function(e,t,n){},"46c5":function(e,t,n){"use strict";n("600c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function a(e,t,n,a,c,l){var r=Object(o["x"])("Navbar"),s=Object(o["x"])("router-view");return Object(o["s"])(),Object(o["f"])(o["a"],null,[Object(o["j"])(r),Object(o["j"])(s)],64)}var c={class:"navbar navbar-expand-lg navbar-dark bg-success p-0 px-2"},l={class:"container-fluid px-lg-5"},r=Object(o["g"])("span",{class:"h2 mb-0"},"JSMETHOD",-1),s={class:"d-flex align-items-center"},i=Object(o["g"])("button",{class:"navbar-toggler h-50",type:"button","data-bs-toggle":"collapse","data-bs-target":"#main-nav"},[Object(o["g"])("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse justify-content-end align-center",id:"main-nav"},d={class:"navbar-nav"},b={class:"nav-item d-none d-lg-block"};function g(e,t,n,a,g,p){var m=Object(o["x"])("router-link"),j=Object(o["x"])("AuthDropdown");return Object(o["s"])(),Object(o["f"])("nav",c,[Object(o["g"])("div",l,[Object(o["j"])(m,{class:"navbar-brand text-light m-0 py-2 mx-lg-3 d-flex align-items-center",to:"/"},{default:Object(o["C"])((function(){return[r]})),_:1}),Object(o["g"])("div",s,[Object(o["j"])(j,{class:"d-block d-lg-none"}),i]),Object(o["g"])("div",u,[Object(o["g"])("ul",d,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["w"])(a.navItems,(function(e){return Object(o["s"])(),Object(o["f"])("li",{key:e.title,class:"nav-item"},[Object(o["j"])(m,{class:"nav-link text-end text-lg-center lead text-light fw-bold p-3",to:e.href},{default:Object(o["C"])((function(){return[Object(o["i"])(Object(o["z"])(e.title),1)]})),_:2},1032,["to"])])})),128)),Object(o["g"])("li",b,[Object(o["j"])(j)])])])])])}var p={class:"dropdown auth-dropdown"},m=Object(o["g"])("a",{class:"dropdown-toggle text-light d-flex align-items-center",href:"",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown"},[Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-person-circle",viewBox:"0 0 16 16"},[Object(o["g"])("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}),Object(o["g"])("path",{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"})])],-1),j={style:{margin:"-1px"},class:"dropdown-menu dropdown-menu-dark dropdown-menu-end py-1"},f={key:0},v=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-house-door",viewBox:"0 0 16 16"},[Object(o["g"])("path",{d:"M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"})],-1),O=Object(o["g"])("span",{class:"ms-1"},"Log In",-1),h=Object(o["g"])("li",null,[Object(o["g"])("hr",{class:"dropdown-divider m-0"})],-1),w=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-person-plus",viewBox:"0 0 16 16"},[Object(o["g"])("path",{d:"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"}),Object(o["g"])("path",{"fill-rule":"evenodd",d:"M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"})],-1),x=Object(o["g"])("span",{class:"ms-1"},"Sign Up",-1),y={key:1},k=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-door-open",viewBox:"0 0 16 16"},[Object(o["g"])("path",{d:"M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"}),Object(o["g"])("path",{d:"M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"})],-1),C=Object(o["g"])("span",{class:"ms-1"},"Log Out",-1),A=[k,C];function S(e,t,n,a,c,l){var r=Object(o["x"])("router-link");return Object(o["s"])(),Object(o["f"])("div",p,[m,Object(o["g"])("ul",j,[a.showLogin?(Object(o["s"])(),Object(o["f"])("div",f,[Object(o["g"])("li",null,[Object(o["j"])(r,{class:"dropdown-item d-flex align-items-center",to:"/login"},{default:Object(o["C"])((function(){return[v,O]})),_:1})]),h,Object(o["g"])("li",null,[Object(o["j"])(r,{class:"dropdown-item",to:"/signup"},{default:Object(o["C"])((function(){return[w,x]})),_:1})])])):Object(o["e"])("",!0),a.showLogin?Object(o["e"])("",!0):(Object(o["s"])(),Object(o["f"])("li",y,[Object(o["g"])("a",{onClick:t[0]||(t[0]=function(){return a.logout&&a.logout.apply(a,arguments)}),class:"dropdown-item d-flex align-items-center",href:""},A)]))])])}var V={setup:function(){var e=null;e=!$cookies.get("user");var t=function(){axios.post("/logout").then((function(e){return window.location.href="/"})).catch((function(e){return console.log(e)}))};return{showLogin:e,logout:t}}},z=(n("8801"),n("6b0d")),I=n.n(z);const L=I()(V,[["render",S]]);var M=L,H={components:{AuthDropdown:M},setup:function(){var e=[{title:"Home",href:"/"},{title:"Portfolio",href:"/portfolio"},{title:"To Do",href:"/to-do"},{title:"Lorem",href:"/lorem"}];return{navItems:e}}};n("9537");const T=I()(H,[["render",g]]);var _=T,E={components:{Navbar:_}};const P=I()(E,[["render",a]]);var B=P,N=n("6c02"),D={class:"container lead text-center fs-4"},F=Object(o["g"])("p",{class:"mt-5"},"Homepage still in development...",-1),J=Object(o["i"])("log in"),Z=Object(o["i"])(" / "),U=Object(o["i"])("sign up"),G={class:"list-unstyled"},K=Object(o["i"])("Portfolio"),R=Object(o["i"])("Todo List"),$=Object(o["i"])("Lorem");function Q(e,t,n,a,c,l){var r=Object(o["x"])("router-link");return Object(o["s"])(),Object(o["f"])("div",D,[F,Object(o["g"])("p",null,[Object(o["j"])(r,{class:"homepage-link",to:"/login"},{default:Object(o["C"])((function(){return[J]})),_:1}),Z,Object(o["j"])(r,{class:"homepage-link",to:"/signup"},{default:Object(o["C"])((function(){return[U]})),_:1})]),Object(o["g"])("ul",G,[Object(o["g"])("li",null,[Object(o["j"])(r,{class:"homepage-link",to:"/portfolio"},{default:Object(o["C"])((function(){return[K]})),_:1})]),Object(o["g"])("li",null,[Object(o["j"])(r,{class:"homepage-link",to:"/to-do"},{default:Object(o["C"])((function(){return[R]})),_:1})]),Object(o["g"])("li",null,[Object(o["j"])(r,{class:"homepage-link",to:"/lorem"},{default:Object(o["C"])((function(){return[$]})),_:1})])])])}var Y={name:"Home"};n("46c5");const q=I()(Y,[["render",Q]]);var W=q;function X(e,t,n,a,c,l){var r=Object(o["x"])("LoremForm");return Object(o["s"])(),Object(o["d"])(r)}var ee={class:"container-fluid my-5"},te={class:"d-flex justify-content-center"},ne={ref:"loremTextarea",class:"rounded px-1",cols:"120",rows:"15"},oe={class:"d-block d-lg-flex justify-content-center mt-3"},ae={class:"d-flex justify-content-center"},ce={class:"input-group",style:{width:"200px"}},le=Object(o["g"])("span",{class:"input-group-text justify-content-center",style:{width:"110px"}},"Sentences",-1),re={ref:"loremInput",type:"number",min:"1",max:"1000",value:"1",class:"form-control text-center"},se={class:"d-flex justify-content-center m-3 m-lg-0"},ie=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-card-text",viewBox:"0 0 16 16"},[Object(o["g"])("path",{d:"M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"}),Object(o["g"])("path",{d:"M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"})],-1),ue=Object(o["g"])("span",{class:"ms-1"},"Generate Lorem",-1),de=[ie,ue],be=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-clipboard",viewBox:"0 0 16 16"},[Object(o["g"])("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),Object(o["g"])("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"})],-1),ge=Object(o["g"])("span",{class:"ms-1"},"Copy",-1),pe=[be,ge],me=Object(o["g"])("div",{class:"text-muted text-center mt-2"},[Object(o["g"])("p",{class:"mb-1"},"Generates from 1 to 1000 sentences"),Object(o["g"])("p",null,[Object(o["i"])(" Made with "),Object(o["g"])("a",{target:"_blank",class:"text-decoration-none",href:"https://www.npmjs.com/package/lorem-ipsum"},"lorem-ipsum")])],-1);function je(e,t,n,a,c,l){return Object(o["s"])(),Object(o["f"])("div",ee,[Object(o["g"])("div",te,[Object(o["g"])("textarea",ne,null,512)]),Object(o["g"])("div",oe,[Object(o["g"])("div",ae,[Object(o["g"])("div",ce,[le,Object(o["g"])("input",re,null,512)])]),Object(o["g"])("div",se,[Object(o["g"])("button",{onClick:t[0]||(t[0]=function(){return a.fetchLorem&&a.fetchLorem.apply(a,arguments)}),class:"btn btn-success ms-2 me-1 d-inline-flex align-items-center"},de),Object(o["g"])("button",{onClick:t[1]||(t[1]=function(){return a.copyLorem&&a.copyLorem.apply(a,arguments)}),class:"btn btn-primary d-inline-flex align-items-center"},pe)])]),me])}var fe=n("a1e9"),ve=n("5c40"),Oe={setup:function(){var e=Object(fe["l"])(null),t=Object(fe["l"])(null),n=function(){var n=t.value.value;n<=0?(n=1,t.value.value=1):n>1e3&&(n=1e3,t.value.value=1e3),axios.post("/lorem",{sentencesQuantity:n}).then((function(t){return e.value.value=t.data.lorem})).catch((function(e){return console.log(e)}))},o=function(){navigator.clipboard.writeText(e.value.value)};return Object(ve["y"])(n),{fetchLorem:n,loremTextarea:e,loremInput:t,copyLorem:o}}};const he=I()(Oe,[["render",je]]);var we=he,xe={name:"Lorem",components:{LoremForm:we}};const ye=I()(xe,[["render",X]]);var ke=ye,Ce=(n("9911"),{class:"container px-4"}),Ae={class:"text-center lead my-4"},Se=Object(o["g"])("p",{class:"fs-2"},"My Projects",-1),Ve={class:"text-center fs-4"},ze={class:"col-12 col-lg-6 d-flex flex-column justify-content-center"},Ie={class:"fw-bolder"},Le={class:"d-block d-lg-inline"},Me=Object(o["i"])(" ("),He=["href"],Te=Object(o["i"])(" | "),_e=["href"],Ee=Object(o["i"])(") "),Pe={class:"list-unstyled fs-5"},Be={class:"d-flex justify-content-center align-items-center mb-2"},Ne=["src"],De={class:"col-12 col-lg-6 d-flex align-items-center"},Fe=["src"];function Je(e,t,n,a,c,l){var r=Object(o["x"])("InfoCard");return Object(o["s"])(),Object(o["f"])("div",Ce,[Object(o["j"])(r),Object(o["g"])("div",Ae,[Se,Object(o["g"])("div",Ve,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["w"])(a.projects,(function(e){return Object(o["s"])(),Object(o["f"])("div",{key:e.title,class:"row border border-dark py-2 rounded mb-3"},[Object(o["g"])("div",ze,[Object(o["g"])("p",Ie,[Object(o["g"])("span",null,Object(o["z"])(e.title),1),Object(o["g"])("span",Le,[Me,Object(o["g"])("a",{target:"_blank",class:"text-decoration-none portfolio-link",href:e.link},"Open",8,He),Te,Object(o["g"])("a",{target:"_blank",class:"text-decoration-none portfolio-link",href:e.codeLink},"Code",8,_e),Ee])]),Object(o["g"])("ul",Pe,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["w"])(e.features,(function(e){return Object(o["s"])(),Object(o["f"])("li",{key:e,class:"mb-1"},Object(o["z"])(e),1)})),128))]),Object(o["g"])("div",Be,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["w"])(e.tools,(function(e){return Object(o["s"])(),Object(o["f"])("img",{key:e,style:{height:"28px"},class:"mx-1",src:"/homepage/images/".concat(e),alt:""},null,8,Ne)})),128))])]),Object(o["g"])("div",De,[Object(o["g"])("img",{src:e.image,class:"w-100 border border-dark portfolio-image rounded",alt:""},null,8,Fe)])])})),128))])])])}var Ze={class:"card mt-5 row"},Ue=Object(o["h"])('<div class="card-body"><img style="width:150px;" src="homepage/images/Kot.png" alt="" class="rounded-pill d-block mx-auto"><div class="mt-3 text-center lead"><p class="mb-1">Hi, my name is vlader. I&#39;m a web developer.</p><p class="mb-1">I love building different stuff and learning various technologies.</p><p class="mb-4">Check out my projects below ⭣</p></div></div>',1),Ge={class:"d-flex justify-content-center bg-success rounded-bottom py-1"},Ke={class:"dropdown d-flex"},Re=Object(o["g"])("a",{href:"",class:"d-flex mx-2 contact-bar-link",role:"button","data-bs-toggle":"dropdown"},[Object(o["g"])("img",{src:"homepage/images/envelope-fill.svg"})],-1),$e={class:"dropdown-menu dropdown-menu-dark dropdown-menu-end py-1"},Qe=Object(o["h"])('<li><a class="dropdown-item d-flex align-items-center" href="mailto:vlad0502vlader@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-plus" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"></path><path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"></path></svg><span class="ms-2">Send Mail</span></a></li>',1),Ye=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-clipboard",viewBox:"0 0 16 16"},[Object(o["g"])("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),Object(o["g"])("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"})],-1),qe=Object(o["g"])("span",{class:"ms-2"},"Copy Address",-1),We=[Ye,qe],Xe=Object(o["g"])("a",{target:"_blank",href:"https://github.com/AlienDance",class:"d-flex mx-2 contact-bar-link"},[Object(o["g"])("img",{src:"homepage/images/github.svg"})],-1);function et(e,t,n,a,c,l){return Object(o["s"])(),Object(o["f"])("div",Ze,[Ue,Object(o["g"])("div",Ge,[Object(o["g"])("div",Ke,[Re,Object(o["g"])("ul",$e,[Qe,Object(o["g"])("li",null,[Object(o["g"])("button",{onClick:t[0]||(t[0]=function(){return a.copyEmailAddress&&a.copyEmailAddress.apply(a,arguments)}),class:"dropdown-item d-flex align-items-center"},We)])])]),Xe])])}var tt={setup:function(){var e=function(){navigator.clipboard.writeText("vlad0502vlader@gmail.com")};return{copyEmailAddress:e}}};n("62ff");const nt=I()(tt,[["render",et]]);var ot=nt,at={components:{InfoCard:ot},setup:function(){var e=[{title:"Landing page website",link:"/landing",codeLink:"https://github.com/AlienDance/jsmethod-vue/tree/master/landing-page",image:"homepage/images/Screenshot2.png",description:"A landing page website.",features:["Scrollspy Navbar","Image Carousel","Lightbox Gallery","Responsive Design"],tools:["node-logo-black.svg","vuejs-logo.svg","bootstrap-logo.svg"]},{title:"E-commerce web-app for a store",link:"/eshop",codeLink:"https://github.com/AlienDance/jsmethod-vue/tree/master/eshop-app",image:"homepage/images/Screenshot.png",description:"E-commerce web-app for a local store.",features:["Multiple item categories","Cart System","Order Managment System","Single Page Application","Responsive Design"],tools:["node-logo-black.svg","vuejs-logo.svg","bootstrap-logo.svg","mongodb-logo.svg"]}];return{projects:e}}};n("6694");const ct=I()(at,[["render",Je]]);var lt=ct,rt={class:"container my-5 d-flex justify-content-center"};function st(e,t,n,a,c,l){var r=Object(o["x"])("AuthForm");return Object(o["s"])(),Object(o["f"])("div",rt,[Object(o["j"])(r,{login:!0})])}var it={key:0,class:"card-container"},ut={class:"card auth-card p-3"},dt={class:"mb-3"},bt=Object(o["g"])("label",{for:"email",class:"form-label"},"Email address",-1),gt={ref:"emailInput",type:"email",class:"form-control",name:"email",id:"email"},pt={class:"text-danger",ref:"emailError"},mt={class:"mb-3"},jt=Object(o["g"])("label",{for:"password",class:"form-label"},"Password",-1),ft={ref:"passwordInput",type:"password",class:"form-control",name:"password",id:"password"},vt={class:"text-danger",ref:"passwordError"},Ot={class:"d-flex justify-content-center"},ht={class:"btn btn-success"},wt={key:0,class:"small mt-2 text-muted text-center"},xt=Object(o["i"])(" Use "),yt=Object(o["g"])("span",{class:"text-primary"},"test123@test.com",-1),kt=Object(o["i"])(" and "),Ct=Object(o["g"])("span",{class:"text-primary"},"test123",-1),At=Object(o["i"])(" for testing purposes. "),St=[xt,yt,kt,Ct,At],Vt={key:1,class:"small mt-2 text-muted text-center"},zt=Object(o["i"])(" Or log in with testing account "),It=Object(o["i"])("here"),Lt=Object(o["i"])(". "),Mt={key:1,class:"text-center"},Ht=Object(o["g"])("p",null,"You are already logged in...",-1),Tt=Object(o["i"])("Homepage");function _t(e,t,n,a,c,l){var r=Object(o["x"])("router-link");return a.userIsAuth?a.userIsAuth?(Object(o["s"])(),Object(o["f"])("div",Mt,[Ht,Object(o["j"])(r,{class:"btn btn-success me-3",to:"/"},{default:Object(o["C"])((function(){return[Tt]})),_:1}),Object(o["g"])("button",{onClick:t[2]||(t[2]=function(){return a.logout&&a.logout.apply(a,arguments)}),class:"btn btn-dark"},"Log Out")])):Object(o["e"])("",!0):(Object(o["s"])(),Object(o["f"])("div",it,[Object(o["g"])("div",ut,[Object(o["g"])("form",{onSubmit:[t[0]||(t[0]=Object(o["E"])((function(){}),["prevent"])),t[1]||(t[1]=function(){return a.sumbitAuthForm&&a.sumbitAuthForm.apply(a,arguments)})]},[Object(o["g"])("div",dt,[bt,Object(o["g"])("input",gt,null,512)]),Object(o["g"])("div",null,[Object(o["g"])("p",pt,null,512)]),Object(o["g"])("div",mt,[jt,Object(o["g"])("input",ft,null,512)]),Object(o["g"])("div",null,[Object(o["g"])("p",vt,null,512)]),Object(o["g"])("div",Ot,[Object(o["g"])("button",ht,Object(o["z"])(a.buttonText),1)])],32)]),a.props.login?(Object(o["s"])(),Object(o["f"])("p",wt,St)):(Object(o["s"])(),Object(o["f"])("p",Vt,[zt,Object(o["j"])(r,{to:"/login"},{default:Object(o["C"])((function(){return[It]})),_:1}),Lt]))]))}var Et={props:["login","signup"],setup:function(e){var t=Object(fe["l"])(null),n=Object(fe["l"])(null),o=Object(fe["l"])(null),a=Object(fe["l"])(null),c=null;c=!!$cookies.get("user");var l=null,r=null;e.signup?(l="signup",r="Sign Up"):e.login&&(l="login",r="Log In");var s=function(){if(!c){console.log(l);var e={email:t.value.value,password:n.value.value};e.email&&e.password.length>=6?axios.post("/".concat(l),{data:e}).then((function(e){e.data.emailError||e.data.passwordError?(o.value.textContent=e.data.emailError,a.value.textContent=e.data.passwordError):window.location.href="/"})).catch((function(e){return console.log(e)})):e.email?e.password.length<6&&(o.value.textContent="",a.value.textContent="Password must be at least 6 characters long!"):(o.value.textContent="Please, enter a valid email!",a.value.textContent="")}},i=function(){axios.post("/logout").then((function(e){return window.location.href="/"})).catch((function(e){return console.log(e)}))};return{emailInput:t,passwordInput:n,emailError:o,passwordError:a,buttonText:r,userIsAuth:c,logout:i,sumbitAuthForm:s,props:e}}};n("880f");const Pt=I()(Et,[["render",_t]]);var Bt=Pt,Nt={name:"Login",components:{AuthForm:Bt}};const Dt=I()(Nt,[["render",st]]);var Ft=Dt,Jt={class:"container my-5 d-flex justify-content-center"};function Zt(e,t,n,a,c,l){var r=Object(o["x"])("AuthForm");return Object(o["s"])(),Object(o["f"])("div",Jt,[Object(o["j"])(r,{signup:!0})])}var Ut={name:"Signup",components:{AuthForm:Bt}};const Gt=I()(Ut,[["render",Zt]]);var Kt=Gt,Rt={class:"container my-5 d-flex justify-content-center"},$t={class:"row todo-container"},Qt={class:"col-12 col-md-10 pe-md-0 d-flex flex-column align-items-center"},Yt={class:"col-12 mt-2 d-flex d-md-none align-items-center justify-content-center"},qt={class:"list-group w-100 my-2"},Wt=["data-id"],Xt=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},[Object(o["g"])("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(o["g"])("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})],-1),en=[Xt],tn={class:"col-12 col-md-2 ps-md-0 d-none d-md-flex flex-md-column align-items-center"};function nn(e,t,n,a,c,l){var r=Object(o["x"])("TodoAddButton"),s=Object(o["x"])("TodoClearButton");return Object(o["s"])(),Object(o["f"])("div",Rt,[Object(o["g"])("div",$t,[Object(o["g"])("div",Qt,[Object(o["g"])("input",{ref:"newTodoInput",type:"text",class:"form-control",id:"new-todo-input",onKeypress:t[0]||(t[0]=Object(o["D"])((function(){return a.setItemToLocalStorage&&a.setItemToLocalStorage.apply(a,arguments)}),["enter"])),placeholder:"New To Do"},null,544),Object(o["g"])("div",Yt,[Object(o["j"])(r,{onClick:a.setItemToLocalStorage},null,8,["onClick"]),Object(o["j"])(s,{onClick:a.clearAllItems},null,8,["onClick"])]),Object(o["g"])("ul",qt,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["w"])(a.todosFromStorage,(function(e){return Object(o["s"])(),Object(o["f"])("div",{key:e.id,"data-id":e.id,class:"input-group todo-div my-1"},[Object(o["g"])("li",{onInput:t[1]||(t[1]=function(){return a.editTodo&&a.editTodo.apply(a,arguments)}),contenteditable:"true",class:"list-group-item rounded-start form-control"},Object(o["z"])(e.item),33),Object(o["g"])("button",{onClick:t[2]||(t[2]=function(){return a.deleteSingleTodo&&a.deleteSingleTodo.apply(a,arguments)}),class:"btn btn-warning input-group-text d-flex align-items-center"},en)],8,Wt)})),128))])]),Object(o["g"])("div",tn,[Object(o["j"])(r,{onClick:a.setItemToLocalStorage},null,8,["onClick"]),Object(o["j"])(s,{onClick:a.clearAllItems},null,8,["onClick"])])])])}n("e9c4"),n("7db0"),n("d3b7"),n("caad"),n("2532"),n("25f0"),n("a9e3"),n("4de4");var on={class:"btn btn-success add-btn me-2 me-md-0 mb-md-2 d-flex align-items-center justify-content-center"},an=Object(o["h"])('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"></path><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path></svg><span class="ms-1">Add</span>',2),cn=[an];function ln(e,t,n,a,c,l){return Object(o["s"])(),Object(o["f"])("button",on,cn)}var rn={};const sn=I()(rn,[["render",ln]]);var un=sn,dn={class:"btn btn-danger clear-btn d-flex align-items-center justify-content-center"},bn=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},[Object(o["g"])("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(o["g"])("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})],-1),gn=Object(o["g"])("span",{class:"ms-1"},"Clear",-1),pn=[bn,gn];function mn(e,t,n,a,c,l){return Object(o["s"])(),Object(o["f"])("button",dn,pn)}var jn={};const fn=I()(jn,[["render",mn]]);var vn=fn,On={components:{TodoAddButton:un,TodoClearButton:vn},setup:function(){var e=Object(fe["l"])(null),t=Object(fe["l"])([]),n=Object(fe["l"])(null);t.value=JSON.parse(localStorage.getItem("todos")),n.value=JSON.parse(localStorage.getItem("todoId"));var o=function(){e.value.value&&(null===n.value||null===t.value?(n.value=0,localStorage.setItem("todoId","0"),t.value=[]):t.value=JSON.parse(localStorage.getItem("todos")),n.value++,localStorage.setItem("todoId",JSON.stringify(n.value)),t.value.unshift({id:n,item:e.value.value}),localStorage.setItem("todos",JSON.stringify(t.value)))},a=function(e){var n=e.path.find((function(e){return e.className.toString().includes("todo-div")})),o=Number(n.dataset.id),a=t.value.filter((function(e){return e.id!==o}));t.value=a,localStorage.setItem("todos",JSON.stringify(t.value))},c=function(){console.log("items cleared"),t.value=[],localStorage.setItem("todos","[]"),n.value=0,localStorage.setItem("todoId","0")},l=function(e){var n=Number(e.target.parentNode.dataset.id),o=t.value.find((function(e){return e.id===n}));o.item=e.target.textContent,localStorage.setItem("todos",JSON.stringify(t.value))};return{newTodoInput:e,setItemToLocalStorage:o,clearAllItems:c,todosFromStorage:t,deleteSingleTodo:a,editTodo:l}}};n("9005");const hn=I()(On,[["render",nn]]);var wn=hn,xn=" - jsmethod",yn=[{path:"/",name:"Home",component:W,meta:{title:"Home"+xn}},{path:"/lorem",name:"Lorem",component:ke,meta:{title:"Lorem"+xn}},{path:"/portfolio",name:"Portfolio",component:lt,meta:{title:"Portfolio"+xn}},{path:"/login",name:"Login",component:Ft,meta:{title:"Log In"+xn}},{path:"/signup",name:"Signup",component:Kt,meta:{title:"Sign Up"+xn}},{path:"/to-do",name:"TodoList",component:wn,meta:{title:"To Do"+xn}}],kn=Object(N["a"])({history:Object(N["b"])("/"),routes:yn});kn.beforeEach((function(e,t,n){document.title=e.meta.title,axios.get("/"),n()}));var Cn=kn;Object(o["c"])(B).use(Cn).mount("#app")},"600c":function(e,t,n){},"62ff":function(e,t,n){"use strict";n("e47a")},6694:function(e,t,n){"use strict";n("0428")},"7ae1":function(e,t,n){},8801:function(e,t,n){"use strict";n("de27")},"880f":function(e,t,n){"use strict";n("e565")},9005:function(e,t,n){"use strict";n("9b94")},9537:function(e,t,n){"use strict";n("7ae1")},"9b94":function(e,t,n){},de27:function(e,t,n){},e47a:function(e,t,n){},e565:function(e,t,n){}});
//# sourceMappingURL=app.4b87abe5.js.map