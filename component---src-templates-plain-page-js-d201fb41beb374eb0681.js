webpackJsonp([57500263411909],{298:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),d=r(l),n=a(2),u=r(n),f=a(45),i=r(f),m=a(210),s=r(m),o=function(e){var t=e.children,a=e.sidebarImage;return d.default.createElement("div",{className:s.default.wrapperWithSidebar},d.default.createElement("div",{className:s.default.sidebarContent},t),d.default.createElement("figure",{className:s.default.sidebarImage},d.default.createElement(i.default,{imagePath:a,options:{c:"limit"}})))};o.propTypes={children:u.default.node,sidebarImage:u.default.string.isRequired},t.default=o,e.exports=t.default},316:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var l=a(1),d=r(l),n=a(30),u=r(n),f=a(298),i=r(f),m=a(31),s=r(m),o=function(e){var t=e.data,a=e.pathContext,r=t.markdownRemark,l=a.slug,n=r.frontmatter.sidebar?i.default:u.default;return d.default.createElement("div",null,d.default.createElement(s.default,{title:r.frontmatter.title,headerImage:r.frontmatter.cover&&l+"/"+r.frontmatter.cover}),d.default.createElement(n,{sidebarImage:r.frontmatter.sidebar&&l+"/"+r.frontmatter.sidebar},d.default.createElement("main",{dangerouslySetInnerHTML:{__html:r.html}})))};t.pageQuery="** extracted graphql fragment **";t.default=o}});
//# sourceMappingURL=component---src-templates-plain-page-js-d201fb41beb374eb0681.js.map