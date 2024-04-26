import React, {useEffect, useState} from 'react';
import {StatusBar, SafeAreaView, Alert} from 'react-native';
import Header from './src/components/Header';
import HoldingsList from './src/components/HoldingsList';
import BottomSheet from './src/components/BottomSheet';
import {fetchHoldings} from './src/utils/api';
import {Holding, Totals} from './src/utils/types';
import {
  getCurrentValue,
  getInvestmentValue,
  getProfitAndLoss,
  getTodayProfitAndLoss,
} from './src/utils/helpers';
import {styles} from './src/styles';

const App: React.FC = () => {
  const defaultTotalState: Totals = {
    currentValue: 0,
    investment: 0,
    profitAndLoss: 0,
    profitAndLossToday: 0,
  };

  const [holdings, setHoldings] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [totals, setTotals] = useState(defaultTotalState);

  useEffect(() => {
    fetchMyHoldings();
  }, []);

  const fetchMyHoldings = () => {
    setRefreshing(true);
    fetchHoldings()
      .then(data => {
        if (data.userHolding) {
          const totalsData: Totals = data.userHolding.reduce(
            (acc: Totals, holding: Holding) => ({
              currentValue: acc.currentValue + getCurrentValue(holding),
              investment: acc.investment + getInvestmentValue(holding),
              profitAndLoss: acc.profitAndLoss + getProfitAndLoss(holding),
              profitAndLossToday:
                acc.profitAndLossToday + getTodayProfitAndLoss(holding),
            }),
            defaultTotalState,
          );
          setTotals(totalsData);
          setHoldings(data.userHolding);
        } else {
          Alert.alert(`Currently you don't have any holdings`);
        }
        setRefreshing(false);
      })
      .catch(error => {
        console.error('Error fetching holdings:', error);
        setRefreshing(false);
      });
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <Header />
      <HoldingsList
        holdings={holdings}
        refreshing={refreshing}
        fetchHoldings={fetchMyHoldings}
      />
      <BottomSheet
        totals={totals}
        isSheetOpen={isSheetOpen}
        toggleSheet={() => setIsSheetOpen(!isSheetOpen)}
      />
    </SafeAreaView>
  );
};

export default App;
