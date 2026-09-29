"use client";
import React from 'react';
import { Icon } from '../core/Icon.jsx';
const labelCss={fontSize:14,fontWeight:600,color:'var(--text-strong)'};
const hintCss=(err)=>({fontSize:13,color:err?'var(--danger-text)':'var(--text-muted)'});
export function Select({label,hint,error,options=[],placeholder,disabled,id,style,...rest}){
  const [f,setF]=React.useState(false);const uid=id||React.useId();
  return <div style={{display:'flex',flexDirection:'column',gap:6,...style}}>
    {label&&<label htmlFor={uid} style={labelCss}>{label}</label>}
    <div style={{position:'relative'}}>
      <select id={uid} disabled={disabled} onFocus={()=>setF(true)} onBlur={()=>setF(false)} {...rest}
        style={{appearance:'none',width:'100%',height:'var(--control-md)',padding:'0 40px 0 12px',fontFamily:'var(--font-body)',fontSize:15,color:'var(--text-strong)',background:disabled?'var(--surface-muted)':'var(--surface-card)',border:'1px solid '+(error?'var(--danger)':f?'var(--border-brand)':'var(--border-default)'),borderRadius:'var(--radius-control)',outline:'none',boxShadow:f?'0 0 0 3px var(--brand-muted)':'none',cursor:disabled?'not-allowed':'pointer'}}>
        {placeholder&&<option value="">{placeholder}</option>}
        {options.map(o=>{const v=typeof o==='string'?{value:o,label:o}:o;return <option key={v.value} value={v.value}>{v.label}</option>})}
      </select>
      <span style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',pointerEvents:'none',color:'var(--text-muted)',display:'flex'}}><Icon name="chevron-down" size={18}/></span>
    </div>
    {(error||hint)&&<span style={hintCss(error)}>{error||hint}</span>}
  </div>;
}
