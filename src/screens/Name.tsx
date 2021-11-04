import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {palette} from '../theme';
import {Button, TextInput} from 'react-native-paper';
import {GoBack} from '../components/GoBack';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Screen} from '../App';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const NameScreen = () => {
  const navigation = useNavigation();
  const showScreen = useCallback(
    (name: string) => {
      // @ts-ignore
      navigation.navigate(Screen.DateScreen, {name});
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <Formik
        validateOnMount
        initialValues={{name: ''}}
        onSubmit={values => showScreen(values.name)}
        validationSchema={validationSchema}>
        {({isSubmitting, values, handleChange, isValid, handleSubmit}) => {
          return (
            <>
              <KeyboardAwareScrollView style={styles.container}>
                <Image
                  source={require('../assets/couch_smile.jpg')}
                  resizeMode="contain"
                  style={styles.image}
                />
                <GoBack />
                <View style={{marginHorizontal: 20}}>
                  <Text style={styles.title}>
                    It's great that you're here! First things first, what should
                    we call you?
                  </Text>
                  <TextInput
                    placeholder="Your Name"
                    style={styles.input}
                    value={values.name}
                    onChangeText={handleChange('name')}
                  />
                </View>
              </KeyboardAwareScrollView>
              <SafeAreaView>
                <Button
                  disabled={!isValid || isSubmitting}
                  onPress={handleSubmit}
                  uppercase={false}
                  style={styles.button}
                  mode="contained">
                  <Text style={styles.buttonTextSignUp}>Continue</Text>
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
  name: yup.string().required('Name is required'),
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
