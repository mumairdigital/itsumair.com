"use client";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { ProofFrame } from "@/components/motion/ProofFrame";
import { PROOF } from "@/lib/proof";

type Shot = (typeof PROOF)[number];

function Frame({ p }: { p: Shot }) {
  return (
    <ProofFrame src={p.src} alt={p.alt} label={p.label} stat={p.stat} statLabel={p.statLabel} ratio="16/10" fit="cover" position="left top" />
  );
}

/**
 * Hero option A — proof wall: two columns of real result screenshots scrolling in opposite directions.
 * Only 3 screenshots exist so far, so each column cycles all three in a different order.
 * Add more entries to lib/proof.ts and they are picked up automatically.
 */
export function HeroWall() {
  const a = PROOF;
  const b = [...PROOF.slice(1), PROOF[0]];
  return (
    <Reveal delay={200} y={24} style={{ height: 600, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <Marquee direction="up" duration={50} gap={16}>{a.map((p) => <Frame key={p.id} p={p} />)}</Marquee>
      <Marquee direction="down" duration={56} gap={16}>{b.map((p) => <Frame key={p.id} p={p} />)}</Marquee>
    </Reveal>
  );
}
