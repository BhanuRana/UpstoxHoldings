import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';

const SheetRow: React.FC<Props> = ({title, value, marginTop}) => (
  <View style={[styles.sheetRow, {marginTop}]}>
    <Text style={styles.sheetRowTitleText}>{title}</Text>
    <Text style={styles.sheetRowValueText}>₹ {value.toFixed(2)}</Text>
  </View>
);

interface Props {
  title: string;
  value: number;
  marginTop?: number;
}

export default SheetRow;
