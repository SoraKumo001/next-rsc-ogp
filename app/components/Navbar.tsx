import Link from "next/link";
import OGPLink from "./OGPLink";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-8 md:px-12 pointer-events-none">
      <Link href="/" className="pointer-events-auto group">
        <span className="text-xl font-serif italic tracking-tight text-white hover:opacity-50 transition-opacity">
          Satoru
        </span>
      </Link>
      
      <nav className="flex items-center gap-8 md:gap-12 pointer-events-auto">
        <Link href="/showcase" className="text-[10px] uppercase tracking-[0.3em] font-bold text-studio-muted hover:text-white transition-colors relative group">
          Showcase
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
        </Link>
        <Link href="/pricing" className="text-[10px] uppercase tracking-[0.3em] font-bold text-studio-muted hover:text-white transition-colors relative group">
          Licence
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
        </Link>
        
        <div className="w-[1px] h-4 bg-white/10 hidden md:block" />
        
        <OGPLink 
          path="/" 
          className="text-[10px] uppercase tracking-[0.3em] font-bold text-white relative group"
        >
          Dynamic OGP
          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white/20 transition-all group-hover:bg-white" />
        </OGPLink>
      </nav>
    </header>
  );
}
