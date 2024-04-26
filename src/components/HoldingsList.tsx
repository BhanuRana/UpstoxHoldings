import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {Holding} from '../utils/types';
import {formatStockPrice, getProfitAndLoss} from '../utils/helpers';
import {styles} from '../styles';

const HoldingsList: React.FC<Props> = ({
  holdings,
  refreshing,
  fetchHoldings,
}) => {
  const renderHolding = ({item}: {item: Holding}) => (
    <View style={styles.holdingRow}>
      <View style={styles.holdingSubRow}>
        <Text style={styles.holdingSymbolText}>{item.symbol}</Text>
        <Text style={styles.holdingTextNormal}>
          LTP:
          <Text style={styles.holdingTextBold}>
            {' ₹ '}
            {formatStockPrice(item.ltp)}
          </Text>
        </Text>
      </View>
      <View style={styles.holdingSubRow2}>
        <Text style={styles.holdingTextNormal}>{item.quantity}</Text>
        <Text style={styles.holdingTextNormal}>
          P/L:
          <Text style={styles.holdingTextBold}>
            {' ₹ '}
            {formatStockPrice(getProfitAndLoss(item))}
          </Text>
        </Text>
      </View>
    </View>
  );
  return (
    <FlatList
      contentContainerStyle={styles.holdingsListContainer}
      data={holdings}
      refreshing={refreshing}
      onRefresh={fetchHoldings}
      renderItem={({item}) => renderHolding({item})}
      keyExtractor={item => item.symbol}
      ItemSeparatorComponent={<View style={styles.holdingSeparator} />}
    />
  );
};

interface Props {
  holdings: Holding[];
  refreshing: boolean;
  fetchHoldings: () => void;
}

export default HoldingsList;
