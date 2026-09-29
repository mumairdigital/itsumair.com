"use client";
import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
export function Dialog({open,onClose,title,description,children,footer,width=520}){
  React.useEffect(()=>{if(!open)return;const k=e=>e.key==='Escape'&&onClose&&onClose();window.addEventListener('keydown',k);return()=>window.removeEventListener('keydown',k)},[open,onClose]);
  if(!open)return null;
  return <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:'var(--z-modal)',background:'var(--surface-overlay)',display:'flex',alignItems:'center',justifyContent:'center',padding:20,animation:'mu-fade var(--dur-base) var(--ease-out)'}}>
    <style>{'@keyframes mu-fade{from{opacity:0}}@keyframes mu-rise{from{opacity:0;transform:translateY(8px) scale(.98)}}'}</style>
    <div role="dialog" aria-modal="true" aria-label={title} onClick={e=>e.stopPropagation()} style={{width:'100%',maxWidth:width,background:'var(--surface-raised)',borderRadius:'var(--radius-xl)',boxShadow:'var(--shadow-lg)',padding:32,display:'flex',flexDirection:'column',gap:20,animation:'mu-rise var(--dur-slow) var(--ease-out)'}}>
      <div style={{display:'flex',gap:16,alignItems:'flex-start'}}>
        <div style={{flex:1,display:'flex',flexDirection:'column',gap:6}}>
          {title&&<h3 style={{fontFamily:'var(--font-display)',fontSize:24,fontWeight:700,letterSpacing:'-0.02em',color:'var(--text-strong)',margin:0}}>{title}</h3>}
          {description&&<p style={{fontSize:15,color:'var(--text-body)',margin:0,lineHeight:1.55}}>{description}</p>}
        </div>
        <IconButton icon="x" label="Close" size="sm" onClick={onClose} style={{marginTop:-4,marginRight:-8}}/>
      </div>
      {children}
      {footer&&<div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>{footer}</div>}
    </div>
  </div>;
}
