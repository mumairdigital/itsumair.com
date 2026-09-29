import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function ProofFrame({fit='contain',position='center',children,src,alt='',label,stat,statLabel,width,ratio='16/10',chrome=true,style}){
  return <figure style={{margin:0,width,flexShrink:0,background:'var(--surface-card)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-md)',overflow:'hidden',display:'flex',flexDirection:'column',...style}}>
    {chrome&&<div style={{height:28,display:'flex',alignItems:'center',gap:6,padding:'0 12px',borderBottom:'1px solid var(--border-subtle)',background:'var(--surface-muted)'}}>
      {[0,1,2].map(i=><span key={i} style={{width:8,height:8,borderRadius:'50%',background:'var(--border-default)'}}/>)}
      {label&&<span style={{marginLeft:8,fontFamily:'var(--font-mono)',fontSize:10,color:'var(--text-muted)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{label}</span>}
    </div>}
    <div style={{position:'relative',aspectRatio:ratio,background:'var(--bg-sunken)'}}>
      {src?<img src={src} alt={alt} style={{width:'100%',height:'100%',objectFit:fit,objectPosition:position}}/>:children}
      {stat&&<figcaption style={{position:'absolute',left:10,bottom:10,display:'flex',alignItems:'center',gap:8,background:'var(--ink-900)',color:'#fff',borderRadius:'var(--radius-sm)',padding:'6px 10px',pointerEvents:'none'}}>
        <Icon name="trending-up" size={14} color="var(--violet-300)"/><b style={{fontFamily:'var(--font-display)',fontSize:15,letterSpacing:'-.02em'}}>{stat}</b>{statLabel&&<span style={{fontSize:11,color:'var(--ink-300)'}}>{statLabel}</span>}
      </figcaption>}
    </div>
  </figure>;
}
