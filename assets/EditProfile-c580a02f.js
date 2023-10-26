import{j as e,i as C,r as a,g as B,e as O,o as k}from"./index-c362957b.js";import{u as z}from"./useMyProfileData-71ce4e8f.js";import{a as V}from"./axios-21b846bc.js";import{b as H}from"./urlsUsers-ca1c08d1.js";import{B as G}from"./baseUrl-32bae851.js";import{l as W}from"./cropper-dd91103e.js";import{T as U,$ as q,a as K,R as J}from"./Combination-72eab212.js";import{e as Q,u as $,m as D,b as R}from"./chunk-IPGVXZ3J-42ffdda3.js";var X=t=>e.jsx("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:"1em",...t,children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),[pe,I]=Q({name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Modal />`"}),F=C((t,o)=>{const{as:s,children:l,className:i,...f}=t,{slots:p,classNames:n,bodyId:m,setBodyMounted:r}=I(),c=$(o),x=s||"div";return a.useEffect(()=>(r(!0),()=>r(!1)),[r]),e.jsx(x,{ref:c,className:p.body({class:B(n==null?void 0:n.body,i)}),id:m,...f,children:l})});F.displayName="NextUI.ModalBody";var Y=F,Z={enter:{scale:"var(--scale-enter)",y:"var(--slide-enter))",opacity:1,transition:{scale:{duration:.4,ease:U.ease},opacity:{duration:.4,ease:U.ease},y:{type:"spring",bounce:0,duration:.6}}},exit:{scale:"var(--scale-exit)",y:"var(--slide-exit)",opacity:0,transition:{duration:.3,ease:U.ease}}},A=C((t,o)=>{const{as:s,children:l,role:i="dialog",...f}=t,{Component:p,domRef:n,slots:m,isOpen:r,classNames:c,motionProps:x,backdrop:v,closeButton:w,hideCloseButton:M,disableAnimation:g,shouldBlockScroll:P,getDialogProps:S,getBackdropProps:b,getCloseButtonProps:N,onClose:j}=I(),_=s||p||"div",{dialogProps:d}=q({role:i},n),u=a.isValidElement(w)?a.cloneElement(w,N()):e.jsx("button",{...N(),children:e.jsx(X,{})}),h=e.jsxs(_,{...S(O(d,f)),children:[e.jsx(k,{onDismiss:j}),!M&&u,typeof l=="function"?l(j):l,e.jsx(k,{onDismiss:j})]}),y=a.useMemo(()=>v==="transparent"?null:g?e.jsx("div",{...b()}):e.jsx(D.div,{animate:"enter",exit:"exit",initial:"exit",variants:K.fade,...b()}),[v,g,b]);return e.jsxs("div",{tabIndex:-1,children:[y,e.jsx(J,{forwardProps:!0,enabled:P&&r,removeScrollBar:!1,children:g?e.jsx("div",{className:m.wrapper({class:c==null?void 0:c.wrapper}),children:h}):e.jsx(D.div,{animate:"enter",className:m.wrapper({class:c==null?void 0:c.wrapper}),exit:"exit",initial:"exit",variants:Z,...x,children:h})})]})});A.displayName="NextUI.ModalContent";var ee=A,T=C((t,o)=>{const{as:s,children:l,className:i,...f}=t,{slots:p,classNames:n}=I(),m=$(o),r=s||"footer";return e.jsx(r,{ref:m,className:p.footer({class:B(n==null?void 0:n.footer,i)}),...f,children:l})});T.displayName="NextUI.ModalFooter";var te=T,L=C((t,o)=>{const{as:s,children:l,className:i,...f}=t,{slots:p,classNames:n,headerId:m,setHeaderMounted:r}=I(),c=$(o),x=s||"header";return a.useEffect(()=>(r(!0),()=>r(!1)),[r]),e.jsx(x,{ref:c,className:p.header({class:B(n==null?void 0:n.header,i)}),id:m,...f,children:l})});L.displayName="NextUI.ModalHeader";var oe=L;const se=({fotoPerfilUrl:t,croppedImageUrl:o,handleFileChange:s})=>e.jsxs("article",{className:"relative flex items-center justify-center m-0 my-5",children:[e.jsxs("label",{htmlFor:"profileImageInput",className:"relative flex items-center justify-center object-cover w-24 h-24 cursor-pointer hover:opacity-100",children:[o?e.jsx("img",{src:o,alt:"Vista previa",className:"relative flex items-center justify-center object-cover w-24 h-24 rounded-full hover:opacity-100"}):e.jsx("img",{src:t,alt:"Foto de perfil",className:"relative flex items-center justify-center object-cover w-24 h-24 rounded-full"}),e.jsx("i",{className:"absolute text-2xl -translate-x-1/2 -translate-y-1/2 fa-solid fa-camera-retro top-1/2 left-1/2"}),e.jsx("span",{className:"absolute inset-0 flex items-center justify-center w-full h-full transition-opacity bg-black rounded-full opacity-0 bg-opacity-30 hover:opacity-100 ",children:e.jsx("i",{className:"absolute text-2xl -translate-x-1/2 -translate-y-1/2 fa-solid fa-camera-retro top-1/2 left-1/2 "})})]}),e.jsx("input",{type:"file",id:"profileImageInput",className:"absolute w-0 h-0 opacity-0 pointer-events-none",onChange:s})]}),re=({setUsername:t,myUsername:o})=>e.jsx("article",{className:"flex items-center justify-center w-full my-5",children:e.jsxs("label",{htmlFor:"Username",className:"block w-full px-3 py-2 overflow-hidden border border-gray-200 rounded-md shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 focus-within:text-blue-500",children:[e.jsx("span",{className:"text-xs font-medium transition-colors",children:"Nombre de usuario"}),e.jsx("input",{autoComplete:"off",type:"text",id:"Username",defaultValue:o,className:"w-full p-0 mt-1 text-white bg-transparent border-none focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm",onChange:s=>t(s.target.value),required:!0})]})}),ae=({setDescripcion:t,myUserDescription:o})=>e.jsx("article",{className:"w-full my-5",children:e.jsxs("label",{htmlFor:"Username",className:"block px-3 py-2 overflow-hidden border border-gray-200 rounded-md shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 focus-within:text-blue-500",children:[e.jsx("span",{className:"text-xs font-medium transition-colors",children:"Descripción"}),e.jsx("textarea",{autoComplete:"off",type:"text",defaultValue:o,maxLength:50,className:"w-full p-0 mt-1 text-white bg-transparent border-none h-14 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm max-h-24",onChange:s=>t(s.target.value)})]})});function E(){const{myUsername:t,myUserData:o,myUserDescription:s}=z(),l=o&&o.foto_perfil?`${G}${o.foto_perfil}`:null,[i,f]=a.useState(t),[p,n]=a.useState("not-touch"),[m,r]=a.useState(null),[c,x]=a.useState(null),[v,w]=a.useState(null),[M,g]=a.useState(null),[P,S]=a.useState(null),b=a.useRef(null),N=async d=>{d.preventDefault();try{const u=window.localStorage.getItem("token");await V.put(H,{username:i,descripcion:p,foto_perfil:M},{headers:{Authorization:`Token ${u}`,"Content-Type":"multipart/form-data"}})}catch(u){console.error("Error al guardar los cambios:",u)}finally{i?window.location.href=`/profile/${i}`:window.location.href=`/profile/${t}`}},j=d=>{const u=d.target.files[0];if(x(u),u){const h=new window.FileReader;h.onload=y=>{r(y.target.result)},h.readAsDataURL(u)}},_=()=>{const d=P.getCroppedCanvas(),u=d.toDataURL("image/jpeg");d&&w(u),d.toBlob(h=>{if(h){const y=new File([h],c.name,{type:"image/jpeg"});g(y)}},"image/jpeg"),x(null)};return e.jsx(e.Fragment,{children:c?e.jsxs("div",{className:"absolute z-50 flex flex-col p-4 overflow-y-auto transform -translate-x-1/2 -translate-y-1/2 rounded-xl bg-palette-3 w-96 top-1/2 left-1/2",children:[e.jsx(W,{ref:b,src:m,className:"flex items-center justify-center w-full border border-palette-4 h-96",aspectRatio:1,guides:!0,viewMode:1,minCropBoxHeight:50,minCropBoxWidth:50,background:!1,zoomable:!1,onInitialized:d=>{S(d)}}),e.jsxs("div",{className:"flex justify-between mt-5",children:[e.jsx(R,{type:"reset",color:"danger",onPress:()=>{x(null),r(null),g(null)},children:"Cancelar"}),e.jsx(R,{onPress:_,color:"primary",className:"hover:bg-blue-700",children:"Guardar"})]})]}):e.jsx("form",{onSubmit:N,children:e.jsx(ee,{children:e.jsxs(e.Fragment,{children:[e.jsx(oe,{className:"flex justify-between",children:e.jsx("h2",{className:"text-2xl font-bold text-white",children:"Editar perfil"})}),e.jsxs(Y,{children:[e.jsx(se,{fotoPerfilUrl:l,croppedImageUrl:v,handleFileChange:j}),e.jsx(re,{setUsername:f,myUsername:t}),e.jsx(ae,{setDescripcion:n,myUserDescription:s})]}),e.jsx(te,{children:e.jsx(R,{type:"submit",color:"primary",children:"Guardar"})})]})})})})}const xe=Object.freeze(Object.defineProperty({__proto__:null,EditProfile:E,default:E},Symbol.toStringTag,{value:"Module"}));export{E,pe as M,xe as a};