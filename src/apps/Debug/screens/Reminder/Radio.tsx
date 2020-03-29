import React, { memo } from 'react';
import { View } from 'react-native';
import { Item } from './Item';

interface Props {
  buttons: string[];
  horizontal?: boolean;
  value: string;
  onChange: (id: string) => () => void;
}

export default memo(function Radio({
  buttons,
  value,
  onChange,
  horizontal,
}: Props) {
  return (
    <View
      style={{
        justifyContent: 'center',
        flexDirection: horizontal ? 'row' : 'column',
      }}
    >
      {buttons.map((button, index) => (
        <Item
          title={button}
          key={button}
          onPress={onChange(button)}
          marginBottom={index !== buttons.length - 1}
          active={button === value}
        />
      ))}
    </View>
  );
});