webpackJsonp([0],{"+/HG":function(t,e,s){"use strict";function i(t){s("co7L")}var a=s("GZKU"),o=s("XwLc"),r=s("VU/8"),n=i,c=r(a.a,o.a,!1,n,null,null);e.a=c.exports},"+m8Q":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view"),t._v(" "),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"footer"},[s("div",{staticClass:"copyright"},[t._v("© 2017. Design and code by Syafrizal Akhzan")])])])}],o={render:i,staticRenderFns:a};e.a=o},"/nwk":function(t,e,s){"use strict";e.a={name:"Portfolio",data:function(){return{selectedPortfolio:{},portfolios:[{code:"sam",title:"SAM Advance",acronym:"Sales Activity Management",desc:"A progressive web app - mobile web based application, used for automative sales transaction by Toyota Sales Operation (Auto2000) accross Indonesia.",status:"Done, additional features in development",roles:["Frontend Developer ( July 2017 - present )","Fullstack Developer ( August 2016 - June 2017 )"],technologies:["C# .Net Web API, Oauth 2.0, Microsoft SQL Server","Angular JS, Progressive Web App"]},{code:"porse",title:"PORSE Quiz Astra",acronym:"Astra - Pekan Olahraga dan Seni - Smart Quiz",desc:"A web based application, used for smart quiz at PORSE Astra. It uses realtime mechanism to show the answers of all quiz participants while participants use ipad to answer the questions.",status:"Done",roles:["Developer ( September 2017 )"],technologies:["Vanilla JS, jQuery, Socket.io, Express JS, Mongoose, Mongo DB"]},{code:"ehs",title:"Lab EHS",acronym:"'Laboratorium Lingkungan' Astra International",desc:"A web based application, used for smart quiz at PORSE Astra. It uses realtime mechanism to show the answers of all quiz participants while participants use ipad to answer the questions.",status:"Done",roles:["Developer ( September 2017 )"],technologies:["Vanilla JS, jQuery, Socket.io, Express JS, Mongoose, Mongo DB"]}]}},created:function(){var t=this;this.selectedPortfolio=this.portfolios.find(function(e){return e.code==t.$route.params.code}),window.scrollTo(0,0)}}},"07PK":function(t,e,s){"use strict";e.a={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},"2K5z":function(t,e){},"5Z9V":function(t,e){},EKVX:function(t,e,s){t.exports=s.p+"static/img/ehs.a76cbfd.png"},GZKU:function(t,e,s){"use strict";e.a={name:"Contact"}},H1ih:function(t,e,s){"use strict";e.a={name:"About"}},HuJx:function(t,e){},M93x:function(t,e,s){"use strict";function i(t){s("R6rX")}var a=s("xJD8"),o=s("+m8Q"),r=s("VU/8"),n=i,c=r(a.a,o.a,!1,n,null,null);e.a=c.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a=s("M93x"),o=s("YaEn"),r=s("YeWH"),n=s.n(r),c=s("oPmM");s.n(c);i.a.config.productionTip=!1,(new n.a).init(),new i.a({el:"#app",router:o.a,template:"<App/>",components:{App:a.a}})},R6rX:function(t,e){},SIHn:function(t,e,s){t.exports=s.p+"static/img/quiz.8522d74.png"},Ue2z:function(t,e,s){t.exports=s.p+"static/img/sam.053b17e.png"},VODN:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"header"},[i("router-link",{staticClass:"x-button",attrs:{to:"/"}},[t._v("✖")]),t._v(" "),i("div",{staticClass:"nav"},[i("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" "),i("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)],1),t._v(" "),i("div",{staticClass:"pf-content"},[i("div",{staticClass:"pf-img-bg"},["sam"==t.selectedPortfolio.code?i("img",{attrs:{src:s("Ue2z"),alt:"x"}}):t._e(),t._v(" "),"porse"==t.selectedPortfolio.code?i("img",{attrs:{src:s("SIHn"),alt:"x"}}):t._e(),t._v(" "),"ehs"==t.selectedPortfolio.code?i("img",{attrs:{src:s("EKVX"),alt:"x"}}):t._e()]),t._v(" "),i("div",{staticClass:"pf-title"},[t._v(t._s(t.selectedPortfolio.title))]),t._v(" "),i("div",{staticClass:"pf-acronym"},[t._v(t._s(t.selectedPortfolio.acronym))]),t._v(" "),i("p",{staticClass:"block pf-desc"},[i("i",[t._v(t._s(t.selectedPortfolio.desc))])]),t._v(" "),i("div",{staticClass:"pf-add"},[i("div",{staticClass:"block wow fadeInUp"},[i("div",{staticClass:"pf-add-title"},[t._v("Status")]),t._v(" "),i("div",{staticClass:"pf-add-items"},[i("div",[t._v(t._s(t.selectedPortfolio.status))])])]),t._v(" "),i("div",{staticClass:"block wow fadeInUp"},[i("div",{staticClass:"pf-add-title"},[t._v("Roles")]),t._v(" "),i("div",{staticClass:"pf-add-items"},t._l(t.selectedPortfolio.roles,function(e){return i("div",{key:e},[t._v(t._s(e))])}))]),t._v(" "),i("div",{staticClass:"block wow fadeInUp"},[i("div",{staticClass:"pf-add-title"},[t._v("Technologies")]),t._v(" "),i("div",{staticClass:"pf-add-items"},t._l(t.selectedPortfolio.technologies,function(e){return i("div",{key:e},[t._v(t._s(e))])}))])])])])},a=[],o={render:i,staticRenderFns:a};e.a=o},XwLc:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"header"},[s("router-link",{staticClass:"x-button",attrs:{to:"/"}},[t._v("✖")]),t._v(" "),s("div",{staticClass:"nav"},[s("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)],1),t._v(" "),t._m(0)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact"},[s("p",[t._v("Want to get in touch? Find me on "),s("a",{attrs:{href:"mailto: rizal.akhzan@gmail.com"}},[t._v("email")]),t._v(", "),s("a",{attrs:{href:"https://instagram.com/akhzan"}},[t._v("instagram")]),t._v(", "),s("a",{attrs:{href:"https://github.com/akhzan"}},[t._v("github")]),t._v(" or "),s("a",{attrs:{href:"https://www.linkedin.com/in/syafrizal-akhzan-a80154a9/"}},[t._v("linkedin")]),t._v(".")])])}],o={render:i,staticRenderFns:a};e.a=o},YaEn:function(t,e,s){"use strict";var i=s("7+uW"),a=s("/ocq"),o=(s("gORT"),s("h6qm")),r=s("yheb"),n=s("+/HG"),c=s("ezOL");i.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:o.a},{path:"/portfolios/:code",name:"Portfolio",component:r.a},{path:"/contact",name:"Contact",component:n.a},{path:"/about",name:"About",component:c.a}]})},"a4O/":function(t,e){},co7L:function(t,e){},eaJn:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"header"},[i("div",{staticClass:"logo"},[t._v("Syafrizal Akhzan")]),t._v(" "),i("div",{staticClass:"nav"},[i("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" "),i("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"portfolios"},[i("div",{staticClass:"split-portfolios"},[i("router-link",{staticClass:"portfolios-item",attrs:{to:"/portfolios/sam"}},[i("div",{on:{mouseover:function(e){t.project0=!0},mouseleave:function(e){t.project0=!1}}},[i("div",{staticClass:"portfolio-img-container tall"},[i("img",{directives:[{name:"show",rawName:"v-show",value:!t.project0,expression:"!project0"}],key:"img",staticClass:"img-small",attrs:{src:s("Ue2z"),alt:"x"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.project0,expression:"project0"}],key:"title",staticClass:"portfolio-img-container-fill"},[t._v("\n                            SAM\n                        ")])])])]),t._v(" "),i("router-link",{staticClass:"portfolios-item wow fadeInUp",attrs:{to:"/portfolios/porse","data-wow-duration":"1s","data-wow-delay":"0.5s"}},[i("div",{attrs:{href:"/"},on:{mouseover:function(e){t.project1=!0},mouseleave:function(e){t.project1=!1}}},[i("div",{staticClass:"portfolio-img-container short"},[i("img",{directives:[{name:"show",rawName:"v-show",value:!t.project1,expression:"!project1"}],staticClass:"img-small-width",attrs:{src:s("SIHn"),alt:"x"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.project1,expression:"project1"}],staticClass:"portfolio-img-container-fill"},[t._v("\n                            PORSE QUIZ\n                        ")])])])])],1),t._v(" "),i("div",{staticClass:"split-portfolios"},[i("router-link",{staticClass:"portfolios-item wow fadeInUp",attrs:{to:"/portfolios/ehs","data-wow-duration":"1s"}},[i("div",{on:{mouseover:function(e){t.project2=!0},mouseleave:function(e){t.project2=!1}}},[i("div",{staticClass:"portfolio-img-container short"},[i("img",{directives:[{name:"show",rawName:"v-show",value:!t.project2,expression:"!project2"}],staticClass:"img-small",attrs:{src:s("EKVX"),alt:"x"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.project2,expression:"project2"}],staticClass:"portfolio-img-container-fill"},[t._v("\n                            LAB EHS\n                        ")])])])])],1),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"skills wow fadeInUp"},[i("div",{staticClass:"skill-container"},[i("div",{staticClass:"skill-content wow fadeInUp"},[t._m(2),t._v(" "),i("div",{staticClass:"skill-items"},t._l(t.skills.fronts,function(e){return i("div",{key:e.description,staticClass:"skill-item"},[i("div",{staticClass:"skill-item-desc"},[t._v(t._s(e.description))]),t._v(" "),i("div",{staticClass:"skill-item-score"},t._l(5,function(t){return i("div",{key:t,staticClass:"skill-item-score-circle",class:{filled:t<=e.score}})}))])}))])]),t._v(" "),i("div",{staticClass:"skill-container"},[i("div",{staticClass:"skill-content small top wow fadeInUp"},[t._m(3),t._v(" "),i("div",{staticClass:"skill-items"},t._l(t.skills.backs,function(e){return i("div",{key:e.description,staticClass:"skill-item"},[i("div",{staticClass:"skill-item-desc"},[t._v(t._s(e.description))]),t._v(" "),i("div",{staticClass:"skill-item-score"},t._l(5,function(t){return i("div",{key:t,staticClass:"skill-item-score-circle",class:{filled:t<=e.score}})}))])}))]),t._v(" "),i("div",{staticClass:"skill-content small wow fadeInUp"},[t._m(4),t._v(" "),i("div",{staticClass:"skill-items"},t._l(t.skills.others,function(e){return i("div",{key:e.description,staticClass:"skill-item"},[i("div",{staticClass:"skill-item-desc"},[t._v(t._s(e.description))]),t._v(" "),i("div",{staticClass:"skill-item-score"},t._l(5,function(t){return i("div",{key:t,staticClass:"skill-item-score-circle",class:{filled:t<=e.score}})}))])}))])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mid-content"},[s("div",[t._v("frontend web developer, based in Jakarta")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"experience wow fadeInUp"},[s("div",{staticClass:"experience-title"},[t._v("job experiences")]),t._v(" "),s("div",{staticClass:"experience-item"},[s("div",{staticClass:"exp-title"},[t._v("Frontend Developer")]),t._v(" "),s("div",{staticClass:"exp-company"},[t._v("Astra International Project - Astra Graphia Information Technology")]),t._v(" "),s("div",{staticClass:"exp-time"},[t._v("July 2017 - present")])]),t._v(" "),s("div",{staticClass:"experience-item"},[s("div",{staticClass:"exp-title"},[t._v("Fullstack Developer")]),t._v(" "),s("div",{staticClass:"exp-company"},[t._v("Astra International Project - Astra Graphia Information Technology")]),t._v(" "),s("div",{staticClass:"exp-time"},[t._v("January 2015 - June 2017")])]),t._v(" "),s("div",{staticClass:"experience-item"},[s("div",{staticClass:"exp-title"},[t._v("Management Trainee")]),t._v(" "),s("div",{staticClass:"exp-company"},[t._v("Astra Graphia Information Technology")]),t._v(" "),s("div",{staticClass:"exp-time"},[t._v("December 2014 - December 2015")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skill-header"},[s("div",{staticClass:"skill-title"},[s("div",[t._v("Frontend Technologies")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skill-header"},[s("div",{staticClass:"skill-title"},[s("div",[t._v("Backend Technologies")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skill-header"},[s("div",{staticClass:"skill-title"},[s("div",[t._v("Other Technologies")])])])}],o={render:i,staticRenderFns:a};e.a=o},ezOL:function(t,e,s){"use strict";function i(t){s("2K5z")}var a=s("H1ih"),o=s("xXqt"),r=s("VU/8"),n=i,c=r(a.a,o.a,!1,n,null,null);e.a=c.exports},gORT:function(t,e,s){"use strict";function i(t){s("a4O/")}var a=s("07PK"),o=s("xQlU"),r=s("VU/8"),n=i,c=r(a.a,o.a,!1,n,"data-v-75d0e68f",null);c.exports},h6qm:function(t,e,s){"use strict";function i(t){s("HuJx")}var a=s("owUo"),o=s("eaJn"),r=s("VU/8"),n=i,c=r(a.a,o.a,!1,n,null,null);e.a=c.exports},oPmM:function(t,e){},owUo:function(t,e,s){"use strict";e.a={name:"Home",data:function(){return{project0:!1,project1:!1,project2:!1,skills:{fronts:[{description:"Angular JS",score:4},{description:"React JS",score:3},{description:"Vue.js",score:3},{description:"Angular 4",score:2},{description:"jQuery",score:3},{description:"Polymer",score:2},{description:"ES6",score:4},{description:"NPM",score:4},{description:"Gulp",score:4},{description:"Webpack",score:4},{description:"SCSS",score:5},{description:"Responsive Design with CSS3",score:4},{description:"Bootstrap",score:2},{description:"RxJS",score:1}],backs:[{description:"C#, ASP .Net, .Net Web API",score:5},{description:"Node JS + Express JS",score:2},{description:"Microsoft SQL Server",score:5},{description:"Mongo DB",score:2}],others:[{description:"GIT",score:4},{description:"Team Foundation Server",score:4},{description:"Jenkins (CI)",score:2},{description:"Design Tools",score:3}]}}}}},xJD8:function(t,e,s){"use strict";e.a={name:"app"}},xQlU:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],o={render:i,staticRenderFns:a};e.a=o},xXqt:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"header"},[s("router-link",{staticClass:"x-button",attrs:{to:"/"}},[t._v("✖")]),t._v(" "),s("div",{staticClass:"nav"},[s("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)],1),t._v(" "),t._m(0)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("p",[s("b",[t._v("Hi, I'm Syafrizal Akhzan")]),s("br"),s("br"),t._v("\n          An experienced Web Application Developer with a demonstrated history of working in the technology based automotive industry. Strong engineering background with a Bachelor of Science focused in Electronics and Instrumentations from Universitas Gadjah Mada. \n      ")])])}],o={render:i,staticRenderFns:a};e.a=o},yheb:function(t,e,s){"use strict";function i(t){s("5Z9V")}var a=s("/nwk"),o=s("VODN"),r=s("VU/8"),n=i,c=r(a.a,o.a,!1,n,null,null);e.a=c.exports}},["NHnr"]);
//# sourceMappingURL=app.8e7fe2e47178db1c70e5.js.map