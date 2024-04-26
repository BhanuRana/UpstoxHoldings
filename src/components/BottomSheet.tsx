import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import SheetRow from './SheetRow';
import {Totals} from '../utils/types';
import {styles} from '../styles';

const BottomSheet: React.FC<Props> = ({totals, isSheetOpen, toggleSheet}) => (
  <View style={styles.bottomSheetContainer}>
    <TouchableOpacity style={styles.bottomSheetToggleBtn} onPress={toggleSheet}>
      <View style={isSheetOpen ? styles.arrowDown : styles.arrowUp} />
    </TouchableOpacity>
    {isSheetOpen && (
      <>
        <SheetRow title="Current Value" value={totals.currentValue} />
        <SheetRow title="Total Investment" value={totals.investment} />
        <SheetRow
          title="Today's Profit & Loss"
          value={totals.profitAndLossToday}
        />
      </>
    )}
    <SheetRow
      title="Profit & Loss"
      value={totals.profitAndLoss}
      marginTop={isSheetOpen ? 36 : 0}
    />
  </View>
);

interface Props {
  totals: Totals;
  isSheetOpen: boolean;
  toggleSheet: () => void;
}

export default BottomSheet;
