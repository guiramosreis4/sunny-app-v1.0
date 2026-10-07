import React, { useState } from 'react';
import { ScreenId, ViewMode } from './types';
import { LoginScreen } from './components/screens/LoginScreen';
import { ForgotPasswordScreen } from './components/screens/ForgotPasswordScreen';
import { VerifyCodeScreen } from './components/screens/VerifyCodeScreen';
import { NewPasswordScreen } from './components/screens/NewPasswordScreen';
import { DashboardScreen } from './components/screens/DashboardScreen';
import { AllScreensGallery } from './components/screens/AllScreensGallery';
import { DeviceFrame } from './components/DeviceFrame';
import { SpecialistModal } from './components/SpecialistModal';
import { ReferenceLinksModal } from './components/ReferenceLinksModal';
import { SunnySunIcon, SunnyLogo } from './components/SunnyLogo';
import {
  Smartphone,
  Maximize2,
  Grid,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Layers,
} from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('login');
  const [viewMode, setViewMode] = useState<ViewMode>('phone');
  const [userEmail, setUserEmail] = useState('cliente@sunny.com');
  const [specialistModalOpen, setSpecialistModalOpen] = useState(false);
  const [referenceModalOpen, setReferenceModalOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  // Screen flow navigation handlers
  const handleLoginSuccess = (identifier: string) => {
    setUserEmail(identifier);
    showToast(`Bem-vindo(a) à sua Área do Cliente SUNNY!`);
    setCurrentScreen('dashboard');
  };

  const handleForgotSuccess = (channel: 'email' | 'phone', target: string) => {
    setUserEmail(target);
    showToast(`Código enviado com sucesso para ${target}!`);
    setCurrentScreen('verify');
  };

  const handleCodeValid = (code: string) => {
    showToast(`Código ${code} verificado com sucesso!`);
    setCurrentScreen('new-password');
  };

  const handlePasswordResetSuccess = () => {
    showToast(`Senha atualizada com segurança! Redirecionando para sua conta...`);
    setTimeout(() => {
      setCurrentScreen('dashboard');
    }, 600);
  };

  const screenNavItems: { id: ScreenId; label: string; stepNum: string }[] = [
    { id: 'login', label: '1. Login', stepNum: '01' },
    { id: 'forgot', label: '2. Recuperação', stepNum: '02' },
    { id: 'verify', label: '3. Código 6 Dígitos', stepNum: '03' },
    { id: 'new-password', label: '4. Nova Senha', stepNum: '04' },
    { id: 'dashboard', label: '5. Área do Cliente', stepNum: '05' },
    { id: 'gallery', label: 'Galeria & Comparação', stepNum: '✦' },
  ];

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-[#1A1C1C] flex flex-col font-['Poppins']">
      {/* Top Application Navigation & Switcher Bar */}
      <nav className="w-full bg-white border-b border-neutral-200/90 shadow-2xs sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Logo & Quick Info */}
          <div className="flex items-center gap-3">
            <SunnyLogo size="sm" showText={true} />
            <span className="hidden sm:inline-block text-[11px] font-semibold text-neutral-400 border-l border-neutral-200 pl-3">
              Design System SUNNY
            </span>
          </div>

          {/* Screen Switcher Pills */}
          <div className="flex items-center gap-1 overflow-x-auto py-1 max-w-full no-scrollbar">
            {screenNavItems.map((item) => {
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentScreen(item.id);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#FFC400] text-[#1A1C1C] shadow-2xs font-bold'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 hover:text-[#1A1C1C]'
                  }`}
                >
                  <span className="text-[10px] opacity-75">{item.stepNum}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* View Mode Controls */}
          <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-xl">
            <button
              onClick={() => setReferenceModalOpen(true)}
              title="Mapeamento e Links das Imagens"
              className="p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer text-[#8C5E00] hover:bg-white hover:shadow-2xs"
            >
              <Layers className="w-4 h-4" />
              <span className="hidden lg:inline">Imagens Ref</span>
            </button>

            <button
              onClick={() => setViewMode('phone')}
              title="Modo Celular (Mockup 1:1)"
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                viewMode === 'phone'
                  ? 'bg-white text-[#1A1C1C] shadow-2xs'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden md:inline">Celular</span>
            </button>

            <button
              onClick={() => setViewMode('responsive')}
              title="Modo Expandido"
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                viewMode === 'responsive'
                  ? 'bg-white text-[#1A1C1C] shadow-2xs'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden md:inline">Expandido</span>
            </button>

            <button
              onClick={() => {
                setCurrentScreen('gallery');
                setViewMode('gallery');
              }}
              title="Galeria de Todas as Telas"
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                currentScreen === 'gallery'
                  ? 'bg-[#FFC400] text-[#1A1C1C] shadow-2xs font-bold'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span className="hidden md:inline">Galeria</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 bg-[#1A1C1C] text-white text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border border-neutral-700 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 text-[#FFC400]" />
          <span>{toast}</span>
        </div>
      )}

      {/* Main App Content */}
      <main className="flex-1 flex flex-col justify-center items-center py-2 sm:py-6 px-2 sm:px-4">
        {currentScreen === 'gallery' ? (
          <AllScreensGallery onSelectScreen={(screen) => setCurrentScreen(screen)} />
        ) : (
          <DeviceFrame isPhoneMode={viewMode === 'phone'}>
            {currentScreen === 'login' && (
              <LoginScreen
                onNavigateToForgot={() => setCurrentScreen('forgot')}
                onLoginSuccess={handleLoginSuccess}
              />
            )}

            {currentScreen === 'forgot' && (
              <ForgotPasswordScreen
                onBackToLogin={() => setCurrentScreen('login')}
                onSubmitSuccess={handleForgotSuccess}
                onOpenHelp={() => setSpecialistModalOpen(true)}
              />
            )}

            {currentScreen === 'verify' && (
              <VerifyCodeScreen
                onBack={() => setCurrentScreen('forgot')}
                onCodeValid={handleCodeValid}
                onOpenSpecialist={() => setSpecialistModalOpen(true)}
                targetAddress={userEmail}
                onChangeTarget={() => setCurrentScreen('forgot')}
              />
            )}

            {currentScreen === 'new-password' && (
              <NewPasswordScreen
                onBackToLogin={() => setCurrentScreen('login')}
                onPasswordResetSuccess={handlePasswordResetSuccess}
              />
            )}

            {currentScreen === 'dashboard' && (
              <DashboardScreen
                userEmail={userEmail}
                onLogout={() => {
                  setCurrentScreen('login');
                  showToast('Você saiu com segurança.');
                }}
                onOpenSpecialist={() => setSpecialistModalOpen(true)}
              />
            )}
          </DeviceFrame>
        )}
      </main>

      {/* Lab Specialist Help Modal */}
      <SpecialistModal
        isOpen={specialistModalOpen}
        onClose={() => setSpecialistModalOpen(false)}
      />

      {/* Reference Images and Links Modal */}
      <ReferenceLinksModal
        isOpen={referenceModalOpen}
        onClose={() => setReferenceModalOpen(false)}
        onSelectScreen={(screen) => setCurrentScreen(screen)}
      />

      {/* Bottom Sub-Footer with Direct Navigation Links */}
      <footer className="w-full bg-white border-t border-neutral-200/80 py-4 px-4 text-center text-xs text-neutral-500">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <SunnySunIcon size={20} />
            <span className="font-semibold text-neutral-700">SUNNY Assistência Técnica Especializada</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={() => setCurrentScreen('login')}
              className="hover:text-[#FF8A00] transition-colors cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => setCurrentScreen('forgot')}
              className="hover:text-[#FF8A00] transition-colors cursor-pointer"
            >
              Recuperação
            </button>
            <button
              onClick={() => setCurrentScreen('verify')}
              className="hover:text-[#FF8A00] transition-colors cursor-pointer"
            >
              Código 2FA
            </button>
            <button
              onClick={() => setCurrentScreen('new-password')}
              className="hover:text-[#FF8A00] transition-colors cursor-pointer"
            >
              Nova Senha
            </button>
            <button
              onClick={() => setCurrentScreen('gallery')}
              className="text-[#8C5E00] font-bold hover:underline cursor-pointer"
            >
              Ver Todas as Telas
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
