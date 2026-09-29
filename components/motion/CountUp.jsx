"use client";
import React from 'react';
import { useInView, prefersReducedMotion } from './useInView.js';
export function CountUp({value,prefix='',suffix='',decimals=0,duration=1400,style}){
  const ref=React.useRef(null);const inView=useInView(ref);const [n,setN]=React.useState(0);
  React.useEffect(()=>{if(!inView)return;if(prefersReducedMotion()){setN(value);return}
    let raf,t0;const step=t=>{t0=t0||t;const p=Math.min(1,(t-t0)/duration);const e=1-Math.pow(1-p,4);setN(value*e);if(p<1)raf=requestAnimationFrame(step)};
    raf=requestAnimationFrame(step);return()=>cancelAnimationFrame(raf)},[inView,value]);
  return <span ref={ref} style={{fontVariantNumeric:'tabular-nums',...style}}>{prefix}{n.toFixed(decimals)}{suffix}</span>;
}
