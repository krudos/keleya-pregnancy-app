import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC, useCallback, useState} from 'react';
import {palette} from '../theme';
import {Button} from 'react-native-paper';
import {GoBack} from '../components/GoBack';
import * as yup from 'yup';
import {Formik} from 'formik';
import {RootStackParamList, Screen} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DatePickerModal} from 'react-native-paper-dates';
import {Picker} from '@react-native-picker/picker';

type Props = NativeStackScreenProps<
  RootStackParamList,
  Screen.WorkoutFrequencyScreen
>;
export const WorkoutFrequencyScreen: FC<Props> = ({}) => {
  const navigation = useNavigation();
  const showScreen = useCallback(() => {
    // @ts-ignore
    navigation.navigate(Screen.SuccessScreen);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Formik
        validateOnMount
        initialValues={{timesPerWeek: timesPerWeek[2]}}
        onSubmit={showScreen}
        validationSchema={validationSchema}>
        {({isSubmitting, values, setFieldValue, isValid, handleSubmit}) => {
          return (
            <>
              <View style={styles.container}>
                <Text style={styles.title}>
                  How many times a week do you want to be active?
                </Text>
                <Image
                  source={require('../assets/workout-goal-background-image.jpg')}
                  resizeMode="contain"
                  style={styles.image}
                />
                <GoBack />
                <View
                  style={{
                    marginHorizontal: 20,
                    height: 200,
                  }}>
                  <Picker
                    selectedValue={values.timesPerWeek}
                    onValueChange={itemValue =>
                      setFieldValue('timesPerWeek', itemValue)
                    }>
                    {timesPerWeek.map(item => (
                      <Picker.Item label={item} value={item} key={item} />
                    ))}
                  </Picker>
                </View>
              </View>
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
  timesPerWeek: yup.string().required('Times per week is required'),
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
    marginTop: 90,
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

const timesPerWeek = [
  'Once a week',
  '2 times a week',
  '3 times a week',
  '4 times a week',
  '5 times a week',
  '6 times a week',
  '7 times a week',
];
