import {StyleSheet} from 'react-native';

const HORIZONTAL_SPACING = 24;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#C3C3C8',
  },
  header: {
    paddingVertical: HORIZONTAL_SPACING * 0.75,
    paddingHorizontal: HORIZONTAL_SPACING,
    backgroundColor: '#7d017d',
    width: '100%',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  holdingsListContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: HORIZONTAL_SPACING,
  },
  holdingRow: {
    paddingVertical: 16,
  },
  holdingSubRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  holdingSubRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  holdingSymbolText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  holdingTextNormal: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  holdingTextBold: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  holdingSeparator: {
    height: 1,
    backgroundColor: '#C3C3C8',
  },
  bottomSheetContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: HORIZONTAL_SPACING * 0.8,
    paddingBottom: 45,
  },
  bottomSheetToggleBtn: {
    alignSelf: 'center',
    padding: 7,
  },
  arrowUp: {
    width: 20,
    borderTopWidth: 0,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftWidth: 10,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#AF4FDC',
    borderLeftColor: 'transparent',
  },
  arrowDown: {
    width: 20,
    borderTopWidth: 20,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 10,
    borderTopColor: '#AF4FDC',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  sheetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  sheetRowTitleText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  sheetRowValueText: {
    fontSize: 16,
    color: '#000000',
  },
});

export {styles};
