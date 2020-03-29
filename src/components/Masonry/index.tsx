import { ScrollView, View } from 'react-native';
import React, { memo } from 'react';
import { Theme } from '../../utils';

interface Item<T> {
  item: T;
  index: number;
}

interface Props<T> {
  data: ReadonlyArray<T>;
  numColumns: number;
  renderItem({ item, index }: Item<T>): void;
}

export const Masonry = memo(function Masonry<T>({
  data,
  numColumns,
  renderItem,
}: Props<T>) {
  const columns: ReadonlyArray<any> = [...Array(numColumns)].map(() => []);
  data.forEach((item: T, i: number) => columns[i % numColumns].push(item));

  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', padding: Theme.padding.p02 }}>
        {columns.map((column, j) => (
          <View
            style={{ flex: 1, padding: Theme.padding.p02 }}
            key={`column-${j}`}
          >
            {column.map((item: T, index: number) =>
              renderItem({ item, index })
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
});