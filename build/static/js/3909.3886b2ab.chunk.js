"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[3909],{49426:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var s=n(61072),r=n(78602),a=n(40799),i=n(38628),l=n(71456),o=n(65043);const c=function(e,t){const n=(0,o.useRef)(!0);(0,o.useEffect)((()=>{if(!n.current)return e();n.current=!1}),t)};var d=n(18232),u=n(23240),m=n(56161),f=n(98139),h=n.n(f),p=n(47864),x=n(67852),v=n(70579);const j=o.forwardRef(((e,t)=>{let{className:n,bsPrefix:s,as:r="div",...a}=e;return s=(0,x.oU)(s,"carousel-caption"),(0,v.jsx)(r,{ref:t,className:h()(n,s),...a})}));j.displayName="CarouselCaption";const g=j,b=o.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:s,className:r,...a}=e;const i=h()(r,(0,x.oU)(s,"carousel-item"));return(0,v.jsx)(n,{ref:t,...a,className:i})}));b.displayName="CarouselItem";const N=b;var y=n(62663),w=n(33492),A=n(92643),S=n(14910);const C=o.forwardRef(((e,t)=>{let{defaultActiveIndex:n=0,...s}=e;const{as:r="div",bsPrefix:a,slide:i=!0,fade:f=!1,controls:j=!0,indicators:g=!0,indicatorLabels:b=[],activeIndex:N,onSelect:C,onSlide:k,onSlid:I,interval:U=5e3,keyboard:E=!0,onKeyDown:P,pause:R="hover",onMouseOver:_,onMouseOut:T,wrap:F=!0,touch:W=!0,onTouchStart:D,onTouchMove:L,onTouchEnd:M,prevIcon:$=(0,v.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:B="Previous",nextIcon:O=(0,v.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:H="Next",variant:V,className:J,children:K,...X}=(0,p.Zw)({defaultActiveIndex:n,...s},{activeIndex:"onSelect"}),Z=(0,x.oU)(a,"carousel"),z=(0,x.Wz)(),Y=(0,o.useRef)(null),[q,G]=(0,o.useState)("next"),[Q,ee]=(0,o.useState)(!1),[te,ne]=(0,o.useState)(!1),[se,re]=(0,o.useState)(N||0);(0,o.useEffect)((()=>{te||N===se||(Y.current?G(Y.current):G((N||0)>se?"next":"prev"),i&&ne(!0),re(N||0))}),[N,te,se,i]),(0,o.useEffect)((()=>{Y.current&&(Y.current=null)}));let ae,ie=0;(0,y.jJ)(K,((e,t)=>{++ie,t===N&&(ae=e.props.interval)}));const le=(0,d.A)(ae),oe=(0,o.useCallback)((e=>{if(te)return;let t=se-1;if(t<0){if(!F)return;t=ie-1}Y.current="prev",null==C||C(t,e)}),[te,se,C,F,ie]),ce=(0,l.A)((e=>{if(te)return;let t=se+1;if(t>=ie){if(!F)return;t=0}Y.current="next",null==C||C(t,e)})),de=(0,o.useRef)();(0,o.useImperativeHandle)(t,(()=>({element:de.current,prev:oe,next:ce})));const ue=(0,l.A)((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(de.current)&&(z?oe():ce())})),me="next"===q?"start":"end";c((()=>{i||(null==k||k(se,me),null==I||I(se,me))}),[se]);const fe=`${Z}-item-${q}`,he=`${Z}-item-${me}`,pe=(0,o.useCallback)((e=>{(0,A.A)(e),null==k||k(se,me)}),[k,se,me]),xe=(0,o.useCallback)((()=>{ne(!1),null==I||I(se,me)}),[I,se,me]),ve=(0,o.useCallback)((e=>{if(E&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(z?ce(e):oe(e));case"ArrowRight":return e.preventDefault(),void(z?oe(e):ce(e))}null==P||P(e)}),[E,P,oe,ce,z]),je=(0,o.useCallback)((e=>{"hover"===R&&ee(!0),null==_||_(e)}),[R,_]),ge=(0,o.useCallback)((e=>{ee(!1),null==T||T(e)}),[T]),be=(0,o.useRef)(0),Ne=(0,o.useRef)(0),ye=(0,u.A)(),we=(0,o.useCallback)((e=>{be.current=e.touches[0].clientX,Ne.current=0,"hover"===R&&ee(!0),null==D||D(e)}),[R,D]),Ae=(0,o.useCallback)((e=>{e.touches&&e.touches.length>1?Ne.current=0:Ne.current=e.touches[0].clientX-be.current,null==L||L(e)}),[L]),Se=(0,o.useCallback)((e=>{if(W){const t=Ne.current;Math.abs(t)>40&&(t>0?oe(e):ce(e))}"hover"===R&&ye.set((()=>{ee(!1)}),U||void 0),null==M||M(e)}),[W,R,oe,ce,ye,U,M]),Ce=null!=U&&!Q&&!te,ke=(0,o.useRef)();(0,o.useEffect)((()=>{var e,t;if(!Ce)return;const n=z?oe:ce;return ke.current=window.setInterval(document.visibilityState?ue:n,null!=(e=null!=(t=le.current)?t:U)?e:void 0),()=>{null!==ke.current&&clearInterval(ke.current)}}),[Ce,oe,ce,le,U,ue,z]);const Ie=(0,o.useMemo)((()=>g&&Array.from({length:ie},((e,t)=>e=>{null==C||C(t,e)}))),[g,ie,C]);return(0,v.jsxs)(r,{ref:de,...X,onKeyDown:ve,onMouseOver:je,onMouseOut:ge,onTouchStart:we,onTouchMove:Ae,onTouchEnd:Se,className:h()(J,Z,i&&"slide",f&&`${Z}-fade`,V&&`${Z}-${V}`),children:[g&&(0,v.jsx)("div",{className:`${Z}-indicators`,children:(0,y.Tj)(K,((e,t)=>(0,v.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=b&&b.length?b[t]:`Slide ${t+1}`,className:t===se?"active":void 0,onClick:Ie?Ie[t]:void 0,"aria-current":t===se},t)))}),(0,v.jsx)("div",{className:`${Z}-inner`,children:(0,y.Tj)(K,((e,t)=>{const n=t===se;return i?(0,v.jsx)(S.A,{in:n,onEnter:n?pe:void 0,onEntered:n?xe:void 0,addEndListener:w.A,children:(t,s)=>o.cloneElement(e,{...s,className:h()(e.props.className,n&&"entered"!==t&&fe,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&he)})}):o.cloneElement(e,{className:h()(e.props.className,n&&"active")})}))}),j&&(0,v.jsxs)(v.Fragment,{children:[(F||0!==N)&&(0,v.jsxs)(m.A,{className:`${Z}-control-prev`,onClick:oe,children:[$,B&&(0,v.jsx)("span",{className:"visually-hidden",children:B})]}),(F||N!==ie-1)&&(0,v.jsxs)(m.A,{className:`${Z}-control-next`,onClick:ce,children:[O,H&&(0,v.jsx)("span",{className:"visually-hidden",children:H})]})]})]})}));C.displayName="Carousel";const k=Object.assign(C,{Caption:g,Item:N});var I=n(64176),U=n(53932),E=n(39842);const P=()=>(0,v.jsx)(i.A,{children:(0,v.jsxs)(i.A.Body,{children:[(0,v.jsx)("h4",{className:"header-title",children:"Slides only"}),(0,v.jsxs)("p",{className:"sub-header",children:["Here\u2019s a carousel with slides only. Note the presence of the ",(0,v.jsx)("code",{children:".d-block"})," and"," ",(0,v.jsx)("code",{children:".img-fluid"})," on carousel images to prevent browser default image alignment."]}),(0,v.jsxs)(k,{indicators:!1,controls:!1,children:[(0,v.jsx)(k.Item,{children:(0,v.jsx)("img",{className:"d-block img-fluid",src:I,alt:"First slide"})}),(0,v.jsx)(k.Item,{children:(0,v.jsx)("img",{className:"d-block img-fluid",src:U,alt:"Second slide"})}),(0,v.jsx)(k.Item,{children:(0,v.jsx)("img",{className:"d-block img-fluid",src:E,alt:"Third slide"})})]})]})}),R=n.p+"static/media/img-4.e689219dcd7e43079a86.jpg",_=()=>(0,v.jsx)(i.A,{children:(0,v.jsxs)(i.A.Body,{children:[(0,v.jsx)("h4",{className:"header-title",children:"With controls"}),(0,v.jsx)("p",{className:"text-muted font-14",children:"Adding in the previous and next controls:"}),(0,v.jsxs)(k,{indicators:!1,children:[(0,v.jsx)(k.Item,{children:(0,v.jsx)("img",{className:"d-block w-100",src:R,alt:"First slide"})}),(0,v.jsx)(k.Item,{children:(0,v.jsx)("img",{className:"d-block w-100",src:I,alt:"Second slide"})}),(0,v.jsx)(k.Item,{children:(0,v.jsx)("img",{className:"d-block w-100",src:U,alt:"Third slide"})})]})]})}),T=()=>{const[e,t]=(0,o.useState)(0);return(0,v.jsx)(i.A,{children:(0,v.jsxs)(i.A.Body,{children:[(0,v.jsx)("h4",{className:"header-title",children:"With indicators"}),(0,v.jsx)("p",{className:"text-muted font-14",children:"You can also add the indicators to the carousel, alongside the controls, too."}),(0,v.jsxs)(k,{activeIndex:e,onSelect:e=>{t(e)},children:[(0,v.jsx)(k.Item,{children:(0,v.jsx)("img",{className:"d-block w-100",src:E,alt:"First slide"})}),(0,v.jsx)(k.Item,{children:(0,v.jsx)("img",{className:"d-block w-100",src:U,alt:"Second slide"})}),(0,v.jsx)(k.Item,{children:(0,v.jsx)("img",{className:"d-block w-100",src:I,alt:"Third slide"})})]})]})})},F=()=>(0,v.jsx)(i.A,{children:(0,v.jsxs)(i.A.Body,{children:[(0,v.jsx)("h4",{className:"header-title",children:"With captions"}),(0,v.jsxs)("p",{className:"text-muted font-14",children:["Add captions to your slides easily with the ",(0,v.jsx)("code",{children:".carousel-caption"})," element within any"," ",(0,v.jsx)("code",{children:".carousel-item"}),"."]}),(0,v.jsxs)(k,{indicators:!1,children:[(0,v.jsxs)(k.Item,{children:[(0,v.jsx)("img",{className:"d-block w-100",src:I,alt:"First slide"}),(0,v.jsxs)(k.Caption,{children:[(0,v.jsx)("h3",{children:"First slide label"}),(0,v.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),(0,v.jsxs)(k.Item,{children:[(0,v.jsx)("img",{className:"d-block w-100",src:E,alt:"Second slide"}),(0,v.jsxs)(k.Caption,{children:[(0,v.jsx)("h3",{children:"Second slide label"}),(0,v.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),(0,v.jsxs)(k.Item,{children:[(0,v.jsx)("img",{className:"d-block w-100",src:U,alt:"Third slide"}),(0,v.jsxs)(k.Caption,{children:[(0,v.jsx)("h3",{children:"Third slide label"}),(0,v.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})]})]})}),W=()=>(0,v.jsx)(i.A,{children:(0,v.jsxs)(i.A.Body,{children:[(0,v.jsx)("h4",{className:"header-title",children:"Crossfade"}),(0,v.jsxs)("p",{className:"text-muted font-14",children:["Add ",(0,v.jsx)("code",{children:".carousel-fade"})," to your carousel to animate slides with a fade transition instead of a slide."]}),(0,v.jsxs)(k,{fade:!0,indicators:!1,children:[(0,v.jsx)(k.Item,{children:(0,v.jsx)("img",{className:"d-block w-100",src:I,alt:"First slide"})}),(0,v.jsx)(k.Item,{children:(0,v.jsx)("img",{className:"d-block w-100",src:U,alt:"Second slide"})}),(0,v.jsx)(k.Item,{children:(0,v.jsx)("img",{className:"d-block w-100",src:E,alt:"Third slide"})})]})]})}),D=()=>(0,v.jsx)(i.A,{children:(0,v.jsxs)(i.A.Body,{children:[(0,v.jsx)("h4",{className:"header-title",children:"Individual interval"}),(0,v.jsxs)("p",{className:"text-muted font-14",children:["Add ",(0,v.jsx)("code",{children:'data-bs-interval=""'})," to a ",(0,v.jsx)("code",{children:".carousel-item"})," to change the amount of time to delay between automatically cycling to the next item."]}),(0,v.jsxs)(k,{fade:!0,indicators:!1,children:[(0,v.jsx)(k.Item,{interval:1e3,children:(0,v.jsx)("img",{className:"d-block w-100",src:U,alt:"First slide"})}),(0,v.jsx)(k.Item,{interval:2e3,children:(0,v.jsx)("img",{className:"d-block w-100",src:E,alt:"Second slide"})}),(0,v.jsx)(k.Item,{children:(0,v.jsx)("img",{className:"d-block w-100",src:I,alt:"Third slide"})})]})]})}),L=()=>((0,a.HU)({title:"Carousel",breadCrumbItems:[{path:"/base-ui/carousel",label:"Base UI"},{path:"/base-ui/carousel",label:"Carousel",active:!0}]}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(s.A,{children:[(0,v.jsx)(r.A,{lg:6,children:(0,v.jsx)(P,{})}),(0,v.jsx)(r.A,{lg:6,children:(0,v.jsx)(_,{})})]}),(0,v.jsxs)(s.A,{children:[(0,v.jsx)(r.A,{lg:6,children:(0,v.jsx)(T,{})}),(0,v.jsx)(r.A,{lg:6,children:(0,v.jsx)(F,{})})]}),(0,v.jsxs)(s.A,{children:[(0,v.jsx)(r.A,{lg:6,children:(0,v.jsx)(W,{})}),(0,v.jsx)(r.A,{lg:6,children:(0,v.jsx)(D,{})})]})]}))},38293:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(65043);const r=e=>e&&"function"!==typeof e?t=>{e.current=t}:e;const a=function(e,t){return(0,s.useMemo)((()=>function(e,t){const n=r(e),s=r(t);return e=>{n&&n(e),s&&s(e)}}(e,t)),[e,t])}},23240:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(65043),r=n(36723),a=n(59109);const i=2**31-1;function l(e,t,n){const s=n-Date.now();e.current=s<=i?setTimeout(t,s):setTimeout((()=>l(e,t,n)),i)}function o(){const e=(0,r.A)(),t=(0,s.useRef)();return(0,a.A)((()=>clearTimeout(t.current))),(0,s.useMemo)((()=>{const n=()=>clearTimeout(t.current);return{set:function(s){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e()&&(n(),r<=i?t.current=setTimeout(s,r):l(t,s,Date.now()+r))},clear:n,handleRef:t}}),[])}},59109:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(65043);function r(e){const t=function(e){const t=(0,s.useRef)(e);return t.current=e,t}(e);(0,s.useEffect)((()=>()=>t.current()),[])}},63043:(e,t,n)=>{n.d(t,{Ay:()=>l});var s=n(18279),r=!1,a=!1;try{var i={get passive(){return r=!0},get once(){return a=r=!0}};s.A&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(o){}const l=function(e,t,n,s){if(s&&"boolean"!==typeof s&&!a){var i=s.once,l=s.capture,o=n;!a&&i&&(o=n.__once||function e(s){this.removeEventListener(t,e,l),n.call(this,s)},n.__once=o),e.addEventListener(t,o,r?s:l)}e.addEventListener(t,n,s)}},18279:(e,t,n)=>{n.d(t,{A:()=>s});const s=!("undefined"===typeof window||!window.document||!window.document.createElement)},10753:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(63043),r=n(8260);const a=function(e,t,n,a){return(0,s.Ay)(e,t,n,a),function(){(0,r.A)(e,t,n,a)}}},80182:(e,t,n)=>{function s(e){return e&&e.ownerDocument||document}n.d(t,{A:()=>s})},8260:(e,t,n)=>{n.d(t,{A:()=>s});const s=function(e,t,n,s){var r=s&&"boolean"!==typeof s?s.capture:s;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)}},22740:e=>{e.exports=function(e,t,n,s,r,a,i,l){if(!e){var o;if(void 0===t)o=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,s,r,a,i,l],d=0;(o=new Error(t.replace(/%s/g,(function(){return c[d++]})))).name="Invariant Violation"}throw o.framesToPop=1,o}}},38628:(e,t,n)=>{n.d(t,{A:()=>P});var s=n(98139),r=n.n(s),a=n(65043),i=n(67852),l=n(70579);const o=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:s,as:a="div",...o}=e;return s=(0,i.oU)(s,"card-body"),(0,l.jsx)(a,{ref:t,className:r()(n,s),...o})}));o.displayName="CardBody";const c=o,d=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:s,as:a="div",...o}=e;return s=(0,i.oU)(s,"card-footer"),(0,l.jsx)(a,{ref:t,className:r()(n,s),...o})}));d.displayName="CardFooter";const u=d;var m=n(11778);const f=a.forwardRef(((e,t)=>{let{bsPrefix:n,className:s,as:o="div",...c}=e;const d=(0,i.oU)(n,"card-header"),u=(0,a.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,l.jsx)(m.A.Provider,{value:u,children:(0,l.jsx)(o,{ref:t,...c,className:r()(s,d)})})}));f.displayName="CardHeader";const h=f,p=a.forwardRef(((e,t)=>{let{bsPrefix:n,className:s,variant:a,as:o="img",...c}=e;const d=(0,i.oU)(n,"card-img");return(0,l.jsx)(o,{ref:t,className:r()(a?`${d}-${a}`:d,s),...c})}));p.displayName="CardImg";const x=p,v=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:s,as:a="div",...o}=e;return s=(0,i.oU)(s,"card-img-overlay"),(0,l.jsx)(a,{ref:t,className:r()(n,s),...o})}));v.displayName="CardImgOverlay";const j=v,g=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:s,as:a="a",...o}=e;return s=(0,i.oU)(s,"card-link"),(0,l.jsx)(a,{ref:t,className:r()(n,s),...o})}));g.displayName="CardLink";const b=g;var N=n(4488);const y=(0,N.A)("h6"),w=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:s,as:a=y,...o}=e;return s=(0,i.oU)(s,"card-subtitle"),(0,l.jsx)(a,{ref:t,className:r()(n,s),...o})}));w.displayName="CardSubtitle";const A=w,S=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:s,as:a="p",...o}=e;return s=(0,i.oU)(s,"card-text"),(0,l.jsx)(a,{ref:t,className:r()(n,s),...o})}));S.displayName="CardText";const C=S,k=(0,N.A)("h5"),I=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:s,as:a=k,...o}=e;return s=(0,i.oU)(s,"card-title"),(0,l.jsx)(a,{ref:t,className:r()(n,s),...o})}));I.displayName="CardTitle";const U=I,E=a.forwardRef(((e,t)=>{let{bsPrefix:n,className:s,bg:a,text:o,border:d,body:u=!1,children:m,as:f="div",...h}=e;const p=(0,i.oU)(n,"card");return(0,l.jsx)(f,{ref:t,...h,className:r()(s,p,a&&`bg-${a}`,o&&`text-${o}`,d&&`border-${d}`),children:u?(0,l.jsx)(c,{children:m}):m})}));E.displayName="Card";const P=Object.assign(E,{Img:x,Title:U,Subtitle:A,Body:c,Link:b,Text:C,Header:h,Footer:u,ImgOverlay:j})},11778:(e,t,n)=>{n.d(t,{A:()=>r});const s=n(65043).createContext(null);s.displayName="CardHeaderContext";const r=s},62663:(e,t,n)=>{n.d(t,{Tj:()=>r,jJ:()=>a,mf:()=>i});var s=n(65043);function r(e,t){let n=0;return s.Children.map(e,(e=>s.isValidElement(e)?t(e,n++):e))}function a(e,t){let n=0;s.Children.forEach(e,(e=>{s.isValidElement(e)&&t(e,n++)}))}function i(e,t){return s.Children.toArray(e).some((e=>s.isValidElement(e)&&e.type===t))}},4488:(e,t,n)=>{n.d(t,{A:()=>l});var s=n(65043),r=n(98139),a=n.n(r),i=n(70579);const l=e=>s.forwardRef(((t,n)=>(0,i.jsx)("div",{...t,ref:n,className:a()(t.className,e)})))},55484:(e,t,n)=>{function s(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function r(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function a(e,t){try{var n=this.props,s=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,s)}finally{this.props=n,this.state=s}}function i(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,i=null,l=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?l="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(l="UNSAFE_componentWillUpdate"),null!==n||null!==i||null!==l){var o=e.displayName||e.name,c="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+o+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==l?"\n  "+l:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=s,t.componentWillReceiveProps=r),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var d=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var s=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;d.call(this,e,t,s)}}return e}n.r(t),n.d(t,{polyfill:()=>i}),s.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},47864:(e,t,n)=>{n.d(t,{Zw:()=>c,iC:()=>o});var s=n(58168),r=n(98587),a=n(65043);n(22740);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function l(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,t||"default");if("object"!==typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function o(e,t,n){var s=(0,a.useRef)(void 0!==e),r=(0,a.useState)(t),i=r[0],l=r[1],o=void 0!==e,c=s.current;return s.current=o,!o&&c&&i!==t&&l(t),[o?e:i,(0,a.useCallback)((function(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),r=1;r<t;r++)s[r-1]=arguments[r];n&&n.apply(void 0,[e].concat(s)),l(e)}),[n])]}function c(e,t){return Object.keys(t).reduce((function(n,a){var c,d=n,u=d[i(a)],m=d[a],f=(0,r.A)(d,[i(a),a].map(l)),h=t[a],p=o(m,u,e[h]),x=p[0],v=p[1];return(0,s.A)({},f,((c={})[a]=x,c[h]=v,c))}),e)}n(55484)},64176:(e,t,n)=>{e.exports=n.p+"static/media/img-1.2860138217f1ed6bb89b.jpg"},53932:(e,t,n)=>{e.exports=n.p+"static/media/img-2.807d9c39d0d3d075b49a.jpg"},39842:(e,t,n)=>{e.exports=n.p+"static/media/img-3.b29a79efb3c63590f030.jpg"}}]);
//# sourceMappingURL=3909.3886b2ab.chunk.js.map