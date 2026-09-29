"use client";
import React from 'react';
import { useInView, prefersReducedMotion } from './useInView.js';
export function Reveal({children,delay=0,y=16,duration=600,as='div',once=true,style,...rest}){
  const ref=React.useRef(null);const inView=useInView(ref,{once});const rm=prefersReducedMotion();
  const Tag=as;const on=inView||rm;
  return <Tag ref={ref} style={{opacity:on?1:0,transform:on?'none':'translateY('+y+'px)',transition:rm?'none':'opacity '+duration+'ms var(--ease-out) '+delay+'ms, transform '+duration+'ms var(--ease-out) '+delay+'ms',willChange:'opacity, transform',...style}} {...rest}>{children}</Tag>;
}
