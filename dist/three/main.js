!function(e){function t(t){for(var r,i,l=t[0],c=t[1],u=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;a.push([33,1]),n()}({26:function(e,t,n){var r=n(16),o=n(27);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},27:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n.n(r)()(!1);o.push([e.i,"header{position:fixed;z-index:10;top:0;left:0;width:100%;height:60px;background:#24292e}header h1{color:#fff;opacity:.8;line-height:60px;margin:0 0 0 20px;font-weight:500;font-size:24px;font-family:PingFang SC,Verdana,Helvetica Neue,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif}header button{position:absolute;right:50px;top:50%;transform:translateY(-50%);background:none;border:0;color:#fff;opacity:.6;outline:none;display:none}header button:active{opacity:.8}header a{display:inline-block;position:absolute;right:20px;top:50%;margin-top:-12px;font-size:0;opacity:.6}header a:hover{opacity:.8}header svg{fill:currentColor;color:#fff}",""]),t.default=o},31:function(e,t,n){var r=n(16),o=n(32);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},32:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n.n(r)()(!1);o.push([e.i,'html,body{margin:0;padding:0;font-size:16px}body{overflow:hidden;padding-top:60px}.aside-wrapper{position:fixed;z-index:10;top:60px;left:0;bottom:0;width:210px}.aside-wrapper ul,.aside-wrapper li{list-style:none;margin:0;padding:0}.aside-wrapper li{height:40px;line-height:40px}.aside-wrapper li a{display:block;padding:0 20px;opacity:.8;color:#24292e;text-decoration:none}.aside-wrapper li a:hover{opacity:1}.aside-wrapper li.is-current a{font-weight:bold;text-decoration:underline}main{position:fixed;top:60px;right:0;left:210px;bottom:0;overflow-y:auto;outline:none}.font-size-zero{font-size:0}@media screen and (max-width: 640px){header h1{font-size:16px}header button{display:block}.aside-wrapper{bottom:auto;width:100%;background:rgba(255,255,255,.8);transition:all .3s ease-in-out;transform:scaleY(1);opacity:1;transform-origin:center top}.aside-wrapper:before{content:"";position:absolute;top:-7px;right:64px;border-bottom:7px solid rgba(255,255,255,.6);border-left:7px solid transparent;border-right:7px solid transparent}.aside-wrapper.hide{transform:scaleY(0);opacity:0}main{left:0}}',""]),t.default=o},33:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(18),i=n.n(a),l=n(12),c=n(2),u=[{text:"Home",path:"/"},{text:"First 3D Scene",path:"/First3DScene"},{text:"Multiple Geometry",path:"/MultipleGeometry"},{text:"Materials",path:"/Materials"},{text:"DrawLines",path:"/DrawLines"},{text:"Earth",path:"/Earth"}],s=n(7),f=n.n(s);n(26);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,n,r,a=w(i);function i(){return d(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this;return o.a.createElement("header",null,o.a.createElement("h1",null,"Three.js demo"),o.a.createElement("button",{onClick:function(t){return e.props.clickMenu(t)}},"Menu"),o.a.createElement("a",{href:"https://github.com/capricorncd/blog",target:"_blank",rel:"noreferrer"},o.a.createElement("svg",{height:"24",viewBox:"0 0 16 16",version:"1.1",width:"24","aria-hidden":"true"},o.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}))))}}])&&h(t.prototype,n),r&&h(t,r),i}(r.Component);b.propTypes={clickMenu:f.a.func};var g,x,E,S,j,k,O=b,z=n(0),M=n.p+"cd1d89bad83f9f16edf5c0d57db4d624.jpg",A=n.p+"4ff77aac8a1cf712f456bc2c9690f9d9.jpg",_=n(10),q=16763136,P=16736e3,C=340589,T=0,Y=16777215;function D(e){new Promise((function(e,t){var n=0,r=[],o={},a=new z.D;function i(){2==++n&&(r.length>0?t(r):e(o))}a.load(M,(function(e){o.earthTexture=e,i()}),void 0,(function(e){r.push(e),i()})),a.load(A,(function(e){o.moonTexture=e,i()}),void 0,(function(e){r.push(e),i()}))})).then((function(t){!function(e,t){var n=t.earthTexture,r=t.moonTexture;S=new z.d,g=new z.y;var o=new z.z(100,50,50),a=new z.o(o,new z.s({map:n}));g.add(a);var i=new z.z(27,50,50),l=new z.o(i,new z.s({map:r}));l.position.x=200,g.add(l);var c=e.offsetWidth,u=e.offsetHeight,s=new z.v(45,c/u,1,2e4);s.position.set(1500,700,-100);var f=new z.a(10066329);f.position.set(100,100,200),g.add(f);var p=new z.g(Y,1);p.position.set(20,1,1),g.add(p),(x=new z.G({antialias:!0})).setSize(c,u),x.setClearColor(T,1),e.appendChild(x.domElement),new _.a(s,e),k=function(t){c=e.offsetWidth,u=e.offsetHeight,s.aspect=c/u,s.updateProjectionMatrix(),x.setSize(c,u)},window.addEventListener("resize",k),function e(){E=requestAnimationFrame(e),a.rotation.y+=.025,l.rotation.y+=.0025/28*10,j=S.getElapsedTime(),l.position.set(580*Math.sin(j),0,580*Math.cos(j)),x.render(g,s)}()}(e,t)})).catch((function(e){console.error.apply(null,e)}))}function L(){g.remove(),x.dispose(),g=null,x=null,cancelAnimationFrame(E),window.removeEventListener("resize",k)}var N,X,F=function(){var e=null;return Object(r.useEffect)((function(){return e||D(e=document.querySelector(".home-el-hook")),function(){L()}}),[]),o.a.createElement("main",{className:"home-el-hook font-size-zero"})};function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16777215,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C,r=new z.w(t);r.position.set(400,200,300),e.add(r);var o=new z.a(n);return e.add(o),{pointLight:r,ambientLight:o}}function R(e,t,n){var r=t.offsetWidth,o=t.offsetHeight;n=n||function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200,o=t/n,a=new z.u(-r*o,r*o,r,-r,1,1e3);return a.position.set(200,300,200),a.lookAt(e.position),a}(e,r,o);var a=new z.G({antialias:!0});function i(){a.render(e,n)}return a.setSize(r,o),a.setClearColor(T,1),t.appendChild(a.domElement),new _.a(n,t).addEventListener("change",i),i(),a}var G,W,I=function(){var e=null;return Object(r.useEffect)((function(){return e||function(e){N=new z.y;var t=new z.A(100,100,100),n=new z.q({color:P}),r=new z.o(t,n);N.add(r),H(N,14522777,14509670),X=R(N,e)}(e=document.querySelector(".first-3d-scene-el-hook")),function(){N.remove(),X.dispose(),N=null,X=null}}),[]),o.a.createElement("main",{className:"first-3d-scene-el-hook font-size-zero"})};var B,J,Q=function(){var e=null;return Object(r.useEffect)((function(){return e||function(e){G=new z.y;var t=new z.c(100,100,100),n=new z.o(t,new z.q({color:q}));G.add(n);var r=new z.A(50,40,40),o=new z.o(r,new z.q({color:P}));o.translateX(100),G.add(o);var a=new z.f(0,30,100,30),i=new z.o(a,new z.q({color:P}));i.translateY(100),G.add(i);var l=new z.t(50),c=new z.o(l,new z.q({color:P}));c.translateX(-100),G.add(c);var u=new z.h(50),s=new z.o(u,new z.q({color:P}));s.position.set(0,0,100),G.add(s);var f=new z.k(50),p=new z.o(f,new z.q({color:P}));p.translateY(93),p.translateX(100),G.add(p);var d=new z.b(2e3);G.add(d),H(G);var h=new z.w(3355443);h.position.set(-200,-200,-200),G.add(h),W=R(G,e)}(e=document.querySelector(".multiple-geometry-el-hook")),function(){G.remove(),W.dispose(),G=null,W=null}}),[]),o.a.createElement("main",{className:"multiple-geometry-el-hook font-size-zero"})};var U,V,$=function(){var e=null;return Object(r.useEffect)((function(){return e||function(e){B=new z.y;var t=new z.A(50,40,40),n=new z.o(t,new z.p({color:C}));n.translateX(0),B.add(n),t=new z.A(50,40,40),(n=new z.o(t,new z.p({color:C,wireframe:!0}))).translateX(105),B.add(n),t=new z.A(50,40,40),(n=new z.o(t,new z.q({color:P,opacity:.8,transparent:!0}))).translateY(105),B.add(n),t=new z.A(50,40,40),(n=new z.o(t,new z.q({color:P,wireframe:!0}))).translateX(105),n.translateY(105),B.add(n),t=new z.A(50,40,40),(n=new z.o(t,new z.s({color:q,specular:3355443}))).translateY(-105),B.add(n),t=new z.A(50,40,40),(n=new z.o(t,new z.s({color:q,wireframe:!0}))).translateX(105),n.translateY(-105),B.add(n),t=new z.A(50,40,40),(n=new z.o(t,new z.r({bumpMap:(new z.D).load(M,(function(){}),console.warn,console.error)}))).translateX(-105),B.add(n),t=new z.A(50,40,40),(n=new z.o(t,new z.r({wireframe:!0}))).translateX(-210),B.add(n);var r=new z.b(2e3);B.add(r),H(B),J=R(B,e)}(e=document.querySelector(".materials-el-hook")),function(){B.remove(),J.dispose(),B=null,J=null}}),[]),o.a.createElement("main",{className:"materials-el-hook font-size-zero"})};var K=function(){var e=null;return Object(r.useEffect)((function(){return e||function(e){U=new z.y;var t=new z.j,n=new z.p({vertexColors:!0});t.colors.push(new z.e(q),new z.e(P));var r=new z.F(-100,0,100),o=new z.F(100,0,-100);t.vertices.push(r,o);var a=new z.l(t,n,z.m);U.add(a);var i=new z.v(50,e.offsetWidth/e.offsetHeight,.1,1e3);i.position.y=500,V=R(U,e,i)}(e=document.querySelector(".draw-lines-el-hook")),function(){U.remove(),V.dispose(),U=null,V=null}})),o.a.createElement("main",{className:"draw-lines-el-hook font-size-zero"})};var Z=function(){var e=null;return Object(r.useEffect)((function(){return e||D(e=document.querySelector(".multiple-geometry-el-hook")),function(){L()}}),[]),o.a.createElement("main",{className:"multiple-geometry-el-hook font-size-zero"})};function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return te(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ne=function(){var e=ee(Object(r.useState)(!1),2),t=e[0],n=e[1],a=ee(Object(r.useState)(location.hash.split("#").pop()),2),i=a[0],s=a[1],f=["aside-wrapper"];function p(){t&&n(!1)}t||f.push("hide"),Object(r.useEffect)((function(){return document.addEventListener("click",p),function(){document.removeEventListener("click",p)}}),[t]);var d=u.map((function(e,t){return o.a.createElement("li",{key:t,onClick:function(){return function(e){s(e.path)}(e)},className:i===e.path?"is-current":""},o.a.createElement(l.b,{to:e.path},e.text))}));return o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(O,{clickMenu:function(e){n(!t)}}),o.a.createElement("nav",{className:f.join(" ")},o.a.createElement("ul",null,d)),o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/Earth"},o.a.createElement(Z,null)),o.a.createElement(c.a,{path:"/DrawLines"},o.a.createElement(K,null)),o.a.createElement(c.a,{path:"/Materials"},o.a.createElement($,null)),o.a.createElement(c.a,{path:"/MultipleGeometry"},o.a.createElement(Q,null)),o.a.createElement(c.a,{path:"/First3DScene"},o.a.createElement(I,null)),o.a.createElement(c.a,{path:"/"},o.a.createElement(F,null)))))};n(31);i.a.render(o.a.createElement(ne,null),document.querySelector("#app"))}});