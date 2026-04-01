import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from '../../assets/svg/msheireb-logo.svg';
import searchIcon from '../../assets/svg/search-icon.svg';
import bellIcon from '../../assets/svg/bell-icon.svg';
import micIcon from '../../assets/svg/mic-icon.svg';
import OutlineWrapper from "./OutlineWrapper";
import GlassFrame from "./GlassFrame";
import QuickActionsWrapper from "./QuickActionsWrapper";
import GlassButton from "./GlassButton";

const navLinks = ['Home', 'Explore', 'Navigate', 'Commute', 'More'];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <QuickActionsWrapper className="w-full p-0 shadow-figma-drop">



      {/* Navbar */}
      <nav className="w-full sticky top-0 z-50 ">
        <div className="max-w-[1440px] h-[64px] sm:h-[72px] lg:h-[88px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">

          {/* Left: Logo + Mobile Hamburger */}
          <div className="flex justify-start items-center gap-3">
            <button
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors rounded-full hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <a href="/" className="flex-shrink-0 transition-opacity hover:opacity-80 duration-200">
              <img
                src={logoImg}
                alt="Msheireb Downtown Doha"
                className="h-[24px] sm:h-[30px] lg:h-[36px] w-auto brightness-0 invert object-contain"
              />
            </a>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="flex-none hidden lg:flex items-center gap-8 xl:gap-[6rem]">
            <a
              href="#"
              className="nav-link text-white  tabs-heading-semi"
            >
              Home
            </a>
            {navLinks.slice(1).map((item) => (
              <a
                key={item}
                href="#"
                className="nav-link text-white tabs-heading-semi font-regular"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right: Search + Bell */}
          <div className="flex justify-end items-center gap-2 sm:gap-3 lg:gap-5">
            {/* Glass Search Input */}
            <OutlineWrapper>
              <div className="relative hidden sm:flex items-center group">
                <div className="absolute left-3 sm:left-4 z-10">
                  <img src={searchIcon} alt="search" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] lg:w-[17px] lg:h-[17px]" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="glass-input h-[36px] sm:h-[40px] lg:h-[44px] pl-9 sm:pl-10 lg:pl-12 pr-9 sm:pr-10 lg:pr-12 text-xs sm:text-sm text-white placeholder:text-white  "
                />
                <button className="absolute right-3 sm:right-4 z-10 text-white/50 hover:text-white/80 transition-colors">
                  <img src={micIcon} alt="mic" className="h-[18px] w-auto brightness-0 invert" />
                </button>
              </div>
            </OutlineWrapper>

            {/* Mobile search icon */}
            <button className="sm:hidden p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
              <img src={searchIcon} alt="search" className="w-[20px] h-[20px]" />
            </button>

            {/* Bell */}

            <img src={bellIcon} alt="notifications" className="w-[20px] h-[20px] brightness-0 invert" />

          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Backdrop */}
        {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" /> */}

        {/* Drawer Panel */}
        <div
          className={`absolute top-[64px] sm:top-[72px] left-0 right-0 transition-transform duration-300 glass-drawer ${isMenuOpen ? 'translate-y-0' : '-translate-y-3'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-5 sm:py-6 flex flex-col gap-4">
            {navLinks.map((item, idx) => (
              <a
                key={item}
                href="#"
                className={`py-1.5 text-sm sm:text-base border-b border-white/5 last:border-0 transition-colors duration-200 ${idx === 0 ? 'text-white' : 'text-white/60 hover:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            {/* Mobile Search inside drawer */}
            <GlassButton>
              <div className="relative flex items-center mt-1">
                <div className="absolute left-3 pointer-events-none z-10 opacity-50">
                  <img src={searchIcon} alt="search" className="w-[15px] h-[15px]" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-[40px] pl-9 pr-4 text-sm text-white 0"
                />
              </div>
            </GlassButton>
          </div>
        </div>
      </div>
    </QuickActionsWrapper>
  );
}
