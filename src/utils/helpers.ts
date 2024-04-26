import {Holding} from './types';

export const getCurrentValue = (holding: Holding): number =>
  holding.ltp * holding.quantity;

export const getInvestmentValue = (holding: Holding): number =>
  holding.avgPrice * holding.quantity;

export const getProfitAndLoss = (holding: Holding): number =>
  getCurrentValue(holding) - getInvestmentValue(holding);

export const getTodayProfitAndLoss = (holding: Holding): number =>
  (holding.close - holding.ltp) * holding.quantity;

export const formatStockPrice = (price: number): string => price.toFixed(2);
