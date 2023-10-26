import{j as e,r as d}from"./index-c362957b.js";import{a as c}from"./axios-21b846bc.js";import{a as h,r as u,u as f}from"./useGetNotifications-ada60984.js";import{u as p}from"./urlsUsers-ca1c08d1.js";import"./baseUrl-32bae851.js";const j=({notifications:l,setNotifications:a})=>{const n=async r=>{try{const t=window.localStorage.getItem("token");await c.post(h(r),null,{headers:{Authorization:`Token ${t}`}}),a(o=>o.filter(s=>s.id!==r))}catch(t){console.error("Error al crear el hilo:",t)}},i=async r=>{try{const t=window.localStorage.getItem("token");await c.delete(u(r),{headers:{Authorization:`Token ${t}`}}),a(o=>o.filter(s=>s.id!==r))}catch(t){console.error("Error al rechazar la notificación:",t)}};return e.jsx(e.Fragment,{children:l.map(r=>e.jsxs("div",{className:"relative flex items-center w-1/2 p-4 mx-auto my-6 text-white transition-all cursor-pointer bg-palette-4 rounded-xl hover:scale-110",children:[e.jsxs("a",{href:`profile/${r.senderUsername}`,className:"flex items-center group",children:[e.jsx("img",{src:r.senderFotoPerfil,className:"relative object-cover rounded-full md:h-20 md:w-20",alt:"Foto de perfil"}),e.jsx("span",{className:"relative ml-4 text-xl group-hover:underline group-hover:underline-offset-1",children:r.senderUsername.charAt(0).toUpperCase()+r.senderUsername.slice(1)})]}),e.jsxs("section",{className:"relative flex ml-auto",children:[e.jsx("div",{className:"p-2",children:e.jsxs("button",{onClick:()=>n(r.id),className:"group relative mx-1.5 mb-0 font-bold border-none",children:[e.jsx("i",{className:"text-3xl text-blue-600 transition-all fa-regular fa-heart group-hover:hidden group-hover:scale-125"}),e.jsx("i",{className:"hidden text-3xl text-blue-800 transition-all fa-solid fa-heart group-hover:block group-hover:scale-125"})]})}),e.jsx("div",{className:"p-2",children:e.jsx("button",{onClick:()=>i(r.id),className:"group relative mx-1.5 mb-0 font-bold border-none text-3xl text-red-600 hover:text-red-800",children:e.jsx("i",{className:"transition-all fa-solid fa-x group-hover:scale-125"})})})]})]},r.id))})},k=()=>{const{notification:l}=f(),[a,n]=d.useState([]);return d.useEffect(()=>{async function i(){try{const r=await Promise.all(l.map(async t=>{const o=t.sender,s=await c.get(p(o)),m=s.data.foto_perfil,x=s.data.user.username;return{...t,senderUsername:x,senderFotoPerfil:m}}));n(r)}catch(r){console.error("Error al obtener las notificaciones",r)}}i()},[l]),e.jsx(e.Fragment,{children:a.length!==0?e.jsxs("div",{className:"relative flex flex-col w-full h-full",children:[e.jsx("h2",{className:"relative p-4 text-3xl font-bold text-white",children:"Solicitudes de amistad"}),e.jsx(j,{notifications:a,setNotifications:n})]}):e.jsx("div",{children:e.jsx("h2",{className:"mt-6 text-xl font-semibold text-center text-white",children:"No tienes solicitudes de amistad pendientes."})})})};export{k as NotificationsPage,k as default};