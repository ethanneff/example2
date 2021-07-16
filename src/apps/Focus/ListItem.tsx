import {useNavigation} from '@react-navigation/core';
import React, {memo, useCallback} from 'react';
import {View} from 'react-native';
import {Icon, Text, TouchableOpacity} from '../../components';
import {useColor} from '../../hooks';
import {padding} from '../../utils';
import {ListSection} from './ListSection';
import {HomeScreenNavigationProp, Item} from './types';

interface Props {
  showSection: boolean;
  item: Item;
  currentItem: boolean;
}

export const ListItem = memo(function ListItem({
  showSection,
  item,
  currentItem,
}: Props) {
  const color = useColor();
  const future = item.id > Date.now();
  const iconColor = future ? color.secondary : color.success;
  const title = currentItem ? 'current' : future ? 'future' : item.title;
  const {navigate} = useNavigation<HomeScreenNavigationProp>();

  const onPress = useCallback(() => navigate('item', {item}), [item, navigate]);

  return (
    <View
      style={{
        borderColor: currentItem ? color.primary : color.background,
        borderLeftWidth: padding(1),
        flex: 1,
      }}>
      <TouchableOpacity
        disabled={future}
        onPress={onPress}
        style={{
          flex: 1,
          flexDirection: 'row',
          height: padding(10),
          paddingHorizontal: padding(4),
          paddingVertical: padding(2),
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: padding(20),
          }}>
          <Icon
            color={iconColor}
            name={future ? 'cancel' : 'checkbox-blank-circle'}
            size={14}
            style={{paddingRight: padding(1)}}
          />
          <Text title={`${item.hour} ${item.zone}`} />
        </View>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{
            color: color.secondary,
            flex: 1,
          }}
          title={title}
          type="body1"
        />
      </TouchableOpacity>
      {showSection && <ListSection item={item} />}
    </View>
  );
});
