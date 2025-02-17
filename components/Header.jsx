'use client';
import React, { useState, useEffect } from 'react';
import { FaMapPin, FaPhone, FaMailBulk, FaWhatsapp } from "react-icons/fa";

// components
import Logo from './Logo';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener('scroll', scrollYPos);
  });

  return (
    <header
      className={`${
        header
          ? 'py-4 bg-white shadow-lg dark:bg-accent'
          : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-secondary'}`}
    >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-4 lg:justify-between'>
          <Logo />
          <div className='flex items-center gap-x-6'>
          <div className="text-white grid w-100">
          <div className="mb-1 text-white">
              <div className="flex text-[12px] gap-2">
                <FaMapPin className="text-white text-[14px]" />
                   <p>г.Алматы, улица Толе би 302, офис 39</p>
                  </div>
             </div>
             <div className="flex flex-col mb-1 text-white">
              <div className="flex text-[12px] gap-2">
                <FaMailBulk className="text-white text-[14px]" />
                   <p>ifactoringcompany@gmail.com</p>
                  </div>
             </div>
            <div className="flex flex-col mb-1 text-white">
              <div className="flex text-[12px] gap-2">
                <FaPhone className="text-white text-[14px]"/>
                   <p>+7 777 121 6161</p>
                  </div>
             </div>
             <div className="flex flex-col mb-[-15px] text-white">
              <div className="flex text-[12px] gap-2">
                <FaWhatsapp className="text-white text-[17px]"/>
                   <p>+7 708 831 3522</p>
                  </div>
             </div>
          </div>
            
            {/* nav
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            */}
            {/* mobile nav */}
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
