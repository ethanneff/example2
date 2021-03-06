import React, {memo, useCallback} from 'react';
import {View} from 'react-native';
import {Icon, Text, TouchableOpacity} from '../../components';
import {useColor} from '../../hooks';
import {config} from '../../utils';
import {ListSection} from './ListSection';
import {Item} from './types';

interface Props {
  showSection: boolean;
  item: Item;
  currentItem: boolean;
  onItemPress(item: Item): void;
}

export const ListItem = memo(function ListItem({
  showSection,
  item,
  onItemPress,
  currentItem,
}: Props) {
  const color = useColor();
  const future = item.id > Date.now();
  const iconColor = future ? color.secondary : color.success;
  const title = currentItem ? 'current' : future ? 'future' : item.action;

  const onPress = useCallback(() => onItemPress(item), [item, onItemPress]);

  return (
    <View
      style={{
        borderColor: currentItem ? color.primary : color.background,
        borderLeftWidth: config.padding(1),
        flex: 1,
      }}>
      <TouchableOpacity
        disabled={future}
        onPress={onPress}
        style={{
          flex: 1,
          flexDirection: 'row',
          height: config.padding(10),
          paddingHorizontal: config.padding(4),
          paddingVertical: config.padding(2),
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: config.padding(20),
          }}>
          <Icon
            color={iconColor}
            name={future ? 'cancel' : 'checkbox-blank-circle'}
            size={14}
            style={{paddingRight: config.padding(1)}}
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
