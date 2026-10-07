import React, { useState } from 'react';
import {
  Shield,
  Lock,
  RotateCcw,
  Eye,
  EyeOff,
  Lightbulb,
  ArrowRight,
  ChevronLeft,
  CheckCircle2,
  Circle,
  ShieldCheck,
} from 'lucide-react';
import { HeaderBar } from '../HeaderBar';
import { SunnySmallHeroCard } from '../SunnyLogo';

interface NewPasswordScreenProps {
  onBackToLogin: () => void;
  onPasswordResetSuccess: () => void;
}

export const NewPasswordScreen: React.FC<NewPasswordScreenProps> = ({
  onBackToLogin,
  onPasswordResetSuccess,
}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Password criteria check
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUpperOrSpecial = /[A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  // Compute strength level
  const criteriaCount = [hasMinLength, hasNumber, hasUpperOrSpecial].filter(Boolean).length;
  
  let strengthLabel = 'Aguardando digitação';
  let strengthColor = 'bg-neutral-200';
  let strengthPercentage = 15;

  if (password.length > 0) {
    if (criteriaCount === 1) {
      strengthLabel = 'Fraca';
      strengthColor = 'bg-rose-500';
      strengthPercentage = 35;
    } else if (criteriaCount === 2) {
      strengthLabel = 'Média';
      strengthColor = 'bg-[#FF8A00]';
      strengthPercentage = 70;
    } else if (criteriaCount === 3) {
      strengthLabel = 'Excelente';
      strengthColor = 'bg-emerald-500';
      strengthPercentage = 100;
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasMinLength || !hasNumber || !hasUpperOrSpecial) {
      setError('Sua senha deve atender a todos os requisitos de segurança abaixo.');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas digitadas não coincidem.');
      return;
    }
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onPasswordResetSuccess();
    }, 600);
  };

  return (
    <div className="w-full min-h-full flex flex-col justify-between max-w-md mx-auto">
      {/* Top Header */}
      <HeaderBar onBack={onBackToLogin} titleRight="Recuperar Senha" />

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        {/* Sub-bar badges */}
        <div className="flex items-center justify-between mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFECC7] text-[#7A4B00] text-[11px] font-bold tracking-wider uppercase shadow-2xs border border-[#FFC400]/30">
            <Shield className="w-3.5 h-3.5 text-[#E58A1F]" />
            <span>SEGURANÇA SUNNY</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFECC7] text-[11px] font-bold text-[#7A4B00]">
            <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
            <span>Etapa 3 de 3</span>
          </div>
        </div>

        {/* Hero Card with Sun icon */}
        <div className="w-full bg-white rounded-3xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-neutral-100 mb-4 flex items-start gap-4">
          <SunnySmallHeroCard className="flex-shrink-0 mt-1" />

          <div className="flex-1 min-w-0">
            <span className="text-[11px] font-extrabold text-[#7A4B00] tracking-wider uppercase block mb-1">
              QUASE LÁ!
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-[#1A1C1C] tracking-tight leading-snug mb-1">
              Crie sua nova senha
            </h1>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Escolha uma senha forte para proteger seus orçamentos e o rastreamento dos seus aparelhos.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="w-full bg-white rounded-3xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-neutral-100 mb-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Field: Nova senha */}
            <div>
              <label className="block text-xs font-semibold text-[#1A1C1C] mb-1.5 px-1">
                Nova senha
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-neutral-400 pointer-events-none">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua nova senha"
                  className="w-full h-12 pl-10 pr-10 rounded-xl bg-[#F8F9FA] border border-neutral-200 text-xs sm:text-[13px] text-[#1A1C1C] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#FFC400] focus:ring-3 focus:ring-[#FFC400]/20 transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Password strength bar */}
              <div className="mt-2.5 px-1">
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="text-neutral-500 font-medium">Força da senha</span>
                  <span
                    className={`font-semibold ${
                      strengthLabel === 'Excelente'
                        ? 'text-emerald-600'
                        : strengthLabel === 'Média'
                        ? 'text-[#FF8A00]'
                        : strengthLabel === 'Fraca'
                        ? 'text-rose-500'
                        : 'text-neutral-500'
                    }`}
                  >
                    {strengthLabel}
                  </span>
                </div>

                <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden flex gap-1">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${strengthColor}`}
                    style={{ width: `${strengthPercentage}%` }}
                  />
                </div>
              </div>

              {/* Security requirements checklist card */}
              <div className="mt-3 bg-[#F8F9FA] rounded-2xl p-3 border border-neutral-150 space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  {hasMinLength ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                  )}
                  <span className={hasMinLength ? 'text-[#1A1C1C] font-semibold' : 'text-neutral-600'}>
                    Mínimo de 8 caracteres
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  {hasNumber ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                  )}
                  <span className={hasNumber ? 'text-[#1A1C1C] font-semibold' : 'text-neutral-600'}>
                    Pelo menos 1 número (0-9)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  {hasUpperOrSpecial ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                  )}
                  <span className={hasUpperOrSpecial ? 'text-[#1A1C1C] font-semibold' : 'text-neutral-600'}>
                    1 letra maiúscula ou símbolo (!@#$)
                  </span>
                </div>
              </div>
            </div>

            {/* Field: Confirmar nova senha */}
            <div>
              <label className="block text-xs font-semibold text-[#1A1C1C] mb-1.5 px-1">
                Confirmar nova senha
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-neutral-400 pointer-events-none">
                  <RotateCcw className="w-4 h-4" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repita sua nova senha"
                  className="w-full h-12 pl-10 pr-10 rounded-xl bg-[#F8F9FA] border border-neutral-200 text-xs sm:text-[13px] text-[#1A1C1C] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#FFC400] focus:ring-3 focus:ring-[#FFC400]/20 transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-xs text-rose-600 font-medium px-1">{error}</p>
            )}

            {/* Security Tip Card */}
            <div className="bg-[#FFF8E6] border border-[#FFC400]/40 rounded-2xl p-3.5 flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-[#FFC400] flex items-center justify-center flex-shrink-0 text-[#1A1C1C] shadow-2xs mt-0.5">
                <Lightbulb className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-xs font-bold text-[#1A1C1C] mb-0.5">
                  Dica de segurança SUNNY
                </h5>
                <p className="text-[11px] text-[#5A4300] leading-snug">
                  Nunca compartilhe seus dados. A equipe SUNNY nunca solicitará sua senha por WhatsApp, SMS ou telefone.
                </p>
              </div>
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
                  Salvando nova senha...
                </span>
              ) : (
                <>
                  <span>Salvar nova senha e entrar</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </>
              )}
            </button>

            {/* Secondary Back Link */}
            <div className="text-center pt-1">
              <button
                type="button"
                onClick={onBackToLogin}
                className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-600 hover:text-[#1A1C1C] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Voltar para o Login</span>
              </button>
            </div>
          </form>
        </div>

        {/* Footer Security Note */}
        <div className="text-center text-[11px] text-neutral-500 flex items-center justify-center gap-1.5 py-1">
          <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
          <span>SUNNY Guard • Criptografia de ponta a ponta</span>
        </div>
      </div>
    </div>
  );
};
