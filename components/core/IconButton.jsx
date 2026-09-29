"use client";
import React from 'react';
import { Icon } from './Icon.jsx';
export function IconButton({icon,label,variant='ghost',size='md',disabled,onClick,style,...rest}){
  const [h,setH]=React.useState(false);
  const d={sm:32,md:40,lg:52}[size]||40,ic={sm:16,md:20,lg:22}[size]||20;
  const v={primary:['var(--brand)','var(--on-brand)','var(--brand-hover)','transparent'],secondary:['var(--surface-card)','var(--text-strong)','var(--surface-hover)','var(--border-default)'],ghost:['transparent','var(--text-body)','var(--surface-hover)','transparent']}[variant];
  return <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{width:d,height:d,display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'var(--radius-control)',border:'1px solid '+v[3],background:disabled?'transparent':h?v[2]:v[0],color:disabled?'var(--text-faint)':h&&variant==='ghost'?'var(--text-strong)':v[1],cursor:disabled?'not-allowed':'pointer',transition:'background var(--dur-fast) var(--ease-standard)',padding:0,...style}} {...rest}>
    <Icon name={icon} size={ic}/>
  </button>;
}
