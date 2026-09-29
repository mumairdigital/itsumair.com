"use client";
import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Radio({label,description,checked,defaultChecked,onChange,disabled,name,value,style}){
  const [inner,setInner]=React.useState(!!defaultChecked);const on=checked!==undefined?checked:inner;
  const [f,setF]=React.useState(false);
  const toggle=e=>{if(on&&checked===undefined)return;if(checked===undefined)setInner(true);onChange&&onChange(value,e)};
  return <label style={{display:'flex',gap:10,alignItems:'flex-start',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,...style}}>
    <input type="radio" name={name} value={value} checked={on} disabled={disabled} onChange={toggle} onFocus={e=>setF(e.target.matches(':focus-visible'))} onBlur={()=>setF(false)} style={{position:'absolute',opacity:0,width:0,height:0}}/>
    <span style={{width:20,height:20,marginTop:1,flexShrink:0,borderRadius:'50%',border:'1.5px solid '+(on?'var(--brand)':'var(--border-strong)'),background:on?'var(--surface-card)':'var(--surface-card)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--on-brand)',boxShadow:f?'var(--focus-shadow)':'none',transition:'all var(--dur-fast) var(--ease-standard)'}}>
      {on&&<span style={{width:10,height:10,borderRadius:'50%',background:'var(--brand)'}}/>}
    </span>
    {(label||description)&&<span style={{display:'flex',flexDirection:'column',gap:2}}>
      {label&&<span style={{fontSize:15,fontWeight:500,color:'var(--text-strong)',lineHeight:1.4}}>{label}</span>}
      {description&&<span style={{fontSize:13,color:'var(--text-muted)'}}>{description}</span>}
    </span>}
  </label>;
}
