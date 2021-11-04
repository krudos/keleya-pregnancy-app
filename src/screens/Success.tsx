import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {palette} from '../theme';
import {Button} from 'react-native-paper';
import {ScreenContainer} from '../components/ScreenContainer';
// @ts-ignore
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
export const SuccessScreen = () => {
  return (
    <ScreenContainer
      source={require('../assets/notifications-background-image.jpg')}>
      <View style={styles.topContainer}>
        <AwesomeIcon
          name="bell"
          size={50}
          color={palette.GREYISH_BROWN}
          regular
        />
        <Text style={styles.title}>
          Get notifications to boost your motivation
        </Text>
      </View>
      <Button uppercase={false} style={styles.button}>
        <Text style={styles.buttonTextForgetPassword}>Skip</Text>
      </Button>
      <Button uppercase={false} style={styles.button} mode="contained">
        <Text style={styles.buttonTextSignUp}>Allow notifications</Text>
      </Button>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  topContainer: {flex: 1, alignItems: 'center', marginTop: 20},

  button: {marginHorizontal: 20, marginTop: 20},
  title: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
    color: palette.GREYISH_BROWN,
    fontWeight: '300',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  buttonTextForgetPassword: {color: palette.GREYISH_BROWN},
  buttonTextSignUp: {color: palette.WHITE},
});
