export default function Hero() {
  return (
    <section className="relative w-full min-h-[700px] flex overflow-hidden">
      <img 
        src='../../public/boom.png' 
        alt="boom" 
        className="absolute left-1/2 top-15/20 -translate-y-1/2 pointer-events-none select-none" 
        style={{
          width: '1284.606px',
          height: '1273.621px',
          aspectRatio: '1284.61/1273.62',
        }}
        draggable="false" 
      />
      <img 
        src='../../public/redlight.png' 
        alt="redlight" 
        className="absolute left-1/2 top-1/10 pointer-events-none select-none" 
        style={{
          width: '1415.628px',
          height: '814.116px',
          transform: 'rotate(-9.24deg)',
          aspectRatio: '1015.63/614.12',
        }}
        draggable="false" 
      />
      <div className="relative z-10 flex flex-col gap-8 max-w-5xl px-8">
        <h1 className="uppercase text-[96px] font-black leading-none tracking-[2.88px] text-[#FFF] font-montserrat">
          Crafting Fun,<br />Pirate Style.
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-[96px] font-black text-white font-montserrat">🦜🏴‍☠️</span>
          <div className="relative rotate-[2.13deg]">
            <div className="w-[676px] h-[146px] border border-black bg-[#FFEFE5] shadow-[8px_14px_0px_0px_rgba(0,0,0,0.25)] flex items-center justify-center">
              <span className="font-bahnschrift text-[76px] font-semibold text-black tracking-[7.68px] rotate-[2.727deg]">TALK BUSINESS</span>
            </div>
          </div>
        </div>
        <p className="font-bahnschrift text-[24px] font-semibold text-[#FFF] tracking-[1.92px] max-w-3xl">
          Our games are built for grown-ups who refuse to grow up—packed with sharp wit, bold worlds, and just the right amount of trouble.
        </p>
      </div>
      <img 
        src='../../public/pirate.png' 
        alt="pirate" 
        className="absolute left-1/2 bottom-0 z-20 pointer-events-none select-none" 
        style={{
          width: '1600px',
          height: '850px;',
          transform: 'rotate(-1.76deg)',
          aspectRatio: '766.98/809.71',
        }}
        draggable="false" 
      />
    </section>
  )
} 