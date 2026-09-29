"use client";
import React from 'react';
export function Marquee({children,direction='left',duration=40,gap=24,pauseOnHover=true,fade=true,style}){
  const [paused,setPaused]=React.useState(false);
  const vertical=direction==='up'||direction==='down';
  const reverse=direction==='right'||direction==='down';
  const name='mu-marquee-'+(vertical?'y':'x');
  const mask=fade?(vertical?'linear-gradient(to bottom,transparent,#000 12%,#000 88%,transparent)':'linear-gradient(to right,transparent,#000 8%,#000 92%,transparent)'):undefined;
  const track={display:'flex',flexDirection:vertical?'column':'row',gap,flexShrink:0,paddingRight:vertical?0:gap,paddingBottom:vertical?gap:0,animation:name+' '+duration+'s linear infinite',animationDirection:reverse?'reverse':'normal',animationPlayState:paused?'paused':'running'};
  return <div onMouseEnter={()=>pauseOnHover&&setPaused(true)} onMouseLeave={()=>setPaused(false)}
    style={{display:'flex',flexDirection:vertical?'column':'row',overflow:'hidden',WebkitMaskImage:mask,maskImage:mask,height:vertical?'100%':undefined,...style}}>
    <style>{'@keyframes mu-marquee-x{to{transform:translateX(-100%)}}@keyframes mu-marquee-y{to{transform:translateY(-100%)}}@media (prefers-reduced-motion:reduce){[data-mu-marquee]{animation:none!important}}'}</style>
    <div data-mu-marquee="" style={track}>{children}</div>
    <div data-mu-marquee="" aria-hidden="true" style={{...track,pointerEvents:'auto'}}>{children}</div>
  </div>;
}
