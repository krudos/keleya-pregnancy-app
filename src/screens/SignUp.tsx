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

export const SignUpScreen = () => {
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const togglePrivacy = useCallback(
    () => setAcceptPrivacy(!acceptPrivacy),
    [setAcceptPrivacy, acceptPrivacy],
  );

  const toggleTerms = useCallback(
    () => setAcceptTerms(!acceptTerms),
    [setAcceptTerms, acceptTerms],
  );

  const navigation = useNavigation();
  const showScreen = useCallback(() => {
    // @ts-ignore
    navigation.navigate(Screen.NameScreen);
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
                  <Text style={styles.title}>
                    Add your details below to set up an account
                  </Text>
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
                  <View style={styles.checkBoxContainer}>
                    <Checkbox.Android
                      status={acceptPrivacy ? 'checked' : 'unchecked'}
                      onPress={togglePrivacy}
                    />
                    <Text>I've read the privacy policy</Text>
                  </View>

                  <View style={styles.checkBoxContainer}>
                    <Checkbox.Android
                      status={acceptTerms ? 'checked' : 'unchecked'}
                      onPress={toggleTerms}
                    />
                    <Text>
                      I accept the term & conditions and Keleya's advice
                    </Text>
                  </View>
                </View>
              </View>
              <SafeAreaView>
                <Button
                  disabled={!isValid || isSubmitting}
                  onPress={handleSubmit}
                  uppercase={false}
                  style={styles.button}
                  mode="contained">
                  <Text style={styles.buttonTextSignUp}> Create account</Text>
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
  button: {marginHorizontal: 20},
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
  buttonTextSignUp: {color: palette.WHITE},
  input: {backgroundColor: palette.WHITE},
});
