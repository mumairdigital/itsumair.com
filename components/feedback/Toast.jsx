"use client";
import React from 'react';
import { Icon } from '../core/Icon.jsx';
const I={success:['circle-check','var(--success)'],error:['circle-alert','var(--danger)'],info:['info','var(--info)'],neutral:['bell','var(--text-muted)']};
export function Toast({tone='success',title,message,onClose,style}){
  const [ic,c]=I[tone]||I.neutral;
  return <div role="status" style={{display:'flex',gap:12,alignItems:'flex-start',width:360,maxWidth:'100%',padding:'14px 16px',background:'var(--surface-raised)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-lg)',...style}}>
    <span style={{color:c,display:'flex',marginTop:1}}><Icon name={ic} size={20}/></span>
    <div style={{flex:1,display:'flex',flexDirection:'column',gap:2}}>
      {title&&<span style={{fontSize:14,fontWeight:600,color:'var(--text-strong)'}}>{title}</span>}
      {message&&<span style={{fontSize:13,color:'var(--text-body)',lineHeight:1.45}}>{message}</span>}
    </div>
    {onClose&&<button aria-label="Dismiss" onClick={onClose} style={{background:'none',border:'none',padding:0,color:'var(--text-muted)',cursor:'pointer',display:'flex'}}><Icon name="x" size={16}/></button>}
  </div>;
}
