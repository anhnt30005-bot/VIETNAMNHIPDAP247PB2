
import React from 'react';

const Logo: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-gold">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 7L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 7L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 4.5L7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <Logo />
            <span className="text-xl font-bold text-brand-blue tracking-tight">Việt Nam Nhịp Đập 247</span>
        </div>
        <a href="#newsletter" className="hidden md:inline-block bg-brand-red text-white font-semibold py-2 px-5 rounded-lg hover:bg-red-700 transition-colors duration-300">
            Đăng Ký Nhận Tin
        </a>
      </div>
    </header>
  );
};

export default Header;
