import React from 'react';
export function Stat({value,label,note,size='md',style}){
  return <div style={{display:'flex',flexDirection:'column',gap:6,...style}}>
    <span style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:size==='lg'?'clamp(48px,6vw,72px)':38,lineHeight:1,letterSpacing:'-0.035em',color:'var(--text-strong)'}}>{value}</span>
    <span style={{fontSize:15,fontWeight:600,color:'var(--text-strong)'}}>{label}</span>
    {note&&<span style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-muted)',letterSpacing:'0.02em'}}>{note}</span>}
  </div>;
}
