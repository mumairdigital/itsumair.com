"use client";
import React from 'react';
export function useInView(ref,{once=true,threshold=0.15,rootMargin='0px 0px -10% 0px'}={}){
  const [v,setV]=React.useState(false);
  React.useEffect(()=>{const el=ref.current;if(!el)return;
    if(typeof IntersectionObserver==='undefined'){setV(true);return}
    const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setV(true);once&&io.disconnect()}else if(!once)setV(false)},{threshold,rootMargin});
    io.observe(el);return()=>io.disconnect()},[]);
  return v;
}
export const prefersReducedMotion=()=>typeof window!=='undefined'&&window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
