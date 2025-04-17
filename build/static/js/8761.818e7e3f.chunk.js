"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[8761],{68761:(e,s,a)=>{a.r(s),a.d(s,{default:()=>P});var r=a(61072),t=a(78602),d=a(40799),l=a(38628),i=a(14282),c=a(65043),n=a(98139),o=a.n(n),x=a(67852);function h(e){let{animation:s,bg:a,bsPrefix:r,size:d,...l}=e;r=(0,x.oU)(r,"placeholder");const[{className:i,...c}]=(0,t.k)(l);return{...c,className:o()(i,s?`${r}-${s}`:r,d&&`${r}-${d}`,a&&`bg-${a}`)}}var m=a(70579);const j=c.forwardRef(((e,s)=>{const a=h(e);return(0,m.jsx)(i.A,{...a,ref:s,disabled:!0,tabIndex:-1})}));j.displayName="PlaceholderButton";const p=j,f=c.forwardRef(((e,s)=>{let{as:a="span",...r}=e;const t=h(r);return(0,m.jsx)(a,{...t,ref:s})}));f.displayName="Placeholder";const b=Object.assign(f,{Button:p});var u=a(64176),N=a(39842);const g=()=>(0,m.jsx)(l.A,{children:(0,m.jsxs)(l.A.Body,{children:[(0,m.jsx)("h4",{className:"header-title",children:"Placeholders"}),(0,m.jsx)("p",{className:"text-muted",children:"In the example below, we take a typical card component and recreate it with placeholders applied to create a \u201cloading card\u201d. Size and proportions are the same between the two."}),(0,m.jsxs)(r.A,{children:[(0,m.jsx)(t.A,{md:6,children:(0,m.jsxs)(l.A,{className:"border shadow-none",children:[(0,m.jsx)(l.A.Img,{variant:"top",src:u}),(0,m.jsxs)(l.A.Body,{children:[(0,m.jsx)(l.A.Title,{children:"Card Title"}),(0,m.jsx)(l.A.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),(0,m.jsx)(i.A,{children:"Go somewhere"})]})]})}),(0,m.jsx)(t.A,{md:6,children:(0,m.jsxs)(l.A,{className:"border shadow-none mb-0",children:[(0,m.jsx)(l.A.Img,{variant:"top",src:N}),(0,m.jsxs)(l.A.Body,{children:[(0,m.jsx)(b,{as:l.A.Title,animation:"glow",children:(0,m.jsx)(b,{xs:6})}),(0,m.jsxs)(b,{as:l.A.Text,animation:"glow",children:[(0,m.jsx)(b,{xs:7})," ",(0,m.jsx)(b,{xs:4})," ",(0,m.jsx)(b,{xs:4})," ",(0,m.jsx)(b,{xs:6})," ",(0,m.jsx)(b,{xs:8})]}),(0,m.jsx)(b.Button,{variant:"primary",xs:6})]})]})})]})]})}),y=()=>(0,m.jsx)(l.A,{children:(0,m.jsxs)(l.A.Body,{children:[(0,m.jsx)("h4",{className:"header-title",children:"Animation"}),(0,m.jsxs)("p",{className:"text-muted",children:["Animate placeholders by setting the prop ",(0,m.jsx)("code",{children:"animation"})," to ",(0,m.jsx)("code",{children:"glow"})," or"," ",(0,m.jsx)("code",{children:"wave"})," to better convey the perception of something being ",(0,m.jsx)("em",{children:"actively"})," loaded."]}),(0,m.jsx)(b,{as:"p",animation:"glow",children:(0,m.jsx)(b,{xs:12})}),(0,m.jsx)(b,{as:"p",animation:"wave",className:"mb-0",children:(0,m.jsx)(b,{xs:12})})]})}),w=()=>(0,m.jsx)(l.A,{children:(0,m.jsxs)(l.A.Body,{children:[(0,m.jsx)("h4",{className:"header-title",children:"How it works"}),(0,m.jsxs)("p",{className:"text-muted",children:["Create placeholders with the ",(0,m.jsx)("code",{children:"Placeholder"})," component and a grid column prop (e.g.,"," ",(0,m.jsxs)("code",{children:["xs=",6]}),") to set the ",(0,m.jsx)("code",{children:"width"}),". They can replace the text inside an element or be added to an existing component via the ",(0,m.jsx)("code",{children:"as"})," prop."]}),(0,m.jsx)("p",{"aria-hidden":"true",children:(0,m.jsx)(b,{xs:6})}),(0,m.jsx)(b.Button,{xs:4,"aria-hidden":"true"})]})}),A=()=>(0,m.jsx)(l.A,{children:(0,m.jsxs)(l.A.Body,{children:[(0,m.jsx)("h4",{className:"header-title",children:"Width"}),(0,m.jsxs)("p",{className:"text-muted",children:["You can change the ",(0,m.jsx)("code",{children:"width"})," through grid column classes, width utilities, or inline styles."]}),(0,m.jsx)(b,{xs:6}),(0,m.jsx)(b,{className:"w-75"})," ",(0,m.jsx)("br",{}),(0,m.jsx)(b,{style:{width:"25%"}})]})}),v=()=>(0,m.jsx)(l.A,{children:(0,m.jsxs)(l.A.Body,{children:[(0,m.jsx)("h4",{className:"header-title",children:"Sizing"}),(0,m.jsxs)("p",{className:"text-muted",children:["The size of ",(0,m.jsx)("code",{children:"placeholder"}),"s are based on the typographic style of the parent element. Customize them with sizing props: ",(0,m.jsx)("code",{children:"lg"}),", ",(0,m.jsx)("code",{children:"sm"}),", or ",(0,m.jsx)("code",{children:"xs"}),"."]}),(0,m.jsx)(b,{xs:12,size:"lg"}),(0,m.jsx)(b,{xs:12}),(0,m.jsx)(b,{xs:12,size:"sm"}),(0,m.jsx)(b,{xs:12,size:"xs"})]})}),C=()=>(0,m.jsx)(l.A,{children:(0,m.jsxs)(l.A.Body,{children:[(0,m.jsx)("h4",{className:"header-title",children:"Color"}),(0,m.jsxs)("p",{className:"text-muted",children:["By default, the ",(0,m.jsx)("code",{children:"placeholder"})," uses ",(0,m.jsx)("code",{children:"currentColor"}),". This can be overriden with a custom color or utility class."]}),(0,m.jsx)(b,{xs:12}),(0,m.jsx)(b,{xs:12,bg:"primary"}),(0,m.jsx)(b,{xs:12,bg:"secondary"}),(0,m.jsx)(b,{xs:12,bg:"success"}),(0,m.jsx)(b,{xs:12,bg:"danger"}),(0,m.jsx)(b,{xs:12,bg:"warning"}),(0,m.jsx)(b,{xs:12,bg:"info"}),(0,m.jsx)(b,{xs:12,bg:"light"}),(0,m.jsx)(b,{xs:12,bg:"dark"})]})}),P=()=>((0,d.HU)({title:"Placeholders",breadCrumbItems:[{path:"/base-ui/placeholders",label:"Base UI"},{path:"/base-ui/placeholders",label:"Placeholders",active:!0}]}),(0,m.jsxs)(r.A,{children:[(0,m.jsxs)(t.A,{xl:6,children:[(0,m.jsx)(g,{}),(0,m.jsx)(A,{}),(0,m.jsx)(y,{})]}),(0,m.jsxs)(t.A,{xl:6,children:[(0,m.jsx)(C,{}),(0,m.jsx)(w,{}),(0,m.jsx)(v,{})]})]}))},14282:(e,s,a)=>{a.d(s,{A:()=>o});var r=a(98139),t=a.n(r),d=a(65043),l=a(14140),i=a(67852),c=a(70579);const n=d.forwardRef(((e,s)=>{let{as:a,bsPrefix:r,variant:d="primary",size:n,active:o=!1,disabled:x=!1,className:h,...m}=e;const j=(0,i.oU)(r,"btn"),[p,{tagName:f}]=(0,l.Am)({tagName:a,disabled:x,...m}),b=f;return(0,c.jsx)(b,{...p,...m,ref:s,disabled:x,className:t()(h,j,o&&"active",d&&`${j}-${d}`,n&&`${j}-${n}`,m.href&&x&&"disabled")})}));n.displayName="Button";const o=n},38628:(e,s,a)=>{a.d(s,{A:()=>$});var r=a(98139),t=a.n(r),d=a(65043),l=a(67852),i=a(70579);const c=d.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:d="div",...c}=e;return r=(0,l.oU)(r,"card-body"),(0,i.jsx)(d,{ref:s,className:t()(a,r),...c})}));c.displayName="CardBody";const n=c,o=d.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:d="div",...c}=e;return r=(0,l.oU)(r,"card-footer"),(0,i.jsx)(d,{ref:s,className:t()(a,r),...c})}));o.displayName="CardFooter";const x=o;var h=a(11778);const m=d.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,as:c="div",...n}=e;const o=(0,l.oU)(a,"card-header"),x=(0,d.useMemo)((()=>({cardHeaderBsPrefix:o})),[o]);return(0,i.jsx)(h.A.Provider,{value:x,children:(0,i.jsx)(c,{ref:s,...n,className:t()(r,o)})})}));m.displayName="CardHeader";const j=m,p=d.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,variant:d,as:c="img",...n}=e;const o=(0,l.oU)(a,"card-img");return(0,i.jsx)(c,{ref:s,className:t()(d?`${o}-${d}`:o,r),...n})}));p.displayName="CardImg";const f=p,b=d.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:d="div",...c}=e;return r=(0,l.oU)(r,"card-img-overlay"),(0,i.jsx)(d,{ref:s,className:t()(a,r),...c})}));b.displayName="CardImgOverlay";const u=b,N=d.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:d="a",...c}=e;return r=(0,l.oU)(r,"card-link"),(0,i.jsx)(d,{ref:s,className:t()(a,r),...c})}));N.displayName="CardLink";const g=N;var y=a(4488);const w=(0,y.A)("h6"),A=d.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:d=w,...c}=e;return r=(0,l.oU)(r,"card-subtitle"),(0,i.jsx)(d,{ref:s,className:t()(a,r),...c})}));A.displayName="CardSubtitle";const v=A,C=d.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:d="p",...c}=e;return r=(0,l.oU)(r,"card-text"),(0,i.jsx)(d,{ref:s,className:t()(a,r),...c})}));C.displayName="CardText";const P=C,B=(0,y.A)("h5"),k=d.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:d=B,...c}=e;return r=(0,l.oU)(r,"card-title"),(0,i.jsx)(d,{ref:s,className:t()(a,r),...c})}));k.displayName="CardTitle";const R=k,U=d.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,bg:d,text:c,border:o,body:x=!1,children:h,as:m="div",...j}=e;const p=(0,l.oU)(a,"card");return(0,i.jsx)(m,{ref:s,...j,className:t()(r,p,d&&`bg-${d}`,c&&`text-${c}`,o&&`border-${o}`),children:x?(0,i.jsx)(n,{children:h}):h})}));U.displayName="Card";const $=Object.assign(U,{Img:f,Title:R,Subtitle:v,Body:n,Link:g,Text:P,Header:j,Footer:x,ImgOverlay:u})},11778:(e,s,a)=>{a.d(s,{A:()=>t});const r=a(65043).createContext(null);r.displayName="CardHeaderContext";const t=r},4488:(e,s,a)=>{a.d(s,{A:()=>i});var r=a(65043),t=a(98139),d=a.n(t),l=a(70579);const i=e=>r.forwardRef(((s,a)=>(0,l.jsx)("div",{...s,ref:a,className:d()(s.className,e)})))},64176:(e,s,a)=>{e.exports=a.p+"static/media/img-1.2860138217f1ed6bb89b.jpg"},39842:(e,s,a)=>{e.exports=a.p+"static/media/img-3.b29a79efb3c63590f030.jpg"}}]);
//# sourceMappingURL=8761.818e7e3f.chunk.js.map