"use client";
import React from 'react';
import { Icon } from './Icon.jsx';
export function Tag({children,icon,selected,onClick,onRemove,style}){
  const [h,setH]=React.useState(false);const click=!!onClick;
  return <span role={click?'button':undefined} tabIndex={click?0:undefined} aria-pressed={click?!!selected:undefined} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:'inline-flex',alignItems:'center',gap:6,height:32,padding:'0 12px',borderRadius:'var(--radius-full)',border:'1px solid '+(selected?'var(--border-brand)':h&&click?'var(--border-strong)':'var(--border-default)'),background:selected?'var(--brand-subtle)':'var(--surface-card)',color:selected?'var(--text-brand)':'var(--text-body)',fontSize:13,fontWeight:500,cursor:click?'pointer':'default',transition:'border-color var(--dur-fast),background var(--dur-fast)',userSelect:'none',...style}}>
    {icon&&<Icon name={icon} size={14}/>}{children}
    {onRemove&&<span role="button" aria-label="Remove" onClick={e=>{e.stopPropagation();onRemove()}} style={{display:'inline-flex',marginRight:-4,cursor:'pointer',opacity:.7}}><Icon name="x" size={14}/></span>}
  </span>;
}
