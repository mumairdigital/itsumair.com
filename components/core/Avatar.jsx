import React from 'react';
export function Avatar({src,name='',size=40,style}){
  const ini=name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();
  return <span style={{width:size,height:size,borderRadius:'50%',overflow:'hidden',display:'inline-flex',alignItems:'center',justifyContent:'center',background:'var(--brand-muted)',color:'var(--text-brand)',fontFamily:'var(--font-display)',fontWeight:700,fontSize:size*.38,flexShrink:0,...style}}>
    {src?<img src={src} alt={name} style={{width:'100%',height:'100%',objectFit:'cover'}}/>:ini}
  </span>;
}
