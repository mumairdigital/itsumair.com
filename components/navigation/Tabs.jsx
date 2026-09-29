"use client";
import React from 'react';
export function Tabs({items=[],value,defaultValue,onChange,variant='underline',style}){
  const [inner,setInner]=React.useState(defaultValue??(items[0]&&(items[0].value??items[0])));
  const cur=value!==undefined?value:inner;
  const pick=v=>{if(value===undefined)setInner(v);onChange&&onChange(v)};
  const pill=variant==='pill';
  return <div role="tablist" style={{display:'flex',gap:pill?4:24,borderBottom:pill?'none':'1px solid var(--border-subtle)',background:pill?'var(--surface-muted)':'transparent',padding:pill?4:0,borderRadius:pill?'var(--radius-md)':0,width:pill?'fit-content':undefined,...style}}>
    {items.map(it=>{const v=it.value??it,l=it.label??it,on=v===cur;
      return <button key={v} role="tab" aria-selected={on} onClick={()=>pick(v)}
        style={{background:pill&&on?'var(--surface-card)':'transparent',boxShadow:pill&&on?'var(--shadow-xs)':'none',border:'none',borderBottom:pill?'none':'2px solid '+(on?'var(--brand)':'transparent'),marginBottom:pill?0:-1,padding:pill?'6px 14px':'10px 0',borderRadius:pill?'var(--radius-sm)':0,fontFamily:'var(--font-body)',fontSize:14,fontWeight:600,color:on?'var(--text-strong)':'var(--text-muted)',cursor:'pointer',transition:'color var(--dur-fast)'}}>{l}</button>})}
  </div>;
}
