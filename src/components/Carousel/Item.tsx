import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useColor} from '../../hooks';
import {config} from '../../utils';
import {Content} from '../Content';
import {Icon} from '../Icon';
import {Text} from '../Text';
import {Slide} from './types';

type Props = {
  width: number;
  item: Slide;
};

export const Item = memo(function Item({item, width}: Props) {
  const color = useColor();
  const styles = StyleSheet.create({
    item: {
      alignItems: 'center',
      backgroundColor: item.backgroundColor || color.background,
      justifyContent: 'center',
      padding: config.padding(4),
      width,
    },
  });

  return (
    <View style={styles.item}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {item.icon && <Icon name={item.icon} size={config.padding(40)} />}
      </View>
      <View style={{flex: 1}}>
        {item.title && (
          <Text
            center
            style={{paddingVertical: config.padding(8)}}
            title={item.title}
            type="h4"
          />
        )}
        {item.sections && <Content center sections={item.sections} />}
      </View>
    </View>
  );
});
