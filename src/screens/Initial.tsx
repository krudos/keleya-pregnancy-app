import React, {FC} from 'react';

import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {RootStackParamList, Screen} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {palette} from '../theme';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;

type Props = NativeStackScreenProps<RootStackParamList, Screen.InitialScreen>;
export const InitialScreen: FC<Props> = ({}) => {
  const navigation = useNavigation();

  const showSignIn = useCallback(() => {
    navigation.navigate(Screen.DateScreen);
  }, [navigation]);

  const showSignUp = useCallback(() => {
    navigation.navigate(Screen.SignUpScreen);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/first-intro-image.png')}
      resizeMode="cover"
      style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={require('../assets/keleya-logo.png')}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.title}>For a fit and relaxed pregnancy</Text>
        </View>

        <View style={styles.bottomContainer}>
          <Button
            onPress={showSignUp}
            mode="contained"
            uppercase={false}
            style={styles.button}>
            <Text style={styles.buttonTextSignUp}>Get started</Text>
          </Button>
          <Button onPress={showSignIn} uppercase={false} style={styles.button}>
            <Text style={styles.buttonTextLogIn}>Or login</Text>
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {flex: 1, alignItems: 'center'},
  bottomContainer: {},
  background: {
    flex: 1,
  },
  image: {height: 120},
  button: {marginHorizontal: 40},
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: palette.GREYISH_BROWN,
    fontWeight: '300',
  },
  buttonTextSignUp: {color: palette.WHITE},
  buttonTextLogIn: {color: palette.GREYISH_BROWN},
});
