window.onload=()=>{$(".homepage-loader").delay(4800).fadeOut("slow",(function(){$(this).attr("style","display: none !important"),$("body").css("overflow-y","auto")}))};var indexInitiate=function(){history.scrollRestoration="manual",$(window).on("beforeunload",(function(){$(window).scrollTop(0)}));window.onscroll=()=>{let e=document.querySelector(".scroll-progress"),t=(document.querySelector(".scroll-value"),document.documentElement.scrollTop),r=document.documentElement.scrollHeight-document.documentElement.clientHeight,o=Math.round(100*t/r);console.log(o),e.style.background=`conic-gradient(#FFAC81 ${o}%, #2E2E2E ${o}%)`,e.style.webkitTransform="rotate("+2*o+"deg)"};const e=document.querySelector(".topBtn");$(document).ready((function(){window.addEventListener("scroll",()=>{window.pageYOffset>3600?e.classList.add("active"):e.classList.remove("active")}),$(".topBtn").click((function(){$("html ,body").animate({scrollTop:0},800)}))})),$(".skill-per").each((function(){var e=$(this),t=e.attr("per");e.css("width",t+"%"),$({animatedValue:0}).animate({animatedValue:t},{duration:1e3,step:function(){e.attr("per",Math.floor(this.animatedValue)+"%")},complete:function(){e.attr("per",Math.floor(this.animatedValue)+"%")}})})),AOS.init(),$(".slider").slick({slidesToShow:1,slidesToScroll:1,dots:!0,arrow:!0,speed:300,infinite:!0,prevArrow:".arrow-prev",nextArrow:".arrow-next",responsive:[{breakpoint:568,settings:{arrows:!1,centerMode:!0,centerPadding:"34px",slidesToScroll:1}}]});var t=document.querySelector(".hero-img-wrap"),r=document.querySelector(".picture"),o=document.querySelector(".hero-mobile"),n=document.querySelector(".pile-creature-mobile  "),i=document.querySelector("#qq"),a=document.createElement("iframe");a.setAttribute("src","https://my.spline.design/portfoliocopy-345e0be9b85355cc867b40750a04189a/"),a.setAttribute("frameborder","0"),a.setAttribute("height","100%"),a.setAttribute("width","100%");var c=document.createElement("iframe");c.setAttribute("src","https://my.spline.design/portfoliocopy-d8c32a5198ee00a3aeef0f1020c4beaf/"),c.setAttribute("frameborder","0"),c.setAttribute("height","100%"),c.setAttribute("width","100%");var l=function(e){switch(!0){case e.indexOf("edge")>-1:return"MS Edge";case e.indexOf("edg/")>-1:return"Edge ( chromium based)";case e.indexOf("opr")>-1&&!!window.opr:return"Opera";case e.indexOf("chrome")>-1&&!!window.chrome:return"Chrome";case e.indexOf("trident")>-1:return"MS IE";case e.indexOf("firefox")>-1:return"Mozilla Firefox";case e.indexOf("safari")>-1:return"Safari";default:return"other"}}(window.navigator.userAgent.toLowerCase());console.log("This is "+l+" browser"),"Safari"!=l?(t.appendChild(a),r.appendChild(c)):"Safari"===l&&(n.style.display="block",o.style.display="block",i.classList.remove("cursor"));let s=document.querySelector(".number"),d=0;setInterval(()=>{100==d?clearInterval():(d+=5,s.innerHTML=d+"%")},250)};$(document).ready((function(){indexInitiate()}));