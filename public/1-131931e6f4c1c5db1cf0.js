(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{150:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var i=a(n(164)),o=a(n(165)),r=a(n(7)),s=a(n(53)),c=a(n(54)),l=a(n(4)),u=a(n(0)),d=n(19),m=n(151);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/alset/public/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},f=function(e){function t(t){var n;n=e.call(this,t)||this,(0,c.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,m.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,m.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,i=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,m.parsePath)(i.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,r=void 0===a?this.defaultGetProps:a,s=t.onClick,c=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,f=(0,i.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var I=p(n);return u.default.createElement(d.Link,(0,o.default)({to:I,state:l,getProps:r,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,m.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:l,replace:h})),!0}},f))},t}(u.default.Component);f.propTypes=(0,o.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var I=u.default.forwardRef(function(e,t){return u.default.createElement(f,(0,o.default)({innerRef:t},e))});t.default=I;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var v=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=v;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),v(e)}},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),s=n(150),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(152),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var m=i.a.createContext({}),p=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},152:function(e,t,n){var a;e.exports=(a=n(156))&&a.default||a},153:function(e,t,n){"use strict";var a=n(7),i=n.n(a),o=n(0),r=n.n(o),s=n(154),c=n.n(s),l=(n(155),n(162),n(151)),u=n(157),d=n.n(u),m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.headerProps,t=e.logo,a=e.listItems;return r.a.createElement("header",{className:d.a.header},r.a.createElement(l.Link,{to:"/",className:d.a.headerLogo},r.a.createElement("img",{src:n(158)("./"+t[0]+".png"),alt:"NUS logo",className:d.a.nusLogo}),r.a.createElement("img",{src:n(160)("./"+t[1]+".jpg"),alt:"ALSET logo",className:d.a.alsetCoBrand})),r.a.createElement("ul",{className:d.a.headerMenu},a.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.link,key:e.name},e.name))})))},t}(r.a.Component),p=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",null,r.a.createElement(m,{headerProps:{logo:["nusLogo","alset_cobrand"],listItems:[]}}),r.a.createElement("main",{className:c.a.main},e))},t}(r.a.Component);t.a=p},154:function(e,t,n){e.exports={header:"layout-module--header--1agRL",headerLogo:"layout-module--headerLogo--1Duoh",alsetCoBrand:"layout-module--alsetCoBrand--Vg6T8",nusLogo:"layout-module--nusLogo--1EqMe",headerMenu:"layout-module--headerMenu--LdqFJ",main:"layout-module--main--3Dws6"}},155:function(e,t,n){"use strict";n(163)("link",function(e){return function(t){return e(this,"a","href",t)}})},156:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),s=n(52),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},157:function(e,t,n){e.exports={header:"header4Tabs-module--header--3ddQr",headerLogo:"header4Tabs-module--headerLogo--1QUs1",alsetCoBrand:"header4Tabs-module--alsetCoBrand--3dN58",nusLogo:"header4Tabs-module--nusLogo--kJHUs",headerMenu:"header4Tabs-module--headerMenu--2Tz14"}},158:function(e,t,n){var a={"./nusLogo.png":159};function i(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=158},159:function(e,t,n){e.exports=n.p+"static/nusLogo-c2900874943ed27b6c4008137769d09f.png"},160:function(e,t,n){var a={"./alset_cobrand.jpg":161};function i(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=160},161:function(e,t,n){e.exports=n.p+"static/alset_cobrand-2c60ab00cec3110a3d60533b47bd8d3f.jpg"},162:function(e,t,n){var a=n(25).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||n(16)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},163:function(e,t,n){var a=n(11),i=n(17),o=n(18),r=/"/g,s=function(e,t,n,a){var i=String(o(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(r,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},164:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}},165:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},166:function(e,t,n){e.exports={section:"DateTimeVenue-module--section--1oiLE",button:"DateTimeVenue-module--button--25Lsc",sectionLeader:"DateTimeVenue-module--sectionLeader--1TJDQ",stretchSection:"DateTimeVenue-module--stretchSection--1b9DE"}},167:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItY2FsZW5kYXIiPjxyZWN0IHg9IjMiIHk9IjQiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgcng9IjIiIHJ5PSIyIj48L3JlY3Q+PGxpbmUgeDE9IjE2IiB5MT0iMiIgeDI9IjE2IiB5Mj0iNiI+PC9saW5lPjxsaW5lIHgxPSI4IiB5MT0iMiIgeDI9IjgiIHkyPSI2Ij48L2xpbmU+PGxpbmUgeDE9IjMiIHkxPSIxMCIgeDI9IjIxIiB5Mj0iMTAiPjwvbGluZT48L3N2Zz4="},168:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItY2xvY2siPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48cG9seWxpbmUgcG9pbnRzPSIxMiA2IDEyIDEyIDE2IDE0Ij48L3BvbHlsaW5lPjwvc3ZnPg=="},169:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbWFwLXBpbiI+PHBhdGggZD0iTTIxIDEwYzAgNy05IDEzLTkgMTNzLTktNi05LTEzYTkgOSAwIDAgMSAxOCAweiI+PC9wYXRoPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiPjwvY2lyY2xlPjwvc3ZnPg=="},172:function(e,t,n){"use strict";n.r(t),n.d(t,"fellowTeaTembusuDetails",function(){return o}),n.d(t,"default",function(){return r});var a=n(0),i=n.n(a),o={date:"20 Feb 2019",time:"6:30pm to 8:30pm",venue:"Tembusu Masters Common Lounge",title:"Fellow's Tea with ALSET@NUS",excerpt:"ALSET reaches out to Tembusians at their home ground, over a cup of freshly brewed Fellow’s Tea. Hosted by Prof. Y.C. Tay."};function r(){return i.a.createElement("article",null,i.a.createElement("p",null,"ALSET’s efforts to reach out to the NUS community as a whole, finds itself a new space in Residential colleges. NUS’ Residential colleges are unique ecosystems, with their own niche inside the vibrant NUS. To kick-start an exciting experience, ALSET reaches out to Tembusians at their home ground, over a cup of freshly brewed Fellow’s Tea."),i.a.createElement("p",null,"Prof. Y.C. Tay, one of the Residential Fellows at Tembusu Residential College will host the Fellow’s tea. Chris Boesch, the Deputy Director of Translational Research Group is enthusiastic to share more about ALSET and the upcoming ALSET Hackathon- ALSET for 3DM@NUS (to be held on 25 Feb 2019). He is also looking forward to hear from Tembusians how they would like ALSET to influence their lives in NUS and Tembusu."),i.a.createElement("p",null,"After all the quick talk, the Fellow’s tea is to transform itself into a workshop aimed to encourage the students towards data-driven decision making. Chris and Kevin will moderate the workshop to help students decide their choices made at school. Students are encouraged to come up with prototypes of dashboards. We are looking forward to make a difference in education, over a cup of tea!"))}},173:function(e,t,n){"use strict";n.r(t),n.d(t,"edmNusDetails",function(){return o}),n.d(t,"default",function(){return r});var a=n(0),i=n.n(a),o={date:"25 Feb 2019",time:"9:00am to 5:00pm",venue:"Lecture Theatre (LT) 50, University Town",title:"ALSET for Data-Driven Decision-Making (3DM@NUS) 2019",excerpt:"Members of the NUS Community are invited to make a difference in the key decisions that students make in their varsity life."};function r(){return i.a.createElement("article",null,i.a.createElement("p",null,'The National University of Singapore strongly believes in data-driven decision-making (3DM). Rather than making decisions based on one\'s "gut" or "experiences," data-driven decision-making relies on the collection and processing of relevant data into a form that decision-makers can easily interpret.'),i.a.createElement("p",null,"This year, ALSET for 3DM@NUS is challenging the NUS community to identify decisions students and faculty have to make that could be improved by harnessing potentially accessible data sources. Then, using the principles of data-driven decision-making, teams will prototype solutions to improve their chosen decision."),i.a.createElement("p",null,"During the morning of 25 Feb 2019, ALSET staff will help facilitate teams as they work through the design process. Teams will start with a brainstorming session and conclude with presentations showcasing their prototypes developed throughout the event. Workshops will be held to help teams further develop their prototypes into solutions NUS could easily deploy. Lunch will be provided."),i.a.createElement("p",null,"For enquiries or more information, please contact Kevin Hartman at 66016382 or email alskrh@nus.edu.sg"))}},174:function(e,t,n){"use strict";n.r(t),n.d(t,"nccDetails",function(){return o}),n.d(t,"default",function(){return r});var a=n(0),i=n.n(a),o={date:"18 Mar 2019",time:"9:00am to 5:00pm",venue:"Lecture Theatre (LT) 50, LT 51 and Auditorium 1, Stephen Riady Centre, University Town",title:"ALSET for National Coding Championships 2019",excerpt:"The 6th Annual National Coding Championships is here again with a big bang!"};function r(){return i.a.createElement("article",null,i.a.createElement("p",null,"Each year, ALSET strives to introduce more kids to coding in a fun and engaging way. Sec1, Sec2, Sec3 students from MOE schools (junior category) and Sec4, sec5, JC, high school, ITE and polytechnic students (senior category) are invited to participate in ALSET for National Coding Championships 2019."),i.a.createElement("p",null,"The top 12 schools in the junior and senior categories can elect to send 2 teams to the competition. This year, join us again in the finals on 18th March 2019 at NUS. To watch the students code their way to success through gaming is an adrenaline pumping experience!"))}},183:function(e,t,n){e.exports={article:"pages-module--article--3HmJ7",section:"pages-module--section--5yog-"}},184:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var a=n(0),i=n.n(a),o=n(166),r=n.n(o),s=n(167),c=n.n(s),l=n(168),u=n.n(l),d=n(169),m=n.n(d),p=n(199),h=n.n(p),f=n(200),I=n.n(f);function g(e){var t=Object(a.useState)(!1),n=t[0],o=t[1];return i.a.createElement("div",null,i.a.createElement("h3",null,e.eventInfo.title),i.a.createElement("section",{className:r.a.sectionLeader},i.a.createElement("section",{className:r.a.section},i.a.createElement("img",{src:c.a,alt:"calendar-icon"}),i.a.createElement("div",null,i.a.createElement("p",null,e.eventInfo.date))),i.a.createElement("section",{className:r.a.section},i.a.createElement("img",{src:u.a,alt:"clock-icon"}),i.a.createElement("div",null,i.a.createElement("p",null,e.eventInfo.time))),i.a.createElement("section",{className:r.a.section+" "+r.a.stretchSection},i.a.createElement("img",{src:m.a,alt:"map-pin-icon"}),i.a.createElement("div",null,i.a.createElement("p",null,e.eventInfo.venue)))),i.a.createElement("section",{className:r.a.section},i.a.createElement("img",{src:h.a,alt:"text-icon"}),i.a.createElement("div",null,i.a.createElement("p",null,e.eventInfo.excerpt)),i.a.createElement("button",{className:r.a.button},i.a.createElement("img",{src:I.a,alt:"more-info-icon",onClick:function(){return o(!n)}}))),n&&i.a.createElement("section",{className:r.a.section},i.a.createElement("div",null,e.children)))}},185:function(e,t,n){e.exports=n.p+"static/ncc2017-84b017075ec053620dfffdf9438f3070.jpeg"},186:function(e,t,n){e.exports=n.p+"static/edm-a19310fd38007d6c1887803b32706c55.jpg"},199:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItZmlsZS10ZXh0Ij48cGF0aCBkPSJNMTQgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjh6Ij48L3BhdGg+PHBvbHlsaW5lIHBvaW50cz0iMTQgMiAxNCA4IDIwIDgiPjwvcG9seWxpbmU+PGxpbmUgeDE9IjE2IiB5MT0iMTMiIHgyPSI4IiB5Mj0iMTMiPjwvbGluZT48bGluZSB4MT0iMTYiIHkxPSIxNyIgeDI9IjgiIHkyPSIxNyI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9IjEwIDkgOSA5IDggOSI+PC9wb2x5bGluZT48L3N2Zz4="},200:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbW9yZS1ob3Jpem9udGFsIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIj48L2NpcmNsZT48Y2lyY2xlIGN4PSIxOSIgY3k9IjEyIiByPSIxIj48L2NpcmNsZT48Y2lyY2xlIGN4PSI1IiBjeT0iMTIiIHI9IjEiPjwvY2lyY2xlPjwvc3ZnPg=="}}]);
//# sourceMappingURL=1-131931e6f4c1c5db1cf0.js.map