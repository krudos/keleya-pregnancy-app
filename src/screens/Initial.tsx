import {Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';

export const InitialScreen = () => {
  const navigation = useNavigation();

  const showSignIn = useCallback(() => {});
  return (
    <>
      <Image source={{uri: require('../assets/first-intro-image')}} />
      <Image source={{uri: require('../assets/keleya-logo')}} />
      <Text>For a fit and relaxed pregnancy</Text>
      <TouchableOpacity onPress={showSignIn}>
        <Text>Get started</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Or login</Text>
      </TouchableOpacity>
    </>
  );
};
