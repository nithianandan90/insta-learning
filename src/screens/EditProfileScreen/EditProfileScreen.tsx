import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {useForm, Controller, Control} from 'react-hook-form';
import {IUser} from '../../types/models';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';

type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  label: string;
  multiline?: boolean;
  control: Control<IEditableUser, object>;
  name: IEditableUserField;
  rules?: object;
}

const CustomInput = ({
  name,
  control,
  label,
  multiline = false,
  rules = {},
}: ICustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={{flex: 1}}>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={label}
                style={[
                  styles.input,
                  {borderColor: error ? colors.error : colors.border},
                ]}
                multiline={multiline}
              />
              {error && (
                <Text style={{color: colors.red}}>
                  {error.message || 'Error'}
                </Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

const EditProfileScreen = () => {
  const {control, handleSubmit} = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.log(data);
  };

  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change Profile Photo</Text>
      <CustomInput
        control={control}
        rules={{
          required: 'Name is Required',
          minLength: {value: 10, message: 'must be longer than 10'},
        }}
        name="name"
        label="Name"
      />
      <CustomInput
        control={control}
        rules={{
          required: 'Username is Required',
          minLength: {value: 3, message: 'must be longer than 3'},
        }}
        name="username"
        label="Username"
      />
      <CustomInput
        control={control}
        rules={{pattern: {value: URL_REGEX, message: 'Invalid URL'}}}
        name="website"
        label="Website"
      />
      <CustomInput
        control={control}
        rules={{
          required: 'Bio is Required',
          maxLength: {
            value: 100,
            message: 'must not be longer than 100 characters',
          },
        }}
        name="bio"
        label="Bio"
        multiline
      />
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
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
});
