export type clientStatus = 'active' | 'inactive' | 'lead';

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: clientStatus;
  createdAt: string;
}
