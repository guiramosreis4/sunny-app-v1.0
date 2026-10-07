import React, { useState } from 'react';
import {
  Smartphone,
  Laptop,
  CheckCircle2,
  Clock,
  Wrench,
  Truck,
  ShieldCheck,
  ChevronRight,
  LogOut,
  PlusCircle,
  FileText,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { SunnySunIcon, SunnyLogo } from '../SunnyLogo';
import { RepairOrder } from '../../types';

interface DashboardScreenProps {
  userEmail: string;
  onLogout: () => void;
  onOpenSpecialist: () => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  userEmail,
  onLogout,
  onOpenSpecialist,
}) => {
  const [orders, setOrders] = useState<RepairOrder[]>([
    {
      id: '1',
      orderNumber: 'OS-9842',
      device: 'Smartphone',
      brand: 'Apple',
      model: 'iPhone 15 Pro Max 256GB',
      issue: 'Troca de display Super Retina XDR original & Calibração FaceID',
      status: 'laboratorio',
      statusLabel: 'Em laboratório / Reparo',
      estimatedDate: 'Hoje, até 18:30',
      budgetAmount: 1280.0,
      budgetApproved: true,
      technicianName: 'Lucas Ferreira (Bancada 04)',
      entryDate: '06/10 às 09:15',
    },
    {
      id: '2',
      orderNumber: 'OS-9750',
      device: 'Notebook',
      brand: 'Apple',
      model: 'MacBook Air M2 13.6"',
      issue: 'Substituição de bateria genuína & Limpeza térmica de bancada',
      status: 'testes',
      statusLabel: 'Testes de bancada',
      estimatedDate: 'Amanhã, 11:00',
      budgetAmount: 890.0,
      budgetApproved: true,
      technicianName: 'Carla Silveira (Bancada 02)',
      entryDate: '05/10 às 14:40',
    },
  ]);

  const [activeOrder, setActiveOrder] = useState<RepairOrder>(orders[0]);
  const [approvedSuccess, setApprovedSuccess] = useState(false);

  const steps = [
    { key: 'solicitacao', label: '1. Solicitação', icon: FileText },
    { key: 'coleta', label: '2. Coleta agendada', icon: Truck },
    { key: 'laboratorio', label: '3. Em laboratório', icon: Wrench },
    { key: 'testes', label: '4. Testes bancada', icon: Sparkles },
    { key: 'devolucao', label: '5. Devolução', icon: CheckCircle2 },
  ];

  const getStepIndex = (status: string) => {
    switch (status) {
      case 'solicitacao':
        return 0;
      case 'coleta':
        return 1;
      case 'laboratorio':
        return 2;
      case 'testes':
        return 3;
      case 'devolucao':
        return 4;
      default:
        return 2;
    }
  };

  const currentStepIdx = getStepIndex(activeOrder.status);

  return (
    <div className="w-full min-h-full flex flex-col justify-between max-w-md mx-auto">
      {/* Top Header */}
      <header className="w-full flex items-center justify-between px-4 py-3 bg-white border-b border-neutral-100 sticky top-0 z-20">
        <SunnyLogo size="sm" showText={true} />
        
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onLogout}
            title="Sair da conta"
            className="px-2.5 py-1 text-xs font-semibold text-neutral-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sair</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="p-4 flex-1 space-y-4">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#FFC400]/20 via-[#FFC400]/10 to-transparent p-4 rounded-3xl border border-[#FFC400]/30 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFC400] text-[10px] font-extrabold uppercase text-[#1A1C1C] mb-1">
              ÁREA DO CLIENTE
            </div>
            <h2 className="text-base font-bold text-[#1A1C1C]">
              Olá, Mariana!
            </h2>
            <p className="text-xs text-neutral-600 truncate max-w-[200px]">
              {userEmail}
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#FFC400] flex items-center justify-center shadow-xs">
            <SunnySunIcon size={28} />
          </div>
        </div>

        {/* Device Tracking Selector */}
        <div>
          <div className="flex items-center justify-between mb-2 px-1">
            <h3 className="text-xs font-bold text-[#1A1C1C] uppercase tracking-wider">
              Aparelhos em Manutenção ({orders.length})
            </h3>
            <button
              onClick={() => onOpenSpecialist()}
              className="text-xs font-bold text-[#8C5E00] flex items-center gap-1 hover:underline cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Novo chamado
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {orders.map((order) => {
              const isSelected = order.id === activeOrder.id;
              return (
                <button
                  key={order.id}
                  type="button"
                  onClick={() => setActiveOrder(order)}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#FFC400] shadow-[0_4px_16px_-4px_rgba(255,196,0,0.35)] ring-2 ring-[#FFC400]/20'
                      : 'bg-white border-neutral-200/80 hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    {order.device === 'Smartphone' ? (
                      <Smartphone className={`w-4 h-4 ${isSelected ? 'text-[#8C5E00]' : 'text-neutral-500'}`} />
                    ) : (
                      <Laptop className={`w-4 h-4 ${isSelected ? 'text-[#8C5E00]' : 'text-neutral-500'}`} />
                    )}
                    <span className="text-[10px] font-extrabold text-neutral-400">
                      {order.orderNumber}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#1A1C1C] truncate">
                    {order.model}
                  </h4>
                  <span className="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FFF3CD] text-[#7A4B00]">
                    {order.statusLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Order Card */}
        <div className="bg-white rounded-3xl p-5 border border-neutral-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold text-neutral-400 block">
                ORDEM DE SERVIÇO #{activeOrder.orderNumber}
              </span>
              <h3 className="text-base font-bold text-[#1A1C1C]">
                {activeOrder.model}
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Defeito relatado: {activeOrder.issue}
              </p>
            </div>
          </div>

          {/* 5-Step Logistic Tracker */}
          <div className="bg-[#F8F9FA] rounded-2xl p-3.5 border border-neutral-150">
            <h4 className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-3">
              Rastreamento em Tempo Real
            </h4>

            {/* Stepper progress bar */}
            <div className="relative flex items-center justify-between">
              {/* Connecting line */}
              <div className="absolute left-2.5 right-2.5 top-3.5 h-1 bg-neutral-200 -z-0">
                <div
                  className="h-full bg-[#FFC400] transition-all duration-500"
                  style={{ width: `${(currentStepIdx / (steps.length - 1)) * 100}%` }}
                />
              </div>

              {steps.map((st, i) => {
                const isCompleted = i < currentStepIdx;
                const isCurrent = i === currentStepIdx;

                return (
                  <div key={st.key} className="flex flex-col items-center z-10">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                        isCurrent
                          ? 'bg-[#FFC400] text-[#1A1C1C] ring-4 ring-[#FFC400]/25 shadow-xs'
                          : isCompleted
                          ? 'bg-[#1A1C1C] text-white'
                          : 'bg-neutral-200 text-neutral-500'
                      }`}
                    >
                      {isCompleted ? '✓' : i + 1}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 pt-2 border-t border-neutral-200/60 flex items-center justify-between text-xs">
              <span className="text-neutral-500 font-medium">Fase atual:</span>
              <span className="font-bold text-[#1A1C1C] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse" />
                {activeOrder.statusLabel}
              </span>
            </div>
          </div>

          {/* Technician & ETA */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-100">
              <span className="text-[10px] text-neutral-400 block font-medium">Previsão</span>
              <strong className="text-[#1A1C1C] flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#E58A1F]" />
                {activeOrder.estimatedDate}
              </strong>
            </div>
            <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-100">
              <span className="text-[10px] text-neutral-400 block font-medium">Bancada Responsável</span>
              <strong className="text-[#1A1C1C] truncate block mt-0.5">
                {activeOrder.technicianName}
              </strong>
            </div>
          </div>

          {/* Budget Info */}
          <div className="bg-[#FFFDF5] p-3.5 rounded-2xl border border-[#FFC400]/40 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-[#7A4B00] font-bold block">
                VALOR DO SERVIÇO & PEÇAS
              </span>
              <strong className="text-base font-extrabold text-[#1A1C1C]">
                R$ {activeOrder.budgetAmount?.toFixed(2).replace('.', ',')}
              </strong>
            </div>

            <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[11px] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Aprovado
            </span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-1">
            <button
              type="button"
              onClick={onOpenSpecialist}
              className="w-full py-3 bg-[#1A1C1C] hover:bg-black text-white text-xs font-bold rounded-2xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#FFC400]" />
              <span>Falar com o Técnico da Bancada</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Security */}
      <footer className="p-3 text-center text-[11px] text-neutral-400 border-t border-neutral-100">
        <span className="inline-flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-[#FF8A00]" />
          Área do Cliente protegida por SUNNY Guard • Suporte 24h
        </span>
      </footer>
    </div>
  );
};
