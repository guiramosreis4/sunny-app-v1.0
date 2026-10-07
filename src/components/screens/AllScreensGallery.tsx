import React from 'react';
import { ScreenId } from '../../types';
import { ExternalLink, CheckCircle, ArrowRight, Eye, Shield, Sparkles } from 'lucide-react';
import { SunnySunIcon, SunnyKeySunHero, SunnyLockHero, SunnySmallHeroCard } from '../SunnyLogo';

interface AllScreensGalleryProps {
  onSelectScreen: (screen: ScreenId) => void;
}

export const AllScreensGallery: React.FC<AllScreensGalleryProps> = ({ onSelectScreen }) => {
  const screens = [
    {
      id: 'login' as ScreenId,
      number: '01',
      title: 'Login do Cliente',
      subtitle: 'Área do Cliente • Acesso Seguro',
      description:
        'Acesso com e-mail/CPF, senha protegida com alternância de visibilidade, checkbox lembrar de mim, login social (Google e Apple) e selo SSL 256-bit.',
      badge: 'Tela Inicial',
      badgeColor: 'bg-[#FFC400] text-[#1A1C1C]',
      previewFeatures: ['E-mail ou CPF', 'Sua senha', 'Continuar com Google', 'Continuar com Apple'],
      referenceImage: 'Image 21.png',
      renderPreview: () => (
        <div className="p-4 bg-white rounded-2xl border border-neutral-150 shadow-2xs space-y-2 text-left">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#7A4B00] bg-[#FFECC7] px-2 py-0.5 rounded-full">
              ÁREA DO CLIENTE
            </span>
            <span className="text-[10px] text-neutral-400">SSL 256-bit</span>
          </div>
          <h4 className="font-bold text-xs text-[#1A1C1C]">Que bom ter você de volta!</h4>
          <div className="h-7 bg-neutral-100 rounded-lg flex items-center px-2 text-[10px] text-neutral-400">
            ex: mariana@exemplo.com ou CPF
          </div>
          <div className="h-7 bg-[#FFC400] text-[#1A1C1C] rounded-xl flex items-center justify-center font-bold text-[10px]">
            Entrar na minha conta →
          </div>
        </div>
      ),
    },
    {
      id: 'forgot' as ScreenId,
      number: '02',
      title: 'Recuperação de Senha',
      subtitle: 'Esqueceu sua senha?',
      description:
        'Seleção de canal dinâmico (Por E-mail vs WhatsApp/SMS), ilustração solar com chave, card explicativo de 3 passos e canal de suporte direto.',
      badge: 'Etapa 1',
      badgeColor: 'bg-[#FFECC7] text-[#7A4B00]',
      previewFeatures: ['Toggle E-mail / WhatsApp', 'Validade 30 min', 'Guia de 3 etapas', 'Botão de Ajuda'],
      referenceImage: 'Image 11.png',
      renderPreview: () => (
        <div className="p-4 bg-white rounded-2xl border border-neutral-150 shadow-2xs space-y-2 text-left">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#7A4B00] bg-[#FFECC7] px-2 py-0.5 rounded-full">
              RECUPERAÇÃO
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#FFC400]/25 flex items-center justify-center">
              <SunnySunIcon size={18} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#1A1C1C]">Esqueceu sua senha?</h4>
              <p className="text-[9px] text-neutral-500">Envio de link temporário</p>
            </div>
          </div>
          <div className="h-7 bg-[#FFC400] text-[#1A1C1C] rounded-xl flex items-center justify-center font-bold text-[10px]">
            Enviar link de recuperação →
          </div>
        </div>
      ),
    },
    {
      id: 'verify' as ScreenId,
      number: '03',
      title: 'Código de 6 Dígitos',
      subtitle: 'Etapa de Verificação (2FA)',
      description:
        'Validação em dois fatores com 6 caixas individuais, colar SMS automático, contador regressivo de reenvio e suporte com a bancada técnica.',
      badge: 'Etapa 2',
      badgeColor: 'bg-[#FFECC7] text-[#7A4B00]',
      previewFeatures: ['6 caixas de dígitos', 'Colar SMS com 1 clique', 'Temporizador 00:43', 'Bancada técnica'],
      referenceImage: 'Image 3.png',
      renderPreview: () => (
        <div className="p-4 bg-white rounded-2xl border border-neutral-150 shadow-2xs space-y-2 text-left">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#7A4B00] bg-[#FFECC7] px-2 py-0.5 rounded-full">
              ETAPA DE VERIFICAÇÃO
            </span>
            <span className="text-[9px] text-emerald-600 font-bold">Sessão Segura</span>
          </div>
          <div className="flex justify-center gap-1.5 py-1">
            {['7', '4', '2', '•', '•', '•'].map((d, i) => (
              <span
                key={i}
                className={`w-5 h-7 rounded-md flex items-center justify-center text-xs font-bold ${
                  i === 0 ? 'border border-[#FFC400] bg-white' : 'bg-neutral-100'
                }`}
              >
                {d}
              </span>
            ))}
          </div>
          <div className="h-7 bg-[#FFC400] text-[#1A1C1C] rounded-xl flex items-center justify-center font-bold text-[10px]">
            Validar código e prosseguir →
          </div>
        </div>
      ),
    },
    {
      id: 'new-password' as ScreenId,
      number: '04',
      title: 'Crie sua Nova Senha',
      subtitle: 'Segurança & Validação Forte',
      description:
        'Definição de nova credencial com medidor dinâmico de força, checklist interativo de requisitos (8 dígitos, números, maiúsculas/símbolos) e confirmação.',
      badge: 'Etapa 3 de 3',
      badgeColor: 'bg-[#FFECC7] text-[#7A4B00]',
      previewFeatures: ['Medidor de Força', '3 Critérios ao vivo', 'Dica de segurança', 'Salvar e entrar'],
      referenceImage: 'Image 7.png',
      renderPreview: () => (
        <div className="p-4 bg-white rounded-2xl border border-neutral-150 shadow-2xs space-y-2 text-left">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#7A4B00] bg-[#FFECC7] px-2 py-0.5 rounded-full">
              SEGURANÇA SUNNY
            </span>
            <span className="text-[9px] text-[#7A4B00] font-bold">Etapa 3 de 3</span>
          </div>
          <h4 className="font-bold text-xs text-[#1A1C1C]">Crie sua nova senha</h4>
          <div className="space-y-1">
            <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-[#FF8A00]" />
            </div>
            <p className="text-[9px] text-neutral-500">Mínimo 8 caracteres • 1 número • 1 símbolo</p>
          </div>
          <div className="h-7 bg-[#FFC400] text-[#1A1C1C] rounded-xl flex items-center justify-center font-bold text-[10px]">
            Salvar nova senha e entrar →
          </div>
        </div>
      ),
    },
    {
      id: 'dashboard' as ScreenId,
      number: '05',
      title: 'Área do Cliente (Dashboard)',
      subtitle: 'Rastreamento de Aparelhos',
      description:
        'Ambiente autenticado pós-login: acompanhamento em tempo real com barra de 5 etapas da SUNNY (Solicitação, Coleta, Laboratório, Testes, Devolução) e aprovação de orçamentos.',
      badge: 'Área Logada',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      previewFeatures: ['Tracker de 5 Etapas', 'Ordem de Serviço', 'Bancada Técnica', 'Aprovar Orçamento'],
      referenceImage: 'Ecossistema SUNNY',
      renderPreview: () => (
        <div className="p-4 bg-white rounded-2xl border border-neutral-150 shadow-2xs space-y-2 text-left">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
              OS #9842
            </span>
            <span className="text-[9px] text-neutral-400">Em laboratório</span>
          </div>
          <h4 className="font-bold text-xs text-[#1A1C1C]">iPhone 15 Pro Max</h4>
          <div className="flex items-center justify-between text-[9px] text-neutral-500 pt-1 border-t border-neutral-100">
            <span>Previsão: Hoje, 18:30</span>
            <span className="font-bold text-[#1A1C1C]">R$ 1.280,00</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-6 px-4 space-y-8">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFECC7] text-[#7A4B00] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Ecossistema de Telas SUNNY
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1A1C1C] tracking-tight">
            Galeria & Comparação das Telas
          </h1>
          <p className="text-sm text-neutral-600 max-w-xl">
            Todas as 4 telas das referências foram criadas fielmente com a identidade visual da marca SUNNY, microinterações completas, acessibilidade e validações em português (pt-BR).
          </p>
        </div>

        {/* Quick Launch Button */}
        <button
          onClick={() => onSelectScreen('login')}
          className="px-6 py-3.5 bg-[#FFC400] hover:bg-[#F5BC00] text-[#1A1C1C] font-bold text-sm rounded-2xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer flex-shrink-0"
        >
          <span>Iniciar Fluxo Interativo</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Screen Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {screens.map((screen) => (
          <div
            key={screen.id}
            className="bg-white rounded-3xl p-5 border border-neutral-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-black text-neutral-200 group-hover:text-[#FFC400] transition-colors">
                  {screen.number}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase ${screen.badgeColor}`}>
                  {screen.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-base font-bold text-[#1A1C1C] mb-1">
                {screen.title}
              </h3>
              <p className="text-xs text-neutral-500 mb-3 font-medium">
                {screen.subtitle}
              </p>

              {/* Render dynamic mini preview */}
              <div className="mb-4 bg-neutral-50 p-2.5 rounded-2xl border border-neutral-100">
                {screen.renderPreview()}
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                {screen.description}
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {screen.previewFeatures.map((feat, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-lg bg-neutral-100 text-neutral-600 text-[10px] font-medium"
                  >
                    • {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
              <span className="text-[11px] text-neutral-400 font-medium truncate">
                Ref: {screen.referenceImage}
              </span>

              <button
                type="button"
                onClick={() => onSelectScreen(screen.id)}
                className="px-3.5 py-2 bg-[#1A1C1C] hover:bg-[#FFC400] hover:text-[#1A1C1C] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Abrir Tela</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Brand & Technical Specs Card */}
      <div className="bg-[#FFFDF7] rounded-3xl p-6 border border-[#FFC400]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <SunnySunIcon size={22} />
            <h3 className="font-bold text-sm text-[#1A1C1C]">
              Design System & Padrões SUNNY
            </h3>
          </div>
          <p className="text-xs text-neutral-600 max-w-2xl">
            Construído rigorosamente conforme a especificação de marca: Cores Primárias <strong>SUNNY Yellow (#FFC400)</strong>, Acento <strong>SUNNY Orange (#FF8A00)</strong>, Carvão Neutro <strong>(#1A1C1C)</strong>, Tipografia <strong>Poppins</strong> e cantos arredondados generosos (16px a 24px).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center -space-x-1">
            <span className="w-6 h-6 rounded-full bg-[#FFC400] border-2 border-white shadow-2xs" title="#FFC400 Primary" />
            <span className="w-6 h-6 rounded-full bg-[#FF8A00] border-2 border-white shadow-2xs" title="#FF8A00 Orange" />
            <span className="w-6 h-6 rounded-full bg-[#1A1C1C] border-2 border-white shadow-2xs" title="#1A1C1C Charcoal" />
            <span className="w-6 h-6 rounded-full bg-[#F5F5F5] border-2 border-white shadow-2xs" title="#F5F5F5 Light Gray" />
          </div>
        </div>
      </div>
    </div>
  );
};
