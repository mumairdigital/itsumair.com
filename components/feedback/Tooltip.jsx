"use client";
import React from 'react';
export function Tooltip({content,children,side='top'}){
  const [o,setO]=React.useState(false);
  const pos=side==='bottom'?{top:'calc(100% + 8px)'}:{bottom:'calc(100% + 8px)'};
  return <span style={{position:'relative',display:'inline-flex'}} onMouseEnter={()=>setO(true)} onMouseLeave={()=>setO(false)} onFocus={()=>setO(true)} onBlur={()=>setO(false)}>
    {children}
    <span role="tooltip" style={{position:'absolute',left:'50%',...pos,transform:'translateX(-50%) translateY('+(o?0:side==='bottom'?-4:4)+'px)',opacity:o?1:0,pointerEvents:'none',background:'var(--ink-900)',color:'var(--ink-25)',fontSize:12,fontWeight:500,padding:'6px 10px',borderRadius:'var(--radius-sm)',whiteSpace:'nowrap',zIndex:'var(--z-tooltip)',transition:'opacity var(--dur-fast),transform var(--dur-base) var(--ease-out)'}}>{content}</span>
  </span>;
}
