import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback, useState} from 'react';
import {Button, Input, Screen, Text, TextInput} from '../../../components';
import {KeyboardAwareScrollView} from '../../../conversions';
import {useColor} from '../../../hooks';
import {config} from '../../../utils';

export const Login = memo(function Login() {
  const {goBack} = useNavigation();
  const color = useColor();

  const [form, setForm] = useState({
    email: '',
    error: '',
    name: '',
    password: '',
  });

  const handleChange = useCallback(
    (key: string) => (val: string) => {
      setForm(prev => ({...prev, [key]: val}));
    },
    [],
  );

  const handleSubmit = useCallback(() => {
    setForm(prev => ({...prev, error: 'Invalid Email'}));
  }, []);
  const navBack = useCallback(() => goBack(), [goBack]);

  return (
    <Screen dropShadow onLeftPress={navBack} title="Login">
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={{backgroundColor: color.surface, padding: config.padding(4)}}>
        <Text center title="border" type="h3" />
        <Input
          error={form.error}
          onChangeText={handleChange('name')}
          optional
          placeholder="jane doe"
          title="Name"
          value={form.name}
        />
        <Input
          error={form.error}
          keyboardType="email-address"
          onChangeText={handleChange('email')}
          placeholder="example@gmail.com"
          textContentType="username"
          title="Email"
          value={form.email}
        />
        <Input
          onChangeText={handleChange('password')}
          placeholder="•••••••"
          secureTextEntry
          textContentType="password"
          title="Password"
          value={form.password}
        />
        <Button
          center
          color="primary"
          emphasis="high"
          onPress={handleSubmit}
          title="complete form"
        />
        <Text center title="non border" type="h3" />
        <TextInput
          onChangeText={handleChange('name')}
          placeholder="jane doe"
          value={form.name}
        />
        <TextInput
          keyboardType="email-address"
          onChangeText={handleChange('email')}
          placeholder="example@gmail.com"
          textContentType="username"
          value={form.email}
        />
        <TextInput
          onChangeText={handleChange('password')}
          placeholder="•••••••"
          secureTextEntry
          textContentType="password"
          value={form.password}
        />
        <Button
          center
          color="primary"
          emphasis="high"
          onPress={handleSubmit}
          title="complete form"
        />
      </KeyboardAwareScrollView>
    </Screen>
  );
});
