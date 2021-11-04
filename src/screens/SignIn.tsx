import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {palette} from '../theme';
import {Button, Checkbox, TextInput} from 'react-native-paper';
import {GoBack} from '../components/GoBack';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Screen} from '../App';
import {useNavigation} from '@react-navigation/native';
import {SecureTextInput} from '../components/SecureTextInput';

export const SignInScreen = () => {
  const navigation = useNavigation();
  const showScreen = useCallback(() => {
    // @ts-ignore
    navigation.navigate(Screen.SuccessScreen);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Formik
        validateOnMount
        initialValues={{email: '', password: ''}}
        onSubmit={showScreen}
        validationSchema={validationSchema}>
        {({isSubmitting, values, handleChange, isValid, handleSubmit}) => {
          return (
            <>
              <View style={styles.container}>
                <Image
                  source={require('../assets/authentication-background-image.jpg')}
                  resizeMode="contain"
                  style={styles.image}
                />
                <GoBack />
                <View style={{marginHorizontal: 20}}>
                  <Text style={styles.title}>Welcome back!</Text>
                  <TextInput
                    autoCompleteType="email"
                    keyboardType="email-address"
                    placeholder="example@gmail.com"
                    style={styles.input}
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                  <SecureTextInput
                    placeholder="Enter a password"
                    secureTextEntry
                    style={styles.input}
                    value={values.password}
                    onChangeText={handleChange('password')}
                  />
                </View>
              </View>
              <SafeAreaView>
                <Button uppercase={false} style={styles.button}>
                  <Text style={styles.buttonTextForgetPassword}>
                    Have you forgotten your password?
                  </Text>
                </Button>
                <Button
                  disabled={!isValid || isSubmitting}
                  onPress={handleSubmit}
                  uppercase={false}
                  style={styles.button}
                  mode="contained">
                  <Text style={styles.buttonTextSignUp}>Log in</Text>
                </Button>
              </SafeAreaView>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.WHITE,
  },
  topContainer: {flex: 1, alignItems: 'center'},
  bottomContainer: {},
  background: {
    flex: 1,
  },
  image: {},
  button: {marginHorizontal: 20, marginTop: 20},
  title: {
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
  input: {backgroundColor: palette.WHITE},
});
