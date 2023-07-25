import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {useForm, Control} from 'react-hook-form';

interface ICustomInput {
  label: string;
  multiline?: boolean;
  control: Control;
}

const CustomInput = ({control, label, multiline}: ICustomInput) => {
  <Control control={control} />;
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder="Hello"
        style={styles.input}
        multiline={multiline}
      />
    </View>
  );
};

const EditProfileScreen = () => {
  const {control, handleSubmit} = useForm();

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change Profile Photo</Text>
      <CustomInput label="Name" />
      <CustomInput label="Username" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" multiline />
      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  page: {alignItems: 'center', padding: 10},
  avatar: {width: '30%', aspectRatio: 1, borderRadius: 100},
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  label: {
    width: 75,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
});
