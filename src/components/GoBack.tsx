import {TouchableOpacity} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
import {palette} from '../theme';
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

export const GoBack = () => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <TouchableOpacity
      style={{position: 'absolute', top: 48, start: 20}}
      onPress={goBack}>
      <Icon name="arrow-left" size={30} color={palette.GREYISH_BROWN} />
    </TouchableOpacity>
  );
};
