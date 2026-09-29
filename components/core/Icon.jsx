import React from 'react';
import { icons } from 'lucide-react';
const pascal=n=>n.replace(/(^|-)([a-z0-9])/g,(_,a,b)=>b.toUpperCase());
export function Icon({name,size=20,strokeWidth=1.75,color='currentColor',style,...rest}){
  const Cmp=icons[pascal(name)];
  if(!Cmp)return null;
  return <Cmp size={size} strokeWidth={strokeWidth} color={color} aria-hidden="true" style={{flexShrink:0,display:'inline-block',verticalAlign:'middle',...style}} {...rest}/>;
}
