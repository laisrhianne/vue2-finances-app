declare module '@finances-app/types' {
  export interface ITransaction {
    id: string;
    name: string;
    icon: string;
    type: 'income' | 'outcome';
    date: string;
    time: string;
    value: number;
  }
}
