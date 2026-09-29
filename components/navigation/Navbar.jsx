"use client";
import React from 'react';
import { Button } from '../core/Button.jsx';
import { IconButton } from '../core/IconButton.jsx';
export function Navbar({links=[],active,onNavigate,cta='Book a call',onCta,theme,onToggleTheme,style}){
  const [open,setOpen]=React.useState(false);
  return <header style={{position:'sticky',top:0,zIndex:'var(--z-sticky)',background:'color-mix(in oklab, var(--bg-page) 88%, transparent)',backdropFilter:'blur(12px)',WebkitBackdropFilter:'blur(12px)',borderBottom:'1px solid var(--border-subtle)',...style}}>
    <div style={{maxWidth:'var(--container-lg)',margin:'0 auto',padding:'0 var(--gutter)',height:68,display:'flex',alignItems:'center',gap:24}}>
      <a href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate('home')}} style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:20,letterSpacing:'-0.03em',color:'var(--text-strong)',textDecoration:'none',whiteSpace:'nowrap'}}>Muhammad Umair<span style={{color:'var(--brand)'}}>.</span></a>
      <nav className="mu-nav-links" style={{display:'flex',gap:4,marginLeft:'auto'}}>
        {links.map(l=>{const v=l.value??l,lb=l.label??l,on=v===active;
          return <a key={v} href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate(v)}} style={{padding:'8px 12px',borderRadius:'var(--radius-sm)',fontSize:14,fontWeight:500,color:on?'var(--text-strong)':'var(--text-muted)',background:on?'var(--surface-muted)':'transparent',textDecoration:'none'}}>{lb}</a>})}
      </nav>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        {onToggleTheme&&<IconButton icon={theme==='dark'?'sun':'moon'} label="Toggle theme" onClick={onToggleTheme}/>}
        <Button size="sm" iconRight="arrow-right" onClick={onCta}>{cta}</Button>
      </div>
    </div>
  </header>;
}
