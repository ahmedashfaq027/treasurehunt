(this["webpackJsonptreasure-hunt"]=this["webpackJsonptreasure-hunt"]||[]).push([[0],{21:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(14),a=n.n(r),o=(n(21),n(16)),i=n(4),l=n.n(i),u=n(8),j=n(2),h=(n(9),n(15)),b=n.n(h),d=n(0);var f=function(e){var t=e.index,n=e.members,s=e.color,r=e.cards,a=void 0===r?[]:r,o=e.winpos,i=e.setWinpos,l=Object(c.useState)(0),u=Object(j.a)(l,2),h=u[0],f=u[1],O=Object(c.useState)(-1),p=Object(j.a)(O,2),m=p[0],g=p[1],v=Object(c.useRef)();return console.log(a),Object(c.useEffect)((function(){var e=v.current.children;if(e.length>0)for(var t=0;t<h;t++)e[t].style.backgroundColor="green";if(a.length>0&&h===a.length&&o.length>0){g(o[0]);var n=o;n.splice(0,1),i(n)}}),[h]),Object(d.jsxs)("div",{className:"section",style:{background:s},children:[Object(d.jsxs)("div",{className:"section__top",children:[Object(d.jsxs)("h1",{className:"team__name",children:["Team #",t]}),Object(d.jsx)("div",{className:"progress",ref:v,children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(d.jsx)("p",{className:"progress__indi",children:t+1})}))}),(null===a||void 0===a?void 0:a.length)>0&&h<a.length&&Object(d.jsx)(b.a,{size:200,value:a[h],level:"H",className:"qrcode"}),h===a.length&&Object(d.jsx)("img",{className:"medal",src:-1!==m&&"/winpos/".concat(m,".png"),alt:""})]}),Object(d.jsxs)("div",{className:"section__bottom",children:[Object(d.jsxs)("div",{className:"toggle",children:[Object(d.jsxs)("button",{className:"previous__toggle",onClick:function(e){h>0&&f(h-1)},children:["\xab ",Object(d.jsx)("span",{className:"prev",children:"Prev"})]}),Object(d.jsxs)("button",{className:"next__toggle",onClick:function(e){h<a.length&&f(h+1)},children:[Object(d.jsx)("span",{className:"next",children:"Next"})," \xbb"]})]}),Object(d.jsx)("h3",{className:"team__members",children:n&&n.join(", ")})]})]})};var O=function(){var e=["#cfb6e2","#a7b4f1","#6fb8b5","#67cade","#d0cda9"],t=Object(c.useState)([1,2,3]),n=Object(j.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)([]),i=Object(j.a)(a,2),h=i[0],b=i[1],O=Object(c.useState)([]),p=Object(j.a)(O,2),m=p[0],g=p[1],v=Object(c.useState)([]),x=Object(j.a)(v,2),N=x[0],_=x[1];return Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./teams.json").then((function(e){return e.json()})).then((function(e){return b(e)})).catch((function(e){return console.log(e,"error")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./thunt-cards.json").then((function(e){return e.json()})).then((function(e){return g(e)})).catch((function(e){return console.log(e,"error")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){m&&function(e){_([]);for(var t=function(t){var n=[];Object.keys(e).forEach((function(t){var c=e[t],s=Math.floor(Math.random()*c.length);n.push(c[s]),c.splice(s,1)})),_((function(e){return[].concat(Object(o.a)(e),[n])}))},n=0;n<h.length;n++)t()}(m)}),[m,h.length]),Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{className:"title",children:"Treasure Hunt"})}),Object(d.jsx)("div",{className:"card__sections",children:null===h||void 0===h?void 0:h.map((function(t,n){return Object(d.jsx)(f,{index:n+1,color:e[n],members:t,cards:N&&N[n],winpos:s,setWinpos:r},n)}))})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),p()},9:function(e,t,n){}},[[33,1,2]]]);
//# sourceMappingURL=main.92124a36.chunk.js.map