(this.webpackJsonphongflix=this.webpackJsonphongflix||[]).push([[0],{140:function(e,s,a){},159:function(e,s,a){},456:function(e,s,a){"use strict";a.r(s);var i=a(17),t=a.n(i),c=a(18),l=a.n(c),n=a(77),r=a.n(n),o=a(130),d=a(131),m=a(132),v=a(136),j=a(135),h=(a(140),a(76),a(133)),u=a.n(h),b=(a(159),a(160),a(1));function p(e){e.id;var s=e.year,a=e.title,i=e.summary,t=e.poster,c=e.runtime,l=e.genres,n=e.rating,r="https://www.youtube.com/embed/"+e.yt_trailer_code+"?enablejsapi=1";return console.log(r),Object(b.jsxs)("div",{className:"movie col-lg-6",children:[Object(b.jsxs)("div",{className:"movie_posterDiv",children:[Object(b.jsx)("img",{className:"movie_poster",src:t,alt:a,title:a}),Object(b.jsx)("h5",{className:"movie_details",children:"View More"})]}),Object(b.jsxs)("div",{className:"movie_data col-lg-6 col-sm-6 col-xs-8",children:[Object(b.jsx)("h3",{className:"movie_title",children:a}),Object(b.jsxs)("h5",{className:"movie_year",children:[0===s?"unknown":s," ",Object(b.jsx)("span",{className:"divider",children:"|"})]}),Object(b.jsxs)("h5",{className:"movie_runtime",children:[" ",c," min ",Object(b.jsx)("span",{className:"divider",children:"|"})]}),Object(b.jsxs)("h5",{className:"movie_genres",children:[" ",l[0]," ",Object(b.jsx)("span",{className:"divider",children:"|"})]}),Object(b.jsxs)("h5",{className:"movie_rating",children:[" ",0===n?n="unknown":"\u2605 "+n]}),Object(b.jsxs)("p",{className:"movie_summary",children:[i.slice(0,130),"..."]})]}),Object(b.jsx)("div",{className:"movie_modal_bg",children:Object(b.jsxs)("div",{className:"movie_modal col-lg-6 col-sm-8 col-8",children:[Object(b.jsx)("div",{className:"iframebox",children:Object(b.jsx)("iframe",{src:r,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})}),Object(b.jsxs)("div",{className:"container movie_modal_data",children:[Object(b.jsx)("h2",{className:"movie_modal_title",children:a}),Object(b.jsxs)("h5",{className:"movie_modal_year",children:[0===s?"unknown":s," ",Object(b.jsx)("span",{className:"movie_modal_divider",children:"|"})]}),Object(b.jsxs)("h5",{className:"movie_modal_runtime",children:[" ",c," min ",Object(b.jsx)("span",{className:"movie_modal_divider",children:"|"})]}),Object(b.jsxs)("h5",{className:"movie_modal_genres",children:[" ",l[0]," ",Object(b.jsx)("span",{className:"movie_modal_divider",children:"|"})]}),Object(b.jsxs)("h5",{className:"movie_modal_rating",children:[" ",0===n?n="unknown":"\u2605 "+n]}),Object(b.jsx)("p",{className:"movie_modal_summary",children:i.slice(0,1500)})]})]})})]})}function _(e){e.id;var s=e.year,a=e.title,i=e.summary,t=e.poster,c=e.runtime,l=e.genres,n=e.rating,r="https://www.youtube.com/embed/"+e.yt_trailer_code+"?enablejsapi=1";return Object(b.jsxs)("div",{className:"c_movie container",children:[Object(b.jsxs)("div",{className:"c_posterDiv",children:[Object(b.jsx)("img",{className:"c_poster",src:t,alt:a}),Object(b.jsx)("h5",{className:"details",children:"View More"})]}),Object(b.jsxs)("div",{className:"c_data col-lg-8 col-sm-12",children:[Object(b.jsx)("h1",{className:"c_title",children:a.length>=30?a.slice(0,29)+"...":a}),Object(b.jsxs)("h5",{className:"c_year",children:[0===s?"unknown":s," ",Object(b.jsx)("span",{className:"c_divider",children:"|"})]}),Object(b.jsxs)("h5",{className:"c_runtime",children:[" ",c," min ",Object(b.jsx)("span",{className:"c_divider",children:"|"})]}),Object(b.jsxs)("h5",{className:"c_genres",children:[" ",l[0]]}),Object(b.jsxs)("p",{className:"c_summary",children:[i.slice(0,850),"..."]})]}),Object(b.jsx)("div",{className:"movie_modal_bg",children:Object(b.jsxs)("div",{className:"movie_modal col-lg-6 col-sm-8 col-8",children:[Object(b.jsx)("div",{className:"iframebox",children:Object(b.jsx)("iframe",{src:r,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})}),Object(b.jsxs)("div",{className:"container movie_modal_data",children:[Object(b.jsx)("h2",{className:"movie_modal_title",children:a}),Object(b.jsxs)("h5",{className:"movie_modal_year",children:[0===s?"unknown":s," ",Object(b.jsx)("span",{className:"movie_modal_divider",children:"|"})]}),Object(b.jsxs)("h5",{className:"movie_modal_runtime",children:[" ",c," min ",Object(b.jsx)("span",{className:"movie_modal_divider",children:"|"})]}),Object(b.jsxs)("h5",{className:"movie_modal_genres",children:[" ",l[0]," ",Object(b.jsx)("span",{className:"movie_modal_divider",children:"|"})]}),Object(b.jsxs)("h5",{className:"movie_modal_rating",children:[" ",0===n?n="unknown":"\u2605 "+n]}),Object(b.jsx)("p",{className:"movie_modal_summary",children:i.slice(0,1500)})]})]})})]})}a(455);var y=function(e){Object(v.a)(a,e);var s=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var i=arguments.length,t=new Array(i),c=0;c<i;c++)t[c]=arguments[c];return(e=s.call.apply(s,[this].concat(t))).state={isLoading:!0,movies:[]},e.getMovies=Object(o.a)(r.a.mark((function s(){var a,i;return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,u.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:a=s.sent,i=a.data.data.movies,e.setState({movies:i,isLoading:!1}),console.log({movies:i});case 6:case"end":return s.stop()}}),s)}))),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state.movies,s=this.state.isLoading,a=function(e){for(var s=[],a=0,i=3,t=0;t<i;t++)a=Math.floor(Math.random()*(e-1))+1,-1===s.indexOf(a)?s.push(a):i+=1;return s}(20),i=this.state.movies;return Object(b.jsx)("section",{children:s?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("img",{className:"loader__text",src:"images/wlogo.png",alt:"logo",title:"logo"})}):Object(b.jsxs)("div",{className:"all",children:[Object(b.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:Object(b.jsx)("img",{src:"images/wlogo.png",alt:"website logo",id:"logo",title:"website logo",height:"30px",weight:"60px"})}),Object(b.jsx)("button",{className:"navbar-toggler Btn",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("i",{className:"fas fa-bars"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(b.jsxs)("div",{className:"navbar-nav",children:[Object(b.jsx)("a",{className:"genres nav-link",id:"action",children:"Action"}),Object(b.jsx)("a",{className:"genres nav-link",id:"comedy",children:"Comedy"}),Object(b.jsx)("a",{className:"genres nav-link",id:"documentary",children:"Documentary"}),Object(b.jsx)("a",{className:"genres nav-link",id:"drama",children:"Drama"}),Object(b.jsx)("a",{className:"genres nav-link",id:"horror",children:"Horror"})]})})]})}),Object(b.jsxs)("div",{id:"carousel_top",children:[Object(b.jsx)("i",{className:"Btn fas fa-2x fa-chevron-left preBtn"}),Object(b.jsxs)("div",{id:"carousels",children:[Object(b.jsx)("div",{className:"None",style:{display:"none"}}),Object(b.jsx)("div",{className:"carousel__movie",children:Object(b.jsx)(_,{id:i[a[0]].id,year:i[a[0]].year,title:i[a[0]].title,summary:i[a[0]].summary,runtime:i[a[0]].runtime,genres:i[a[0]].genres,poster:i[a[0]].medium_cover_image,rating:i[a[0].rating],yt_trailer_code:i[a[0]].yt_trailer_code},i[a[0]].id)}),Object(b.jsx)("div",{className:"carousel__movie ",children:Object(b.jsx)(_,{id:i[a[1]].id,year:i[a[1]].year,title:i[a[1]].title,summary:i[a[1]].summary,runtime:i[a[1]].runtime,genres:i[a[1]].genres,poster:i[a[1]].medium_cover_image,rating:i[a[1].rating],yt_trailer_code:i[a[0]].yt_trailer_code},i[a[1]].id)}),Object(b.jsx)("div",{className:"carousel__movie",children:Object(b.jsx)(_,{id:i[a[2]].id,year:i[a[2]].year,title:i[a[2]].title,summary:i[a[2]].summary,runtime:i[a[2]].runtime,genres:i[a[2]].genres,poster:i[a[2]].medium_cover_image,rating:i[a[2].rating],yt_trailer_code:i[a[0]].yt_trailer_code},i[a[2]].id)}),Object(b.jsx)("div",{className:"None",style:{display:"none"}})]}),Object(b.jsx)("i",{className:"Btn fas fa-2x fa-chevron-right nextBtn"})]}),Object(b.jsx)("div",{className:"movies container",children:e.map((function(e){return Object(b.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,runtime:e.runtime,genres:e.genres,poster:e.medium_cover_image,rating:e.rating,yt_trailer_code:e.yt_trailer_code},e.id)}))})]})})}},{key:"componentDidUpdate",value:function(){var e=document.querySelector("body"),s=document.querySelectorAll(".c_posterDiv"),a=document.querySelectorAll(".movie_posterDiv"),i=0,t=0,c=0,l=document.querySelector(".preBtn"),n=document.querySelector(".nextBtn");function r(){var e=document.querySelectorAll(".carousel__movie")[0],s=document.querySelector(".showing");if(s){var a=s.childNodes[0].childNodes[2],i=s.nextElementSibling;s.classList.add("disappearAni"),setTimeout((function(){a.style.display="none",s.classList.remove("showing"),s.classList.remove("disappearAni"),i.classList.contains("carousel__movie")?i.classList.add("showing"):e.classList.add("showing")}),801)}else e.classList.add("showing")}r();var o,d=setInterval(r,6600);for(n.addEventListener("click",(function(){clearInterval(d),clearTimeout(o),r(),o=setTimeout((function(){d=setInterval(r,6600)}),6400),setTimeout((function(){e.style.overflow="auto"}),800)})),l.addEventListener("click",(function(){clearInterval(d),clearTimeout(o),function(){var e=document.querySelectorAll(".carousel__movie")[2],s=document.querySelector(".showing"),a=s.childNodes[0].childNodes[2],i=s.previousElementSibling;s.classList.add("disappearAni"),setTimeout((function(){a.style.display="none",s.classList.remove("showing"),s.classList.remove("disappearAni"),i.classList.contains("carousel__movie")?i.classList.add("showing"):e.classList.add("showing")}),801)}(),o=setTimeout((function(){d=setInterval(r,6600)}),6400),setTimeout((function(){e.style.overflow="auto"}),800)}));c<s.length;)s[c].addEventListener("click",(function(){clearTimeout(o),clearInterval(d);var s=this.parentNode.childNodes[2],a=s.childNodes[0],i=a.childNodes[0].childNodes[0];s.classList.add("showing_modal"),a.classList.add("showing_modal"),s.style.display="block",a.style.display="block",setTimeout((function(){s.classList.remove("showing_modal"),a.classList.remove("showing_modal")}),801),e.style.overflow="hidden",s.addEventListener("click",(function(){clearTimeout(o),clearInterval(d),d=setInterval(r,6600),i.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),s.classList.add("disappearAni"),a.classList.add("disappearAni"),setTimeout((function(){s.style.display="none",a.style.display="none",s.classList.remove("disappearAni"),a.classList.remove("disappearAni")}),801),e.style.overflow="auto"})),a.addEventListener("click",(function(e){e.stopPropagation()}),!0)})),c++;for(;i<s.length;)s[i].addEventListener("mouseover",(function(){var e=this.children[0],s=this.children[1];e.style.filter="brightness(27%)",s.style.filter="brightness(65%)",s.style.zIndex="2",s.style.opacity="1"})),s[i].addEventListener("mouseout",(function(){var e=this.children[0],s=this.children[1];e.style.filter="brightness(100%)",s.style.zIndex="0",s.style.opacity="0"})),i++;for(;t<a.length;)a[t].addEventListener("click",(function(){var s=this.parentNode.childNodes[2],a=s.childNodes[0],i=a.childNodes[0].childNodes[0],t=document.querySelector(".movies");t.style.zIndex="2",s.classList.add("showing_modal"),a.classList.add("showing_modal"),s.style.display="block",a.style.display="block",setTimeout((function(){s.classList.remove("showing_modal"),a.classList.remove("showing_modal")}),801),e.style.overflow="hidden",s.addEventListener("click",(function(){i.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),s.classList.add("disappearAni"),a.classList.add("disappearAni"),setTimeout((function(){t.style.zIndex="0",s.style.display="none",a.style.display="none",s.classList.remove("disappearAni"),a.classList.remove("disappearAni")}),801),e.style.overflow="auto"})),a.addEventListener("click",(function(e){e.stopPropagation()}),!0)})),a[t].addEventListener("mouseover",(function(){var e=this.children[0],s=this.children[1];e.style.filter="brightness(27%)",s.style.filter="brightness(65%)",s.style.zIndex="2",s.style.opacity="1"})),a[t].addEventListener("mouseout",(function(){var e=this.children[0],s=this.children[1];e.style.filter="brightness(100%)",s.style.zIndex="0",s.style.opacity="0"})),t++}}]),a}(t.a.Component);l.a.render(Object(b.jsx)(y,{}),document.getElementById("root"))}},[[456,1,2]]]);
//# sourceMappingURL=main.6ee5afa5.chunk.js.map