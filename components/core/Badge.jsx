import React from 'react';
const T={neutral:['var(--surface-muted)','var(--text-body)'],brand:['var(--brand-subtle)','var(--text-brand)'],accent:['var(--accent-subtle)','var(--apricot-700)'],success:['var(--success-subtle)','var(--success-text)'],warning:['var(--warning-subtle)','var(--warning-text)'],danger:['var(--danger-subtle)','var(--danger-text)'],info:['var(--info-subtle)','var(--info-text)'],solid:['var(--brand)','var(--on-brand)']};
export function Badge({tone='neutral',dot,children,style}){
  const [bg,fg]=T[tone]||T.neutral;
  return <span style={{display:'inline-flex',alignItems:'center',gap:6,height:22,padding:'0 8px',borderRadius:'var(--radius-xs)',background:bg,color:fg,fontFamily:'var(--font-mono)',fontSize:11,fontWeight:500,letterSpacing:'0.04em',textTransform:'uppercase',whiteSpace:'nowrap',...style}}>
    {dot&&<span style={{width:6,height:6,borderRadius:'50%',background:'currentColor'}}/>}{children}
  </span>;
}
