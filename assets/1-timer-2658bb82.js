import{f as h,i as y}from"./vendor-77e16229.js";const c=document.getElementById("days"),d=document.getElementById("hours"),i=document.getElementById("minutes"),l=document.getElementById("seconds"),n=document.getElementById("start-timer"),s=document.getElementById("datetime-picker");let m,a=!1;function C(){const e=new Date(s.value).getTime();a=!0,n.disabled=!0,s.disabled=!0,m=setInterval(function(){const r=new Date().getTime(),t=e-r,f=Math.floor(t/(1e3*60*60*24)),E=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),I=Math.floor(t%(1e3*60*60)/(1e3*60)),g=Math.floor(t%(1e3*60)/1e3);c.textContent=o(f),d.textContent=o(E),i.textContent=o(I),l.textContent=o(g),t<0&&(clearInterval(m),c.textContent="00",d.textContent="00",i.textContent="00",l.textContent="00",a=!1,n.disabled=!1,s.disabled=!1)},1e3)}function o(e){return e<10?`0${e}`:e}n.addEventListener("click",function(){a||C()});let u;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){u=e[0],u<new Date?(y.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):n.disabled=!1}},x=document.getElementById("datetime-picker");h(x,D);
//# sourceMappingURL=1-timer-2658bb82.js.map
