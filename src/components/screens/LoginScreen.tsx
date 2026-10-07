import React, { useState } from 'react';
import {
  AtSign,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { SunnySunIcon } from '../SunnyLogo';

interface LoginScreenProps {
  onNavigateToForgot: () => void;
  onLoginSuccess: (emailOrCpf: string) => void;
  onNavigateToRegister?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onNavigateToForgot,
  onLoginSuccess,
}) => {
  const [identifier, setIdentifier] = useState('mariana.silva@sunny.com');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setError('Por favor, informe seu e-mail ou CPF.');
      return;
    }
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(identifier);
    }, 600);
  };

  const handleSocialLogin = (provider: 'Google' | 'Apple') => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(`mariana.${provider.toLowerCase()}@sunny.com`);
    }, 700);
  };

  return (
    <div className="w-full min-h-full flex flex-col justify-between p-4 sm:p-6 max-w-md mx-auto">
      {/* Top Header & Branding */}
      <div className="flex flex-col items-center text-center pt-2 sm:pt-4">
        {/* Brand logo container with round sunny icon */}
        <div className="flex items-center gap-2.5 mb-3 select-none">
          <div className="w-9 h-9 rounded-full bg-[#FFC400]/25 flex items-center justify-center border border-[#FFC400]/40">
            <SunnySunIcon size={24} />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-[#1A1C1C] lowercase font-['Poppins']">
            sunny
          </span>
        </div>

        {/* Badge: ÁREA DO CLIENTE */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEEEEE] border border-neutral-200/80 text-[11px] font-semibold text-[#5A4300] tracking-wider uppercase mb-4 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-[#775A00]" />
          <span>ÁREA DO CLIENTE</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-[26px] font-bold text-[#1A1C1C] tracking-tight leading-tight mb-2">
          Que bom ter você de volta!
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed max-w-[340px] px-2 mb-6">
          Acesse sua conta para gerenciar chamados, equipamentos e orçamentos com total tranquilidade.
        </p>
      </div>

      {/* Main Form Card */}
      <div className="w-full bg-white rounded-3xl p-5 sm:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-neutral-100">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Field: E-mail ou CPF */}
          <div>
            <div className="flex items-center justify-between mb-1.5 px-1">
              <label htmlFor="identifier" className="text-xs font-semibold text-[#1A1C1C]">
                E-mail ou CPF
              </label>
              <span className="text-[11px] text-neutral-400">Obrigatório</span>
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-3.5 text-neutral-400 pointer-events-none">
                <AtSign className="w-4 h-4" />
              </div>
              <input
                id="identifier"
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="ex: mariana@exemplo.com ou CPF"
                className="w-full h-12 pl-10 pr-3.5 rounded-xl bg-[#F8F9FA] border border-neutral-200 text-xs sm:text-[13px] text-[#1A1C1C] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#FFC400] focus:ring-3 focus:ring-[#FFC400]/20 transition-all font-medium"
              />
            </div>
          </div>

          {/* Field: Sua senha */}
          <div>
            <div className="flex items-center justify-between mb-1.5 px-1">
              <label htmlFor="password" className="text-xs font-semibold text-[#1A1C1C]">
                Sua senha
              </label>
              <span className="text-[11px] text-neutral-400">Obrigatório</span>
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-3.5 text-neutral-400 pointer-events-none">
                <Lock className="w-4 h-4" />
              </div>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha de acesso"
                className="w-full h-12 pl-10 pr-10 rounded-xl bg-[#F8F9FA] border border-neutral-200 text-xs sm:text-[13px] text-[#1A1C1C] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#FFC400] focus:ring-3 focus:ring-[#FFC400]/20 transition-all font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
                aria-label={showPassword ? 'Ocultar senha' : 'Exibir senha'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-xs text-rose-600 font-medium px-1">{error}</p>
          )}

          {/* Remember me & Forgot Password */}
          <div className="flex items-center justify-between pt-0.5 pb-1 px-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <div
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                  rememberMe
                    ? 'bg-[#FFC400] border-[#FFC400]'
                    : 'bg-white border-neutral-300'
                }`}
              >
                {rememberMe && <Check className="w-3 h-3 text-[#1A1C1C] stroke-[3]" />}
              </div>
              <span className="text-xs text-neutral-700 font-medium">Lembrar de mim</span>
            </label>

            <button
              type="button"
              onClick={onNavigateToForgot}
              className="text-xs font-semibold text-[#8C5E00] hover:text-[#5A4300] hover:underline transition-colors cursor-pointer"
            >
              Esqueceu sua senha?
            </button>
          </div>

          {/* Primary Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-[#FFC400] hover:bg-[#F5BC00] active:scale-[0.99] text-[#1A1C1C] font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-[0_4px_16px_-2px_rgba(255,196,0,0.45)] transition-all cursor-pointer"
          >
            {isLoading ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-[#1A1C1C] border-t-transparent rounded-full animate-spin" />
                Acessando...
              </span>
            ) : (
              <>
                <span>Entrar na minha conta</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </>
            )}
          </button>

          {/* Social Logins Divider */}
          <div className="relative flex items-center justify-center my-3">
            <div className="border-t border-neutral-200 w-full" />
            <span className="bg-white px-3 text-[11px] font-medium text-neutral-400 absolute">
              ou entre com
            </span>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={() => handleSocialLogin('Google')}
            className="w-full h-11 bg-[#F5F5F5] hover:bg-[#EBEBEB] text-[#1A1C1C] text-xs font-semibold rounded-xl flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
          >
            {/* Google Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continuar com Google</span>
          </button>

          {/* Apple Button */}
          <button
            type="button"
            onClick={() => handleSocialLogin('Apple')}
            className="w-full h-11 bg-[#1A1C1C] hover:bg-black text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
          >
            {/* Apple Icon */}
            <svg width="16" height="16" viewBox="0 0 170 170" fill="currentColor">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.58-7.7-11.66-13.98-6.19-9.56-11.02-20.2-14.51-31.94-3.48-11.74-5.23-23.08-5.23-34.02 0-14.02 3.48-25.79 10.45-35.31 6.97-9.52 15.75-14.39 26.35-14.61 4.79 0 10.23 1.32 16.32 3.96 6.09 2.64 10.01 4.02 11.75 4.14 1.53-.12 5.56-1.55 12.1-4.28 6.53-2.73 12.08-3.9 16.64-3.52 14.68 1.13 25.86 6.94 33.53 17.43-12.83 7.73-19.13 18.29-18.91 31.67.22 10.44 4.25 19.15 12.08 26.13 7.83 6.98 17.29 11.04 28.38 12.18-2.61 8.27-5.77 16.14-9.48 23.61zM119.22 33.15c0-7.72 2.76-15.02 8.27-21.89 5.51-6.87 12.29-11.13 20.34-12.78.22 1.3.33 2.49.33 3.58 0 7.61-2.93 15-8.8 22.18-5.87 7.18-12.72 11.39-20.55 12.63-.44-1.08-.66-2.19-.66-3.35z" />
            </svg>
            <span>Continuar com Apple</span>
          </button>

          {/* Register Card */}
          <div className="pt-2">
            <div className="bg-[#F8F9FA] rounded-2xl p-3.5 text-center border border-neutral-150">
              <span className="block text-[11px] text-neutral-500 mb-0.5">
                Ainda não tem conta na SUNNY?
              </span>
              <button
                type="button"
                onClick={onNavigateToForgot}
                className="text-xs font-bold text-[#8C5E00] hover:text-[#5A4300] inline-flex items-center gap-1 cursor-pointer"
              >
                Cadastre-se em 1 minuto
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Security Footer Card */}
      <div className="mt-4 w-full bg-[#EFEFEF]/80 rounded-2xl p-3.5 border border-neutral-200/60 flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-2xs border border-neutral-200/50">
          <Shield className="w-4 h-4 text-[#FF8A00] fill-[#FFC400]/30" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1 mb-0.5">
            <h4 className="text-xs font-bold text-[#1A1C1C]">Ambiente 100% Protegido</h4>
            <span className="px-2 py-0.5 bg-[#FFDCC4] text-[#8C3A00] font-bold text-[10px] rounded-full uppercase tracking-wider">
              SSL 256-bit
            </span>
          </div>
          <p className="text-[11px] text-neutral-600 leading-snug">
            Seus dados cadastrais e o histórico de seus equipamentos estão resguardados com criptografia de ponta a ponta.
          </p>
        </div>
      </div>
    </div>
  );
};
