import React, { useState } from 'react';
import {
  ArrowLeft,
  Mail,
  MessageSquare,
  ArrowRight,
  Lightbulb,
  Headphones,
  RotateCcw,
} from 'lucide-react';
import { HeaderBar } from '../HeaderBar';
import { SunnyKeySunHero } from '../SunnyLogo';

interface ForgotPasswordScreenProps {
  onBackToLogin: () => void;
  onSubmitSuccess: (channel: 'email' | 'phone', target: string) => void;
  onOpenHelp: () => void;
}

export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({
  onBackToLogin,
  onSubmitSuccess,
  onOpenHelp,
}) => {
  const [tab, setTab] = useState<'email' | 'phone'>('email');
  const [emailInput, setEmailInput] = useState('cliente@sunny.com');
  const [phoneInput, setPhoneInput] = useState('(11) 98765-4321');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = tab === 'email' ? emailInput : phoneInput;
    if (!value.trim()) {
      setError(`Informe seu ${tab === 'email' ? 'e-mail' : 'WhatsApp'} cadastrado.`);
      return;
    }
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSubmitSuccess(tab, value);
    }, 600);
  };

  return (
    <div className="w-full min-h-full flex flex-col justify-between max-w-md mx-auto">
      {/* Top Header */}
      <HeaderBar onBack={onBackToLogin} titleRight="Recuperar Senha" />

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        {/* Sub-bar with back text and RECUPERAÇÃO badge */}
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={onBackToLogin}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A1C1C] hover:text-neutral-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Voltar para o login</span>
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFECC7] text-[#7A4B00] text-[11px] font-bold tracking-wide uppercase shadow-2xs">
            <RotateCcw className="w-3 h-3 stroke-[2.5]" />
            <span>RECUPERAÇÃO</span>
          </div>
        </div>

        {/* Hero Section: Key Sun Illustration & Headings */}
        <div className="flex flex-col items-center text-center my-2">
          <SunnyKeySunHero className="mb-4" />

          <h1 className="text-2xl sm:text-[26px] font-bold text-[#1A1C1C] tracking-tight mb-2">
            Esqueceu sua senha?
          </h1>

          <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed max-w-[340px] px-1 mb-5">
            Não se preocupe! Informe seu e-mail ou WhatsApp cadastrado e enviaremos um link seguro para você redefinir seu acesso em instantes.
          </p>
        </div>

        {/* Form Card */}
        <div className="w-full bg-white rounded-3xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-neutral-100 mb-4">
          {/* Method Selector Tabs */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-[#F5F5F5] rounded-2xl mb-4">
            <button
              type="button"
              onClick={() => setTab('email')}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                tab === 'email'
                  ? 'bg-[#FFC400] text-[#1A1C1C] shadow-xs'
                  : 'text-neutral-600 hover:text-[#1A1C1C]'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Por E-mail</span>
            </button>

            <button
              type="button"
              onClick={() => setTab('phone')}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                tab === 'phone'
                  ? 'bg-[#FFC400] text-[#1A1C1C] shadow-xs'
                  : 'text-neutral-600 hover:text-[#1A1C1C]'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp / SMS</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1.5 px-1">
                <label className="text-xs font-semibold text-[#1A1C1C]">
                  {tab === 'email' ? 'Seu e-mail cadastrado' : 'Seu WhatsApp cadastrado'}
                </label>
                <span className="text-[11px] text-neutral-400">
                  {tab === 'email' ? 'Ex: cliente@sunny.com' : 'Ex: (11) 98765-4321'}
                </span>
              </div>

              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-neutral-400 pointer-events-none">
                  {tab === 'email' ? (
                    <span className="text-sm font-semibold">@</span>
                  ) : (
                    <MessageSquare className="w-4 h-4" />
                  )}
                </div>
                <input
                  type={tab === 'email' ? 'email' : 'text'}
                  value={tab === 'email' ? emailInput : phoneInput}
                  onChange={(e) =>
                    tab === 'email' ? setEmailInput(e.target.value) : setPhoneInput(e.target.value)
                  }
                  placeholder={
                    tab === 'email' ? 'seu.email@exemplo.com' : '(11) 98765-4321'
                  }
                  className="w-full h-12 pl-10 pr-3.5 rounded-xl bg-[#F8F9FA] border border-neutral-200 text-xs sm:text-[13px] text-[#1A1C1C] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:border-[#FFC400] focus:ring-3 focus:ring-[#FFC400]/20 transition-all font-medium"
                />
              </div>

              <p className="text-[11px] text-neutral-500 mt-1.5 px-1">
                Enviaremos um link temporário com validade de 30 minutos.
              </p>
            </div>

            {error && (
              <p className="text-xs text-rose-600 font-medium px-1">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-[#FFC400] hover:bg-[#F5BC00] active:scale-[0.99] text-[#1A1C1C] font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-[0_4px_16px_-2px_rgba(255,196,0,0.45)] transition-all cursor-pointer pt-0.5"
            >
              {isLoading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-[#1A1C1C] border-t-transparent rounded-full animate-spin" />
                  Enviando código...
                </span>
              ) : (
                <>
                  <span>Enviar link de recuperação</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Informative 3-Step Card: "Como funciona a recuperação?" */}
        <div className="w-full bg-[#EFEFEF]/80 rounded-2xl p-4 border border-neutral-200/60 mb-3 space-y-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-[#E58A1F]" />
            <h4 className="text-xs font-bold text-[#1A1C1C]">Como funciona a recuperação?</h4>
          </div>

          <div className="space-y-2.5 pt-1">
            {/* Step 1 */}
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#FFC400] text-[#1A1C1C] font-extrabold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                1
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-[#1A1C1C]">Receba o link ou código</p>
                <p className="text-[11px] text-neutral-600 leading-snug">
                  Chega instantaneamente no canal escolhido sem custos adicionais.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-neutral-300 text-neutral-700 font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-[#1A1C1C]">Crie uma nova senha</p>
                <p className="text-[11px] text-neutral-600 leading-snug">
                  Defina uma credencial forte e memorize com facilidade.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-neutral-300 text-neutral-700 font-bold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-[#1A1C1C]">Tudo preservado</p>
                <p className="text-[11px] text-neutral-600 leading-snug">
                  Seus orçamentos, ordens de serviço ativas e histórico ficam intactos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Card: Mudou de número ou e-mail? */}
        <div className="w-full bg-white rounded-2xl p-3.5 border border-neutral-150 flex items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-[#FFC400]/20 flex items-center justify-center text-[#7A4B00] flex-shrink-0">
              <Headphones className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h5 className="text-xs font-bold text-[#1A1C1C] truncate">
                Mudou de número ou e-...
              </h5>
              <p className="text-[11px] text-neutral-500 truncate">
                Fale com nosso time de ate...
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenHelp}
            className="px-3.5 py-1.5 bg-[#F5F5F5] hover:bg-[#EBEBEB] text-[#1A1C1C] font-semibold text-xs rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer flex-shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#1A1C1C]" />
            <span>Ajuda</span>
          </button>
        </div>
      </div>
    </div>
  );
};
