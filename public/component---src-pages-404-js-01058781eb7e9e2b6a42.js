(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),u=n(153),s=n(170),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return i.a.createElement(u.a,{location:this.props.location,title:e},i.a.createElement(s.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(i.a.Component);t.default=c;var d="1097489062"},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(150),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(152),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var l=n(32);n.d(t,"parsePath",function(){return l.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,n){var a;e.exports=(a=n(156))&&a.default||a},153:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),u=n(154),s=n.n(u),c=(n(155),n(162),n(151)),d=n(157),l=n.n(d),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.headerProps,t=e.logo,a=e.listItems;return i.a.createElement("header",{className:l.a.header},i.a.createElement(c.Link,{to:"/",className:l.a.headerLogo},i.a.createElement("img",{src:n(158)("./"+t[0]+".png"),alt:"NUS logo",className:l.a.nusLogo}),i.a.createElement("img",{src:n(160)("./"+t[1]+".jpg"),alt:"ALSET logo",className:l.a.alsetCoBrand})),i.a.createElement("ul",{className:l.a.headerMenu},a.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.link,key:e.name},e.name))})))},t}(i.a.Component),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",null,i.a.createElement(p,{headerProps:{logo:["nusLogo","alset_cobrand"],listItems:[]}}),i.a.createElement("main",{className:s.a.main},e))},t}(i.a.Component);t.a=m},154:function(e,t,n){e.exports={header:"layout-module--header--1agRL",headerLogo:"layout-module--headerLogo--1Duoh",alsetCoBrand:"layout-module--alsetCoBrand--Vg6T8",nusLogo:"layout-module--nusLogo--1EqMe",headerMenu:"layout-module--headerMenu--LdqFJ",main:"layout-module--main--3Dws6"}},156:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(52),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},157:function(e,t,n){e.exports={header:"header4Tabs-module--header--3ddQr",headerLogo:"header4Tabs-module--headerLogo--1QUs1",alsetCoBrand:"header4Tabs-module--alsetCoBrand--3dN58",nusLogo:"header4Tabs-module--nusLogo--kJHUs",headerMenu:"header4Tabs-module--headerMenu--2Tz14"}},158:function(e,t,n){var a={"./nusLogo.png":159};function r(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=158},159:function(e,t,n){e.exports=n.p+"static/nusLogo-c2900874943ed27b6c4008137769d09f.png"},160:function(e,t,n){var a={"./alset_cobrand.jpg":161};function r(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=160},161:function(e,t,n){e.exports=n.p+"static/alset_cobrand-2c60ab00cec3110a3d60533b47bd8d3f.jpg"},170:function(e,t,n){"use strict";var a=n(171),r=n(0),o=n.n(r),i=n(4),u=n.n(i),s=n(181),c=n.n(s),d=n(151);function l(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,u=e.title;return o.a.createElement(d.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:u},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:u},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},t.a=l;var p="1315885718"},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Alset: TRS",description:"NUS ALSET Translation Research Unit"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-01058781eb7e9e2b6a42.js.map