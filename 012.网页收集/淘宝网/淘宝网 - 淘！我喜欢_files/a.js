/*2015-01-06 06:27:38*/!function(){function t(t){var e,n;try{return e=[].slice.call(t)}catch(r){e=[],n=t.length;for(var a=0;n>a;a++)e.push(t[a]);return e}}function e(t,e){return t&&t.getAttribute?t.getAttribute(e)||"":""}function n(t,e,n){if(t&&t.setAttribute)try{t.setAttribute(e,n)}catch(r){}}function r(t,e){if(t&&t.removeAttribute)try{t.removeAttribute(e)}catch(r){n(t,e,"")}}function a(t){var e,n=t.match(new RegExp("\\?.*spm=([\\w\\.\\-\\*]+)"));return n&&(e=n[1])&&5==e.split(".").length?e:null}function i(t,e){return 0==t.indexOf(e)}function o(t){for(var e=["javascript:","tel:","sms:","mailto:","tmall://"],n=0,r=e.length;r>n;n++)if(i(t,e[n]))return!0}function c(t){return"string"==typeof t}function u(t){return"[object Array]"===Object.prototype.toString.call(t)}function f(t,e){return t.indexOf(e)>=0}function m(t,e){return t.indexOf(e)>-1}function s(t,e){for(var n=0,r=e.length;r>n;n++)if(m(t,e[n]))return ve;return ye}function l(t){return c(t)?t.replace(/^\s+|\s+$/g,""):""}function p(t){return"undefined"==typeof t}function d(t,e){var n=e||"";if(t)try{n=decodeURIComponent(t)}catch(r){}return n}function g(){return se=se||he.getElementsByTagName("head")[0],le||(se?le=se.getElementsByTagName("meta"):[])}function h(t,e){var n,r,a=t.split(";"),i=a.length;for(n=0;i>n;n++)r=a[n].split("="),e[l(r[0])||Me]=d(l(r.slice(1).join("=")))}function b(){var t,n,r,a=g(),i=a.length;for(t=0;i>t;t++)if(n=a[t],"aplus-terminal"==e(n,"name")){r=e(n,"content");break}return r}function v(){var t,n,r,a,i=g();for(t=0,n=i.length;n>t;t++)r=i[t],a=e(r,"name"),a==He&&(pe=e(r,Qe))}function y(t){var n,r,a,o,c,u,f=g();if(f)for(n=0,r=f.length;r>n;n++)if(o=f[n],c=e(o,"name"),c==t)return ue=e(o,"content"),ue.indexOf(":")>=0&&(a=ue.split(":"),pe="i"==a[0]?"i":"u",ue=a[1]),u=e(o,Qe),u&&(pe="i"==u?"i":"u"),fe=i(ue,"110"),ce=fe?Te:ue,ve;return ye}function w(){var t,n,r,a=g(),i=a.length;for(t=0;i>t;t++)if(n=a[t],"aplus-touch"==e(n,"name")){r=e(n,"content");break}return r}function _(){return Math.floor(268435456*Math.random()).toString(16)}function x(t){var e,n,r=[];for(e in t)t.hasOwnProperty(e)&&(n=""+t[e],r.push(i(e,Me)?n:e+"="+encodeURIComponent(n)));return r.join("&")}function N(t){var e,n,r,a=[],o=t.length;for(r=0;o>r;r++)e=t[r][0],n=t[r][1],a.push(i(e,Me)?n:e+"="+encodeURIComponent(n));return a.join("&")}function A(t){var e;try{e=l(t.getAttribute("href",2))}catch(n){}return e||""}function j(t,e,n){return"tap"==e?void E(t,n):void t[Le]((Se?"on":"")+e,function(t){t=t||ge.event;var e=t.target||t.srcElement;n(e)},ye)}function E(t,e){var n="ontouchend"in document.createElement("div"),r=n?"touchstart":"mousedown";j(t,r,function(t){e&&e(t)})}function O(t){var e=ge.KISSY;e?e.ready(t):ge.jQuery?jQuery(he).ready(t):"complete"===he.readyState?t():j(ge,"load",t)}function k(t,e){var n,r=new Image,a="_img_"+Math.random(),i=-1==t.indexOf("?")?"?":"&",o=e?u(e)?N(e):x(e):"";return ge[a]=r,r.onload=r.onerror=function(){ge[a]=null},r.src=n=o?t+i+o:t,r=null,n}function $(){var t;if(ke&&!Ve&&(t=we.match(/^[^?]+\?[^?]*spm=([^&?]+)/),t&&(Ve=t[1]+"_")),!p(ce))return ce;if(ge._SPM_a&&ge._SPM_b&&(ie=ge._SPM_a.replace(/^{(\w*|-)}$/g,"$1"),oe=ge._SPM_b.replace(/^{(\w*|-)}$/g,"$1"),ie&&"-"!=ie&&oe&&"-"!=oe))return Ue=ve,ce=ie+"."+oe,v(),ce;if(y(He)||y("spm-id"),!ce)return Be=!0,ce=Te,Te;var n,r,a=he.getElementsByTagName("body");return a=a&&a.length?a[0]:null,a&&(n=e(a,He),n&&(r=ce.split("."),ce=r[0]+"."+n)),m(ce,".")||(Be=!0,ce=Te),ce}function T(n){var r,a,i,o,c,u,f,m,s=[];for(r=t(n.getElementsByTagName("a")),a=t(n.getElementsByTagName("area")),o=r.concat(a),f=0,m=o.length;m>f;f++){for(u=!1,c=i=o[f];(c=c.parentNode)&&c!=n;)if(e(c,He)){u=!0;break}u||s.push(i)}return s}function B(t,n,r){var a,o,u,m,s,l,p,d,g,h,b,v,y,w,_,x,N;if(n=n||t.getAttribute(He)||""){if(a=T(t),u=n.split("."),_=i(n,"110")&&3==u.length,_&&(x=u[2],u[2]="w"+(x||"0"),n=u.join(".")),c(b=$())&&b.match(/^[\w\-\*]+(\.[\w\-\*]+)?$/))if(f(n,".")){if(!i(n,b)){for(m=b.split("."),u=n.split("."),y=0,v=m.length;v>y;y++)u[y]=m[y];n=u.join(".")}}else f(b,".")||(b+=".0"),n=b+"."+n;if(n.match&&n.match(/^[\w\-\*]+\.[\w\-\*]+\.[\w\-\*]+$/)){for(N=parseInt(e(t,"data-spm-max-idx"))||0,w=0,s=N,v=a.length;v>w;w++)o=a[w],l=A(o),l&&(_&&o.setAttribute(qe,x),p=o.getAttribute(Fe),p&&K(p)?L(o,p,r):(d=H(o.parentNode),d.a_spm_ab?(h=d.a_spm_ab,g=d.ab_idx):(h=void 0,s++,g=s),p=h?n+"-"+h+"."+(D(o)||g):n+"."+(D(o)||g),L(o,p,r)));t.setAttribute("data-spm-max-idx",s)}}}function M(t){var e,n=["mclick.simba.taobao.com","click.simba.taobao.com","click.tanx.com","click.mz.simba.taobao.com","click.tz.simba.taobao.com","redirect.simba.taobao.com","rdstat.tanx.com","stat.simba.taobao.com","s.click.taobao.com"],r=n.length;for(e=0;r>e;e++)if(-1!=t.indexOf(n[e]))return!0;return!1}function P(t){return t?!!t.match(/^[^\?]*\balipay\.(?:com|net)\b/i):ye}function I(t){return t?!!t.match(/^[^\?]*\balipay\.(?:com|net)\/.*\?.*\bsign=.*/i):ye}function S(t){for(var n;(t=t.parentNode)&&t.tagName!=Ie;)if(n=e(t,Qe))return n;return""}function C(t,e){if(t&&/&?\bspm=[^&#]*/.test(t)&&(t=t.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"")),!e)return t;var n,r,a,i,o,c,u,f="&";if(-1!=t.indexOf("#")&&(a=t.split("#"),t=a.shift(),r=a.join("#")),i=t.split("?"),o=i.length-1,a=i[0].split("//"),a=a[a.length-1].split("/"),c=a.length>1?a.pop():"",o>0&&(n=i.pop(),t=i.join("?")),n&&o>1&&-1==n.indexOf("&")&&-1!=n.indexOf("%")&&(f="%26"),t=t+"?spm="+Ve+e+(n?f+n:"")+(r?"#"+r:""),u=m(c,".")?c.split(".").pop().toLowerCase():""){if({png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1}.hasOwnProperty(u))return 0;!n&&1>=o&&(r||{htm:1,html:1,php:1}.hasOwnProperty(u)||(t+="&file="+c))}return t}function R(t){return t&&we.split("#")[0]==t.split("#")[0]}function L(t,n,r){if(t.setAttribute(Fe,n),!r&&!e(t,Ke)&&(me=ge.g_aplus_pv_id,me&&(n+="."+me),me||ce&&ce!=Te)){var a=A(t),c="i"==(e(t,Qe)||S(t)||pe),u=Ee+"tbspm.1.1?logtype=2&spm=";a&&!M(a)&&(c||!(i(a,"#")||R(a)||o(a.toLowerCase())||P(a)||I(a)))&&(c?(u+=n+"&url="+encodeURIComponent(a)+"&cache="+_(),de==t&&k(u)):r||(a=C(a,n))&&U(t,a))}}function U(t,e){var n,r=t.innerHTML;r&&-1==r.indexOf("<")&&(n=he.createElement("b"),n.style.display="none",t.appendChild(n)),t.href=e,n&&t.removeChild(n)}function D(t){var n;return Be?n="0":(n=e(t,He),n&&n.match(/^d\w+$/)||(n="")),n}function z(t){for(var e,n,r=t;t&&t.tagName!=Pe&&t.tagName!=Ie&&t.getAttribute;){if(n=t.getAttribute(He)){e=n,r=t;break}if(!(t=t.parentNode))break}return e&&!/^[\w\-\.]+$/.test(e)&&(e="0"),{spm_c:e,el:r}}function H(t){for(var n,r={},a="";t&&t.tagName!=Pe&&t.tagName!=Ie;){if(!a&&(a=e(t,Ge))){n=parseInt(e(t,"data-spm-ab-max-idx"))||0,r.a_spm_ab=a,r.ab_idx=++n,t.setAttribute("data-spm-ab-max-idx",n);break}if(e(t,He))break;t=t.parentNode}return r}function Q(t){var e;return t&&(e=t.match(/&?\bspm=([^&#]*)/))?e[1]:""}function Y(t,e){var n=A(t),r=Q(n),a=null,i=ce&&2==ce.split(".").length;return i?(a=[ce,0,D(t)||0],void L(t,a.join("."),e)):void(n&&r&&(n=n.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"").replace(/\?#/,"#"),U(t,n)))}function K(t){var e=t.split(".");return e[0]+"."+e[1]==ce}function V(t,n){de=t,Ue&&W();var r,a,i=e(t,Fe);if(i&&K(i))L(t,i,n);else{if(r=z(t.parentNode),a=r.spm_c,!a)return void Y(t,n);Be&&(a="0"),B(r.el,a,n)}}function q(e){if(e&&1==e.nodeType){r(e,"data-spm-max-idx");var n,a=t(e.getElementsByTagName("a")),i=t(e.getElementsByTagName("area")),o=a.concat(i),c=o.length;for(n=0;c>n;n++)r(o[n],Fe)}}function F(t){var e=t.parentNode;if(!e)return"";var n=t.getAttribute(He),r=z(e),a=r.spm_c||0;a&&-1!=a.indexOf(".")&&(a=a.split("."),a=a[a.length-1]);var i=ce+"."+a,o=$e[i]||0;return o++,$e[i]=o,n=n||o,i+".i"+n}function G(t){var n,r=t.tagName;return me=ge.g_aplus_pv_id,"A"!=r&&"AREA"!=r?n=F(t):(V(t,ve),n=e(t,Fe)),n=(n||"0.0.0.0").split("."),{a:n[0],b:n[1],c:n[2],d:n[3],e:me}}function J(t,e){if(e||(e=he),he.evaluate)return e.evaluate(t,he,null,9,null).singleNodeValue;for(var n,r=t.split("/");!n&&r.length>0;)n=r.shift();var a,i=/^.+?\[@id="(.+?)"]$/i,o=/^(.+?)\[(\d+)]$/i;return(a=n.match(i))?e=e.getElementById(a[1]):(a=n.match(o))&&(e=e.getElementsByTagName(a[1])[parseInt(a[2])-1]),e?0==r.length?e:J(r.join("/"),e):null}function W(){var t,e,r,a={};for(t in De)De.hasOwnProperty(t)&&(e=J(t),e&&(a[t]=1,r=De[t],n(e,He,("A"==e.tagName?r.spmd:r.spmc)||"")));for(t in a)a.hasOwnProperty(t)&&delete De[t]}function X(){if(!ze){if(!ge.spmData)return void(Oe||setTimeout(arguments.callee,100));ze=ve;var t,e,n,r,a=ge.spmData.data;if(a&&u(a)){for(t=0,e=a.length;e>t;t++)n=a[t],r=n.xpath,r=r.replace(/^id\("(.+?)"\)(.*)/g,'//*[@id="$1"]$2'),De[r]={spmc:n.spmc,spmd:n.spmd};W()}}}function Z(){var t,n,r,a,i=he.getElementsByTagName("iframe"),o=i.length;for(n=0;o>n;n++)t=i[n],!t.src&&(r=e(t,Ye))&&(a=G(t),a?(a=[a.a,a.b,a.c,a.d,a.e].join("."),t.src=C(r,a)):t.src=r)}function te(){function t(){e++,e>10&&(n=3e3),Z(),setTimeout(t,n)}var e=0,n=500;t()}function ee(t,e){var n,r,o="gostr",c="locaid",u={};if(h(e,u),n=u[o],r=u[c],n&&r){i(n,"/")&&(n=n.substr(1));var f=G(t),m=[f.a,f.b,f.c,r].join("."),s=n+"."+m,l=["logtype=2","cache="+Math.random(),"autosend=1","spm-cnt="+[f.a,f.b].join(".")+".0.0"],p=a(we);p&&l.push("spm-pre="+p);var d;for(d in u)u.hasOwnProperty(d)&&d!=o&&d!=c&&l.push(d+"="+u[d]);l.length>0&&(s+="?"+l.join("&")),k(Ee+s),t.setAttribute(Fe,m)}}function ne(t){for(var n;t&&t.tagName!=Pe;){n=e(t,Ke);{if(n){ee(t,n);break}t=t.parentNode}}}function re(){Ae&&je?j(he,"tap",ne):j(he,"mousedown",ne)}function ae(t){for(var e;t&&(e=t.tagName);){if("A"==e||"AREA"==e){V(t,ye);break}if(e==Ie||e==Pe)break;t=t.parentNode}}var ie,oe,ce,ue,fe,me,se,le,pe,de,ge=window,he=document,be=location,ve=!0,ye=!1,we=be.href,_e=be.protocol,xe="https:"==_e,Ne=xe?_e:"http:",Ae=b(),je=w(),Ee=Ne+(xe?"//log.mmstat.com/":Ae?"//wgo.mmstat.com/":"//gm.mmstat.com/"),Oe=ye,ke=parent!==self,$e={},Te="0.0",Be=!1,Me="::-plain-::",Pe="HTML",Ie="BODY",Se=!!he.attachEvent,Ce="attachEvent",Re="addEventListener",Le=Se?Ce:Re,Ue=ye,De={},ze=ye,He="data-spm",Qe="data-spm-protocol",Ye="data-spm-src",Ke="data-spm-click",Ve="",qe="data-spm-wangpu-module-id",Fe="data-spm-anchor-id",Ge="data-spm-ab";s(we,["xiaobai.com","admin.taobao.org"])||(O(function(){Oe=ve}),$(),X(),Ae||te(),re(),Ae&&je?j(he,"tap",ae):(j(he,"mousedown",ae),j(he,"keydown",ae)),ge.g_SPM={resetModule:q,anchorBeacon:V,getParam:G})}();/*pub-1|2013-05-29 11:03:48*/(function(){var i=window,x=document,m=location,o=m.href,s=i._alimm_spmact_on_;if(typeof s=="undefined"){s=1}if(s==1){s=1}if(s==0){s=0}if(!s){return}try{var a=i.g_SPM.getParam}catch(u){a=function(){return{a:0,b:0,c:0,d:0,e:0}}}var j=true;try{j=(self.location!=top.location)}catch(u){}var v="data-spm-act-id";var h=["mclick.simba.taobao.com","click.simba.taobao.com","click.tanx.com","click.mz.simba.taobao.com","click.tz.simba.taobao.com","redirect.simba.taobao.com","rdstat.tanx.com","stat.simba.taobao.com","s.click.taobao.com"];var c=!!x.attachEvent;var b="attachEvent";var n="addEventListener";var f=c?b:n;function r(y,z,e){y[f]((c?"on":"")+z,function(B){B=B||i.event;var A=B.target||B.srcElement;e(B,A)},false)}function p(){if(/&?\bspm=[^&#]*/.test(location.href)){return location.href.match(/&?\bspm=[^&#]*/ig)[0].split("=")[1]}return""}function w(z,F){if(z&&/&?\bspm=[^&#]*/.test(z)){z=z.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"")}if(!F){return z}var G,C,E,D="&",A,y,e,B;if(z.indexOf("#")!=-1){E=z.split("#");z=E.shift();C=E.join("#")}A=z.split("?");y=A.length-1;E=A[0].split("//");E=E[E.length-1].split("/");e=E.length>1?E.pop():"";if(y>0){G=A.pop();z=A.join("?")}if(G&&y>1&&G.indexOf("&")==-1&&G.indexOf("%")!=-1){D="%26"}z=z+"?spm="+F+(G?(D+G):"")+(C?("#"+C):"");B=e.indexOf(".")>-1?e.split(".").pop().toLowerCase():"";if(B){if(({png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1}).hasOwnProperty(B)){return 0}if(!G&&y<=1){if(!C&&!({htm:1,html:1,php:1}).hasOwnProperty(B)){z+="&file="+e}}}return z}function d(z){var E=window.location.href;var y=E.match(/mm_\d{0,24}_\d{0,24}_\d{0,24}/i);var C=E.match(/[&\?](pvid=[^&]*)/i);var A=new RegExp("%3Dmm_\\d+_\\d+_\\d+","ig");var B=new RegExp("mm_\\d+_\\d+_\\d+","ig");function D(F){F=F.replace(/refpos[=(%3D)]\w*/ig,e).replace(A,"%3D"+y+"%26"+C.replace("=","%3D")).replace(B,y);if(C.length>0){F+="&"+C}return F}if(C&&C[1]){C=C[1]}else{C=""}var e=E.match(/(refpos=(\d{0,24}_\d{0,24}_\d{0,24})?(,[a-z]+)?)(,[a-z]+)?/i);if(e&&e[0]){e=e[0]}else{e=""}if(y){y=y[0];return D(z)}return z}function l(e){var y=i.KISSY;if(y){y.ready(e)}else{if(i.jQuery){jQuery(x).ready(e)}else{if(x.readyState==="complete"){e()}else{r(i,"load",e)}}}}function t(e,y){return e&&e.getAttribute?(e.getAttribute(y)||""):""}function q(y){if(!y){return}var z,e=h.length;for(z=0;z<e;z++){if(y.indexOf(h[z])>-1){return true}}return false}function g(z,F){if(z&&/&?\bspm=[^&#]*/.test(z)){z=z.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"")}if(!F){return z}var G,C,E,D="&",A,y,e,B;if(z.indexOf("#")!=-1){E=z.split("#");z=E.shift();C=E.join("#")}A=z.split("?");y=A.length-1;E=A[0].split("//");E=E[E.length-1].split("/");e=E.length>1?E.pop():"";if(y>0){G=A.pop();z=A.join("?")}if(G&&y>1&&G.indexOf("&")==-1&&G.indexOf("%")!=-1){D="%26"}z=z+"?spm="+F+(G?(D+G):"")+(C?("#"+C):"");B=e.indexOf(".")>-1?e.split(".").pop().toLowerCase():"";if(B){if(({png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1}).hasOwnProperty(B)){return 0}if(!G&&y<=1){if(!C&&!({htm:1,html:1,php:1}).hasOwnProperty(B)){z+="&__file="+e}}}return z}function k(y){if(q(y.href)){var z=t(y,v);if(!z){if(!a){return}var A=a(y),B=[A.a,A.b,A.c,A.d,A.e].join(".");if(j){B=[A.a||"0",A.b||"0",A.c||"0",A.d||"0"].join(".");B=(p()||"0.0.0.0.0")+"_"+B}var e=g(y.href,B);y.href=e;y.setAttribute(v,B)}}y=undefined}r(x,"mousedown",function(A,z){var B,y=0;while(z&&(B=z.tagName)&&y<5){if(B=="A"||B=="AREA"){k(z);break}else{if(B=="BODY"||B=="HTML"){break}}z=z.parentNode;y++}});l(function(){var B=document.getElementsByTagName("iframe");var C,e;for(var A=0;A<B.length;A++){C=t(B[A],"mmsrc");e=t(B[A],"mmworked");var z=a(B[A]);var y=[z.a||"0",z.b||"0",z.c||"0",z.d||"0",z.e||"0"].join(".");if(C&&!e){if(j){y=[z.a||"0",z.b||"0",z.c||"0",z.d||"0"].join(".");y=p()+"_"+y}B[A].src=w(d(C),y);B[A].setAttribute("mmworked","mmworked")}else{B[A].setAttribute(v,y)}}})})();