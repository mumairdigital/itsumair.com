"use client";
import React from 'react';
export function Switch({label,checked,defaultChecked,onChange,disabled,style}){
  const [inner,setInner]=React.useState(!!defaultChecked);const on=checked!==undefined?checked:inner;
  const t=()=>{if(disabled)return;if(checked===undefined)setInner(!on);onChange&&onChange(!on)};
  return <label style={{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,...style}}>
    <button type="button" role="switch" aria-checked={on} disabled={disabled} onClick={t}
      style={{width:40,height:24,borderRadius:999,border:'none',padding:2,background:on?'var(--brand)':'var(--ink-300)',transition:'background var(--dur-base) var(--ease-standard)',cursor:'inherit',display:'flex'}}>
      <span style={{width:20,height:20,borderRadius:'50%',background:'#fff',boxShadow:'var(--shadow-sm)',transform:on?'translateX(16px)':'none',transition:'transform var(--dur-base) var(--ease-out)'}}/>
    </button>
    {label&&<span style={{fontSize:15,fontWeight:500,color:'var(--text-strong)'}}>{label}</span>}
  </label>;
}
