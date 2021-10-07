declare module '@finances-app/types' {
  export interface ITransaction {
    name: string;
    icon: string;
    type: 'income' | 'outcome';
    date: string;
    time: string;
    value: number;
  }
}
