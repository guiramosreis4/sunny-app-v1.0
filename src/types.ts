export type ScreenId = 'login' | 'forgot' | 'verify' | 'new-password' | 'dashboard' | 'gallery';

export type ViewMode = 'phone' | 'responsive' | 'gallery';

export interface RepairOrder {
  id: string;
  orderNumber: string;
  device: string;
  brand: string;
  model: string;
  issue: string;
  status: 'solicitacao' | 'coleta' | 'laboratorio' | 'testes' | 'devolucao';
  statusLabel: string;
  estimatedDate: string;
  budgetAmount?: number;
  budgetApproved?: boolean;
  technicianName: string;
  technicianAvatar?: string;
  entryDate: string;
}
