(this.webpackJsonpmyportofolio=this.webpackJsonpmyportofolio||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/parallax1.83456897.jpg"},29:function(e,a,t){e.exports=t.p+"static/media/bg-skill.64156da2.jpg"},30:function(e,a,t){e.exports=t.p+"static/media/parallax2.5069647f.jpg"},31:function(e,a,t){e.exports=t.p+"static/media/blue-orange.15fb81c2.jpg"},32:function(e,a,t){e.exports=t.p+"static/media/avatar.859e9af7.jpg"},35:function(e,a,t){e.exports=t(51)},40:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),i=(t(40),t(41),t(45),t(2)),o=t(3),s=t(5),m=t(4),d=t(6),u=t(15),p=t(16),h=t(7),E=t.n(h),f=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){E()(document).ready((function(){E()(".tooltipped").tooltip()}))}},{key:"render",value:function(){return r.a.createElement("header",{className:"hide-on-med-and-down"},r.a.createElement("div",{className:"start-splash-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"padding-top-buttom"},r.a.createElement("div",{id:"imgDiv"}),r.a.createElement("h3",{className:"white-text text-ligthen-5"},"GEDE RYAN PRADNYA PRASTIKA"),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{className:"tooltipped orange-text","data-position":"bottom","data-tooltip":"Linked In",href:"https://id.linkedin.com/in/gede-ryan-pradnya-prastika",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),r.a.createElement("a",{className:"tooltipped orange-text","data-position":"bottom","data-tooltip":"Git Hub",href:"https://github.com/ryanpradnya/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})),r.a.createElement("a",{className:"tooltipped orange-text","data-position":"bottom","data-tooltip":"Facebook",href:"https://www.facebook.com/ryan.pradnya",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-facebook-square","aria-hidden":"true"}))),r.a.createElement("hr",{className:"custom-hr"})))))}}]),a}(n.Component),v=t(12),b=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){E()(document).ready((function(){E()(".collapsible").collapsible()}))}},{key:"render",value:function(){var e=this.props.expiriences,a=e.length?e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",{className:"collapsible-header orange white-text"},r.a.createElement("div",{className:"col s1"},r.a.createElement("i",{className:"fa fa-gears","aria-hidden":"true"})),r.a.createElement("div",{className:"col s11"},e.title)),r.a.createElement("div",{className:"collapsible-body orange white-text"},r.a.createElement("h4",null,e.company),r.a.createElement("h5",null,e.city,", ",e.country),r.a.createElement("p",null,e.startDate," - ",e.endDate),r.a.createElement("p",null,e.description)))})):r.a.createElement("li",{className:"white-text"},"-No Skill-");return r.a.createElement("div",{className:"expirience"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"orange-text text-acent-3"},"Experiences"),r.a.createElement("ul",{className:"collapsible popout","data-collapsible":"accordion"},a)))}}]),a}(n.Component),N=Object(v.b)((function(e){return{expiriences:e.expiriences}}))(b),g=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.educations,a=e.length?e.map((function(e){var a=(1===e.schoolCode?"fa fa-pencil":2===e.schoolCode?"fa fa-book":"fa fa-graduation-cap")+" blue-text text-acent-3",t=e.id%2?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 l6 vl"},r.a.createElement("i",{className:a,"aria-hidden":"true"}),r.a.createElement("h3",{className:" blue-text text-acent-3"},e.school),r.a.createElement("h5",null,e.degree," - ",e.fieldOfStudy),r.a.createElement("h5",{className:"font-weigt-loss"},e.startYear," - ",e.endYear)),r.a.createElement("div",{className:"col s12 l5 push-l1 right-align"})):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 l6 vl"}),r.a.createElement("div",{className:"col s12 l5 push-l1 right-align"},r.a.createElement("i",{className:a,"aria-hidden":"true"}),r.a.createElement("h3",{className:" blue-text text-acent-3"},e.school),r.a.createElement("h5",null,e.degree," - ",e.fieldOfStudy),r.a.createElement("h5",{className:"font-weigt-loss"},e.startYear," - ",e.endYear)));return r.a.createElement("div",{key:e.id},t)})):r.a.createElement("p",{className:"blue-text"},"-No Education-");return r.a.createElement("div",null,r.a.createElement("div",{className:"education"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"deep-orange-text"},"Educations"),a)))}}]),a}(n.Component),y=Object(v.b)((function(e){return{educations:e.educations}}))(g),j=t(29),k=t.n(j),O=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.skills,a=e.length?e.map((function(e){return r.a.createElement("div",{className:"col offset-l1 chip orange white-text",key:e},e)})):r.a.createElement("p",{className:"white-text"},"-No Skill-");return r.a.createElement("div",{className:"skill"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 l5"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"white-text"},"SKILLS"),a)),r.a.createElement("div",{className:"col s12 l7"},r.a.createElement("img",{className:"img-skill",src:k.a,alt:""}))))}}]),a}(n.Component),x=Object(v.b)((function(e){return{skills:e.skills}}))(O),w=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){E()(document).ready((function(){E()(".parallax").parallax()}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"parallax-container"},r.a.createElement("div",{className:"parallax"},r.a.createElement("img",{src:this.props.image,alt:""})))}}]),a}(n.Component),P=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"page-footer deep-orange scrollspy",id:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"long-div row"},r.a.createElement("div",{className:"col l6 s12"},r.a.createElement("h5",{className:"white-text"},"About Me"),r.a.createElement("p",null,"I have an interest in data processing that uses logic and I will use the right algorithm to solve it, even though it uses a lot of energy and mind. But that makes me stronger than before")),r.a.createElement("div",{className:"col l4 offset-l2 s12"},r.a.createElement("h5",{className:"white-text"},"Contact"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-phone","aria-hidden":"true"})," +62 877 6212 8553")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"})," ryanpradnya@gmail.com")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-whatsapp","aria-hidden":"true"})," +62 877 6212 8553")))))),r.a.createElement("div",{className:"footer-copyright deep-orange darken-4"},r.a.createElement("div",{className:"container center-align"},"\xa9 2019 Gede Ryan Pradnya Prastika")))}}]),a}(n.Component),S=t(23),C=t.n(S),A=t(30),D=t.n(A),I=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){E()(document).ready((function(){E()(".scrollspy").scrollSpy(),E()(".parallax").parallax()}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("section",{className:"scrollspy",id:"header"},r.a.createElement(f,null)),r.a.createElement("section",{className:"container section scrollspy",id:"experience"},r.a.createElement(N,null)),r.a.createElement("div",{className:"custom-parallax"},r.a.createElement(w,{image:C.a})),r.a.createElement("section",{className:"scrollspy",id:"skill"},r.a.createElement(x,null)),r.a.createElement("div",{className:"custom-parallax"},r.a.createElement(w,{image:C.a})),r.a.createElement("section",{className:"container section scrollspy",id:"education"},r.a.createElement(y,null)),r.a.createElement(w,{image:D.a}),r.a.createElement(P,null))}}]),a}(n.Component),M=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"center-align deep-orange-text"},r.a.createElement("h3",null,"ON PROGRESS..."),r.a.createElement("a",{className:"orange-text text-accent-3",href:"https://github.com/ryanpradnya/",target:"_blank",rel:"noopener noreferrer"},"Visit my Git Hub to more projects"))}}]),a}(n.Component),J=t(31),R=t.n(J),T=t(32),G=t.n(T),H=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{className:"nav-wrapper blue accent-2 navbar-fixed"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"#header",className:"brand-logo"},r.a.createElement("i",{className:"material-icons left"},"person_pin"),"My Page"),r.a.createElement("a",{href:"#!",className:"button-collapse","data-activates":"slide-out"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement("a",{href:"#experience"},"Expiriences")),r.a.createElement("li",null,r.a.createElement("a",{href:"#skill"},"Skills")),r.a.createElement("li",null,r.a.createElement("a",{href:"#education"},"Edications")),r.a.createElement("li",null,r.a.createElement("a",{href:"#footer"},"Contact")),r.a.createElement("li",null,r.a.createElement(u.c,{to:"/projects",onClick:e.toProjects},"Projects")))))),r.a.createElement("div",null,r.a.createElement("ul",{className:"side-nav",id:"slide-out"},r.a.createElement("li",null,r.a.createElement("div",{className:"user-view"},r.a.createElement("div",{className:"background"},r.a.createElement("img",{className:"responsive-img",src:R.a,alt:""})),r.a.createElement("img",{src:G.a,className:"circle",alt:""}),r.a.createElement("span",{className:"white-text name"},"Gede Ryan Pradnya Prastika"))),r.a.createElement("li",null,r.a.createElement("a",{className:"waves-effect orange-text text-accent-3",href:"https://id.linkedin.com/in/gede-ryan-pradnya-prastika",target:"_blank",rel:"noopener noreferrer",onClick:e.hideSideNav},r.a.createElement("i",{className:"fa fa-linkedin-square orange-text text-accent-3","aria-hidden":"true"}),"Linked In")),r.a.createElement("li",null,r.a.createElement("a",{className:"waves-effect orange-text text-accent-3",href:"https://github.com/ryanpradnya/",target:"_blank",rel:"noopener noreferrer",onClick:e.hideSideNav},r.a.createElement("i",{className:"fa fa-github orange-text text-accent-3","aria-hidden":"true"}),"Git Hub")),r.a.createElement("li",null,r.a.createElement("a",{className:"waves-effect orange-text text-accent-3",href:"https://www.facebook.com/ryan.pradnya",target:"_blank",rel:"noopener noreferrer",onClick:e.hideSideNav},r.a.createElement("i",{className:"fa fa-facebook-square orange-text text-accent-3","aria-hidden":"true"}),"Facebook")),r.a.createElement("li",null,r.a.createElement("div",{className:"divider"})),r.a.createElement("li",null,r.a.createElement("a",{className:"waves-effect",href:"#experience",onClick:e.hideSideNav},"Expiriences")),r.a.createElement("li",null,r.a.createElement("a",{className:"waves-effect",href:"#skill",onClick:e.hideSideNav},"Skills")),r.a.createElement("li",null,r.a.createElement("a",{className:"waves-effect",href:"#education",onClick:e.hideSideNav},"Edications")),r.a.createElement("li",null,r.a.createElement("a",{className:"waves-effect",href:"#footer",onClick:e.hideSideNav},"Contact")),r.a.createElement("li",null,r.a.createElement(u.c,{to:"/projects",onClick:e.hideToProjects},"Projects")))))},_=function(e){return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{className:"nav-wrapper blue accent-2 navbar-fixed"},r.a.createElement("div",{className:"container"},r.a.createElement(u.b,{to:"/",className:"brand-logo",onClick:e.toHome},r.a.createElement("i",{className:"material-icons left"},"person_pin"),"My Page"),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(u.c,{to:"/",onClick:e.toHome},"Home"))))))},Y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).hideSideNav=function(){E()(".button-collapse").sideNav("hide")},t.hideToProjects=function(){t.props.toProjects(),t.hideSideNav()},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){E()(".button-collapse").sideNav()}},{key:"componentDidUpdate",value:function(){E()(".button-collapse").sideNav()}},{key:"render",value:function(){var e=this.props.isProjectsPage?r.a.createElement(_,{toHome:this.props.toHome}):r.a.createElement(H,{hideSideNav:this.hideSideNav,hideToProjects:this.hideToProjects,toProjects:this.props.toProjects});return r.a.createElement("div",null,e)}}]),a}(n.Component),B=Object(v.b)((function(e){return{isProjectsPage:e.isProjectsPage}}),(function(e){return{toHome:function(){return e({type:"HOME_PAGE"})},toProjects:function(){return e({type:"PROJECT_PAGE"})}}}))(Y),L=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(B,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:I}),r.a.createElement(p.a,{path:"/projects",component:M}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=t(20),K=t(34);function U(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function F(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?U(t,!0).forEach((function(a){Object(K.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var Q={isProjectsPage:!1,expiriences:[{id:1,title:"Internet Banking Developer",company:"PT. BANK NEGARA INDONESIA (Persero) Tbk.",city:"Jakarta",country:"Indonesia",startDate:"March 2018",endDate:"Present",description:"Developing Internet Banking using Java with Infosys's framework, ASABRI web portal using Java with Spring framework, BNI Sekuritas web portal using Java with Spring framework"},{id:2,title:"Application Developer Jr.",company:"PT. Mitra Integrasi Informatika",city:"Jakarta",country:"Indonesia",startDate:"January 2018",endDate:"Present",description:"As an application developer placed on PT. BANK NEGARA INDONESIA (Persero) Tbk."}],educations:[{id:1,school:"Udayana University",degree:"Bachelor's degree",fieldOfStudy:"Information Thechnology",startYear:"2013",endYear:"2017",schoolCode:3},{id:2,school:"SMA Negeri 1 Singaraja",degree:"Senior High School",fieldOfStudy:"Mathematical and Natural Sciences",startYear:"2010",endYear:"2013",schoolCode:2},{id:3,school:"SMP Negeri 1 Singaraja",degree:"Junior High School",fieldOfStudy:"",startYear:"2007",endYear:"2010",schoolCode:1}],skills:["NojeJS","JavaScript","ReactJS","ExpressJS","Java","Python","HTML","Spring MVC","MySQL","MongoDB","Oracle SQL","Redux","Git","REST API"]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,a=arguments.length>1?arguments[1]:void 0;return"HOME_PAGE"===a.type?F({},e,{isProjectsPage:!1}):"PROJECT_PAGE"===a.type?F({},e,{isProjectsPage:!0}):e},W=Object(q.b)(V);c.a.render(r.a.createElement(v.a,{store:W},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.9e19dba2.chunk.js.map