import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface DeviceFrameProps {
  children: React.ReactNode;
  activeScreenTitle?: string;
  isPhoneMode?: boolean;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  children,
  activeScreenTitle = 'SUNNY',
  isPhoneMode = true,
}) => {
  // Current simulated time
  const currentTime = '09:41';

  if (!isPhoneMode) {
    return (
      <div className="w-full max-w-xl mx-auto min-h-screen bg-[#F5F5F5] py-4 px-2 sm:px-4">
        <div className="bg-white rounded-3xl shadow-sm border border-neutral-200/80 overflow-hidden min-h-[780px] flex flex-col">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto my-4 sm:my-8 transition-all duration-300">
      {/* Outer Phone Shell */}
      <div className="w-[375px] sm:w-[412px] min-h-[820px] bg-[#151515] rounded-[48px] p-3 sm:p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.1)] border-4 border-neutral-800">
        {/* Dynamic Island / Speaker Pill */}
        <div className="relative w-full h-full bg-[#F5F5F5] rounded-[40px] overflow-hidden flex flex-col">
          {/* Status Bar */}
          <div className="w-full h-11 px-6 flex items-center justify-between text-[#1A1C1C] text-xs font-semibold select-none pt-1 z-30">
            <span>{currentTime}</span>

            {/* Dynamic Island Pill */}
            <div className="w-24 h-5 bg-[#151515] rounded-full mx-auto" />

            <div className="flex items-center gap-1.5 text-neutral-800">
              <Signal className="w-3.5 h-3.5 fill-current" />
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-4 h-4 fill-current" />
            </div>
          </div>

          {/* Screen Content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col relative">
            {children}
          </div>

          {/* Home Indicator Bar */}
          <div className="w-full py-2 flex items-center justify-center bg-[#F5F5F5]">
            <div className="w-32 h-1 bg-neutral-400/60 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
