export default function FloatingShapes() {
  // Pure CSS animations — no Framer Motion overhead, no JS re-renders
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute w-[50px] h-[50px] opacity-[0.06] animate-float"
        style={{
          left: '12%', top: '22%',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
        }}
      />
      <div
        className="absolute w-[35px] h-[35px] rounded-full opacity-[0.05] animate-float-slow"
        style={{
          left: '82%', top: '18%',
          border: '1px solid rgba(59,130,246,0.2)',
          background: 'rgba(6,182,212,0.05)',
        }}
      />
      <div
        className="absolute w-[40px] h-[40px] opacity-[0.05] animate-float-delayed"
        style={{
          left: '70%', top: '72%',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
        }}
      />
      <div
        className="absolute w-[30px] h-[30px] rounded-md opacity-[0.04] animate-float-slow"
        style={{
          left: '18%', top: '70%',
          border: '1px solid rgba(59,130,246,0.15)',
          background: 'rgba(59,130,246,0.03)',
          transform: 'rotate(20deg)',
        }}
      />
    </div>
  );
}
