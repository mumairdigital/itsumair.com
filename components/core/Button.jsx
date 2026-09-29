"use client";
import React from 'react';
import Link from 'next/link';
import { Icon } from './Icon.jsx';
const SIZES={sm:{h:'var(--control-sm)',px:12,fs:13,gap:6,ic:16},md:{h:'var(--control-md)',px:16,fs:14,gap:8,ic:18},lg:{h:'var(--control-lg)',px:24,fs:16,gap:10,ic:20}};
const VARIANTS={
  primary:{bg:'var(--brand)',fg:'var(--on-brand)',bd:'transparent',hbg:'var(--brand-hover)',pbg:'var(--brand-press)'},
  secondary:{bg:'var(--surface-card)',fg:'var(--text-strong)',bd:'var(--border-default)',hbg:'var(--surface-hover)',pbg:'var(--bg-sunken)',hbd:'var(--border-strong)'},
  ghost:{bg:'transparent',fg:'var(--text-strong)',bd:'transparent',hbg:'var(--surface-hover)',pbg:'var(--bg-sunken)'},
  inverse:{bg:'var(--bg-inverse)',fg:'var(--text-inverse)',bd:'transparent',hbg:'var(--ink-700)',pbg:'var(--ink-800)'},
  accent:{bg:'var(--accent)',fg:'var(--on-accent)',bd:'transparent',hbg:'var(--apricot-300)',pbg:'var(--apricot-500)'},
  danger:{bg:'var(--danger)',fg:'#fff',bd:'transparent',hbg:'var(--red-700)',pbg:'var(--red-700)'},
  link:{bg:'transparent',fg:'var(--text-link)',bd:'transparent',hbg:'transparent',pbg:'transparent'}
};
export function Button({variant='primary',size='md',iconLeft,iconRight,fullWidth,disabled,loading,children,onClick,type='button',href,style,...rest}){
  const [h,setH]=React.useState(false),[p,setP]=React.useState(false),[f,setF]=React.useState(false);
  const s=SIZES[size]||SIZES.md,v=VARIANTS[variant]||VARIANTS.primary,off=disabled||loading;
  const isLink=variant==='link';
  const css={display:fullWidth?'flex':'inline-flex',width:fullWidth?'100%':undefined,alignItems:'center',justifyContent:'center',gap:s.gap,height:isLink?'auto':s.h,padding:isLink?0:'0 '+s.px+'px',fontFamily:'var(--font-body)',fontSize:s.fs,fontWeight:600,lineHeight:1,letterSpacing:'-0.005em',borderRadius:'var(--radius-control)',border:'1px solid '+(h&&v.hbd?v.hbd:v.bd),background:off?(isLink||variant==='ghost'?'transparent':'var(--surface-muted)'):p?v.pbg:h?v.hbg:v.bg,color:off?'var(--text-faint)':v.fg,cursor:off?'not-allowed':'pointer',textDecoration:isLink&&h?'underline':'none',textUnderlineOffset:3,transform:p&&!off&&!isLink?'translateY(1px)':'none',boxShadow:f?'var(--focus-shadow)':variant==='primary'&&h&&!off?'var(--shadow-brand)':'none',transition:'background var(--dur-fast) var(--ease-standard),box-shadow var(--dur-base) var(--ease-out),transform var(--dur-fast)',outline:'none',whiteSpace:'nowrap',...style};
  const Tag=href?(href.startsWith('/')?Link:'a'):'button';
  return <Tag href={href} type={href?undefined:type} disabled={!href&&off} aria-disabled={off||undefined} aria-busy={loading||undefined} onClick={off?undefined:onClick} style={css}
    onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setP(false)}} onMouseDown={()=>setP(true)} onMouseUp={()=>setP(false)}
    onFocus={e=>setF(e.target.matches(':focus-visible'))} onBlur={()=>setF(false)} {...rest}>
    {loading?<span style={{width:s.ic-4,height:s.ic-4,border:'2px solid currentColor',borderRightColor:'transparent',borderRadius:'50%',animation:'mu-spin .7s linear infinite'}}/>:iconLeft&&<Icon name={iconLeft} size={s.ic}/>}
    {children}
    {iconRight&&<Icon name={iconRight} size={s.ic} style={{transition:'transform var(--dur-base) var(--ease-out)',transform:h&&!off?'translateX(2px)':'none'}}/>}
    <style>{'@keyframes mu-spin{to{transform:rotate(360deg)}}'}</style>
  </Tag>;
}
