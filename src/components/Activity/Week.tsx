import React, {memo} from 'react';
import {View} from 'react-native';
import format from 'date-fns/format';
import {Text} from '../Text';
import {Theme} from '../../utils';
import {ActivityDay, Day} from './Day';

export type ActivityWeek = Array<ActivityDay>;

interface Props {
  item: ActivityWeek;
  max: number;
  index: number;
  size: number;
  margin: number;
  onPress: (item: ActivityDay) => () => void;
}

export const Week = memo(function Week({
  item,
  max,
  index,
  size,
  margin,
  onPress,
}: Props) {
  const first = item[0].date;
  const showHeader = Number(format(first, 'dd')) <= 7;
  const header = showHeader ? format(first, 'MMM') : ' ';

  return (
    <View key={index}>
      <Text
        center
        emphasis="medium"
        style={{paddingBottom: Theme.padding.p03}}
        title={header}
        type="overline"
      />
      {item.map((day) => (
        <Day
          day={day}
          key={String(day.date)}
          margin={margin}
          max={max}
          onPress={onPress}
          size={size}
        />
      ))}
    </View>
  );
});
