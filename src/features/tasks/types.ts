export type Priority = 'LOW' | 'MEDIUM' | 'HIGH';

export interface Tag {
  id: string;
  name: string;
  color: string;
  archived?: boolean;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate: number;
  createdAt: number;
  completed: boolean;
  priority: Priority;
  order: number;
  tags: string[]; // Array of Tag IDs
}
