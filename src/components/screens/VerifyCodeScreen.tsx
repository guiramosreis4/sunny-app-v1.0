import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldCheck,
  Shield,
  Pencil,
  Clipboard,
  Clock,
  RotateCw,
  ArrowRight,
  Headphones,
  MessageSquare,
  Lock,
} from 'lucide-react';
import { HeaderBar } from '../HeaderBar';
import { SunnyLockHero } from '../SunnyLogo';

interface VerifyCodeScreenProps {
  onBack: () => void;
  onCodeValid: (code: string) => void;
  onOpenSpecialist: () => void;
  targetAddress?: string;
  onChangeTarget?: () => void;
}

export const VerifyCodeScreen: React.FC<VerifyCodeScreenProps> = ({
  onBack,
  onCodeValid,
  onOpenSpecialist,
  targetAddress = 'c****e@sunny.com',
  onChangeTarget,
}) => {
  const [digits, setDigits] = useState<string[]>(['7', '4', '2', '', '', '']);
  const [countdown, setCountdown] = useState(43);
  const [canResend, setCanResend] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for resend
  useEffect(() => {
    if (countdown <= 0) {
      setCanResend(true);
      return;
    }
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleDigitChange = (index: number, value: string) => {
    // Only accept numeric digit
    const cleaned = value.replace(/\D/g, '');
    if (!cleaned && value !== '') return;

    const newDigits = [...digits];
    if (cleaned.length > 0) {
      newDigits[index] = cleaned[cleaned.length - 1];
      setDigits(newDigits);
      setError('');
      // Auto move to next input
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      newDigits[index] = '';
      setDigits(newDigits);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePasteSMS = () => {
    // Auto populate sample code like in screenshot: 742819
    const sample = ['7', '4', '2', '8', '1', '9'];
    setDigits(sample);
    setError('');
    setToastMessage('Código do SMS colado com sucesso!');
    setTimeout(() => setToastMessage(null), 3000);
    inputRefs.current[5]?.focus();
  };

  const handleResend = () => {
    setCountdown(60);
    setCanResend(false);
    setToastMessage('Novo código de 6 dígitos enviado por WhatsApp e E-mail!');
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleValidate = () => {
    const fullCode = digits.join('');
    if (fullCode.length < 6) {
      setError('Por favor, insira todos os 6 dígitos.');
      return;
    }
    setIsValidating(true);
    setTimeout(() => {
      setIsValidating(false);
      onCodeValid(fullCode);
    }, 600);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="w-full min-h-full flex flex-col justify-between max-w-md mx-auto">
      {/* Top Header Bar */}
      <HeaderBar onBack={onBack} titleRight="Recuperar Senha" />

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        {/* Sub-bar badges */}
        <div className="flex items-center justify-between mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFECC7] text-[#7A4B00] text-[11px] font-bold tracking-wider uppercase shadow-2xs border border-[#FFC400]/30">
            <Shield className="w-3.5 h-3.5 text-[#E58A1F]" />
            <span>ETAPA DE VERIFICAÇÃO</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EEEEEE] text-[11px] font-semibold text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse" />
            <span>Sessão Segura</span>
          </div>
        </div>

        {/* Central Illustration & Headings */}
        <div className="flex flex-col items-center text-center my-1">
          <SunnyLockHero className="mb-3" />

          <h1 className="text-2xl sm:text-[26px] font-bold text-[#1A1C1C] tracking-tight mb-1.5">
            Código de 6 dígitos
          </h1>

          <div className="text-xs text-neutral-600 leading-relaxed max-w-[320px] mb-1">
            Enviamos seu código para
          </div>

          <p className="text-xs font-bold text-[#1A1C1C] mb-1.5">
            {targetAddress} <span className="font-normal text-neutral-600">e via WhatsApp.</span>
          </p>

          <button
            type="button"
            onClick={onChangeTarget || onBack}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C5E00] hover:text-[#5A4300] hover:underline cursor-pointer mb-4"
          >
            <span>Alterar e-mail ou WhatsApp</span>
            <Pencil className="w-3 h-3" />
          </button>
        </div>

        {/* Toast Notification if triggered */}
        {toastMessage && (
          <div className="mb-3 p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-medium text-center animate-in fade-in slide-in-from-top-1">
            {toastMessage}
          </div>
        )}

        {/* OTP Input Card */}
        <div className="w-full bg-white rounded-3xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-neutral-100 mb-4">
          <div className="flex items-center justify-between mb-3 px-1">
            <label className="text-xs font-semibold text-[#1A1C1C]">
              Insira o código recebido
            </label>

            <button
              type="button"
              onClick={handlePasteSMS}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F5F5F5] hover:bg-[#EBEBEB] text-[11px] font-semibold text-neutral-700 transition-colors cursor-pointer"
            >
              <Clipboard className="w-3 h-3" />
              <span>Colar SMS</span>
            </button>
          </div>

          {/* 6 Input Boxes */}
          <div className="grid grid-cols-6 gap-2 sm:gap-2.5 mb-4">
            {digits.map((digit, index) => {
              const isFilled = digit !== '';
              const isFirst = index === 0;
              return (
                <div key={index} className="relative">
                  <input
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleDigitChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`w-full h-14 text-center text-xl font-bold rounded-2xl transition-all outline-none ${
                      isFirst
                        ? 'border-2 border-[#FFC400] bg-white text-[#1A1C1C] shadow-xs'
                        : isFilled
                        ? 'border border-neutral-200 bg-[#F5F5F5] text-[#1A1C1C]'
                        : 'border border-neutral-200 bg-[#F5F5F5] text-neutral-400 focus:border-[#FFC400] focus:bg-white'
                    }`}
                  />
                  {!isFilled && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-neutral-400 font-bold text-xl">
                      •
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {error && (
            <p className="text-xs text-rose-600 font-medium px-1 mb-2">{error}</p>
          )}

          {/* Resend & Timer Row */}
          <div className="flex items-center justify-between px-1 text-xs text-neutral-600">
            <div className="inline-flex items-center gap-1 font-medium text-neutral-500">
              <Clock className="w-3.5 h-3.5" />
              <span>Reenviar em</span>
              <strong className="text-[#1A1C1C] font-semibold">{formatTime(countdown)}</strong>
            </div>

            <button
              type="button"
              onClick={handleResend}
              disabled={!canResend}
              className={`inline-flex items-center gap-1 font-semibold transition-colors cursor-pointer ${
                canResend
                  ? 'text-[#8C5E00] hover:text-[#5A4300] hover:underline'
                  : 'text-neutral-400 cursor-not-allowed'
              }`}
            >
              <span>Reenviar agora</span>
              <RotateCw className="w-3.5 h-3.5 stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="space-y-2 mb-4">
          <button
            type="button"
            onClick={handleValidate}
            disabled={isValidating}
            className="w-full h-12 bg-[#FFC400] hover:bg-[#F5BC00] active:scale-[0.99] text-[#1A1C1C] font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-[0_4px_16px_-2px_rgba(255,196,0,0.45)] transition-all cursor-pointer"
          >
            {isValidating ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-[#1A1C1C] border-t-transparent rounded-full animate-spin" />
                Validando token...
              </span>
            ) : (
              <>
                <span>Validar código e prosseguir</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </>
            )}
          </button>

          <p className="text-center text-[11px] text-neutral-500 flex items-center justify-center gap-1.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E58A1F]" />
            Autenticação instantânea de dois fatores
          </p>
        </div>

        {/* Support Help Card */}
        <div className="w-full bg-[#EFEFEF]/80 rounded-2xl p-4 border border-neutral-200/60 mb-3">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#7A4B00] flex-shrink-0 shadow-2xs border border-neutral-200/50 mt-0.5">
              <Headphones className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="text-xs font-bold text-[#1A1C1C]">Não conseguiu receber?</h5>
              <p className="text-[11px] text-neutral-600 leading-snug mb-2.5">
                Nossa equipe da bancada SUNNY pode confirmar sua identidade via ligação ou suporte direto.
              </p>
              <button
                type="button"
                onClick={onOpenSpecialist}
                className="w-full py-2 px-3 bg-white hover:bg-neutral-50 text-[#1A1C1C] font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-2xs border border-neutral-200 cursor-pointer transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#1A1C1C]" />
                <span>Falar com especialista</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Security Note */}
        <div className="text-center text-[11px] text-neutral-500 flex items-center justify-center gap-1 py-1">
          <Lock className="w-3 h-3 text-neutral-400" />
          <span>Criptografia de ponta a ponta SUNNY Guard</span>
        </div>
      </div>
    </div>
  );
};
