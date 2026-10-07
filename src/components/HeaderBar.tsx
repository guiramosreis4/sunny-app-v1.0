import React from 'react';
import { ArrowLeft, User } from 'lucide-react';
import { SunnyLogo } from './SunnyLogo';

interface HeaderBarProps {
  onBack?: () => void;
  titleRight?: string;
  showBack?: boolean;
  className?: string;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  onBack,
  titleRight = 'Recuperar Senha',
  showBack = true,
  className = '',
}) => {
  return (
    <header className={`w-full flex items-center justify-between px-4 py-3 bg-[#F9F9F9]/80 backdrop-blur-sm sticky top-0 z-20 border-b border-black/[0.04] ${className}`}>
      {/* Left Back Arrow */}
      <div className="w-9 flex items-center justify-start">
        {showBack ? (
          <button
            type="button"
            onClick={onBack}
            aria-label="Voltar"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#1A1C1C] hover:bg-black/5 active:scale-95 transition-transform cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
        ) : (
          <div className="w-9" />
        )}
      </div>

      {/* Center Logo */}
      <div className="flex items-center justify-center">
        <SunnyLogo size="sm" showText={true} />
      </div>

      {/* Right User Indicator */}
      <div className="flex items-center gap-1.5 text-right">
        <span className="text-xs font-semibold text-[#1A1C1C] hidden xs:inline tracking-tight">
          {titleRight}
        </span>
        <div className="w-8 h-8 rounded-full bg-[#E58A1F] text-white flex items-center justify-center shadow-xs">
          <User className="w-4 h-4 fill-white text-white" />
        </div>
      </div>
    </header>
  );
};
