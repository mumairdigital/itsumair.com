"use client";
import React from 'react';
import { Icon } from '../core/Icon.jsx';
const labelCss={fontSize:14,fontWeight:600,color:'var(--text-strong)'};
const hintCss=(err)=>({fontSize:13,color:err?'var(--danger-text)':'var(--text-muted)'});
export function Input({label,hint,error,icon,multiline,rows=4,size='md',disabled,id,style,...rest}){
  const [f,setF]=React.useState(false),[h,setH]=React.useState(false);
  const uid=id||React.useId();const Tag=multiline?'textarea':'input';
  const hgt={sm:'var(--control-sm)',md:'var(--control-md)',lg:'var(--control-lg)'}[size];
  const bd=error?'var(--danger)':f?'var(--border-brand)':h&&!disabled?'var(--border-strong)':'var(--border-default)';
  return <div style={{display:'flex',flexDirection:'column',gap:6,...style}}>
    {label&&<label htmlFor={uid} style={labelCss}>{label}</label>}
    <div style={{position:'relative',display:'flex',alignItems:multiline?'flex-start':'center'}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      {icon&&<span style={{position:'absolute',left:12,top:multiline?12:undefined,color:'var(--text-muted)',display:'flex'}}><Icon name={icon} size={18}/></span>}
      <Tag id={uid} rows={multiline?rows:undefined} disabled={disabled} aria-invalid={!!error||undefined} onFocus={()=>setF(true)} onBlur={()=>setF(false)}
        style={{width:'100%',height:multiline?'auto':hgt,padding:multiline?'10px 12px':'0 12px',paddingLeft:icon?40:12,fontFamily:'var(--font-body)',fontSize:size==='lg'?16:15,lineHeight:1.5,color:'var(--text-strong)',background:disabled?'var(--surface-muted)':'var(--surface-card)',border:'1px solid '+bd,borderRadius:'var(--radius-control)',outline:'none',boxShadow:f?'0 0 0 3px '+(error?'var(--danger-subtle)':'var(--brand-muted)'):'none',transition:'border-color var(--dur-fast),box-shadow var(--dur-base) var(--ease-out)',resize:multiline?'vertical':undefined,cursor:disabled?'not-allowed':'text'}} {...rest}/>
    </div>
    {(error||hint)&&<span style={hintCss(error)}>{error||hint}</span>}
  </div>;
}
