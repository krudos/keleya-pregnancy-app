import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC, useCallback} from 'react';
import {palette} from '../theme';
import {Button} from 'react-native-paper';
import {GoBack} from '../components/GoBack';
import * as yup from 'yup';
import {Formik} from 'formik';
import {RootStackParamList, Screen} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DatePickerModal} from 'react-native-paper-dates';

type Props = NativeStackScreenProps<RootStackParamList, Screen.DateScreen>;
export const DateScreen: FC<Props> = ({route}) => {
  const {name} = route.params;
  const navigation = useNavigation();
  const showScreen = useCallback(() => {
    // @ts-ignore
    navigation.navigate(Screen.WorkoutFrequencyScreen);
  }, [navigation]);

  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const [singleOpen, setSingleOpen] = React.useState(false);

  const onDismissSingle = useCallback(() => {
    setSingleOpen(false);
  }, [setSingleOpen]);

  const onShowSingle = useCallback(() => {
    setSingleOpen(true);
  }, [setSingleOpen]);

  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);
  const endDate = new Date();
  endDate.setFullYear(endDate.getFullYear() + 1);

  return (
    <View style={styles.container}>
      <Formik
        validateOnMount
        initialValues={{babyDate: ''}}
        onSubmit={showScreen}
        validationSchema={validationSchema}>
        {({isSubmitting, values, setFieldValue, isValid, handleSubmit}) => {
          return (
            <>
              <View style={styles.container}>
                <Image
                  source={require('../assets/due-date-background-image.jpg')}
                  resizeMode="contain"
                  style={styles.image}
                />
                <GoBack />
                <View style={{marginHorizontal: 20}}>
                  <Text style={styles.title}>
                    When is your baby due, {name}?
                  </Text>

                  <Button
                    onPress={onShowSingle}
                    uppercase={false}
                    mode="outlined"
                    style={styles.button}>
                    {values.babyDate ? values.babyDate : 'Select date'}
                  </Button>
                  <DatePickerModal
                    mode="single"
                    visible={singleOpen}
                    onDismiss={onDismissSingle}
                    date={date}
                    onConfirm={params => {
                      setSingleOpen(false);
                      setDate(params.date);

                      const textDate =
                        params?.date?.toLocaleDateString('en-US');
                      setFieldValue('babyDate', textDate);
                    }}
                    validRange={{
                      startDate: startDate, // optional
                      endDate: endDate, // optional
                    }}
                  />
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
  babyDate: yup.string().required('Date is required'),
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
