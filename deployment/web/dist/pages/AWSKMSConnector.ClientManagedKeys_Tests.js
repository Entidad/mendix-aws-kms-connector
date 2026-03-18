import { reactExports, jsxRuntimeExports, asPluginWidgets, Fragment, PlaceholderProperty, addEnumerations, selectTranslation } from '../index-FQlVOlYf.js';
import { Placeholder, ExpressionProperty, PageFragment } from '../Placeholder-DFcDqEIU.js';
import { ActionProperty, TextProperty, ActionButton } from '../ActionButton-dEkVZjqk.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-B5BaoQn4.js';
import '../F-L0MxFU-CUzh3jjv.js';
import { DerivedUniqueIdProperty, AttributeProperty } from '../DerivedUniqueIdProperty-CMoZmJLZ.js';
import { FormGroup, ValidationProperty } from '../FormGroup-D4kp91rN.js';
import { WebIconProperty } from '../WebIconProperty-znHzcziz.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper--KfmbLq-.js';
import { ImageWidgetModule, Container } from '../Image-C3uz38Dk.js';
import { DataView } from '../DataView-Dip00PtH.js';
import { Div } from '../Div-o8iece77.js';
import { RadioButtonGroup } from '../RadioButtonGroup-CwTiR90n.js';
import { Text } from '../Text-DuQAvxSA.js';
import { TextArea } from '../TextArea-BFXP4Gdl.js';
import { TextBox } from '../TextBox-Defpuaw0.js';
import { AssociationProperty } from '../AssociationProperty-WAySTpZ7.js';
import { ListAttributeProperty, DatabaseObjectListProperty } from '../ListAttributeProperty-CXLDrwR-.js';
import { SprintrFeedbackWidgetModule, SidebarToggle, NavigationTree, ACT_Open_Feedback_Modal, MicroflowObjectProperty, OCH_UpdateUserLanguage } from '../Atlas_Core.OCH_UpdateUserLanguage-CYtkbF7W.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-BHhgotvB.js';
import { ComboboxWidgetModule } from '../Combobox-CTuBdCKm.js';
import '../Fragment-686zUVRb.js';
import { MenuBar } from '../MenuBar-CkBAJMgg.js';
import { ScrollContainer } from '../ScrollContainer-_UwHUp6v.js';
import '../index-D_nCuE-Y.js';
import '../InlineText-BmGDgYXy.js';
import '../index-fpKsB4fe.js';
import '../CJS8msnl-qQy3fsQc.js';

/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */const{entries:r,setPrototypeOf:a,isFrozen:i,getPrototypeOf:l,getOwnPropertyDescriptor:c}=Object;let{freeze:s,seal:u,create:m}=Object,{apply:p,construct:f}="undefined"!=typeof Reflect&&Reflect;s||(s=function(e){return e}),u||(u=function(e){return e}),p||(p=function(e,t){for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return e.apply(t,o)}),f||(f=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return new e(...n)});const d=D(Array.prototype.forEach),h=D(Array.prototype.lastIndexOf),g=D(Array.prototype.pop),T=D(Array.prototype.push),y=D(Array.prototype.splice),E=D(String.prototype.toLowerCase),A=D(String.prototype.toString),b=D(String.prototype.match),_=D(String.prototype.replace),N=D(String.prototype.indexOf),S=D(String.prototype.trim),v=D(Object.prototype.hasOwnProperty),R=D(RegExp.prototype.test),C=(w=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return f(w,t)});var w;function D(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return p(e,t,o)}}function O(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E;a&&a(e,null);let o=t.length;for(;o--;){let r=t[o];if("string"==typeof r){const e=n(r);e!==r&&(i(t)||(t[o]=e),r=e);}e[r]=!0;}return e}function L(e){for(let t=0;t<e.length;t++){v(e,t)||(e[t]=null);}return e}function x(e){const t=m(null);for(const[n,o]of r(e)){v(e,n)&&(Array.isArray(o)?t[n]=L(o):o&&"object"==typeof o&&o.constructor===Object?t[n]=x(o):t[n]=o);}return t}function M(e,t){for(;null!==e;){const n=c(e,t);if(n){if(n.get)return D(n.get);if("function"==typeof n.value)return D(n.value)}e=l(e);}return function(){return null}}const k=s(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),I=s(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),U=s(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),z=s(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),P=s(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),H=s(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),F=s(["#text"]),W=s(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),G=s(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),B=s(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),j=s(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Y=u(/\{\{[\w\W]*|[\w\W]*\}\}/gm),V=u(/<%[\w\W]*|[\w\W]*%>/gm),X=u(/\$\{[\w\W]*/gm),q=u(/^data-[\-\w.\u00B7-\uFFFF]+$/),$=u(/^aria-[\-\w]+$/),K=u(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Z=u(/^(?:\w+script|data):/i),J=u(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Q=u(/^html$/i),ee=u(/^[a-z][.\w]*(-[.\w]+)+$/i);var te=Object.freeze({__proto__:null,ARIA_ATTR:$,ATTR_WHITESPACE:J,CUSTOM_ELEMENT:ee,DATA_ATTR:q,DOCTYPE_NAME:Q,ERB_EXPR:V,IS_ALLOWED_URI:K,IS_SCRIPT_OR_DATA:Z,MUSTACHE_EXPR:Y,TMPLIT_EXPR:X});const ne=1,oe=3,re=7,ae=8,ie=9,le=function(){return "undefined"==typeof window?null:window};var ce=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le();const n=t=>e(t);if(n.version="3.3.0",n.removed=[],!t||!t.document||t.document.nodeType!==ie||!t.Element)return n.isSupported=!1,n;let{document:o}=t;const a=o,i=a.currentScript,{DocumentFragment:l,HTMLTemplateElement:c,Node:u,Element:p,NodeFilter:f,NamedNodeMap:w=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:D,DOMParser:L,trustedTypes:Y}=t,V=p.prototype,X=M(V,"cloneNode"),q=M(V,"remove"),$=M(V,"nextSibling"),Z=M(V,"childNodes"),J=M(V,"parentNode");if("function"==typeof c){const e=o.createElement("template");e.content&&e.content.ownerDocument&&(o=e.content.ownerDocument);}let ee,ce="";const{implementation:se,createNodeIterator:ue,createDocumentFragment:me,getElementsByTagName:pe}=o,{importNode:fe}=a;let de={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};n.isSupported="function"==typeof r&&"function"==typeof J&&se&&void 0!==se.createHTMLDocument;const{MUSTACHE_EXPR:he,ERB_EXPR:ge,TMPLIT_EXPR:Te,DATA_ATTR:ye,ARIA_ATTR:Ee,IS_SCRIPT_OR_DATA:Ae,ATTR_WHITESPACE:be,CUSTOM_ELEMENT:_e}=te;let{IS_ALLOWED_URI:Ne}=te,Se=null;const ve=O({},[...k,...I,...U,...P,...F]);let Re=null;const Ce=O({},[...W,...G,...B,...j]);let we=Object.seal(m(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),De=null,Oe=null;const Le=Object.seal(m(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let xe=!0,Me=!0,ke=!1,Ie=!0,Ue=!1,ze=!0,Pe=!1,He=!1,Fe=!1,We=!1,Ge=!1,Be=!1,je=!0,Ye=!1,Ve=!0,Xe=!1,qe={},$e=null;const Ke=O({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Ze=null;const Je=O({},["audio","video","img","source","image","track"]);let Qe=null;const et=O({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),tt="http://www.w3.org/1998/Math/MathML",nt="http://www.w3.org/2000/svg",ot="http://www.w3.org/1999/xhtml";let rt=ot,at=!1,it=null;const lt=O({},[tt,nt,ot],A);let ct=O({},["mi","mo","mn","ms","mtext"]),st=O({},["annotation-xml"]);const ut=O({},["title","style","font","a","script"]);let mt=null;const pt=["application/xhtml+xml","text/html"];let ft=null,dt=null;const ht=o.createElement("form"),gt=function(e){return e instanceof RegExp||e instanceof Function},Tt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!dt||dt!==e){if(e&&"object"==typeof e||(e={}),e=x(e),mt=-1===pt.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,ft="application/xhtml+xml"===mt?A:E,Se=v(e,"ALLOWED_TAGS")?O({},e.ALLOWED_TAGS,ft):ve,Re=v(e,"ALLOWED_ATTR")?O({},e.ALLOWED_ATTR,ft):Ce,it=v(e,"ALLOWED_NAMESPACES")?O({},e.ALLOWED_NAMESPACES,A):lt,Qe=v(e,"ADD_URI_SAFE_ATTR")?O(x(et),e.ADD_URI_SAFE_ATTR,ft):et,Ze=v(e,"ADD_DATA_URI_TAGS")?O(x(Je),e.ADD_DATA_URI_TAGS,ft):Je,$e=v(e,"FORBID_CONTENTS")?O({},e.FORBID_CONTENTS,ft):Ke,De=v(e,"FORBID_TAGS")?O({},e.FORBID_TAGS,ft):x({}),Oe=v(e,"FORBID_ATTR")?O({},e.FORBID_ATTR,ft):x({}),qe=!!v(e,"USE_PROFILES")&&e.USE_PROFILES,xe=!1!==e.ALLOW_ARIA_ATTR,Me=!1!==e.ALLOW_DATA_ATTR,ke=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ie=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Ue=e.SAFE_FOR_TEMPLATES||!1,ze=!1!==e.SAFE_FOR_XML,Pe=e.WHOLE_DOCUMENT||!1,We=e.RETURN_DOM||!1,Ge=e.RETURN_DOM_FRAGMENT||!1,Be=e.RETURN_TRUSTED_TYPE||!1,Fe=e.FORCE_BODY||!1,je=!1!==e.SANITIZE_DOM,Ye=e.SANITIZE_NAMED_PROPS||!1,Ve=!1!==e.KEEP_CONTENT,Xe=e.IN_PLACE||!1,Ne=e.ALLOWED_URI_REGEXP||K,rt=e.NAMESPACE||ot,ct=e.MATHML_TEXT_INTEGRATION_POINTS||ct,st=e.HTML_INTEGRATION_POINTS||st,we=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&gt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(we.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&gt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(we.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(we.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ue&&(Me=!1),Ge&&(We=!0),qe&&(Se=O({},F),Re=[],!0===qe.html&&(O(Se,k),O(Re,W)),!0===qe.svg&&(O(Se,I),O(Re,G),O(Re,j)),!0===qe.svgFilters&&(O(Se,U),O(Re,G),O(Re,j)),!0===qe.mathMl&&(O(Se,P),O(Re,B),O(Re,j))),e.ADD_TAGS&&("function"==typeof e.ADD_TAGS?Le.tagCheck=e.ADD_TAGS:(Se===ve&&(Se=x(Se)),O(Se,e.ADD_TAGS,ft))),e.ADD_ATTR&&("function"==typeof e.ADD_ATTR?Le.attributeCheck=e.ADD_ATTR:(Re===Ce&&(Re=x(Re)),O(Re,e.ADD_ATTR,ft))),e.ADD_URI_SAFE_ATTR&&O(Qe,e.ADD_URI_SAFE_ATTR,ft),e.FORBID_CONTENTS&&($e===Ke&&($e=x($e)),O($e,e.FORBID_CONTENTS,ft)),Ve&&(Se["#text"]=!0),Pe&&O(Se,["html","head","body"]),Se.table&&(O(Se,["tbody"]),delete De.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw C('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw C('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');ee=e.TRUSTED_TYPES_POLICY,ce=ee.createHTML("");}else void 0===ee&&(ee=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let n=null;const o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(n=t.getAttribute(o));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}}(Y,i)),null!==ee&&"string"==typeof ce&&(ce=ee.createHTML(""));s&&s(e),dt=e;}},yt=O({},[...I,...U,...z]),Et=O({},[...P,...H]),At=function(e){T(n.removed,{element:e});try{J(e).removeChild(e);}catch(t){q(e);}},bt=function(e,t){try{T(n.removed,{attribute:t.getAttributeNode(e),from:t});}catch(e){T(n.removed,{attribute:null,from:t});}if(t.removeAttribute(e),"is"===e)if(We||Ge)try{At(t);}catch(e){}else try{t.setAttribute(e,"");}catch(e){}},_t=function(e){let t=null,n=null;if(Fe)e="<remove></remove>"+e;else {const t=b(e,/^[\r\n\t ]+/);n=t&&t[0];}"application/xhtml+xml"===mt&&rt===ot&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const r=ee?ee.createHTML(e):e;if(rt===ot)try{t=(new L).parseFromString(r,mt);}catch(e){}if(!t||!t.documentElement){t=se.createDocument(rt,"template",null);try{t.documentElement.innerHTML=at?ce:r;}catch(e){}}const a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),rt===ot?pe.call(t,Pe?"html":"body")[0]:Pe?t.documentElement:a},Nt=function(e){return ue.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},St=function(e){return e instanceof D&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof w)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},vt=function(e){return "function"==typeof u&&e instanceof u};function Rt(e,t,o){d(e,e=>{e.call(n,t,o,dt);});}const Ct=function(e){let t=null;if(Rt(de.beforeSanitizeElements,e,null),St(e))return At(e),!0;const o=ft(e.nodeName);if(Rt(de.uponSanitizeElement,e,{tagName:o,allowedTags:Se}),ze&&e.hasChildNodes()&&!vt(e.firstElementChild)&&R(/<[/\w!]/g,e.innerHTML)&&R(/<[/\w!]/g,e.textContent))return At(e),!0;if(e.nodeType===re)return At(e),!0;if(ze&&e.nodeType===ae&&R(/<[/\w]/g,e.data))return At(e),!0;if(!(Le.tagCheck instanceof Function&&Le.tagCheck(o))&&(!Se[o]||De[o])){if(!De[o]&&Dt(o)){if(we.tagNameCheck instanceof RegExp&&R(we.tagNameCheck,o))return !1;if(we.tagNameCheck instanceof Function&&we.tagNameCheck(o))return !1}if(Ve&&!$e[o]){const t=J(e)||e.parentNode,n=Z(e)||e.childNodes;if(n&&t){for(let o=n.length-1;o>=0;--o){const r=X(n[o],!0);r.__removalCount=(e.__removalCount||0)+1,t.insertBefore(r,$(e));}}}return At(e),!0}return e instanceof p&&!function(e){let t=J(e);t&&t.tagName||(t={namespaceURI:rt,tagName:"template"});const n=E(e.tagName),o=E(t.tagName);return !!it[e.namespaceURI]&&(e.namespaceURI===nt?t.namespaceURI===ot?"svg"===n:t.namespaceURI===tt?"svg"===n&&("annotation-xml"===o||ct[o]):Boolean(yt[n]):e.namespaceURI===tt?t.namespaceURI===ot?"math"===n:t.namespaceURI===nt?"math"===n&&st[o]:Boolean(Et[n]):e.namespaceURI===ot?!(t.namespaceURI===nt&&!st[o])&&!(t.namespaceURI===tt&&!ct[o])&&!Et[n]&&(ut[n]||!yt[n]):!("application/xhtml+xml"!==mt||!it[e.namespaceURI]))}(e)?(At(e),!0):"noscript"!==o&&"noembed"!==o&&"noframes"!==o||!R(/<\/no(script|embed|frames)/i,e.innerHTML)?(Ue&&e.nodeType===oe&&(t=e.textContent,d([he,ge,Te],e=>{t=_(t,e," ");}),e.textContent!==t&&(T(n.removed,{element:e.cloneNode()}),e.textContent=t)),Rt(de.afterSanitizeElements,e,null),!1):(At(e),!0)},wt=function(e,t,n){if(je&&("id"===t||"name"===t)&&(n in o||n in ht))return !1;if(Me&&!Oe[t]&&R(ye,t));else if(xe&&R(Ee,t));else if(Le.attributeCheck instanceof Function&&Le.attributeCheck(t,e));else if(!Re[t]||Oe[t]){if(!(Dt(e)&&(we.tagNameCheck instanceof RegExp&&R(we.tagNameCheck,e)||we.tagNameCheck instanceof Function&&we.tagNameCheck(e))&&(we.attributeNameCheck instanceof RegExp&&R(we.attributeNameCheck,t)||we.attributeNameCheck instanceof Function&&we.attributeNameCheck(t,e))||"is"===t&&we.allowCustomizedBuiltInElements&&(we.tagNameCheck instanceof RegExp&&R(we.tagNameCheck,n)||we.tagNameCheck instanceof Function&&we.tagNameCheck(n))))return !1}else if(Qe[t]);else if(R(Ne,_(n,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==N(n,"data:")||!Ze[e]){if(ke&&!R(Ae,_(n,be,"")));else if(n)return !1}else ;return !0},Dt=function(e){return "annotation-xml"!==e&&b(e,_e)},Ot=function(e){Rt(de.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||St(e))return;const o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Re,forceKeepAttr:void 0};let r=t.length;for(;r--;){const a=t[r],{name:i,namespaceURI:l,value:c}=a,s=ft(i),u=c;let m="value"===i?u:S(u);if(o.attrName=s,o.attrValue=m,o.keepAttr=!0,o.forceKeepAttr=void 0,Rt(de.uponSanitizeAttribute,e,o),m=o.attrValue,!Ye||"id"!==s&&"name"!==s||(bt(i,e),m="user-content-"+m),ze&&R(/((--!?|])>)|<\/(style|title|textarea)/i,m)){bt(i,e);continue}if("attributename"===s&&b(m,"href")){bt(i,e);continue}if(o.forceKeepAttr)continue;if(!o.keepAttr){bt(i,e);continue}if(!Ie&&R(/\/>/i,m)){bt(i,e);continue}Ue&&d([he,ge,Te],e=>{m=_(m,e," ");});const p=ft(e.nodeName);if(wt(p,s,m)){if(ee&&"object"==typeof Y&&"function"==typeof Y.getAttributeType)if(l);else switch(Y.getAttributeType(p,s)){case"TrustedHTML":m=ee.createHTML(m);break;case"TrustedScriptURL":m=ee.createScriptURL(m);}if(m!==u)try{l?e.setAttributeNS(l,i,m):e.setAttribute(i,m),St(e)?At(e):g(n.removed);}catch(t){bt(i,e);}}else bt(i,e);}Rt(de.afterSanitizeAttributes,e,null);},Lt=function e(t){let n=null;const o=Nt(t);for(Rt(de.beforeSanitizeShadowDOM,t,null);n=o.nextNode();)Rt(de.uponSanitizeShadowNode,n,null),Ct(n),Ot(n),n.content instanceof l&&e(n.content);Rt(de.afterSanitizeShadowDOM,t,null);};return n.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=null,r=null,i=null,c=null;if(at=!e,at&&(e="\x3c!--\x3e"),"string"!=typeof e&&!vt(e)){if("function"!=typeof e.toString)throw C("toString is not a function");if("string"!=typeof(e=e.toString()))throw C("dirty is not a string, aborting")}if(!n.isSupported)return e;if(He||Tt(t),n.removed=[],"string"==typeof e&&(Xe=!1),Xe){if(e.nodeName){const t=ft(e.nodeName);if(!Se[t]||De[t])throw C("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof u)o=_t("\x3c!----\x3e"),r=o.ownerDocument.importNode(e,!0),r.nodeType===ne&&"BODY"===r.nodeName||"HTML"===r.nodeName?o=r:o.appendChild(r);else {if(!We&&!Ue&&!Pe&&-1===e.indexOf("<"))return ee&&Be?ee.createHTML(e):e;if(o=_t(e),!o)return We?null:Be?ce:""}o&&Fe&&At(o.firstChild);const s=Nt(Xe?e:o);for(;i=s.nextNode();)Ct(i),Ot(i),i.content instanceof l&&Lt(i.content);if(Xe)return e;if(We){if(Ge)for(c=me.call(o.ownerDocument);o.firstChild;)c.appendChild(o.firstChild);else c=o;return (Re.shadowroot||Re.shadowrootmode)&&(c=fe.call(a,c,!0)),c}let m=Pe?o.outerHTML:o.innerHTML;return Pe&&Se["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&R(Q,o.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+m),Ue&&d([he,ge,Te],e=>{m=_(m,e," ");}),ee&&Be?ee.createHTML(m):m},n.setConfig=function(){Tt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),He=!0;},n.clearConfig=function(){dt=null,He=!1;},n.isValidAttribute=function(e,t,n){dt||Tt({});const o=ft(e),r=ft(t);return wt(o,r,n)},n.addHook=function(e,t){"function"==typeof t&&T(de[e],t);},n.removeHook=function(e,t){if(void 0!==t){const n=h(de[e],t);return -1===n?void 0:y(de[e],n,1)[0]}return g(de[e])},n.removeHooks=function(e){de[e]=[];},n.removeAllHooks=function(){de={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};},n}();const se=/(?<prop>[^:]+):(?<value>.+)/s;function ue(e){if(e.startsWith("--"))return e;const t=e.replace(/(-.)/g,e=>e[1].toUpperCase());return e.startsWith("-ms")?t[0].toLowerCase()+t.slice(1):t}function me(e){return t=>[t.eventName,n=>{var o;t.eventPreventDefault&&n.preventDefault(),t.eventStopPropagation&&n.stopPropagation();const r=e?null===(o=t.eventActionRepeat)||void 0===o?void 0:o.get(e):t.eventAction;r&&r.canExecute&&r.execute();}]}function pe(e){return t=>{const n=t.attributeName;let o;var r,a;e?o=null===(r="template"===t.attributeValueType?t.attributeValueTemplateRepeat:t.attributeValueExpressionRepeat)||void 0===r?void 0:r.get(e).value:o=null===(a="template"===t.attributeValueType?t.attributeValueTemplate:t.attributeValueExpression)||void 0===a?void 0:a.value;return [n,null!=o?o:""]}}function fe(e,t,n,o){var r;const a=Object.fromEntries(t.map(t=>{const[n,o]=e(t);switch(n){case"style":return ["style",(r=o,Object.fromEntries(r.split(";").filter(e=>e.length).map(e=>{var t,n;const{prop:o="",value:r=""}=null!==(t=null===(n=se.exec(e.trim()))||void 0===n?void 0:n.groups)&&void 0!==t?t:{};return [o.trim(),r.trim()]}).filter(e=>2===e.length&&e[0].length&&e[1].length).map(e=>{let[t,n]=e;return [ue(t),n]})))];case"class":return ["className",o];default:return [n,o]}var r;}));return a.style={...o,...a.style},a.className="widget-html-element ".concat(null!=n?n:""," ").concat(null!==(r=a.className)&&void 0!==r?r:"").trim(),a}function de(e,t){var n,o;if("innerHTML"===e.tagContentMode)return t?null===(n=e.tagContentRepeatHTML)||void 0===n?void 0:n.get(t).value:null===(o=e.tagContentHTML)||void 0===o?void 0:o.value}function he(e,t){var n;if("container"===e.tagContentMode)return t?null===(n=e.tagContentRepeatContainer)||void 0===n?void 0:n.get(t):e.tagContentContainer}function ge(e){const t=function(e){try{return e?JSON.parse(e):{}}catch(e){throw console.error(e),new Error('Can not parse "Configuration for HTML sanitization" value. Please check your widget configuration.')}}(e),n=ce(window);return e=>n.sanitize(e,{...t,RETURN_DOM_FRAGMENT:!1,RETURN_DOM:!1})}function Te(n){const o=function(e){const[n]=reactExports.useState(()=>ge(e));return n}(n.sanitizationConfig),r=n.tagName,{unsafeHTML:a}=n;return jsxRuntimeExports.jsx(r,void 0!==a?{...n.attributes,dangerouslySetInnerHTML:{__html:o(a)}}:{...n.attributes,children:n.children})}function ye(t){var r;const a=function(e,t){return "__customTag__"===e?t:e}(t.tagName,t.tagNameCustom),i=t.tagUseRepeat?null===(r=t.tagContentRepeatDataSource)||void 0===r?void 0:r.items:[void 0],l=reactExports.useId();return null!=i&&i.length?jsxRuntimeExports.jsx(reactExports.Fragment,{children:i.map((n,o)=>{return jsxRuntimeExports.jsx(Te,{tagName:a,attributes:{...fe(pe(n),t.attributes,t.class,t.style),...(r=me(n),i=t.events,Object.fromEntries(i.map(e=>r(e))))},unsafeHTML:de(t,n),sanitizationConfig:t.sanitizationConfigFull,children:he(t,n)},"".concat(l,"_").concat((null==n?void 0:n.id)||o));var r,i;})}):null}

var HTMLElementWidgetModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    HTMLElement: ye
});

const React$1 = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const SprintrFeedback = Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "SprintrFeedback")?.value || Object.getOwnPropertyDescriptor(SprintrFeedbackWidgetModule, "default")?.value;
const { $ScrollContainer, $Fragment, $SprintrFeedback, $Div: $Div$1, $Container: $Container$1, $SidebarToggle, $Image, $MenuBar, $DataView: $DataView$1, $FormGroup: $FormGroup$1, $Combobox, $NavigationTree, $Placeholder } = asPluginWidgets({ ScrollContainer, Fragment, SprintrFeedback, Div, Container, SidebarToggle, Image, MenuBar, DataView, FormGroup, Combobox, NavigationTree, Placeholder });
const region$Main$1 = [
  /* @__PURE__ */ React$1.createElement(
    $ScrollContainer,
    {
      key: "l.Atlas_Core.Atlas_TopBar.layoutContainer",
      $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutContainer",
      class: "mx-name-layoutContainer",
      scrollPerRegion: true,
      layoutMode: "sidebar",
      top: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React$1.createElement(
            $Fragment,
            {
              key: "l.Atlas_Core.Atlas_TopBar.snippetCall1",
              $widgetId: "l.Atlas_Core.Atlas_TopBar.snippetCall1",
              content: [
                /* @__PURE__ */ React$1.createElement(
                  $SprintrFeedback,
                  {
                    key: "l.Atlas_Core.FeedbackWidget.feedback1",
                    $widgetId: "l.Atlas_Core.FeedbackWidget.feedback1",
                    sprintrapp: "1",
                    foreignObjectRendering: false,
                    scrollableAreaSelector: ".mx-scrollcontainer-fixed > .mx-scrollcontainer-middle > .mx-scrollcontainer-wrapper",
                    feedbackButtonAction: ActionProperty({
                      "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ACT_Open_Feedback_Modal, "allowedRoles": ["User"] }, "disabledDuringExecution": false },
                      "argumentTypes": {}
                    }),
                    showAdvancedSettings: false,
                    title_label: ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Feedback" }, "args": {} }
                    }),
                    take_screenshot_label: ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Take screenshot" }, "args": {} }
                    }),
                    annotate_label: ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Annotate" }, "args": {} }
                    }),
                    done_label: ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Done" }, "args": {} }
                    }),
                    cancel_label: ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                    }),
                    clear_label: ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Clear" }, "args": {} }
                    }),
                    userDefinedButtonStyle: "side",
                    showInDesignMode: true,
                    class: "mx-name-feedback1"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ React$1.createElement(
            $Div$1,
            {
              key: "l.Atlas_Core.Atlas_TopBar.layoutGrid1",
              $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid1",
              class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
              content: [
                /* @__PURE__ */ React$1.createElement(
                  $Div$1,
                  {
                    key: "l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0",
                    $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0",
                    class: "row",
                    content: [
                      /* @__PURE__ */ React$1.createElement(
                        $Div$1,
                        {
                          key: "l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0$column0",
                          $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid1$row0$column0",
                          class: "col-lg-12 col-md-12 col-12",
                          content: [
                            /* @__PURE__ */ React$1.createElement(
                              $Container$1,
                              {
                                key: "l.Atlas_Core.Atlas_TopBar.container2",
                                $widgetId: "l.Atlas_Core.Atlas_TopBar.container2",
                                class: "mx-name-container2 topbar-content",
                                renderMode: "div",
                                content: [
                                  /* @__PURE__ */ React$1.createElement(
                                    $SidebarToggle,
                                    {
                                      key: "l.Atlas_Core.Atlas_TopBar.sidebarToggle3",
                                      $widgetId: "l.Atlas_Core.Atlas_TopBar.sidebarToggle3",
                                      buttonId: "l.Atlas_Core.Atlas_TopBar.sidebarToggle3",
                                      renderType: "button",
                                      buttonClass: "btn-primary",
                                      caption: ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      }),
                                      tooltip: TextProperty({
                                        "value": "Toggle Menu"
                                      }),
                                      icon: WebIconProperty({
                                        "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-navigation-menu" }
                                      }),
                                      class: "mx-name-sidebarToggle3 toggle-btn"
                                    }
                                  ),
                                  /* @__PURE__ */ React$1.createElement(
                                    $Div$1,
                                    {
                                      key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2",
                                      $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2",
                                      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid navbar-brand",
                                      content: [
                                        /* @__PURE__ */ React$1.createElement(
                                          $Div$1,
                                          {
                                            key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0",
                                            $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0",
                                            class: "row align-children-center",
                                            content: [
                                              /* @__PURE__ */ React$1.createElement(
                                                $Div$1,
                                                {
                                                  key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column0",
                                                  $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column0",
                                                  class: "col-lg-auto col-md-auto col-auto",
                                                  content: [
                                                    /* @__PURE__ */ React$1.createElement(
                                                      $Image,
                                                      {
                                                        key: "l.Atlas_Core.Atlas_TopBar.staticImage1",
                                                        $widgetId: "l.Atlas_Core.Atlas_TopBar.staticImage1",
                                                        datasource: "image",
                                                        imageObject: WebStaticImageProperty({
                                                          "image": { "uri": "img/Atlas_Core$Layout$logo.svg" }
                                                        }),
                                                        imageUrl: ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        }),
                                                        isBackgroundImage: false,
                                                        onClickType: "action",
                                                        alternativeText: ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        }),
                                                        widthUnit: "auto",
                                                        width: 100,
                                                        heightUnit: "auto",
                                                        height: 100,
                                                        iconSize: 14,
                                                        displayAs: "fullImage",
                                                        responsive: false,
                                                        class: "mx-name-staticImage1"
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React$1.createElement(
                                                $Div$1,
                                                {
                                                  key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column1",
                                                  $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column1",
                                                  class: "col-lg col-md col",
                                                  content: [
                                                    /* @__PURE__ */ React$1.createElement(
                                                      $MenuBar,
                                                      {
                                                        key: "l.Atlas_Core.Atlas_TopBar.menuBar1",
                                                        $widgetId: "l.Atlas_Core.Atlas_TopBar.menuBar1",
                                                        class: "mx-name-menuBar1 hidden-xs hide-icons",
                                                        menu: [
                                                          {
                                                            "caption": TextProperty({
                                                              "value": "Home"
                                                            }),
                                                            "icon": WebIconProperty({
                                                              "icon": { "type": "glyph", "iconClass": "glyphicon-home" }
                                                            }),
                                                            "action": ActionProperty({
                                                              "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Home_Web.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                                              "skipClientValidation": true
                                                            })
                                                          }
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React$1.createElement(
                                                $Div$1,
                                                {
                                                  key: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column2",
                                                  $widgetId: "l.Atlas_Core.Atlas_TopBar.layoutGrid2$row0$column2",
                                                  class: "col-lg-auto col-md-auto col-auto",
                                                  content: [
                                                    /* @__PURE__ */ React$1.createElement(
                                                      $Fragment,
                                                      {
                                                        key: "l.Atlas_Core.Atlas_TopBar.snippetCall2",
                                                        $widgetId: "l.Atlas_Core.Atlas_TopBar.snippetCall2",
                                                        content: [
                                                          /* @__PURE__ */ React$1.createElement(
                                                            $DataView$1,
                                                            {
                                                              key: "l.Atlas_Core.LanguageSelectorWidget.dataView1",
                                                              $widgetId: "l.Atlas_Core.LanguageSelectorWidget.dataView1",
                                                              class: "mx-name-dataView1 form-horizontal",
                                                              object: MicroflowObjectProperty({
                                                                "dataSourceId": "l.35",
                                                                "editable": true,
                                                                "operationId": "hCi55QfXp1a2eNyld8C/TA",
                                                                "argMap": {}
                                                              }),
                                                              emptyMessage: TextProperty({
                                                                "value": ""
                                                              }),
                                                              body: [
                                                                /* @__PURE__ */ React$1.createElement(
                                                                  $FormGroup$1,
                                                                  {
                                                                    key: "l.Atlas_Core.LanguageSelectorWidget.comboBox1$formGroup",
                                                                    $widgetId: "l.Atlas_Core.LanguageSelectorWidget.comboBox1$formGroup",
                                                                    class: "mx-name-comboBox1 language-selector hide-bg",
                                                                    style: {
                                                                      "--cb-text-color": "var(--font-color-contrast)"
                                                                    },
                                                                    control: [
                                                                      /* @__PURE__ */ React$1.createElement(
                                                                        $Combobox,
                                                                        {
                                                                          key: "l.Atlas_Core.LanguageSelectorWidget.comboBox1",
                                                                          $widgetId: "l.Atlas_Core.LanguageSelectorWidget.comboBox1",
                                                                          source: "context",
                                                                          optionsSourceType: "association",
                                                                          optionsSourceAssociationCaptionType: "attribute",
                                                                          optionsSourceDatabaseCaptionType: "attribute",
                                                                          optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                                                            "path": "",
                                                                            "entity": "System.Language",
                                                                            "attribute": "Description",
                                                                            "attributeType": "String",
                                                                            "sortable": true,
                                                                            "filterable": true,
                                                                            "dataSourceId": "l.2",
                                                                            "isList": false
                                                                          }),
                                                                          attributeAssociation: AssociationProperty({
                                                                            "type": "Reference",
                                                                            "entity": "System.User",
                                                                            "path": "",
                                                                            "attribute": "System.User_Language",
                                                                            "endpointEntity": "System.Language",
                                                                            "selectableObjectsId": "l.2",
                                                                            "scope": "l.Atlas_Core.LanguageSelectorWidget.dataView1",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                                          }),
                                                                          optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                                                            "dataSourceId": "l.2",
                                                                            "entity": "System.Language",
                                                                            "scope": "l.Atlas_Core.LanguageSelectorWidget.dataView1",
                                                                            "operationId": "vbHFMMZ+GVqHrp8tBK4t8g",
                                                                            "sort": []
                                                                          }),
                                                                          optionsSourceStaticDataSource: [],
                                                                          emptyOptionText: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                          }),
                                                                          noOptionsText: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                          }),
                                                                          clearable: false,
                                                                          optionsSourceAssociationCustomContentType: "no",
                                                                          optionsSourceDatabaseCustomContentType: "no",
                                                                          staticDataSourceCustomContentType: "no",
                                                                          showFooter: false,
                                                                          selectionMethod: "checkbox",
                                                                          selectedItemsStyle: "text",
                                                                          selectAllButton: false,
                                                                          selectAllButtonCaption: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                                          }),
                                                                          customEditability: "default",
                                                                          customEditabilityExpression: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                                          }),
                                                                          readOnlyStyle: "text",
                                                                          onChangeEvent: ActionProperty({
                                                                            "action": { "type": "callNanoflow", "argMap": { "User": { "widget": "l.Atlas_Core.LanguageSelectorWidget.dataView1", "source": "object" } }, "config": { "nanoflow": () => OCH_UpdateUserLanguage, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                                                            "argumentTypes": {}
                                                                          }),
                                                                          ariaRequired: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                                          }),
                                                                          ariaLabel: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Combo box" }, "args": {} }
                                                                          }),
                                                                          clearButtonAriaLabel: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                                          }),
                                                                          removeValueAriaLabel: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                                          }),
                                                                          a11ySelectedValue: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                                          }),
                                                                          a11yOptionsAvailable: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                                          }),
                                                                          a11yInstructions: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                                          }),
                                                                          lazyLoading: true,
                                                                          loadingType: "spinner",
                                                                          selectedItemsSorting: "none",
                                                                          filterType: "none",
                                                                          filterInputDebounceInterval: 200,
                                                                          id: DerivedUniqueIdProperty({
                                                                            "widgetId": "l.Atlas_Core.LanguageSelectorWidget.comboBox1"
                                                                          })
                                                                        }
                                                                      )
                                                                    ],
                                                                    labelFor: DerivedUniqueIdProperty({
                                                                      "widgetId": "l.Atlas_Core.LanguageSelectorWidget.comboBox1"
                                                                    }),
                                                                    width: 3,
                                                                    orientation: "vertical",
                                                                    hasError: ValidationProperty({
                                                                      "inputWidgetId": "l.Atlas_Core.LanguageSelectorWidget.comboBox1"
                                                                    })
                                                                  }
                                                                )
                                                              ],
                                                              hideFooter: false
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ]
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ],
                                ariaHidden: false
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ],
        "sizeMode": "auto",
        "class": "region-topbar"
      },
      bottom: {
        "enabled": false
      },
      left: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React$1.createElement(
            $NavigationTree,
            {
              key: "l.Atlas_Core.Atlas_TopBar.navigationTree1",
              $widgetId: "l.Atlas_Core.Atlas_TopBar.navigationTree1",
              class: "mx-name-navigationTree1",
              menu: [
                {
                  "caption": TextProperty({
                    "value": "Home"
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "glyph", "iconClass": "glyphicon-home" }
                  }),
                  "action": ActionProperty({
                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/Home_Web.page.xml", "location": "content", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                    "skipClientValidation": true
                  })
                }
              ]
            }
          )
        ],
        "sizeMode": "pixels",
        "sizeValue": 320,
        "class": "region-sidebar",
        "toggleMode": "push",
        "initiallyOpen": false
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React$1.createElement(
            $Placeholder,
            {
              key: "l.Atlas_Core.Atlas_TopBar.Main",
              $widgetId: "l.Atlas_Core.Atlas_TopBar.Main",
              content: PlaceholderProperty({
                "id": "Atlas_Core.Atlas_TopBar.Main"
              })
            }
          )
        ],
        "class": "region-content"
      }
    }
  )
];
const content$1 = {
  "Main": region$Main$1
};

const ACT_KMS_UnitTest_Reset = {
  "name": "AWSKMSConnector.ACT_KMS_UnitTest_Reset",
  "instructions": [
    {
      "type": "changeObject",
      "label": "a8d01331-63ca-4931-86ff-04c92031533a",
      "inputVar": "UnitTest",
      "member": "KeyId",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "KeySpec",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "KeyUsage",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "PlainText",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "CipherBlob",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "DecryptedText",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "DataKeyCipherBlob",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "DataKeyPlainText",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "return",
      "label": "eed3bc9b-12d6-4001-9c48-554e216fa28b",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

addEnumerations({ "AWSKMSConnector.ENUM_KeyUsage": [["ENCRYPT_DECRYPT", selectTranslation(["Symmetric encryption keys"])], ["GENERATE_VERIFY_MAC", selectTranslation(["HMAC (symmetric) signing keys"])], ["SIGN_VERIFY", selectTranslation(["Asymmetric keys with key pairs (RSA , ECC_SECG_P256K1, ML-DSA or SM2)"])], ["KEY_AGREEMENT", selectTranslation(["Asymmetric keys with NIST-standard elliptic curve key pairs"])]], "AWSKMSConnector.ENUM_KeySpec": [["SYMMETRIC_DEFAULT", selectTranslation(["Symmetric key encryption"])], ["AES_128", selectTranslation(["AES_128"])], ["AES_256", selectTranslation(["AES_256"])], ["HMAC_224", selectTranslation(["HMAC_224"])], ["HMAC_256", selectTranslation(["HMAC_256"])], ["HMAC_384", selectTranslation(["HMAC_384"])], ["HMAC_512", selectTranslation(["HMAC_512"])], ["RSA_2048", selectTranslation(["RSA_2048"])], ["RSA_3072", selectTranslation(["RSA_3072"])], ["RSA_4096", selectTranslation(["RSA_4096"])], ["ECC_NIST_P256", selectTranslation(["ECC_NIST_P256 (secp256r1)"])], ["ECC_NIST_P384", selectTranslation(["ECC_NIST_P384 (secp384r1)"])], ["ECC_NIST_P521", selectTranslation(["ECC_NIST_P521 (secp521r1)"])], ["ECC_NIST_EDWARDS25519", selectTranslation(["ECC_NIST_EDWARDS25519 (ed25519) - signing and verification only"])], ["ECC_SECG_P256K1", selectTranslation(["ECC_SECG_P256K1 (secp256k1), commonly used for cryptocurrencies"])], ["ML_DSA_44", selectTranslation(["ML_DSA_44"])], ["ML_DSA_65", selectTranslation(["ML_DSA_65"])], ["ML_DSA_87", selectTranslation(["ML_DSA_87"])], ["SM2", selectTranslation(["SM2 (China Regions only)"])]] });
const OCh_UnitTest_KeyUsage = {
  "name": "AWSKMSConnector.OCh_UnitTest_KeyUsage",
  "instructions": [
    {
      "type": "changeObject",
      "label": "8180b5dc-68bc-4cb0-95b2-9785c85f06a1",
      "inputVar": "UnitTest",
      "member": "KeyId",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "KeySpec",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "function",
          "name": "=",
          "parameters": [
            {
              "type": "variable",
              "variable": "UnitTest",
              "path": "KeyUsage"
            },
            {
              "type": "literal",
              "value": "ENCRYPT_DECRYPT"
            }
          ]
        },
        "then": {
          "type": "literal",
          "value": "SYMMETRIC_DEFAULT"
        },
        "else": {
          "type": "conditional",
          "condition": {
            "type": "function",
            "name": "=",
            "parameters": [
              {
                "type": "variable",
                "variable": "UnitTest",
                "path": "KeyUsage"
              },
              {
                "type": "literal",
                "value": "GENERATE_VERIFY_MAC"
              }
            ]
          },
          "then": {
            "type": "literal",
            "value": "HMAC_224"
          },
          "else": {
            "type": "literal",
            "value": null
          }
        }
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "CipherBlob",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "DecryptedText",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "DataKeyCipherBlob",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "DataKeyPlainText",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "return",
      "label": "87d1106a-7cb5-4abc-a3cc-4df552f8bda7",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

addEnumerations({ "AWSKMSConnector.ENUM_KeySpec": [["SYMMETRIC_DEFAULT", selectTranslation(["Symmetric key encryption"])], ["AES_128", selectTranslation(["AES_128"])], ["AES_256", selectTranslation(["AES_256"])], ["HMAC_224", selectTranslation(["HMAC_224"])], ["HMAC_256", selectTranslation(["HMAC_256"])], ["HMAC_384", selectTranslation(["HMAC_384"])], ["HMAC_512", selectTranslation(["HMAC_512"])], ["RSA_2048", selectTranslation(["RSA_2048"])], ["RSA_3072", selectTranslation(["RSA_3072"])], ["RSA_4096", selectTranslation(["RSA_4096"])], ["ECC_NIST_P256", selectTranslation(["ECC_NIST_P256 (secp256r1)"])], ["ECC_NIST_P384", selectTranslation(["ECC_NIST_P384 (secp384r1)"])], ["ECC_NIST_P521", selectTranslation(["ECC_NIST_P521 (secp521r1)"])], ["ECC_NIST_EDWARDS25519", selectTranslation(["ECC_NIST_EDWARDS25519 (ed25519) - signing and verification only"])], ["ECC_SECG_P256K1", selectTranslation(["ECC_SECG_P256K1 (secp256k1), commonly used for cryptocurrencies"])], ["ML_DSA_44", selectTranslation(["ML_DSA_44"])], ["ML_DSA_65", selectTranslation(["ML_DSA_65"])], ["ML_DSA_87", selectTranslation(["ML_DSA_87"])], ["SM2", selectTranslation(["SM2 (China Regions only)"])]], "AWSKMSConnector.ENUM_KeyUsage": [["ENCRYPT_DECRYPT", selectTranslation(["Symmetric encryption keys"])], ["GENERATE_VERIFY_MAC", selectTranslation(["HMAC (symmetric) signing keys"])], ["SIGN_VERIFY", selectTranslation(["Asymmetric keys with key pairs (RSA , ECC_SECG_P256K1, ML-DSA or SM2)"])], ["KEY_AGREEMENT", selectTranslation(["Asymmetric keys with NIST-standard elliptic curve key pairs"])]] });
const OCh_UnitTest_KeySpec = {
  "name": "AWSKMSConnector.OCh_UnitTest_KeySpec",
  "instructions": [
    {
      "type": "changeObject",
      "label": "67e478d8-7691-49e3-b431-5a2d9ba8bd2e",
      "inputVar": "UnitTest",
      "member": "CipherBlob",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "DecryptedText",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "DataKeyCipherBlob",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "DataKeyPlainText",
      "value": {
        "type": "literal",
        "value": null
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "KeyUsage",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "function",
          "name": "=",
          "parameters": [
            {
              "type": "variable",
              "variable": "UnitTest",
              "path": "KeySpec"
            },
            {
              "type": "literal",
              "value": "SYMMETRIC_DEFAULT"
            }
          ]
        },
        "then": {
          "type": "literal",
          "value": "ENCRYPT_DECRYPT"
        },
        "else": {
          "type": "variable",
          "variable": "UnitTest",
          "path": "KeyUsage"
        }
      }
    },
    {
      "type": "return",
      "label": "c14f1052-d52d-4c8a-b337-8559e2a434f1",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const OCH_KMS_UnitTest_Reset = {
  "name": "AWSKMSConnector.OCH_KMS_UnitTest_Reset",
  "instructions": [
    {
      "type": "switch",
      "label": "2c691fcb-ba59-43a1-970c-f2ff11219319",
      "condition": {
        "type": "function",
        "name": "=",
        "parameters": [
          {
            "type": "function",
            "name": "trim",
            "parameters": [
              {
                "type": "variable",
                "variable": "UnitTest",
                "path": "PlainText"
              }
            ]
          },
          {
            "type": "literal",
            "value": ""
          }
        ]
      },
      "targets": {
        "true": "cbeb8001-e190-412a-bfd3-3a3d8bbb1d73",
        "false": "b82f559b-fb1a-4721-9acb-df1f6ffe4fe4"
      }
    },
    {
      "type": "return",
      "label": "b82f559b-fb1a-4721-9acb-df1f6ffe4fe4",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "changeObject",
      "label": "cbeb8001-e190-412a-bfd3-3a3d8bbb1d73",
      "inputVar": "UnitTest",
      "member": "CipherBlob",
      "value": {
        "type": "literal",
        "value": ""
      }
    },
    {
      "type": "changeObject",
      "inputVar": "UnitTest",
      "member": "DecryptedText",
      "value": {
        "type": "literal",
        "value": ""
      }
    },
    {
      "type": "return",
      "label": "0db1f209-2dc1-4df8-b834-8019634f12bf",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const React = { createElement: reactExports.createElement };
const HTMLElement = Object.getOwnPropertyDescriptor(HTMLElementWidgetModule, "HTMLElement")?.value || Object.getOwnPropertyDescriptor(HTMLElementWidgetModule, "default")?.value;
const { $Div, $Text, $ConditionalVisibilityWrapper, $ActionButton, $Container, $DataView, $HTMLElement, $FormGroup, $RadioButtonGroup, $TextBox, $TextArea } = asPluginWidgets({ Div, Text, ConditionalVisibilityWrapper, ActionButton, Container, DataView, HTMLElement, FormGroup, RadioButtonGroup, TextBox, TextArea });
addEnumerations({
  "AWSKMSConnector.ENUM_KeyUsage": [
    [
      "ENCRYPT_DECRYPT",
      selectTranslation([
        "Symmetric encryption keys"
      ])
    ],
    [
      "GENERATE_VERIFY_MAC",
      selectTranslation([
        "HMAC (symmetric) signing keys"
      ])
    ],
    [
      "SIGN_VERIFY",
      selectTranslation([
        "Asymmetric keys with key pairs (RSA , ECC_SECG_P256K1, ML-DSA or SM2)"
      ])
    ],
    [
      "KEY_AGREEMENT",
      selectTranslation([
        "Asymmetric keys with NIST-standard elliptic curve key pairs"
      ])
    ]
  ],
  "AWSKMSConnector.ENUM_KeySpec": [
    [
      "SYMMETRIC_DEFAULT",
      selectTranslation([
        "Symmetric key encryption"
      ])
    ],
    [
      "AES_128",
      selectTranslation([
        "AES_128"
      ])
    ],
    [
      "AES_256",
      selectTranslation([
        "AES_256"
      ])
    ],
    [
      "HMAC_224",
      selectTranslation([
        "HMAC_224"
      ])
    ],
    [
      "HMAC_256",
      selectTranslation([
        "HMAC_256"
      ])
    ],
    [
      "HMAC_384",
      selectTranslation([
        "HMAC_384"
      ])
    ],
    [
      "HMAC_512",
      selectTranslation([
        "HMAC_512"
      ])
    ],
    [
      "RSA_2048",
      selectTranslation([
        "RSA_2048"
      ])
    ],
    [
      "RSA_3072",
      selectTranslation([
        "RSA_3072"
      ])
    ],
    [
      "RSA_4096",
      selectTranslation([
        "RSA_4096"
      ])
    ],
    [
      "ECC_NIST_P256",
      selectTranslation([
        "ECC_NIST_P256 (secp256r1)"
      ])
    ],
    [
      "ECC_NIST_P384",
      selectTranslation([
        "ECC_NIST_P384 (secp384r1)"
      ])
    ],
    [
      "ECC_NIST_P521",
      selectTranslation([
        "ECC_NIST_P521 (secp521r1)"
      ])
    ],
    [
      "ECC_NIST_EDWARDS25519",
      selectTranslation([
        "ECC_NIST_EDWARDS25519 (ed25519) - signing and verification only"
      ])
    ],
    [
      "ECC_SECG_P256K1",
      selectTranslation([
        "ECC_SECG_P256K1 (secp256k1), commonly used for cryptocurrencies"
      ])
    ],
    [
      "ML_DSA_44",
      selectTranslation([
        "ML_DSA_44"
      ])
    ],
    [
      "ML_DSA_65",
      selectTranslation([
        "ML_DSA_65"
      ])
    ],
    [
      "ML_DSA_87",
      selectTranslation([
        "ML_DSA_87"
      ])
    ],
    [
      "SM2",
      selectTranslation([
        "SM2 (China Regions only)"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1",
      $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1$row0",
            $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1$row0",
            class: "row",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1$row0$column0",
                  $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1$row0$column0",
                  class: "col-lg-9 col-md col",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Text,
                      {
                        key: "p.AWSKMSConnector.ClientManagedKeys_Tests.text40",
                        $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.text40",
                        class: "mx-name-text40 pageheader-title spacing-outer-bottom",
                        caption: ExpressionProperty({
                          "expression": { "expr": { "type": "literal", "value": "AWS Key Manager Demo" }, "args": {} }
                        }),
                        renderMode: "h1"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1$row0$column1",
                  $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid1$row0$column1",
                  class: "col-lg-3 col-md col",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton5$visibility",
                        $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton5$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton5",
                              $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton5",
                              buttonId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton5",
                              class: "mx-name-actionButton5 pull-right spacing-outer-bottom-medium",
                              renderType: "link",
                              role: "button",
                              buttonClass: "btn-default",
                              caption: ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Close page" }, "args": {} }
                              }),
                              tooltip: TextProperty({
                                "value": ""
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "glyph", "iconClass": "glyphicon-eye-close" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "AWSKMSConnector/DemoDashboard.page.xml", "location": "content", "allowedRoles": ["Administrator"], "numberOfPagesToClose": { "type": "literalNumeric", "value": "1" } }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p.AWSKMSConnector.ClientManagedKeys_Tests.container1",
      $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.container1",
      class: "mx-name-container1 background-secondary spacing-outer-left-large spacing-outer-right-large",
      renderMode: "div",
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid2",
            $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid2",
            class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid2$row0",
                  $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid2$row0",
                  class: "row",
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid2$row0$column0",
                        $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid2$row0$column0",
                        class: "col-lg col-md col",
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $DataView,
                            {
                              key: "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                              $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                              class: "mx-name-dataView1 form-vertical",
                              object: AssociationObjectProperty({
                                "dataSourceId": "p.35",
                                "scope": "$UnitTest",
                                "editable": true
                              }),
                              emptyMessage: TextProperty({
                                "value": ""
                              }),
                              body: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3",
                                    $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3",
                                    class: "mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid",
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row0",
                                          $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row0",
                                          class: "row",
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row0$column0",
                                                $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row0$column0",
                                                class: "col-lg-auto col-md col",
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AWSKMSConnector.ClientManagedKeys_Tests.text6",
                                                      $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.text6",
                                                      class: "mx-name-text6 spacing-outer-top-medium spacing-outer-bottom-medium",
                                                      caption: ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Client Managed Keys" }, "args": {} }
                                                      }),
                                                      renderMode: "h2"
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row0$column1",
                                                $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row0$column1",
                                                class: "col-lg col-md col"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row1",
                                          $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row1",
                                          class: "row",
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row1$column0",
                                                $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row1$column0",
                                                class: "col-lg col-md col",
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $HTMLElement,
                                                    {
                                                      key: "p.AWSKMSConnector.ClientManagedKeys_Tests.hTMLElement3",
                                                      $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.hTMLElement3",
                                                      tagName: "ol",
                                                      tagNameCustom: "div",
                                                      tagUseRepeat: false,
                                                      tagContentMode: "innerHTML",
                                                      tagContentHTML: ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": '<li>Create a client managed key and get the generated KeyId.\r\n<ul>\r\n<li>Set <b>Key usage</b>="Symmetric encryption keys"</li>\r\n<li>Set <b>Key spec</b>="Symmetric key encryption"</li>\r\n<li>Set <b>Key description</b> with your context description or leave the string value pre-populated for your convenience\r\n</ul>\r\n</li>\r\n<li>Encrypt the text input string with the client managed key</li>\r\n<li>Decrypt the encrypted text string with the client managed key</li>' }, "args": {} }
                                                      }),
                                                      attributes: [],
                                                      events: [],
                                                      sanitizationConfigFull: "",
                                                      class: "mx-name-hTMLElement3"
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row2",
                                          $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row2",
                                          class: "row",
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row2$column0",
                                                $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row2$column0",
                                                class: "col-lg col-md col",
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.AWSKMSConnector.ClientManagedKeys_Tests.container3",
                                                      $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.container3",
                                                      class: "mx-name-container3 panel background-main spacing-outer-top-large spacing-outer-bottom-large spacing-inner-top-large spacing-inner-right-large spacing-inner-left-large spacing-inner-bottom-large",
                                                      renderMode: "div",
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $FormGroup,
                                                          {
                                                            key: "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons1$formGroup",
                                                            $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons1$formGroup",
                                                            class: "mx-name-radioButtons1 mx-radiobuttons",
                                                            control: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $RadioButtonGroup,
                                                                {
                                                                  key: "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons1",
                                                                  $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons1",
                                                                  value: AttributeProperty({
                                                                    "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                    "path": "",
                                                                    "entity": "AWSKMSConnector.UnitTest",
                                                                    "attribute": "KeyUsage",
                                                                    "onChange": { "type": "callNanoflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "nanoflow": () => OCh_UnitTest_KeyUsage, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                    "isList": false,
                                                                    "validation": null
                                                                  }),
                                                                  readOnlyStyle: "control",
                                                                  id: DerivedUniqueIdProperty({
                                                                    "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons1"
                                                                  })
                                                                }
                                                              )
                                                            ],
                                                            caption: ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Key usage" }, "args": {} }
                                                            }),
                                                            labelFor: DerivedUniqueIdProperty({
                                                              "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons1"
                                                            }),
                                                            orientation: "vertical",
                                                            hasError: ValidationProperty({
                                                              "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons1"
                                                            })
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $ConditionalVisibilityWrapper,
                                                          {
                                                            key: "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2$formGroup$visibility",
                                                            $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2$formGroup$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyUsage" }, { "type": "literal", "value": "ENCRYPT_DECRYPT" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyUsage" }, { "type": "literal", "value": "GENERATE_VERIFY_MAC" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyUsage" }, { "type": "literal", "value": "SIGN_VERIFY" }] } }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyUsage" }, { "type": "literal", "value": "KEY_AGREEMENT" }] } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $FormGroup,
                                                                {
                                                                  key: "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2$formGroup",
                                                                  $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2$formGroup",
                                                                  class: "mx-name-radioButtons2 mx-radiobuttons",
                                                                  control: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $RadioButtonGroup,
                                                                      {
                                                                        key: "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2",
                                                                        $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2",
                                                                        value: AttributeProperty({
                                                                          "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                          "path": "",
                                                                          "entity": "AWSKMSConnector.UnitTest",
                                                                          "attribute": "KeySpec",
                                                                          "onChange": { "type": "callNanoflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "nanoflow": () => OCh_UnitTest_KeySpec, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                          "isList": false,
                                                                          "validation": null
                                                                        }),
                                                                        readOnlyStyle: "control",
                                                                        id: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2"
                                                                        })
                                                                      }
                                                                    )
                                                                  ],
                                                                  caption: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "literal", "value": "Key spec" }, "args": {} }
                                                                  }),
                                                                  labelFor: DerivedUniqueIdProperty({
                                                                    "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2"
                                                                  }),
                                                                  orientation: "vertical",
                                                                  hasError: ValidationProperty({
                                                                    "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.radioButtons2"
                                                                  })
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $FormGroup,
                                                          {
                                                            key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox1$formGroup",
                                                            $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox1$formGroup",
                                                            class: "mx-name-textBox1 mx-textbox",
                                                            control: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $TextBox,
                                                                {
                                                                  key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox1",
                                                                  $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox1",
                                                                  inputValue: AttributeProperty({
                                                                    "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                    "path": "",
                                                                    "entity": "AWSKMSConnector.UnitTest",
                                                                    "attribute": "Description",
                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                    "isList": false,
                                                                    "isEditable": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyId" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "$UnitTest", "source": "object" } } },
                                                                    "validation": null,
                                                                    "formatting": {}
                                                                  }),
                                                                  isPassword: false,
                                                                  placeholder: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                  }),
                                                                  mask: "",
                                                                  readOnlyStyle: "control",
                                                                  autocomplete: "on",
                                                                  submitWhileEditing: false,
                                                                  submitDelay: 300,
                                                                  id: DerivedUniqueIdProperty({
                                                                    "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox1"
                                                                  })
                                                                }
                                                              )
                                                            ],
                                                            caption: ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Key description" }, "args": {} }
                                                            }),
                                                            labelFor: DerivedUniqueIdProperty({
                                                              "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox1"
                                                            }),
                                                            orientation: "vertical",
                                                            hasError: ValidationProperty({
                                                              "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox1"
                                                            })
                                                          }
                                                        )
                                                      ],
                                                      ariaHidden: false
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton2$visibility",
                                                      $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton2$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyId" }] }, { "type": "literal", "value": "" }] }, "then": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyUsage" }, { "type": "literal", "value": null }] }, "else": { "type": "literal", "value": false } }, "then": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeySpec" }, { "type": "literal", "value": null }] }, "else": { "type": "literal", "value": false } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton2",
                                                            $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton2",
                                                            buttonId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton2",
                                                            class: "mx-name-actionButton2 spacing-outer-right-medium spacing-outer-top-medium",
                                                            renderType: "button",
                                                            buttonClass: "btn-primary",
                                                            caption: ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Test KMS CreateKey" }, "args": {} }
                                                            }),
                                                            tooltip: TextProperty({
                                                              "value": ""
                                                            }),
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "operationId": "VzpLQUW6UluZhd3vENw5zA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                              "abortOnServerValidation": true
                                                            })
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton6$visibility",
                                                      $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton6$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyId" }] }, { "type": "literal", "value": "" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyUsage" }, { "type": "literal", "value": "ENCRYPT_DECRYPT" }] }, "else": { "type": "literal", "value": false } }, "then": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeySpec" }, { "type": "literal", "value": "AES_128" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeySpec" }, { "type": "literal", "value": "AES_256" }] } }, "else": { "type": "literal", "value": false } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton6",
                                                            $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton6",
                                                            buttonId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton6",
                                                            class: "mx-name-actionButton6 spacing-outer-top-medium spacing-outer-right-medium",
                                                            renderType: "button",
                                                            buttonClass: "btn-primary",
                                                            caption: ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Test GenerateDataKey" }, "args": {} }
                                                            }),
                                                            tooltip: TextProperty({
                                                              "value": 'Returns a unique symmetric data key for use outside of AWS KMS. The "Symmetric data key " field  will be populated with the response from AWS KMS.'
                                                            }),
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "operationId": "bESCNl6ISVeGFVOsVsgx5w", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                              "abortOnServerValidation": true
                                                            })
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton7$visibility",
                                                      $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton7$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyId" }] }, { "type": "literal", "value": "" }] }, "then": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DataKeyCipherBlob" }] }, { "type": "literal", "value": "" }] }, "else": { "type": "literal", "value": false } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton7",
                                                            $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton7",
                                                            buttonId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton7",
                                                            class: "mx-name-actionButton7 spacing-outer-right-medium spacing-outer-top-medium",
                                                            renderType: "button",
                                                            buttonClass: "btn-primary",
                                                            caption: ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Test DecryptDataKey" }, "args": {} }
                                                            }),
                                                            tooltip: TextProperty({
                                                              "value": 'The "Symmetric data key" value will be replaced with the decrypted data key from AWS KMS'
                                                            }),
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "operationId": "43hZkSSe8VWBOw4x9baqjw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                              "abortOnServerValidation": true
                                                            })
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton3$visibility",
                                                      $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton3$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyId" }] }, { "type": "literal", "value": "" }] }, "then": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "PlainText" }] }, { "type": "literal", "value": "" }] }, "else": { "type": "literal", "value": false } }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DecryptedText" }] }, { "type": "literal", "value": "" }] }, "else": { "type": "literal", "value": false } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton3",
                                                            $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton3",
                                                            buttonId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton3",
                                                            class: "mx-name-actionButton3 spacing-outer-right-medium spacing-outer-top-medium",
                                                            renderType: "button",
                                                            buttonClass: "btn-primary",
                                                            caption: ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Test EncryptText with Key" }, "args": {} }
                                                            }),
                                                            tooltip: TextProperty({
                                                              "value": 'The "Text to encrypt" is prepoluated for convenience but feel free to try different string values.'
                                                            }),
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "operationId": "hBc4SFmH61m+RmYzF6oLdQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                              "abortOnServerValidation": true
                                                            })
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton4$visibility",
                                                      $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton4$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyId" }] }, { "type": "literal", "value": "" }] }, "then": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "CipherBlob" }] }, { "type": "literal", "value": "" }] }, "else": { "type": "literal", "value": false } }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DecryptedText" }] }, { "type": "literal", "value": "" }] }, "else": { "type": "literal", "value": false } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton4",
                                                            $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton4",
                                                            buttonId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton4",
                                                            class: "mx-name-actionButton4 spacing-outer-right-medium spacing-outer-top-medium",
                                                            renderType: "button",
                                                            buttonClass: "btn-primary",
                                                            caption: ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Test DecryptText with Key" }, "args": {} }
                                                            }),
                                                            tooltip: TextProperty({
                                                              "value": 'The "Text to decrypt" will be populated with the response from AWS KMS'
                                                            }),
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "operationId": "/MDAMHO0rl2Jxp2MTY2DFg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                              "abortOnServerValidation": true
                                                            })
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton1$visibility",
                                                      $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton1$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton1",
                                                            $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton1",
                                                            buttonId: "p.AWSKMSConnector.ClientManagedKeys_Tests.actionButton1",
                                                            class: "mx-name-actionButton1 spacing-outer-top-medium spacing-outer-right-medium",
                                                            renderType: "button",
                                                            buttonClass: "btn-default",
                                                            caption: ExpressionProperty({
                                                              "expression": { "expr": { "type": "literal", "value": "Reset" }, "args": {} }
                                                            }),
                                                            tooltip: TextProperty({
                                                              "value": "Reset Unit Test and clear current KMS key reference"
                                                            }),
                                                            action: ActionProperty({
                                                              "action": { "type": "callNanoflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "nanoflow": () => ACT_KMS_UnitTest_Reset, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                              "abortOnServerValidation": true
                                                            })
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row2$column1",
                                                $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.layoutGrid3$row2$column1",
                                                class: "col-lg col-md col",
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.AWSKMSConnector.ClientManagedKeys_Tests.container2$visibility",
                                                      $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.container2$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyId" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.AWSKMSConnector.ClientManagedKeys_Tests.container2",
                                                            $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.container2",
                                                            class: "mx-name-container2 panel background-main spacing-outer-top-large spacing-outer-bottom-large spacing-inner-top-large spacing-inner-left-large spacing-inner-right-large",
                                                            renderMode: "div",
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.AWSKMSConnector.ClientManagedKeys_Tests.text8",
                                                                  $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.text8",
                                                                  class: "mx-name-text8 spacing-outer-top-medium spacing-outer-bottom-medium",
                                                                  caption: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "literal", "value": "Test Results" }, "args": {} }
                                                                  }),
                                                                  renderMode: "h4"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $FormGroup,
                                                                {
                                                                  key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox2$formGroup",
                                                                  $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox2$formGroup",
                                                                  class: "mx-name-textBox2 mx-textbox",
                                                                  control: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $TextBox,
                                                                      {
                                                                        key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox2",
                                                                        $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox2",
                                                                        inputValue: AttributeProperty({
                                                                          "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                          "path": "",
                                                                          "entity": "AWSKMSConnector.UnitTest",
                                                                          "attribute": "KeyId",
                                                                          "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                          "isList": false,
                                                                          "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                                          "validation": null,
                                                                          "formatting": {}
                                                                        }),
                                                                        isPassword: false,
                                                                        placeholder: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                        }),
                                                                        mask: "",
                                                                        readOnlyStyle: "control",
                                                                        maxLength: 200,
                                                                        autocomplete: "on",
                                                                        submitWhileEditing: false,
                                                                        submitDelay: 300,
                                                                        id: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox2"
                                                                        })
                                                                      }
                                                                    )
                                                                  ],
                                                                  caption: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "literal", "value": "Key ID" }, "args": {} }
                                                                  }),
                                                                  labelFor: DerivedUniqueIdProperty({
                                                                    "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox2"
                                                                  }),
                                                                  orientation: "vertical",
                                                                  hasError: ValidationProperty({
                                                                    "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textBox2"
                                                                  })
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1$formGroup$visibility",
                                                                  $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1$formGroup$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyId" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $FormGroup,
                                                                      {
                                                                        key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1$formGroup",
                                                                        $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1$formGroup",
                                                                        class: "mx-name-textArea1 mx-textarea",
                                                                        control: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $TextArea,
                                                                            {
                                                                              key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1",
                                                                              $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1",
                                                                              inputValue: AttributeProperty({
                                                                                "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                                "path": "",
                                                                                "entity": "AWSKMSConnector.UnitTest",
                                                                                "attribute": "PlainText",
                                                                                "onChange": { "type": "callNanoflow", "argMap": { "UnitTest": { "widget": "$UnitTest", "source": "object" } }, "config": { "nanoflow": () => OCH_KMS_UnitTest_Reset, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                                                "isList": false,
                                                                                "validation": null
                                                                              }),
                                                                              counterMessage: TextProperty({
                                                                                "value": ""
                                                                              }),
                                                                              maxLength: 200,
                                                                              numberOfLines: 5,
                                                                              autoGrow: false,
                                                                              placeholder: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                              }),
                                                                              readOnlyStyle: "control",
                                                                              textTooLongMessage: TextProperty({
                                                                                "value": "Value too long."
                                                                              }),
                                                                              submitWhileEditing: false,
                                                                              submitDelay: 300,
                                                                              id: DerivedUniqueIdProperty({
                                                                                "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1"
                                                                              })
                                                                            }
                                                                          )
                                                                        ],
                                                                        caption: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "Text to encrypt" }, "args": {} }
                                                                        }),
                                                                        labelFor: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1"
                                                                        }),
                                                                        orientation: "vertical",
                                                                        hasError: ValidationProperty({
                                                                          "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea1"
                                                                        })
                                                                      }
                                                                    )
                                                                  ]
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2$formGroup$visibility",
                                                                  $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2$formGroup$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "CipherBlob" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $FormGroup,
                                                                      {
                                                                        key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2$formGroup",
                                                                        $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2$formGroup",
                                                                        class: "mx-name-textArea2 mx-textarea",
                                                                        control: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $TextArea,
                                                                            {
                                                                              key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2",
                                                                              $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2",
                                                                              inputValue: AttributeProperty({
                                                                                "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                                "path": "",
                                                                                "entity": "AWSKMSConnector.UnitTest",
                                                                                "attribute": "CipherBlob",
                                                                                "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                "isList": false,
                                                                                "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                                                "validation": null
                                                                              }),
                                                                              numberOfLines: 5,
                                                                              autoGrow: false,
                                                                              placeholder: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                              }),
                                                                              readOnlyStyle: "control",
                                                                              submitWhileEditing: false,
                                                                              submitDelay: 300,
                                                                              id: DerivedUniqueIdProperty({
                                                                                "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2"
                                                                              })
                                                                            }
                                                                          )
                                                                        ],
                                                                        caption: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "Encrypted text" }, "args": {} }
                                                                        }),
                                                                        labelFor: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2"
                                                                        }),
                                                                        orientation: "vertical",
                                                                        hasError: ValidationProperty({
                                                                          "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea2"
                                                                        })
                                                                      }
                                                                    )
                                                                  ]
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3$formGroup$visibility",
                                                                  $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3$formGroup$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DecryptedText" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $FormGroup,
                                                                      {
                                                                        key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3$formGroup",
                                                                        $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3$formGroup",
                                                                        class: "mx-name-textArea3 mx-textarea",
                                                                        control: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $TextArea,
                                                                            {
                                                                              key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3",
                                                                              $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3",
                                                                              inputValue: AttributeProperty({
                                                                                "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                                "path": "",
                                                                                "entity": "AWSKMSConnector.UnitTest",
                                                                                "attribute": "DecryptedText",
                                                                                "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                "isList": false,
                                                                                "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                                                "validation": null
                                                                              }),
                                                                              numberOfLines: 5,
                                                                              autoGrow: false,
                                                                              placeholder: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                              }),
                                                                              readOnlyStyle: "control",
                                                                              submitWhileEditing: false,
                                                                              submitDelay: 300,
                                                                              id: DerivedUniqueIdProperty({
                                                                                "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3"
                                                                              })
                                                                            }
                                                                          )
                                                                        ],
                                                                        caption: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "Decrypted text" }, "args": {} }
                                                                        }),
                                                                        labelFor: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3"
                                                                        }),
                                                                        orientation: "vertical",
                                                                        hasError: ValidationProperty({
                                                                          "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea3"
                                                                        })
                                                                      }
                                                                    )
                                                                  ]
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4$formGroup$visibility",
                                                                  $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4$formGroup$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyId" }] }, { "type": "literal", "value": "" }] }, "then": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DataKeyCipherBlob" }] }, { "type": "literal", "value": "" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $FormGroup,
                                                                      {
                                                                        key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4$formGroup",
                                                                        $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4$formGroup",
                                                                        class: "mx-name-textArea4 mx-textarea",
                                                                        control: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $TextArea,
                                                                            {
                                                                              key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4",
                                                                              $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4",
                                                                              inputValue: AttributeProperty({
                                                                                "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                                "path": "",
                                                                                "entity": "AWSKMSConnector.UnitTest",
                                                                                "attribute": "DataKeyCipherBlob",
                                                                                "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                "isList": false,
                                                                                "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                                                "validation": null
                                                                              }),
                                                                              numberOfLines: 5,
                                                                              autoGrow: false,
                                                                              placeholder: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                              }),
                                                                              readOnlyStyle: "control",
                                                                              submitWhileEditing: false,
                                                                              submitDelay: 300,
                                                                              id: DerivedUniqueIdProperty({
                                                                                "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4"
                                                                              })
                                                                            }
                                                                          )
                                                                        ],
                                                                        caption: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "Symmetric data key (encrypted)" }, "args": {} }
                                                                        }),
                                                                        labelFor: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4"
                                                                        }),
                                                                        orientation: "vertical",
                                                                        hasError: ValidationProperty({
                                                                          "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea4"
                                                                        })
                                                                      }
                                                                    )
                                                                  ]
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5$formGroup$visibility",
                                                                  $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5$formGroup$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "KeyId" }] }, { "type": "literal", "value": "" }] }, "then": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DataKeyPlainText" }] }, { "type": "literal", "value": "" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $FormGroup,
                                                                      {
                                                                        key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5$formGroup",
                                                                        $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5$formGroup",
                                                                        class: "mx-name-textArea5 mx-textarea",
                                                                        control: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $TextArea,
                                                                            {
                                                                              key: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5",
                                                                              $widgetId: "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5",
                                                                              inputValue: AttributeProperty({
                                                                                "scope": "p.AWSKMSConnector.ClientManagedKeys_Tests.dataView1",
                                                                                "path": "",
                                                                                "entity": "AWSKMSConnector.UnitTest",
                                                                                "attribute": "DataKeyPlainText",
                                                                                "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                "isList": false,
                                                                                "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                                                "validation": null
                                                                              }),
                                                                              numberOfLines: 5,
                                                                              autoGrow: false,
                                                                              placeholder: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                              }),
                                                                              readOnlyStyle: "control",
                                                                              submitWhileEditing: false,
                                                                              submitDelay: 300,
                                                                              id: DerivedUniqueIdProperty({
                                                                                "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5"
                                                                              })
                                                                            }
                                                                          )
                                                                        ],
                                                                        caption: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "Symmetric data key (decrypted)" }, "args": {} }
                                                                        }),
                                                                        labelFor: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5"
                                                                        }),
                                                                        orientation: "vertical",
                                                                        hasError: ValidationProperty({
                                                                          "inputWidgetId": "p.AWSKMSConnector.ClientManagedKeys_Tests.textArea5"
                                                                        })
                                                                      }
                                                                    )
                                                                  ]
                                                                }
                                                              )
                                                            ],
                                                            ariaHidden: false
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                )
                              ],
                              hideFooter: false
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ],
      ariaHidden: false
    }
  )
]);
const title = selectTranslation([
  "Client managed keys"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { classes, content, style, title };
