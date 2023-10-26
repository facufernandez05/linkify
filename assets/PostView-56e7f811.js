import{u as j,r as l,L as i,j as s}from"./index-8fcd2ec0.js";import{a as h}from"./axios-21b846bc.js";import{a as g}from"./urlsPost-9698314f.js";import{a as w}from"./baseUrl-32bae851.js";import{u as c,H as u,C as N}from"./CommentsPost-113df93a.js";import{u as P}from"./useMyProfileData-9b5aba83.js";import{s as k}from"./chunk-26CMBM6O-57615c3c.js";import{b as y}from"./chunk-IPGVXZ3J-676002ec.js";import"./import-254cb850.js";import"./Combination-11f5bee2.js";import"./urlsUsers-ca1c08d1.js";import"./chunk-XQ2PV7KF-f968c215.js";const C=async e=>{const t=await h.get(`${w}users/${e.user}/`,{headers:{Authorization:`Token ${window.localStorage.getItem("token")}`}}),a=new Set(JSON.parse(window.localStorage.getItem("likedPosts"))||[]);return{...e,user:t.data,liked:a.has(e.id)}};function M(){const{id:e}=j(),[t,a]=l.useState(),{publicaciones:x,handleLikePost:f}=c(),{setLoading:m}=l.useContext(i),o=x.find(r=>r.id===(t==null?void 0:t.id)),d=async()=>{m(!0);try{const r=await h.get(g(e),{headers:{Authorization:`Token ${window.localStorage.getItem("token")}`}}),n=await C(r.data);a(n)}catch(r){console.log(r)}finally{m(!1)}};return l.useEffect(()=>{d()},[e]),s.jsx("main",{className:"justify-center w-full p-4 mx-auto rounded-md max-md:mx-auto max-md:flex-col max-md:max-w-sm max-md:p-2 md:max-h-468 md:w-468 max-md:w-80 max-md:h-80",children:t?s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"w-full",children:s.jsx(u,{publicacion:t})}),s.jsx(L,{postToUpdate:o,publicacion:t,handleLikePost:f})]}):s.jsx("h2",{className:"text-center",children:"La publicacion no existe"})})}function L({publicacion:e,postToUpdate:t,handleLikePost:a}){var m,o,d,r,n;const{myUserId:x}=P(),{loading:f}=l.useContext(i);return s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"flex items-center justify-center w-full",children:f?s.jsx(k,{className:"bg-palette-2 md:h-468 md:w-468 max-md:w-80 max-md:h-80 rounded-xl"}):s.jsx("img",{src:e==null?void 0:e.image,alt:"Publicación",className:"object-cover w-full rounded-md",radius:"none"})}),s.jsxs("section",{className:"relative flex flex-col px-2 pt-2",children:[s.jsxs("div",{className:"flex gap-2",children:[s.jsx(y,{isIconOnly:!0,onPress:()=>a(e==null?void 0:e.id),color:"danger",size:"md",className:"hover:bg-palette-6",children:(m=t==null?void 0:t.likes_users)!=null&&m.includes(x)?s.jsx("i",{className:"text-xl fa-solid fa-heart"}):s.jsx("i",{className:"text-xl fa-regular fa-heart"})}),s.jsxs("p",{className:"pt-2 text-bold",children:[t==null?void 0:t.likes," Me gusta"]})]}),s.jsx("div",{className:"py-4 border-b border-gray-700",children:s.jsxs("p",{className:"inline-block break-words max-w-468 text-md",children:[s.jsxs("span",{className:"font-bold",children:[(d=(o=e==null?void 0:e.user)==null?void 0:o.user)==null?void 0:d.username," "]}),((r=e==null?void 0:e.caption)==null?void 0:r.charAt(0).toUpperCase())+((n=e==null?void 0:e.caption)==null?void 0:n.slice(1))]})}),s.jsx(N,{id:e==null?void 0:e.id})]})]})}export{M as PostView,M as default};