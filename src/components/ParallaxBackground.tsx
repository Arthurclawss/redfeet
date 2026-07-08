'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -50]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic Glow Circles */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-red-600/10 blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-blue-600/5 blur-[140px]"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[10%] left-[15%] w-[35vw] h-[35vw] rounded-full bg-purple-600/10 blur-[110px]"
      />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-repeat pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Subtle lines */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-red-950/20 via-transparent to-transparent opacity-40" />
    </div>
  );
};

export default ParallaxBackground;
