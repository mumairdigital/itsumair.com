"use client";
import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Checkbox({label,description,checked,defaultChecked,onChange,disabled,name,value,style}){
  const [inner,setInner]=React.useState(!!defaultChecked);const on=checked!==undefined?checked:inner;
  const [f,setF]=React.useState(false);
  const toggle=e=>{if(checked===undefined)setInner(!on);onChange&&onChange(!on,e)};
  return <label style={{display:'flex',gap:10,alignItems:'flex-start',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,...style}}>
    <input type="checkbox" name={name} value={value} checked={on} disabled={disabled} onChange={toggle} onFocus={e=>setF(e.target.matches(':focus-visible'))} onBlur={()=>setF(false)} style={{position:'absolute',opacity:0,width:0,height:0}}/>
    <span style={{width:20,height:20,marginTop:1,flexShrink:0,borderRadius:'var(--radius-xs)',border:'1.5px solid '+(on?'var(--brand)':'var(--border-strong)'),background:on?'var(--brand)':'var(--surface-card)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--on-brand)',boxShadow:f?'var(--focus-shadow)':'none',transition:'all var(--dur-fast) var(--ease-standard)'}}>
      {on&&<Icon name="check" size={14} strokeWidth={3}/>}
    </span>
    {(label||description)&&<span style={{display:'flex',flexDirection:'column',gap:2}}>
      {label&&<span style={{fontSize:15,fontWeight:500,color:'var(--text-strong)',lineHeight:1.4}}>{label}</span>}
      {description&&<span style={{fontSize:13,color:'var(--text-muted)'}}>{description}</span>}
    </span>}
  </label>;
}
