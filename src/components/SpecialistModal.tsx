import React, { useState } from 'react';
import { X, MessageSquare, Phone, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { SunnySunIcon } from './SunnyLogo';

interface SpecialistModalProps {
  isOpen: boolean;
  onClose: () => void;
  context?: 'recovery' | 'verification' | 'support';
}

export const SpecialistModal: React.FC<SpecialistModalProps> = ({
  isOpen,
  onClose,
  context = 'verification',
}) => {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'call'>('chat');

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSent(true);
    setTimeout(() => {
      setMessage('');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/45 backdrop-blur-xs p-0 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Handle on Mobile */}
        <div className="w-12 h-1.5 bg-neutral-300 rounded-full mx-auto mt-3 sm:hidden" />

        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-100 flex items-center justify-between bg-[#FDFBF7]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFC400]/25 flex items-center justify-center">
              <SunnySunIcon size={22} />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#1A1C1C]">Bancada Técnica SUNNY</h3>
              <p className="text-xs text-neutral-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Especialistas disponíveis agora
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center hover:bg-neutral-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Channel Selection */}
        <div className="flex gap-2 p-3 bg-neutral-50 border-b border-neutral-100">
          <button
            type="button"
            onClick={() => setActiveTab('chat')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'chat'
                ? 'bg-[#FFC400] text-[#1A1C1C] shadow-xs'
                : 'bg-white text-neutral-600 border border-neutral-200'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Chat Imediato
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('call')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'call'
                ? 'bg-[#FFC400] text-[#1A1C1C] shadow-xs'
                : 'bg-white text-neutral-600 border border-neutral-200'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            Ligação de Validação
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          {activeTab === 'chat' ? (
            <>
              <div className="bg-[#FFF9E6] border border-[#FFC400]/40 rounded-2xl p-3.5 text-xs text-[#6D5300] flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 flex-shrink-0 text-[#E58A1F] mt-0.5" />
                <div>
                  <strong className="block font-semibold text-[#1A1C1C]">Protocolo SUNNY Guard Ativo</strong>
                  Nosso time técnico pode reenviar seu código por WhatsApp ou realizar a liberação do seu aparelho mediante validação rápida do CPF.
                </div>
              </div>

              {sent ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <p className="font-bold text-sm text-emerald-900">Mensagem recebida!</p>
                  <p className="text-xs text-emerald-700">
                    O especialista Lucas da Bancada SUNNY está conectado e responderá em seu WhatsApp cadastrado nos próximos 60 segundos.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs font-semibold text-emerald-800 underline mt-2 inline-block cursor-pointer"
                  >
                    Enviar outra dúvida
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSend} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#1A1C1C] mb-1">
                      Descreva sua dificuldade de acesso:
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ex: Não recebi o SMS no celular final (81) ou meu WhatsApp mudou recentemente..."
                      rows={3}
                      className="w-full text-xs p-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#FFC400] focus:ring-2 focus:ring-[#FFC400]/20 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!message.trim()}
                    className="w-full py-2.5 bg-[#FFC400] disabled:opacity-50 text-[#1A1C1C] font-semibold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-[#F5BC00] transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Falar com especialista agora
                  </button>
                </form>
              )}
            </>
          ) : (
            <div className="space-y-3 text-center py-3">
              <div className="w-14 h-14 rounded-full bg-[#FFC400]/20 text-[#1A1C1C] flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-[#1A1C1C]" />
              </div>
              <h4 className="font-bold text-sm text-[#1A1C1C]">Ligação Automática de Voz</h4>
              <p className="text-xs text-neutral-600 px-4">
                O assistente de voz da SUNNY pode ligar agora para o número cadastrado e ditar os 6 números do seu código de recuperação.
              </p>
              <button
                type="button"
                onClick={() => {
                  alert('Ligação iniciada! Aguarde seu telefone tocar em instantes.');
                  onClose();
                }}
                className="w-full py-2.5 bg-[#1A1C1C] text-white font-semibold text-xs rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Solicitar Ligação de Voz Agora
              </button>
            </div>
          )}

          <div className="text-[11px] text-neutral-400 text-center flex items-center justify-center gap-1.5 pt-2 border-t border-neutral-100">
            <ShieldCheck className="w-3.5 h-3.5" />
            Atendimento protegido por criptografia de ponta a ponta
          </div>
        </div>
      </div>
    </div>
  );
};
