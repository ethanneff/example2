import React, {memo} from 'react';
import {View} from 'react-native';
import {useColor} from '../../../hooks';
import {useRootSelector} from '../../../utils';
import {getSmallestDimension} from '../../../models';

interface CellProps {
  value: number;
  length: number;
}

export const Cell = memo(function Cell({value, length}: CellProps) {
  const color = useColor();
  const width = useRootSelector(getSmallestDimension) / length;
  const backgroundColor =
    value === 0 ? color.light : value === 1 ? color.success : color.danger;
  return (
    <View
      style={{
        flex: 1,
        width,
        height: width,
        borderWidth: 1,
        borderColor: color.surface,
        backgroundColor,
      }}
    />
  );
});
