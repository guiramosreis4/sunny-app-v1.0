import React from 'react';

interface SunnyLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const SunnySunIcon: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block flex-shrink-0 ${className}`}
  >
    {/* Sun Rays */}
    <circle cx="18" cy="4" r="1.75" fill="#FFC400" />
    <circle cx="28" cy="8" r="1.75" fill="#FFC400" />
    <circle cx="32" cy="18" r="1.75" fill="#FFC400" />
    <circle cx="28" cy="28" r="1.75" fill="#FFC400" />
    <circle cx="18" cy="32" r="1.75" fill="#FFC400" />
    <circle cx="8" cy="28" r="1.75" fill="#FFC400" />
    <circle cx="4" cy="18" r="1.75" fill="#FFC400" />
    <circle cx="8" cy="8" r="1.75" fill="#FFC400" />

    {/* Sun Core */}
    <circle cx="18" cy="18" r="9.5" fill="#FFC400" />

    {/* Friendly Face / Core Glow */}
    <circle cx="15" cy="16.5" r="1.25" fill="#1A1C1C" />
    <circle cx="21" cy="16.5" r="1.25" fill="#1A1C1C" />
    <path
      d="M15.5 20C16.2 21 19.8 21 20.5 20"
      stroke="#1A1C1C"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export const SunnyKeySunHero: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-flex items-center justify-center ${className}`}>
    {/* Ambient Glow */}
    <div className="absolute inset-0 bg-[#FFC400]/25 rounded-full blur-xl transform scale-125" />

    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative drop-shadow-sm">
      {/* Radiant Sun Rays */}
      <line x1="44" y1="6" x2="44" y2="15" stroke="#FFC400" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="44" y1="73" x2="44" y2="82" stroke="#FFC400" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="6" y1="44" x2="15" y2="44" stroke="#FFC400" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="73" y1="44" x2="82" y2="44" stroke="#FFC400" strokeWidth="3.5" strokeLinecap="round" />
      
      <line x1="17.5" y1="17.5" x2="24" y2="24" stroke="#FFC400" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="64" y1="64" x2="70.5" y2="70.5" stroke="#FFC400" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="17.5" y1="70.5" x2="24" y2="64" stroke="#FFC400" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="64" y1="24" x2="70.5" y2="17.5" stroke="#FFC400" strokeWidth="3.5" strokeLinecap="round" />

      {/* Golden Center Sun Circle */}
      <circle cx="44" cy="44" r="24" fill="#FFC400" />
      <circle cx="44" cy="44" r="21" fill="#FFCE1F" />

      {/* Key Silhouette */}
      <circle cx="36" cy="44" r="5" stroke="#1A1C1C" strokeWidth="3" fill="none" />
      <path d="M41 44H56" stroke="#1A1C1C" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 44V49" stroke="#1A1C1C" strokeWidth="3" strokeLinecap="round" />
      <path d="M54 44V48" stroke="#1A1C1C" strokeWidth="3" strokeLinecap="round" />
    </svg>
  </div>
);

export const SunnyLockHero: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative inline-flex items-center justify-center ${className}`}>
    <div className="w-20 h-20 rounded-2xl bg-white shadow-md border border-neutral-100 flex items-center justify-center relative p-3">
      {/* Inner Yellow Card */}
      <div className="w-full h-full rounded-xl bg-[#FFC400] flex items-center justify-center relative shadow-sm">
        {/* Open Padlock */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9"
            stroke="#1A1C1C"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <rect x="5" y="10" width="14" height="11" rx="3" fill="#1A1C1C" />
          <circle cx="12" cy="15" r="1.5" fill="#FFC400" />
          <path d="M12 16.5V18.5" stroke="#FFC400" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        {/* Lightning badge bottom right */}
        <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-[#FF8A00] rounded-full flex items-center justify-center shadow-md border-2 border-white text-white">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export const SunnySmallHeroCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-14 h-14 rounded-2xl bg-[#FFC400] flex items-center justify-center shadow-sm ${className}`}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A1C1C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  </div>
);

export const SunnyLogo: React.FC<SunnyLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 22,
    md: 26,
    lg: 32,
    xl: 40,
  };

  const textClasses = {
    sm: 'text-base font-bold tracking-tight',
    md: 'text-xl font-extrabold tracking-tight',
    lg: 'text-2xl font-extrabold tracking-tight',
    xl: 'text-3xl font-black tracking-tight',
  };

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <div className="flex items-center justify-center bg-[#FFC400]/20 rounded-full p-1 border border-[#FFC400]/40">
        <SunnySunIcon size={iconSizes[size]} />
      </div>
      {showText && (
        <span className={`text-[#1A1C1C] lowercase font-['Poppins'] ${textClasses[size]}`}>
          sunny
        </span>
      )}
    </div>
  );
};
