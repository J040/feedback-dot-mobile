// just type "rnso" (to make all this code below) - R Component (snipet da extensão no VSCODE)
// rnso = React Native StyleSheet Object

import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: 48, //não utilizamos "px" porque no mobile lidamos com a "densidade de pixels"
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    right: 16,
    bottom: getBottomSpace() + 16, //getBottomSpace foi preciso por conta do Iphone e suas peculiaridades
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
  },
  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 56,
    padding: 0,
  }
});