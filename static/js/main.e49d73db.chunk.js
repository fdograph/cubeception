(this["webpackJsonp@fdograph/cubeception"]=this["webpackJsonp@fdograph/cubeception"]||[]).push([[0],{12:function(n,e,t){n.exports=t(19)},19:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(6),i=t.n(c),o=t(1),u=t(2),l=t(10);function s(){var n=Object(o.a)(["\n  background-color: #0f0;\n\n  width: 100%;\n  height: 100%;\n\n  animation-name: ",";\n  animation-duration: 5s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n"]);return s=function(){return n},n}function m(){var n=Object(o.a)(["\n  0% {\n    background-color: #0f0;\n  }\n  16.6% {\n    background-color: #ff0;\n  }\n  33% {\n    background-color: #f00;\n  }\n  49.9% {\n    background-color: #f0f;\n  }\n  66.5% {\n    background-color: #00f;\n  }\n  83.1% {\n    background-color: #0ff;\n  }\n  100% {\n    background-color: #0f0;\n  }\n"]);return m=function(){return n},n}var f=Object(u.d)(m()),b=u.c.div(s(),f);function d(){var n=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  grid-gap: 1vmin;\n\n  .gradient-item {\n    box-shadow: 0 0 40px;\n    ","\n  }\n"]);return d=function(){return n},n}function g(){var n=Object(o.a)(["\n    ","\n  "]);return g=function(){return n},n}var h=u.c.div(d(),function(){for(var n="",e=1;e<=25;e++){var t=-1*Math.floor(Math.random()*Math.floor(1e3*e));n+="\n      &:nth-child(".concat(e,") {\n        animation-delay: ").concat(t,"ms;\n      }\n    ")}return Object(u.b)(g(),n)}()),v=function(n){var e=n.className,t=Object(l.a)(Array(25).keys()).map((function(n){return r.a.createElement(b,{key:n,className:"gradient-item"})}));return r.a.createElement(h,{className:e},t)};function p(){var n=Object(o.a)(["\n  display: flex;\n  align-content: stretch;\n  justify-content: stretch;\n  position: absolute;\n  width: ",";\n  height: ",";\n  backface-visibility: visible;\n\n  &.front {\n    transform: rotateY(0deg) translateZ(calc("," / 2));\n  }\n  &.back {\n    transform: rotateY(180deg)\n      translateZ(calc("," / 2));\n  }\n  &.right {\n    transform: rotateY(90deg)\n      translateZ(calc("," / 2));\n  }\n  &.left {\n    transform: rotateY(-90deg)\n      translateZ(calc("," / 2));\n  }\n  &.top {\n    transform: rotateX(90deg)\n      translateZ(calc("," / 2));\n  }\n  &.bottom {\n    transform: rotateX(-90deg)\n      translateZ(calc("," / 2));\n  }\n"]);return p=function(){return n},n}function E(){var n=Object(o.a)(["\n  position: relative;\n  display: flex;\n  width: ",";\n  height: ",";\n  transform-style: preserve-3d;\n  backface-visibility: visible;\n\n  animation-name: ",";\n  animation-duration: 30s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n"]);return E=function(){return n},n}function z(){var n=Object(o.a)(["\n  0% {\n      transform: rotate3d(1, 1, 1, 360deg);\n    }\n    50% {\n      transform: rotate3d(1, 1, 1, 180deg);\n    }\n    100% {\n      transform: rotate3d(0, 0, 0, 0);\n    }\n"]);return z=function(){return n},n}var S=Object(u.d)(z()),N=u.c.div(E(),(function(n){return n.cubeSize}),(function(n){return n.cubeSize}),S),k=u.c.div(p(),(function(n){return n.cubeSize}),(function(n){return n.cubeSize}),(function(n){return n.cubeSize}),(function(n){return n.cubeSize}),(function(n){return n.cubeSize}),(function(n){return n.cubeSize}),(function(n){return n.cubeSize}),(function(n){return n.cubeSize})),j=function(n){var e=n.className,t=n.cubeSize;return r.a.createElement(N,{className:"cude ".concat(e),cubeSize:t},r.a.createElement(k,{className:"front",cubeSize:t},r.a.createElement(v,{className:"gradient"})),r.a.createElement(k,{className:"back",cubeSize:t},r.a.createElement(v,{className:"gradient"})),r.a.createElement(k,{className:"right",cubeSize:t},r.a.createElement(v,{className:"gradient"})),r.a.createElement(k,{className:"left",cubeSize:t},r.a.createElement(v,{className:"gradient"})),r.a.createElement(k,{className:"top",cubeSize:t},r.a.createElement(v,{className:"gradient"})),r.a.createElement(k,{className:"bottom",cubeSize:t},r.a.createElement(v,{className:"gradient"})))};function y(){var n=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  perspective: 150vmin;\n"]);return y=function(){return n},n}function O(){var n=Object(o.a)(["\n  *, *:before, *:after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  body {\n    background: #222;\n  }\n"]);return O=function(){return n},n}var w=Object(u.a)(O()),x=u.c.main(y()),Z=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(w,null),r.a.createElement(x,null,r.a.createElement(j,{className:"cube",cubeSize:"50vmin"})))};i.a.render(r.a.createElement(Z,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e49d73db.chunk.js.map