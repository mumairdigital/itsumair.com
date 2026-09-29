import React from 'react';
export function SectionHeader({eyebrow,title,lead,align='left',children,style}){
  const c=align==='center';
  return <div style={{display:'flex',flexDirection:'column',gap:16,alignItems:c?'center':'flex-start',textAlign:c?'center':'left',maxWidth:c?760:720,margin:c?'0 auto':0,...style}}>
    {eyebrow&&<span style={{fontFamily:'var(--font-mono)',fontSize:12,fontWeight:500,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-brand)'}}>{eyebrow}</span>}
    <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--type-h2)',fontWeight:700,lineHeight:1.06,letterSpacing:'var(--tracking-tight)',color:'var(--text-strong)',margin:0,textWrap:'balance'}}>{title}</h2>
    {lead&&<p style={{fontSize:'var(--type-lead)',lineHeight:1.6,color:'var(--text-body)',margin:0,textWrap:'pretty'}}>{lead}</p>}
    {children}
  </div>;
}
