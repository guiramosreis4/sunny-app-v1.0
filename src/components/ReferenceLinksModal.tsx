import React from 'react';
import { X, Image, ExternalLink, Check, Sparkles, Layers } from 'lucide-react';
import { ScreenId } from '../types';

interface ReferenceLinksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScreen: (screen: ScreenId) => void;
}

export const ReferenceLinksModal: React.FC<ReferenceLinksModalProps> = ({
  isOpen,
  onClose,
  onSelectScreen,
}) => {
  if (!isOpen) return null;

  const references = [
    {
      screenId: 'login' as ScreenId,
      imageFile: 'Image 21.png',
      title: 'Tela 1: Login do Cliente',
      subtitle: 'Área do Cliente • Acesso Seguro',
      specs: 'Badge ÁREA DO CLIENTE, login por e-mail/CPF, senha, Google, Apple e SSL 256-bit',
      color: '#FFC400',
    },
    {
      screenId: 'forgot' as ScreenId,
      imageFile: 'Image 11.png',
      title: 'Tela 2: Recuperar Senha',
      subtitle: 'Esqueceu sua senha?',
      specs: 'Sol radiante com chave, alternador Por E-mail vs WhatsApp/SMS, guia de 3 passos',
      color: '#FF8A00',
    },
    {
      screenId: 'verify' as ScreenId,
      imageFile: 'Image 3.png',
      title: 'Tela 3: Código de 6 Dígitos',
      subtitle: 'Etapa de Verificação (2FA)',
      specs: 'Cadeado solar com raio ⚡, 6 caixas de OTP, botão Colar SMS, contador 00:43',
      color: '#FFC400',
    },
    {
      screenId: 'new-password' as ScreenId,
      imageFile: 'Image 7.png',
      title: 'Tela 4: Crie sua Nova Senha',
      subtitle: 'Etapa 3 de 3 (Segurança SUNNY)',
      specs: 'Ícone solar, medidor dinâmico de força, checklist interativo com 3 critérios',
      color: '#FF8A00',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-neutral-150 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-[#FFFDF7]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFC400]/25 flex items-center justify-center">
              <Layers className="w-5 h-5 text-[#8C5E00]" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#1A1C1C]">
                Mapeamento das Imagens & Telas
              </h3>
              <p className="text-xs text-neutral-500">
                Acesso direto a cada uma das referências do design
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-3">
          <p className="text-xs text-neutral-600 leading-relaxed">
            As quatro telas foram recriadas em componentes React interativos com fidelidade visual aos arquivos de imagem enviados. Clique para pular diretamente para a tela desejada:
          </p>

          <div className="space-y-2.5 pt-1">
            {references.map((ref) => (
              <div
                key={ref.screenId}
                className="p-3.5 rounded-2xl border border-neutral-200 hover:border-[#FFC400] bg-neutral-50/50 hover:bg-[#FFFDF7] transition-all flex items-center justify-between gap-3"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs flex-shrink-0 shadow-2xs text-[#1A1C1C]"
                    style={{ backgroundColor: ref.color }}
                  >
                    <Image className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-[#1A1C1C] truncate">
                        {ref.title}
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white border border-neutral-200 text-neutral-600">
                        {ref.imageFile}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-500 truncate mt-0.5">
                      {ref.specs}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onSelectScreen(ref.screenId);
                    onClose();
                  }}
                  className="px-3 py-1.5 bg-[#1A1C1C] hover:bg-[#FFC400] hover:text-[#1A1C1C] text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex-shrink-0 flex items-center gap-1"
                >
                  <span>Ver Tela</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200/60 text-xs text-amber-900 flex items-start gap-2.5 mt-4">
            <Sparkles className="w-4 h-4 text-[#FF8A00] flex-shrink-0 mt-0.5" />
            <div className="leading-snug">
              <strong>Interatividade Completa:</strong> Você pode digitar credenciais, usar o botão "Colar SMS" para autopreencher o código 2FA, testar a barra de força da nova senha e explorar o rastreamento em tempo real do aparelho no Dashboard.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-100 bg-neutral-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs font-semibold rounded-xl cursor-pointer transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
