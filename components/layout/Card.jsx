"use client";
import React from 'react';
import Link from 'next/link';
const V={outlined:{bg:'var(--surface-card)',bd:'var(--border-subtle)',sh:'none'},elevated:{bg:'var(--surface-card)',bd:'transparent',sh:'var(--shadow-md)'},muted:{bg:'var(--surface-muted)',bd:'transparent',sh:'none'},brand:{bg:'var(--bg-brand)',bd:'transparent',sh:'none'},inverse:{bg:'var(--ink-900)',bd:'transparent',sh:'none'}};
export function Card({variant='outlined',padding='lg',interactive,href,onClick,media,children,style}){
  const [h,setH]=React.useState(false);const v=V[variant]||V.outlined;const act=interactive||href||onClick;
  const pad={none:0,sm:16,md:24,lg:32}[padding];
  const Tag=href?(href.startsWith('/')?Link:'a'):'div';
  const dark=variant==='brand'||variant==='inverse';
  return <Tag href={href} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} data-theme={dark?'dark':undefined}
    style={{display:'flex',flexDirection:'column',background:v.bg,border:'1px solid '+(act&&h&&variant==='outlined'?'var(--border-default)':v.bd),borderRadius:'var(--radius-card)',boxShadow:act&&h?'var(--shadow-lg)':v.sh,transform:act&&h?'translateY(-2px)':'none',transition:'transform var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out),border-color var(--dur-fast)',overflow:'hidden',color:dark?'#fff':'inherit',textDecoration:'none',cursor:act?'pointer':'default',...style}}>
    {media&&<div style={{overflow:'hidden'}}><div style={{transform:act&&h?'scale(1.03)':'none',transition:'transform var(--dur-slow) var(--ease-out)'}}>{media}</div></div>}
    <div style={{padding:pad,display:'flex',flexDirection:'column',gap:12,flex:1}}>{children}</div>
  </Tag>;
}
