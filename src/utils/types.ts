export interface Holding {
  symbol: string;
  ltp: number;
  quantity: number;
  avgPrice: number;
  close: number;
}

export interface Totals {
  currentValue: number;
  investment: number;
  profitAndLoss: number;
  profitAndLossToday: number;
}
